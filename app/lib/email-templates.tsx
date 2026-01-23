interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  details: string;
}

// Inline SVG Logo as string
const logoSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="38" viewBox="0 0 64 51" fill="none">
  <path d="M35.1308 0.0714507L30.2235 0C30.2235 0 28.7815 0.0714496 28.1482 1.1562L0 49.7457H18.0445C18.0445 49.7457 19.2006 49.9633 20.0645 48.518L38.3948 16.9435L54.3607 44.4681L48.8136 44.4551C48.8136 44.4551 48.19 44.3869 47.4885 43.4678L38.4208 27.8396L35.8713 32.354C35.8713 32.354 35.3647 33.4712 35.7999 34.3221L44.1985 48.911C44.1985 48.911 44.8838 50.1906 46.1277 50.0737L64 49.8561L38.4598 5.67705L16.7811 43.0358C16.7811 43.0358 16.0763 44.244 15.456 44.4161L9.59058 44.4973L35.1308 0.0714507Z" fill="#ffffff"/>
</svg>`;

// Email to the user who submitted the form
export const getUserConfirmationEmailHTML = (name: string): string => {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8f9fa;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; padding: 40px 20px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
            <!-- Header with gradient -->
            <tr>
              <td style="background: linear-gradient(135deg, #34A983 0%, #2A8A6B 100%); padding: 48px 40px; text-align: center;">
                ${logoSVG}
                <h1 style="color: #ffffff; font-size: 28px; font-weight: 700; margin: 24px 0 0 0; letter-spacing: -0.5px;">
                  Thank You for Reaching Out!
                </h1>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding: 40px;">
                <p style="font-size: 18px; color: #1a1a1a; line-height: 1.6; margin: 0 0 20px 0;">
                  Hi <strong>${name}</strong>,
                </p>
                
                <p style="font-size: 16px; color: #4a5568; line-height: 1.7; margin: 0 0 20px 0;">
                  I've received your message and I'm excited to learn more about your project! 
                  I'll review your details and get back to you within 24-48 hours.
                </p>

                <p style="font-size: 16px; color: #4a5568; line-height: 1.7; margin: 0 0 32px 0;">
                  In the meantime, feel free to check out my portfolio and recent work. 
                  I look forward to the possibility of working together to create something amazing!
                </p>

                <!-- CTA Button -->
                <table cellpadding="0" cellspacing="0" style="margin: 0 0 32px 0;">
                  <tr>
                    <td style="background-color: #34A983; border-radius: 8px; text-align: center;">
                      <a href="https://adnanstudios.com" style="display: inline-block; padding: 14px 32px; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600; letter-spacing: 0.3px;">
                        View My Portfolio
                      </a>
                    </td>
                  </tr>
                </table>

                <p style="font-size: 16px; color: #4a5568; line-height: 1.7; margin: 0;">
                  Best regards,<br />
                  <strong style="color: #1a1a1a;">Adnan Adil</strong><br />
                  <span style="color: #718096; font-size: 14px;">Product Designer & Developer</span>
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color: #f7fafc; padding: 32px 40px; border-top: 1px solid #e2e8f0;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="text-align: center;">
                      <p style="font-size: 14px; color: #718096; margin: 0 0 12px 0; line-height: 1.5;">
                        📧 <a href="mailto:hello@adnanstudios.com" style="color: #34A983; text-decoration: none;">hello@adnanstudios.com</a>
                      </p>
                      <p style="font-size: 12px; color: #a0aec0; margin: 0; line-height: 1.5;">
                        © 2026 Adnan Studios. All rights reserved.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `;
};

// Email notification for you with form data
export const getAdminNotificationEmailHTML = ({ name, email, projectType, budget, details }: ContactFormData): string => {
  const now = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8f9fa;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f9fa; padding: 40px 20px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
            <!-- Header -->
            <tr>
              <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 48px 40px; text-align: center;">
                ${logoSVG}
                <h1 style="color: #ffffff; font-size: 28px; font-weight: 700; margin: 24px 0 0 0; letter-spacing: -0.5px;">
                  🎉 New Contact Form Submission
                </h1>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding: 40px;">
                <p style="font-size: 16px; color: #4a5568; line-height: 1.6; margin: 0 0 32px 0;">
                  You have a new inquiry from your portfolio website. Here are the details:
                </p>

                <!-- Contact Details Card -->
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f7fafc; border-radius: 12px; overflow: hidden; margin-bottom: 24px;">
                  <tr>
                    <td style="padding: 24px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="font-size: 14px; color: #718096; padding-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                            Name
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size: 16px; color: #1a1a1a; padding-bottom: 20px; font-weight: 500;">
                            ${name}
                          </td>
                        </tr>

                        <tr>
                          <td style="font-size: 14px; color: #718096; padding-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                            Email
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size: 16px; padding-bottom: 20px;">
                            <a href="mailto:${email}" style="color: #34A983; text-decoration: none; font-weight: 500;">
                              ${email}
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td style="font-size: 14px; color: #718096; padding-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                            Project Type
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size: 16px; color: #1a1a1a; padding-bottom: 20px; font-weight: 500;">
                            ${projectType}
                          </td>
                        </tr>

                        <tr>
                          <td style="font-size: 14px; color: #718096; padding-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                            Budget Range
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size: 16px; color: #1a1a1a; padding-bottom: 20px; font-weight: 500;">
                            $${budget}
                          </td>
                        </tr>

                        <tr>
                          <td style="font-size: 14px; color: #718096; padding-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                            Project Details
                          </td>
                        </tr>
                        <tr>
                          <td style="font-size: 16px; color: #1a1a1a; line-height: 1.6; font-weight: 400;">
                            ${details}
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Quick Action Button -->
                <table cellpadding="0" cellspacing="0" style="margin: 32px 0 0 0;">
                  <tr>
                    <td style="background-color: #34A983; border-radius: 8px; text-align: center;">
                      <a href="mailto:${email}?subject=Re: Your Project Inquiry" style="display: inline-block; padding: 14px 32px; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600; letter-spacing: 0.3px;">
                        Reply to ${name}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color: #f7fafc; padding: 24px 40px; border-top: 1px solid #e2e8f0; text-align: center;">
                <p style="font-size: 12px; color: #a0aec0; margin: 0; line-height: 1.5;">
                  Sent from your portfolio contact form • ${now}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `;
};
