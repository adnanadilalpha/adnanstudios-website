const brandPath =
  'M35.1308 0.0714507L30.2235 0C30.2235 0 28.7815 0.0714496 28.1482 1.1562L0 49.7457H18.0445C18.0445 49.7457 19.2006 49.9633 20.0645 48.518L38.3948 16.9435L54.3607 44.4681L48.8136 44.4551C48.8136 44.4551 48.19 44.3869 47.4885 43.4678L38.4208 27.8396L35.8713 32.354C35.8713 32.354 35.3647 33.4712 35.7999 34.3221L44.1985 48.911C44.1985 48.911 44.8838 50.1906 46.1277 50.0737L64 49.8561L38.4598 5.67705L16.7811 43.0358C16.7811 43.0358 16.0763 44.244 15.456 44.4161L9.59058 44.4973L35.1308 0.0714507Z'

export default function AdminLogo() {
  return (
    <div className="admin-brand-logo">
      <svg
        className="graphic-logo admin-brand-logo__mark"
        xmlns="http://www.w3.org/2000/svg"
        width={40}
        height={32}
        viewBox="0 0 64 51"
        fill="none"
        aria-hidden="true"
      >
        <path d={brandPath} fill="currentColor" />
      </svg>
      <div className="admin-brand-logo__text">
        <span className="admin-brand-logo__title">Adnan Studios</span>
        <span className="admin-brand-logo__subtitle">Zero Handoff</span>
      </div>
    </div>
  )
}
