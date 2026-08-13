type CityDomainTemplateData = {
  city: string;
  domain: string;
  radius: string;
  internalAreas: string[];
  nearbyTargets: string[];
};

export const rishikeshTemplateData: CityDomainTemplateData = {
  city: "Rishikesh",
  domain: "safawalarishikesh.com",
  radius: "~200 km",
  internalAreas: [
    "Tapovan",
    "Muni Ki Reti",
    "Swarg Ashram",
    "Ram Jhula",
    "Laxman Jhula",
    "Shivpuri",
    "Bharat Mandir Area",
    "IDPL",
    "Awas Vikas",
    "Shyampur",
    "Virbhadra",
    "Ganga Nagar",
    "Barrage Road",
    "Nirmal Block",
    "Rishikesh Bypass",
  ],
  nearbyTargets: [
    "Haridwar",
    "Dehradun",
    "Roorkee",
    "Muzaffarnagar",
    "Saharanpur",
    "Najibabad",
    "Kotdwar",
    "Lansdowne",
    "Narendranagar",
    "Devprayag",
    "Doiwala",
    "Rishikesh Bypass",
    "Shivpuri",
    "Kaudiyala",
    "Tehri",
    "Chamba",
    "Mussoorie",
    "Vikasnagar",
  ],
};

const navItems = ["Home", "About Us", "Collections", "Services", "Gallery", "Contact"];

const heroSlides = [
  "https://safawala.com/wp-content/uploads/2026/07/Alia-Ranbir-Image.png",
  "https://safawala.com/wp-content/uploads/2026/07/Rakul-Image.png",
  "https://safawala.com/wp-content/uploads/2026/07/Darshan-Image.png",
  "https://safawala.com/wp-content/uploads/2026/07/Virat-Image-1.png",
  "https://safawala.com/wp-content/uploads/2025/08/Untitled-design-48.png",
  "https://safawala.com/wp-content/uploads/2026/07/Vicky-Image.png",
];

const collections = [
  {
    title: "Royal Safa",
    body: "Timeless Royalty",
    image: "https://safawala.com/wp-content/uploads/2025/08/Untitled-design-48.png",
  },
  {
    title: "Designer Safa",
    body: "Modern Elegance",
    image: "https://safawala.com/wp-content/uploads/2026/07/Virat-Image-1.png",
  },
  {
    title: "Barati Safa",
    body: "Vibrant & Elegant",
    image: "https://safawala.com/wp-content/uploads/2026/07/Rakul-Image.png",
  },
];

const solutions = [
  ["Groom Safa", "Premium safas for the groom"],
  ["Barati Safa", "Stylish safas for baraatis"],
  ["On-site Tying", "Professional tying team"],
  ["Accessories", "Brooches, kalgi, and more"],
];

const gallery = [
  "/assets/our-work/safawala-work-1.png",
  "/assets/our-work/safawala-work-2.png",
  "/assets/our-work/safawala-work-3.png",
  "/assets/our-work/safawala-work-4.png",
  "/assets/our-work/safawala-work-5.png",
  "/assets/our-work/safawala-work-6.png",
];


const testimonials = [
  ["Amit & Priya", "The safas were amazing and added the perfect royal touch to our wedding."],
  ["Rajat Sharma", "Excellent service and on-time delivery. Highly recommended for destination weddings."],
  ["Neha & Karan", "The on-site tying team was professional and very cooperative."],
];

export function CityDomainTemplate({ data }: { data: CityDomainTemplateData }) {
  return (
    <main className="bg-[#f7f0e6] text-[#1f140f]">
      <DarkHero data={data} />
      <CollectionsSection />
      <SolutionsSection />
      <TestimonialsSection />
      <GallerySection />
      <CoverageSection data={data} />
      <ContactSection data={data} />
      <FooterSection data={data} />
    </main>
  );
}

