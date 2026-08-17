import InquiryForm from "./InquiryForm";
import { gallery, getServiceFaqs, internalLocations, locations, nearbyLocations, services, type LocationItem } from "./site-data";

type ServiceItem = (typeof services)[number];

type Props =
  | { kind: "location"; location: LocationItem }
  | { kind: "service"; service: ServiceItem };

function Brand({ footer = false }: { footer?: boolean }) {
  return <a className={`brand${footer ? " footer-brand" : ""}`} href="/" aria-label="Safawala Rishikesh home"><span className="brand-logo-window"><img src="/safawala-logo-transparent.png" alt="Safawala" /></span><small>RISHIKESH</small></a>;
}

export default function SeoLandingPage(props: Props) {
  const isLocation = props.kind === "location";
  const location = isLocation ? props.location : null;
  const service = !isLocation ? props.service : null;
  const pageName = location?.name ?? service!.name;
  const focusKeyword = location ? `wedding safa wala in ${location.name}` : `${service!.name.toLowerCase()} in Rishikesh`;
  const title = location ? `Wedding Safa Wala in ${location.name}` : service!.title;
  const intro = location ? location.summary : service!.intro;
  const detail = location ? location.planning : service!.detail;
  const locationIndex = location ? locations.findIndex((item) => item.slug === location.slug) : services.findIndex((item) => item.slug === service!.slug);
  const rotatedGallery = [...gallery.slice(locationIndex % gallery.length), ...gallery.slice(0, locationIndex % gallery.length)];
  const relatedAreas = location
    ? [...locations.slice(locationIndex + 1, locationIndex + 7), ...locations.slice(0, 6)].slice(0, 8)
    : [...internalLocations.slice(0, 5), ...nearbyLocations.slice(0, 3)];
  const faq = location ? location.faq : getServiceFaqs(service!);
  const aboutTitle = location
    ? `A professional safa team planned around your ${location.name} wedding.`
    : `${service!.name} with a polished, wedding-ready finish.`;
  const aboutCopy = location
    ? `${detail} Our wedding safa wala in ${location.name} coordinates the groom pagdi, close-family pagdis and baraati safa tying as one organised preparation plan.`
    : `${detail} Every ${focusKeyword} booking is planned around the groom’s ready time, guest quantity, venue access and the photography schedule.`;
  const secondCopy = location
    ? `Couples looking for professional wedding safa tying in ${location.name} can choose groom-only styling, family pagdis or a complete baraati safa service. Fabric, colour and artist count are finalised before the team reaches the venue.`
    : `Choose a groom-only appointment, coordinated family styling or a full wedding-party package. We confirm the fabric, colour direction and number of artists before the Rishikesh event.`;

  return (
    <>
      <header className="site-header">
        <Brand />
        <nav aria-label="Page navigation"><a href="#about">About</a><a href="#services">Services</a><a href="#gallery">Gallery</a><a href="#areas">Areas</a><a href="#faq">FAQs</a></nav>
        <a className="header-cta" href={`https://wa.me/919725295691?text=${encodeURIComponent(`Hello Safawala Rishikesh, please check ${pageName} availability.`)}`}>Check availability</a>
      </header>

      <main className="landing-main">
        <section className="landing-hero">
          <div className="landing-hero-inner section-shell">
            <div className="landing-hero-copy">
              <div className="breadcrumbs"><a href="/">Home</a><span>/</span><a href={isLocation ? "/#areas" : "/#services"}>{isLocation ? "Service areas" : "Services"}</a><span>/</span><b>{pageName}</b></div>
              <p className="eyebrow">{location ? `${location.group} · On-location service` : "Professional wedding safa service"}</p>
              <h1>{title}</h1>
              <p>{intro}</p>
              <div className="landing-keyword-line"><span>Specialists in</span><strong>{focusKeyword}</strong></div>
            </div>
            <InquiryForm pageName={pageName} areaPlaceholder={location ? `${location.name} venue or hotel` : "e.g. Tapovan, Shivpuri"} />
          </div>
        </section>

        <section className="landing-trust" aria-label="Safawala service strengths"><div><strong>On-site</strong><span>hotel, resort or home</span></div><div><strong>Groom first</strong><span>unhurried signature styling</span></div><div><strong>Team planned</strong><span>for your guest quantity</span></div><div><strong>Colour aligned</strong><span>with outfits and décor</span></div></section>

        <section className="landing-about section-shell" id="about">
          <div className="landing-about-image"><img src={rotatedGallery[0][0]} alt={`${focusKeyword} – ${rotatedGallery[0][1]}`} /></div>
          <div className="landing-about-copy"><p className="eyebrow">About the service</p><h2>{aboutTitle}</h2><p>{aboutCopy}</p><p>{secondCopy}</p><ul><li>Groom pagdi consultation</li><li>Family and baraati batches</li><li>Venue-based artist team</li><li>Style and colour coordination</li></ul></div>
        </section>

        <section className="landing-services section-shell" id="services">
          <div className="section-heading"><div><p className="eyebrow">Wedding safa services</p><h2>One coordinated look, planned for the complete celebration.</h2></div><p>Every service page is connected, so you can move from the location to the exact groom, family or baraati requirement.</p></div>
          <div className="landing-service-grid">{services.slice(0, 4).map((item, index) => <a href={`/services/${item.slug}`} key={item.slug}><span>0{index + 1}</span><h3>{item.name}</h3><p>{item.intro}</p><b>View service →</b></a>)}</div>
        </section>

        <section className="landing-gallery" id="gallery">
          <div className="section-shell"><div className="section-heading compact"><div><p className="eyebrow">Safawala gallery</p><h2>Wedding safas made for the moment—and the photographs.</h2></div><p>A curated view of groom pagdi details, fabrics, colours and coordinated wedding styling.</p></div></div>
          <div className="landing-gallery-grid">{rotatedGallery.slice(0, 6).map(([src, alt]) => <figure key={src}><img src={src} alt={`${alt} for ${pageName}`} loading="lazy" /></figure>)}</div>
        </section>

        <section className="landing-planning section-shell">
          <div><p className="eyebrow">Keyword-focused planning guide</p><h2>What to confirm before booking {focusKeyword}.</h2><p>{location ? `${location.summary} ${location.planning}` : `${service!.intro} ${service!.detail}`}</p><p>Share the event date, exact venue pin, reporting time, number of safas and outfit references. This allows the Safawala Rishikesh team to suggest a realistic tying window, suitable wedding safa package and the correct number of artists.</p></div>
          <ol><li><span>01</span><h3>Date and venue</h3><p>Confirm the property and preparation room.</p></li><li><span>02</span><h3>Quantity</h3><p>Separate groom, family and baraati requirements.</p></li><li><span>03</span><h3>Colour direction</h3><p>Share sherwani and décor references.</p></li><li><span>04</span><h3>Ready-by time</h3><p>Protect portraits and baraat departure.</p></li></ol>
        </section>

        <section className="landing-links section-shell" id="areas">
          <div className="landing-link-card"><div><p className="eyebrow">Connected location pages</p><h2>Explore nearby service areas</h2></div><div>{relatedAreas.map((area) => <a href={`/${area.slug}`} key={area.slug}>{area.name}</a>)}</div></div>
          <div className="landing-link-card"><div><p className="eyebrow">Related searches</p><h2>Find the right safa service</h2></div><div>{services.map((item) => <a href={`/services/${item.slug}`} key={item.slug}>{item.name}</a>)}</div></div>
        </section>

        <section className="landing-faq section-shell" id="faq">
          <div className="section-heading"><div><p className="eyebrow">Unique page FAQs</p><h2>Questions about {pageName}.</h2></div><p>Answers are written for this page’s service or location context rather than copied from the Rishikesh homepage.</p></div>
          <div className="faq-list">{faq.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </section>
      </main>

      <footer><div className="section-shell landing-footer"><div><Brand footer /><p>Professional wedding safa tying, groom pagdi styling and coordinated baraati service across Rishikesh and nearby destinations.</p></div><div><h3>Plan your event</h3><a href="tel:+919725295691">+91 97252 95691</a><a href="https://wa.me/919725295691">WhatsApp Safawala</a><a href="/">Rishikesh homepage</a></div></div><div className="copyright section-shell"><span>© 2026 Safawala Rishikesh</span><span>Wedding safa, pagdi and turban artistry.</span></div></footer>
    </>
  );
}
