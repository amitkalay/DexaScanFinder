import type { Clinic } from "../_lib/clinics";

const filters = ["Price", "Distance", "Next available"];

export function LandingPage({ clinics }: { clinics: Clinic[] }) {
  return (
    <main className="page-shell">
      <div className="page-frame">
        <header className="topbar">
          <div className="brand" aria-label="DEXA Finder">
            <span className="brand-mark">DEXA</span>
            <span className="brand-rest">Finder</span>
          </div>

          <button className="outline-button" type="button">
            List your clinic
          </button>
        </header>

        <section className="hero-card">
          <div className="hero-copy">
            <h1 className="hero-title">Find the cheapest DEXA scan near you in seconds</h1>
            <p className="hero-text">
              Compare pricing, availability, and locations for body composition scans across the Bay Area.
            </p>

            <div className="search-panel">
              <div className="search-row">
                <span className="search-icon" aria-hidden="true">
                  <LocationPin />
                </span>
                <input
                  aria-label="Enter zip code"
                  className="search-input"
                  defaultValue=""
                  placeholder="Enter zip code (e.g. 94040)"
                  type="text"
                />
                <button className="search-button" type="button">
                  Search
                </button>
              </div>

              <div className="filter-row">
                {filters.map((filter, index) => (
                  <button
                    key={filter}
                    className={`chip${index === 0 ? " active" : ""}`}
                    type="button"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-art">
            <img
              alt="Illustration of a DEXA scanner in front of a city skyline"
              className="hero-illustration"
              src="/hero-dexa.svg"
            />
          </div>
        </section>

        <section className="results-section">
          <div className="results-header">
            <h2 className="section-title">12 scans near you</h2>

            <select aria-label="Sort scans" className="sort-select" defaultValue="Lowest price">
              <option>Lowest price</option>
              <option>Closest distance</option>
              <option>Soonest availability</option>
            </select>
          </div>

          <div className="cards">
            {clinics.map((clinic) => (
              <article className="clinic-card" key={clinic.name}>
                <div className="clinic-main">
                  <img alt="" className="clinic-thumb" src={clinic.image} />

                  <div>
                    <h3 className="clinic-name">{clinic.name}</h3>
                    <p className="clinic-address">
                      <span className="icon" aria-hidden="true">
                        <LocationPin />
                      </span>
                      {clinic.address}
                    </p>

                    <div className="tag-row">
                      {clinic.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="metric">
                  <p className="metric-label">Cash price</p>
                  <p className="price">${clinic.price}</p>
                </div>

                <div className="availability">
                  <p className="availability-label">Next available</p>
                  <p className="availability-day">{clinic.nextAvailable}</p>
                  <p className="availability-date">{clinic.nextDay}</p>
                  <button className="book-button" type="button">
                    Book now
                  </button>
                </div>

                <div className="distance">{clinic.distance}</div>
              </article>
            ))}
          </div>

          <section className="newsletter">
            <div className="bell-wrap" aria-hidden="true">
              <BellIcon />
            </div>

            <div>
              <h3 className="newsletter-title">Get alerts when prices drop</h3>
              <p className="newsletter-copy">
                We&apos;ll notify you of cheaper or earlier DEXA scans nearby.
              </p>
            </div>

            <div className="email-form">
              <input className="email-input" placeholder="Enter your email" type="email" />
              <button className="email-button" type="button">
                Get alerts
              </button>
            </div>
          </section>

          <p className="trust-line">
            <span className="icon" aria-hidden="true">
              <ShieldIcon />
            </span>
            We compare prices from trusted providers. All scans are cash pay.
          </p>
        </section>
      </div>
    </main>
  );
}

function LocationPin() {
  return (
    <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
      <path
        d="M12 21s6-5.686 6-11a6 6 0 1 0-12 0c0 5.314 6 11 6 11Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10" fill="currentColor" r="2.3" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg fill="none" height="46" viewBox="0 0 32 32" width="46">
      <path
        d="M16 5a6 6 0 0 0-6 6v2.36c0 1.8-.63 3.54-1.8 4.92L6.4 20.4a1.6 1.6 0 0 0 1.23 2.6h16.74a1.6 1.6 0 0 0 1.23-2.6l-1.8-2.12A7.6 7.6 0 0 1 22 13.36V11a6 6 0 0 0-6-6Z"
        fill="currentColor"
      />
      <path
        d="M12.5 24.5a3.5 3.5 0 0 0 7 0"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.2"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg fill="none" height="20" viewBox="0 0 24 24" width="20">
      <path
        d="M12 3.6 5.6 6v5.24c0 4.22 2.66 8.16 6.4 9.76 3.74-1.6 6.4-5.54 6.4-9.76V6L12 3.6Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="m9.5 12.2 1.7 1.7 3.5-3.9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
