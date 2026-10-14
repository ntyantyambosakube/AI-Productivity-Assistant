import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  FileText, PenTool, Megaphone, Sparkles, Mail, Share2, Layers,
  ArrowRight, ArrowUpRight, Check, Menu, X,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import pfProfile from "@/assets/pf-profile.jpg";
import pfIdentity from "@/assets/pf-identity.jpg";
import pfSocial from "@/assets/pf-social.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digital Marketing — Driving growth to the digital world" },
      { name: "description", content: "Brand identity, company profiles, advertising, content, email and social media marketing that help businesses grow digitally." },
      { property: "og:title", content: "Digital Marketing — Driving growth to the digital world" },
      { property: "og:description", content: "We help businesses transform ideas into professional brands and powerful digital experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  ["About", "#about"], ["Services", "#services"], ["Portfolio", "#portfolio"],
  ["Process", "#process"], ["Packages", "#packages"], ["Contact", "#contact"],
] as const;

const SERVICES = [
  { icon: FileText, name: "Company Profiles", desc: "Professional profiles, pitch decks and corporate documents that tell your story clearly.", items: ["Company profile PDF", "Pitch decks", "Mission & values copy"], benefit: "Win trust from partners and clients." },
  { icon: PenTool, name: "Logo & Brand Identity", desc: "Distinctive logos and visual systems built to be recognised everywhere.", items: ["Logo suite", "Colour & type system", "Stationery & email signature"], benefit: "Look established from day one." },
  { icon: Megaphone, name: "Advertisements", desc: "Promotional designs for launches, offers and campaigns — online and in print.", items: ["Digital ads", "Posters & flyers", "Launch campaigns"], benefit: "Turn attention into enquiries." },
  { icon: Sparkles, name: "Content Creation", desc: "Words and visuals that explain what you do and why it matters.", items: ["Website copy", "Blog articles", "Product descriptions"], benefit: "Communicate your value simply." },
  { icon: Mail, name: "Email Marketing", desc: "Consent-based email campaigns that keep customers close.", items: ["Newsletters", "Welcome sequences", "Promotional emails"], benefit: "Build lasting customer relationships." },
  { icon: Share2, name: "Social Media Marketing", desc: "Consistent, on-brand content planned around your goals.", items: ["Content calendars", "Post & story design", "Captions"], benefit: "Stay visible and relevant." },
  { icon: Layers, name: "Digital Branding Support", desc: "Ongoing help keeping every touchpoint consistent as you grow.", items: ["Brand refreshes", "Templates", "Marketing materials"], benefit: "One clear identity everywhere." },
];

const PORTFOLIO = [
  { cat: "Company Profiles", img: pfProfile, title: "Corporate profile for a professional services firm", goal: "Present capabilities to corporate clients with a clear, credible structure." },
  { cat: "Brand Identity", img: pfIdentity, title: "Minimalist identity for a retail boutique", goal: "Create a warm, memorable mark that works on packaging and in store." },
  { cat: "Social Media", img: pfSocial, title: "Launch campaign for a clothing label", goal: "Introduce a new collection with bold, consistent feed content." },
];

const STEPS = [
  ["Discovery", "Understand your business and objectives."],
  ["Strategy", "Identify the audience, message and direction."],
  ["Creation", "Develop the agreed design or marketing materials."],
  ["Review", "Collect your feedback and refine the work."],
  ["Delivery", "Provide the agreed final files and materials."],
  ["Improvement", "Assess performance and spot future opportunities."],
];

