import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getUserConfirmationEmailHTML, getAdminNotificationEmailHTML } from '@/app/lib/email-templates';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, projectType, budget, details } = body;

        // Validate required fields
        if (!name || !email || !projectType || !budget || !details) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Add contact to Resend audience
        let audienceContactId = null;
        try {
            const audienceResponse = await resend.contacts.create({
                email: email,
                firstName: name.split(' ')[0],
                lastName: name.split(' ').slice(1).join(' ') || '',
                unsubscribed: false,
                audienceId: process.env.RESEND_AUIDIENCE_ID as string,
            });

            if (audienceResponse.data) {
                audienceContactId = audienceResponse.data.id;
            }
        } catch (audienceError) {
            console.error('Error adding to audience:', audienceError);
            // Continue even if audience addition fails
        }

        // Send confirmation email to user
        const userEmailResponse = await resend.emails.send({
            from: process.env.RESEND_EMAIL_FROM as string,
            to: email,
            subject: "Thank you for reaching out! 🎉",
            html: getUserConfirmationEmailHTML(name),
        });

        // Send notification email to admin (you)
        const adminEmailResponse = await resend.emails.send({
            from: process.env.RESEND_EMAIL_FROM as string,
            to: 'syedadnanadil4@gmail.com', // Your email
            subject: `🎉 New Contact Form: ${name} - ${projectType}`,
            html: getAdminNotificationEmailHTML({ name, email, projectType, budget, details }),
        });

        // Check if both emails were sent successfully
        if (userEmailResponse.error || adminEmailResponse.error) {
            console.error('Email sending errors:', {
                userError: userEmailResponse.error,
                adminError: adminEmailResponse.error,
            });

            return NextResponse.json(
                {
                    error: 'Failed to send emails',
                    details: {
                        userEmail: userEmailResponse.error?.message,
                        adminEmail: adminEmailResponse.error?.message,
                    }
                },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Emails sent successfully',
            data: {
                userEmailId: userEmailResponse.data?.id,
                adminEmailId: adminEmailResponse.data?.id,
                audienceContactId,
            },
        });

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            {
                error: 'Internal server error',
                message: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}