function Header({ dark = false, cta = "Enquire Now" }: { dark?: boolean; cta?: string }) {
  if (dark) {
    return (
      <>
        <div className="flex min-h-6 items-center justify-center bg-[#7d5b4e] px-4 text-center text-[17px] font-medium leading-tight tracking-[.01em] text-white">
          India’s Best Wedding Safa Rental Services — Book Now!
        </div>
        <header className="mx-auto flex h-[104px] max-w-[1440px] items-center justify-between gap-5 border-b border-black/[.06] bg-[#fdf9f2] px-[30px] py-5 text-[#181818]">
          <a href="#home">
            <img src="https://safawala.com/wp-content/uploads/2025/09/Untitled-design-13.png" alt="Safawala" className="h-auto w-[180px]" />
          </a>
          <nav className="hidden items-center gap-8 text-[17px] font-normal md:flex">
            <a href="#home">Home</a>
            <a href="#about-us">About Us</a>
            <a href="#collections">Our Collections</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact Us</a>
          </nav>
          <div className="hidden items-center gap-4 text-[15px] md:flex">
            <a href="tel:+919725295691">+919725295691</a>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-[#eadfce] bg-white">⌕</span>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-[#eadfce] bg-white">♡</span>
          </div>
        </header>
      </>
    );
  }

  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5">
      <a href="#home" className={`text-lg font-medium ${dark ? "text-white" : "text-[#261811]"}`}>
        Safawala Rishikesh
      </a>
      <nav className={`hidden items-center gap-8 text-[11px] font-medium md:flex ${dark ? "text-white/78" : "text-[#3e3029]"}`}>
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-[#b5853f]">
            {item}
          </a>
        ))}
      </nav>
      <a href="#contact" className={`rounded-sm px-4 py-2 text-[11px] font-semibold ${dark ? "bg-[#7a2430] text-white" : "bg-[#9b6b2e] text-white"}`}>
        {cta}
      </a>
    </header>
  );
}