const PACKAGES = [
  { name: "Brand Starter", for: "Startups & new ventures", items: ["Logo design", "Colour & type basics", "Social profile icons"] },
  { name: "Business Identity", for: "Growing small businesses", items: ["Full brand identity", "Company profile", "Stationery & templates"], featured: true },
  { name: "Digital Growth", for: "Businesses ready to scale", items: ["Social media content", "Ad campaigns", "Email marketing"] },
  { name: "Custom Solution", for: "Unique requirements", items: ["Tailored scope", "Mix any services", "Flexible timeline"] },
];

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-end justify-center gap-[3px] rounded-lg bg-brand-gradient p-2">
        {[40, 65, 100].map((h) => (
          <span key={h} className="w-1.5 rounded-sm bg-primary-foreground" style={{ height: `${h}%` }} />
        ))}
      </span>
      <span className={`font-display text-lg font-bold ${dark ? "text-navy-foreground" : "text-foreground"}`}>
        Digital Marketing
      </span>
    </a>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div id="top" className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Logo />
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map(([l, h]) => (
              <a key={h} href={h} className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{l}</a>
            ))}
            <a href="#contact" className="rounded-full bg-navy px-5 py-2 text-sm font-semibold text-navy-foreground transition hover:opacity-90">Get a quote</a>
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t border-border px-5 py-3 md:hidden">
            {NAV.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="py-2 font-medium">{l}</a>)}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" /> Driving growth to the digital world
          </p>
          <h1 className="text-4xl font-bold leading-[1.08] md:text-6xl">
            Build your brand. Elevate your presence. <span className="text-brand-gradient">Grow digitally.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Digital Marketing helps businesses create professional brand identities, compelling advertisements, engaging content and strategic digital experiences that connect with the right audience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 font-semibold text-primary-foreground shadow-soft transition hover:opacity-95">Let's build your brand <ArrowRight className="h-4 w-4" /></a>
            <a href="#services" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-semibold transition hover:border-teal">Explore our services</a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-brand-gradient opacity-15 blur-2xl" />
          <img src={hero} alt="Brand identity mockups: business cards, company profile and social media post in navy and teal" width={1536} height={1152} className="rounded-3xl shadow-soft" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-navy py-20 text-navy-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal">About us</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">A creative partner for businesses that want to be seen — and trusted.</h2>
            <p className="mt-5 text-navy-foreground/75">
              We combine visual design, brand strategy, advertising and digital communication to help companies present themselves professionally and reach more customers. From your company profile and logo to your campaigns and social content, we help you build a stronger digital identity.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              ["Mission", "Help businesses communicate their value, build recognisable identities and grow sustainably."],
              ["Vision", "To be a trusted branding and marketing partner known for creativity, quality and real value."],
              ["Values", "Creativity, reliability, clear communication, consistency and ethical marketing."],
            ].map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-5">
                <h3 className="font-semibold text-teal">{t}</h3>
                <p className="mt-1 text-sm text-navy-foreground/80">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-20">
        <SectionHead kicker="Services" title="Everything your brand needs to grow online" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.name} className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-soft">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary transition group-hover:bg-brand-gradient group-hover:text-primary-foreground"><s.icon className="h-5 w-5" /></span>
              <h3 className="mt-5 text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {s.items.map((i) => <li key={i} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />{i}</li>)}
              </ul>
              <p className="mt-4 text-sm font-medium text-primary">{s.benefit}</p>
              <a href="#contact" className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold">Enquire <ArrowUpRight className="h-4 w-4" /></a>
            </article>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <Portfolio />

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-5 py-20">
        <SectionHead kicker="Our process" title="Simple, transparent, collaborative" />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map(([t, d], i) => (
            <li key={t} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-3xl font-bold text-brand-gradient">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-muted-foreground">Deliverables, revisions, timelines and reporting depend on the agreed project scope.</p>
      </section>

      {/* Packages */}
      <section id="packages" className="bg-secondary py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead kicker="Packages" title="Flexible packages, priced to your scope" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {PACKAGES.map((p) => (
              <div key={p.name} className={`flex flex-col rounded-2xl p-6 ${p.featured ? "bg-navy text-navy-foreground shadow-soft" : "border border-border bg-card"}`}>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className={`text-sm ${p.featured ? "text-navy-foreground/70" : "text-muted-foreground"}`}>{p.for}</p>
                <p className="mt-5 font-display text-2xl font-bold">Custom pricing</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {p.items.map((i) => <li key={i} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />{i}</li>)}
                </ul>
                <a href="#contact" className={`mt-auto block rounded-full pt-0 text-center`}>
                  <span className={`mt-6 block rounded-full py-2.5 text-sm font-semibold ${p.featured ? "bg-brand-gradient text-primary-foreground" : "border border-border"}`}>Request a quote</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />

      <footer className="bg-navy py-10 text-navy-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 md:flex-row">
          <Logo dark />
          <p className="text-sm text-navy-foreground/60">© {new Date().getFullYear()} Digital Marketing. Driving growth to the digital world.</p>
        </div>
      </footer>
    </div>
  );
}

