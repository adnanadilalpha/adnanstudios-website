import AdminLogo from './Logo'

export default function LoginHero() {
  return (
    <div className="studio-login-hero">
      <AdminLogo />
      <h1 className="studio-login-hero__title">Sign in to Studio CMS</h1>
      <p className="studio-login-hero__desc">
        Manage insights, homepage content, and media for adnanstudios.com.
      </p>
    </div>
  )
}