function DarkHero({ data }: { data: CityDomainTemplateData }) {
  return (
    <section id="home" className="mx-auto max-w-[1440px] overflow-hidden bg-[#fdf9f2] text-[#181818]">
      <Header dark />
      <div className="relative min-h-[720px] overflow-hidden bg-[#15100d]">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide}
              className="absolute inset-0 bg-cover bg-center opacity-0 [animation:safawalaHeroFade_30s_infinite]"
              style={{ backgroundImage: `url(${slide})`, animationDelay: `${index * 5}s` }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.58)_0%,rgba(0,0,0,.24)_40%,rgba(0,0,0,.08)_100%),linear-gradient(0deg,rgba(0,0,0,.4),transparent_38%)]" />
        <style>{`
          @keyframes safawalaHeroFade {
            0%, 13% { opacity: 1; transform: scale(1.01); }
            18%, 95% { opacity: 0; transform: scale(1.06); }
            100% { opacity: 0; transform: scale(1.06); }
          }
        `}</style>
        <div className="relative z-10 flex min-h-[720px] max-w-[620px] flex-col justify-center px-6 py-20 text-white md:pl-[86px]">
          <h1 className="m-0 max-w-xl font-sans text-5xl font-medium leading-[1.07] tracking-[-0.04em] md:text-[60px]">
            Every Fold, a Story of Legacy
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-[1.65] text-white/85">
            Each Safawala safa is meticulously draped using age-old techniques, blending authentic craftsmanship with a regal modern touch for weddings in {data.city}.
          </p>
          <a href="#contact" className="mt-8 w-fit bg-[#b8965b] px-7 py-3 text-[13px] font-normal text-white">Contact Us</a>
        </div>
        <div className="absolute bottom-9 left-6 z-20 flex gap-2.5 md:left-[86px]">
          {[0, 1, 2, 3].map((dot) => (
            <span key={dot} className={`h-2.5 w-2.5 rounded-full border border-white ${dot === 0 ? "bg-white" : "bg-transparent"}`} />
          ))}
        </div>
      </div>
      <div className="grid border-b border-[#eee3d5] bg-[#fdf9f2] md:grid-cols-4">
        {["Heritage in Every Fold", "Tailored for You", "Royal Fabrics", "Perfect On-Site Tying"].map((item) => (
          <div key={item} className="flex min-h-24 items-center justify-center gap-3 border-[#eee3d5] py-6 text-[15px] md:border-r">
            <strong className="text-2xl leading-none text-[#b8965b]">✦</strong>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function CollectionsSection() {
  return (
    <section id="collections" className="mx-auto mt-8 max-w-6xl rounded-lg bg-[#faf6ef] px-5 py-14 md:px-10">
      <div className="grid gap-8 md:grid-cols-[.75fr_1.25fr] md:items-center">
        <div>
          <p className="text-xs font-semibold">Our Collections</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight">A Safa for Every Style & Tradition</h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[#6a5c52]">
            Explore our wide range of premium safas and accessories crafted for every royal occasion.
          </p>
          <a href="#gallery" className="mt-7 inline-block rounded-sm bg-[#9b6b2e] px-5 py-3 text-xs font-semibold text-white">View All Collections</a>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {collections.map((item) => (
            <article key={item.title} className="group relative h-[320px] overflow-hidden rounded-lg bg-[#2b1710]">
              <img src={item.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-1 text-xs text-white/75">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="services" className="mx-auto mt-8 max-w-6xl overflow-hidden rounded-lg bg-[#070707] text-white shadow-xl">
      <Header dark cta="Book Now" />
      <div className="relative grid min-h-[440px] items-end px-5 pb-10 md:grid-cols-[1fr_1fr] md:px-10">
        <div className="relative z-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c99b54]">Our Services</p>
          <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight">Complete Safa Solutions for Your Big Day</h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/75">From selection to tying, we ensure you and your baraatis look your best.</p>
          <div className="mt-8 grid gap-3 md:grid-cols-4">
            {solutions.map(([title, body]) => (
              <article key={title} className="rounded-md border border-white/12 bg-white/8 p-4">
                <div className="text-[#c99b54]">✤</div>
                <h3 className="mt-4 text-sm font-semibold">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-white/65">{body}</p>
              </article>
            ))}
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1100&q=80"
          alt=""
          className="absolute inset-y-0 right-0 h-full w-1/2 object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/85 to-transparent" />
      </div>
    </section>
  );
}


function TestimonialsSection() {
  return (
    <section className="mx-auto mt-8 max-w-6xl rounded-lg bg-[#faf6ef] px-5 py-16 text-center md:px-10">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9b6b2e]">Testimonials</p>
      <h2 className="mt-3 font-serif text-4xl">Words from Our Happy Clients</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map(([name, quote]) => (
          <article key={name} className="rounded-md border border-[#e4d7c5] bg-[#fffaf3] p-8">
            <p className="text-[#b5853f]">★★★★★</p>
            <p className="mt-5 text-sm leading-7 text-[#51443c]">“{quote}”</p>
            <p className="mt-5 text-sm font-semibold">— {name}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 text-[#9b6b2e]">•  ·  ·</div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="mx-auto mt-8 max-w-6xl rounded-lg bg-[#faf6ef] px-5 py-14 md:px-10">
      <div className="text-center">
        <p className="text-sm">Our Work</p>
        <h2 className="mt-2 font-serif text-4xl">Moments of Royalty</h2>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {gallery.map((image) => (
          <img
            key={image}
            src={image}
            alt=""
            className="aspect-[4/3] w-full rounded-md object-cover object-center"
            style={image.endsWith("safawala-work-4.png") ? { objectPosition: "center 18%" } : undefined}
          />
        ))}
      </div>
    </section>
  );
}

function CoverageSection({ data }: { data: CityDomainTemplateData }) {
  return (
    <section className="mx-auto mt-8 grid max-w-6xl gap-6 px-5 md:grid-cols-2 md:px-0">
      <CoverageBlock title={`Internal Areas in ${data.city}`} items={data.internalAreas} />
      <CoverageBlock title={`Nearby Targets Within ${data.radius}`} items={data.nearbyTargets} />
    </section>
  );
}

function ContactSection({ data }: { data: CityDomainTemplateData }) {
  return (
    <section id="contact" className="mx-auto mt-8 max-w-6xl rounded-lg bg-[#faf6ef] px-5 py-14 md:px-10">
      <Header cta="Enquire Now" />
      <div className="grid gap-8 pt-8 md:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-xs">Get In Touch</p>
          <h2 className="mt-3 max-w-sm font-serif text-4xl leading-tight">Plan Your Royal Wedding Experience</h2>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[#6a5c52]">Share your requirements and our team will get back to you shortly.</p>
          <div className="mt-7 grid gap-4 text-sm text-[#51443c]">
            <p>☎ +91 9725295691</p>
            <p>✉ info@safawalarishikesh.com</p>
            <p>⌖ {data.city}, Uttarakhand, India</p>
          </div>
        </div>
        <form className="grid gap-4 rounded-lg border border-[#eadfce] bg-[#fffaf3] p-6 md:grid-cols-2">
          {["Your Name", "Phone Number", "Email Address", "Event Date", "City", "Type of Service"].map((field) => (
            <input key={field} className="rounded-sm border border-[#e1d4c1] bg-transparent px-4 py-3 text-sm" placeholder={field} />
          ))}
          <textarea className="min-h-32 rounded-sm border border-[#e1d4c1] bg-transparent px-4 py-3 text-sm md:col-span-2" placeholder="Message" />
          <button className="w-fit rounded-sm bg-[#7a2430] px-7 py-3 text-xs font-semibold text-white">Send Enquiry</button>
        </form>
      </div>
    </section>
  );
}

function FooterSection({ data }: { data: CityDomainTemplateData }) {
  return (
    <footer className="mx-auto my-8 max-w-6xl rounded-lg bg-[#35100f] px-5 py-14 text-white md:px-10">
      <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr_.8fr_1fr]">
        <div>
          <h2 className="font-serif text-2xl">Safawala Rishikesh</h2>
          <p className="mt-6 max-w-xs text-sm leading-7 text-white/70">
            Premium wedding safa rental, styling and on-site tying services for destination weddings in {data.city} and beyond.
          </p>
          <p className="mt-6 text-[#c99b54]">f  ·  ig  ·  yt</p>
        </div>
        <FooterList title="Quick Links" items={["Home", "About Us", "Collections", "Services", "Gallery", "Contact"]} />
        <FooterList title="Our Services" items={["Groom Safa", "Barati Safa", "On-site Tying", "Accessories", "Destination Weddings"]} />
        <div>
          <h3 className="text-[#c99b54]">Contact Us</h3>
          <div className="mt-6 grid gap-4 text-sm text-white/72">
            <p>☎ +91 9725295691</p>
            <p>✉ info@safawalarishikesh.com</p>
            <p>⌖ {data.city}, Uttarakhand India</p>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/55">
        <p>© 2026 Safawala Rishikesh. All Rights Reserved.</p>
        <p>Privacy Policy &nbsp;&nbsp; Terms & Conditions</p>
      </div>
    </footer>
  );
}

function FooterList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-[#c99b54]">{title}</h3>
      <div className="mt-6 grid gap-3 text-sm text-white/72">
        {items.map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-[#c99b54]">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

function CoverageBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-[#e4d7c5] bg-[#faf6ef] p-8">
      <h2 className="font-serif text-3xl">{title}</h2>
      <div className="mt-6 flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full bg-[#efe2cf] px-3 py-1.5 text-xs font-semibold text-[#6c3d24]">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