function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">{kicker}</p>
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">{title}</h2>
    </div>
  );
}

function Portfolio() {
  const cats = ["All", ...PORTFOLIO.map((p) => p.cat)];
  const [cat, setCat] = useState("All");
  const list = PORTFOLIO.filter((p) => cat === "All" || p.cat === cat);
  return (
    <section id="portfolio" className="border-y border-border bg-card py-20">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead kicker="Portfolio" title="Concept work that shows what we can do" />
        <div className="mt-8 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${cat === c ? "bg-navy text-navy-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"}`}>{c}</button>
          ))}
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {list.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-2xl border border-border bg-background">
              <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
                  <span className="text-primary">{p.cat}</span>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-muted-foreground">Concept project</span>
                </div>
                <h3 className="mt-3 font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.goal}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const err: Record<string, string> = {};
    if (!String(f.get("name")).trim()) err["name"] = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(String(f.get("email")))) err["email"] = "Please enter a valid email address.";
    if (!f.get("service")) err["service"] = "Please choose a service.";
    if (String(f.get("message")).trim().length < 10) err["message"] = "Tell us a little more about your project.";
    setErrors(err);
    setDone(Object.keys(err).length === 0);
  };
  const field = "mt-1.5 w-full rounded-xl border border-input bg-card px-4 py-2.5 text-sm outline-none transition focus:border-teal focus:ring-2 focus:ring-ring/30";
  const Err = ({ k }: { k: string }) => errors[k] ? <p className="mt-1 text-xs text-destructive">{errors[k]}</p> : null;
  return (
    <section id="contact" className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1fr_1.4fr]">
      <div>
        <SectionHead kicker="Contact" title="Let's build your brand" />
        <p className="mt-5 text-muted-foreground">Tell us about your business and what you need. We'll come back with ideas and a tailored quote.</p>
        <dl className="mt-8 space-y-3 text-sm">
          {["Email", "Phone", "Location", "Social"].map((k) => (
            <div key={k} className="flex gap-3"><dt className="w-20 font-semibold">{k}</dt><dd className="text-muted-foreground">Coming soon</dd></div>
          ))}
        </dl>
      </div>
      <form onSubmit={onSubmit} noValidate className="grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft sm:grid-cols-2 md:p-8">
        <label className="text-sm font-medium">Full name*<input name="name" className={field} /><Err k="name" /></label>
        <label className="text-sm font-medium">Business name<input name="business" className={field} /></label>
        <label className="text-sm font-medium">Email*<input name="email" type="email" className={field} /><Err k="email" /></label>
        <label className="text-sm font-medium">Phone<input name="phone" type="tel" className={field} /></label>
        <label className="text-sm font-medium">Service required*
          <select name="service" defaultValue="" className={field}>
            <option value="" disabled>Select a service</option>
            {SERVICES.map((s) => <option key={s.name}>{s.name}</option>)}
            <option>Not sure yet</option>
          </select><Err k="service" />
        </label>
        <label className="text-sm font-medium">Estimated budget<input name="budget" className={field} /></label>
        <label className="text-sm font-medium sm:col-span-2">Project description*<textarea name="message" rows={4} className={field} /><Err k="message" /></label>
        <label className="text-sm font-medium">Preferred deadline<input name="deadline" type="date" className={field} /></label>
        <div className="flex items-end">
          <button type="submit" className="w-full rounded-full bg-brand-gradient py-3 font-semibold text-primary-foreground transition hover:opacity-95">Send enquiry</button>
        </div>
        {done && (
          <p className="rounded-xl bg-secondary p-4 text-sm sm:col-span-2">
            Thanks — your details look good. Online sending isn't switched on yet, so this enquiry has not been delivered. Please reach us directly for now.
          </p>
        )}
      </form>
    </section>
  );
}
