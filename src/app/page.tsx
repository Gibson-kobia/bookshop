import ContactForm from "@/components/ContactForm";

const productCategories = [
  { title: "Exercise Books", items: ["A4 Exercise Books", "A5 Exercise Books", "Graph Books"] },
  { title: "Stationery", items: ["Pens", "Chalk", "Files", "Tapes", "Calculators"] },
  { title: "Lab Chemicals & Equipment", items: ["Reagents", "Glassware", "Lab Kits"] },
  { title: "Groceries & Cereals", items: ["Rice", "Flour", "Cooking Oil"] },
  { title: "Printing Services", items: ["Free school logo/name printing", "Booklets", "Flyers"] },
];

const priceRows = [
  ["A4 Exercise Book", "KSH 220"],
  ["A5 Exercise Book", "KSH 180"],
  ["Graph Book", "KSH 260"],
  ["Ballpoint Pens", "KSH 20 each"],
  ["Chalk", "KSH 40 pack"],
  ["Letter Files", "KSH 120"],
  ["Transparent Tape", "KSH 90"],
  ["Scientific Calculator", "KSH 2,800"],
  ["Lab Reagent Set", "KSH 3,500"],
  ["Rice 10kg", "KSH 1,250"],
  ["Wheat Flour 2kg", "KSH 250"],
  ["Free logo printing", "With school stationery order"],
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <main className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8 sm:px-8 lg:px-12">
        <header className="flex flex-col gap-5 border-b border-amber-400/20 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.36em] text-amber-300/80">LAVIJACK ENTERPRISES LTD</p>
            <h1 className="max-w-3xl text-5xl font-black leading-tight text-white sm:text-6xl">
              Bookshop & stationery partner for schools, offices, and local families in Kisumu.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300/90">
              St. Teresa Kibuye Church Stalls, Kisumu-Kakamega Road. Reliable supplies, custom printing, and on-demand stationery sourcing with a trusted local presence.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-300/20 bg-slate-900/90 p-6 shadow-[0_30px_70px_rgba(0,0,0,0.4)] sm:w-[360px]">
            <p className="text-sm uppercase tracking-[0.22em] text-amber-300/80">Contact</p>
            <div className="mt-5 space-y-3 text-sm text-slate-200">
              <p><span className="font-semibold text-white">Phone:</span> 0722293377</p>
              <p><span className="font-semibold text-white">Email:</span> kechmzj012@yahoo.com</p>
              <p><span className="font-semibold text-white">Location:</span> St. Teresa Kibuye Church Stalls</p>
            </div>
            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-slate-950 transition hover:bg-amber-300">
              Order Now
            </a>
          </div>
        </header>

        <section className="grid gap-10 py-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="space-y-8 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.5)] backdrop-blur-xl">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.28em] text-amber-300/75">About us</p>
              <h2 className="text-3xl font-semibold text-white">A strong local shop built on trust, registration, and service.</h2>
            </div>

            <div className="grid gap-4 rounded-[1.5rem] bg-slate-950/70 p-6 text-sm text-slate-300 shadow-inner shadow-black/20 sm:grid-cols-2">
              <div className="space-y-3">
                <p><span className="font-semibold text-white">License</span></p>
                <p>TL-AAA24730</p>
              </div>
              <div className="space-y-3">
                <p><span className="font-semibold text-white">Registration</span></p>
                <p>CPR/2014/168877</p>
              </div>
              <div className="space-y-3">
                <p><span className="font-semibold text-white">PIN</span></p>
                <p>P051522466G</p>
              </div>
              <div className="space-y-3">
                <p><span className="font-semibold text-white">Bank</span></p>
                <p>KCB Kisumu West Branch · A/C 1176481738</p>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-gradient-to-br from-slate-900/95 via-slate-900 to-amber-950/50 p-6 text-slate-100 shadow-lg shadow-amber-400/10">
              <p className="text-xs uppercase tracking-[0.3em] text-amber-200/90">General manager</p>
              <p className="mt-3 text-2xl font-bold">Musa Jackton Okech</p>
              <p className="mt-2 max-w-xl leading-7 text-slate-300">
                Dedicated to bringing quality library supplies, stationery essentials, and printing support to Kisumu's schools and businesses with a hand-crafted local touch.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_30px_70px_rgba(7,27,57,0.4)]">
              <p className="text-sm uppercase tracking-[0.28em] text-amber-300/80">Product categories</p>
              <div className="mt-6 space-y-4">
                {productCategories.map((category) => (
                  <div key={category.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{category.items.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_60px_rgba(7,27,57,0.35)]">
              <p className="text-sm uppercase tracking-[0.28em] text-amber-300/80">Price list</p>
              <div className="mt-6 space-y-3 text-sm text-slate-200">
                {priceRows.map(([label, price]) => (
                  <div key={label} className="flex items-center justify-between rounded-3xl border border-white/5 bg-slate-950/70 px-4 py-3">
                    <span>{label}</span>
                    <strong className="text-amber-300">{price}</strong>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.24em] text-slate-500">Prices are a guide and subject to availability.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-6">
            <div className="space-y-4 rounded-[2rem] border border-amber-400/15 bg-slate-900/80 p-8 shadow-[0_30px_70px_rgba(7,27,57,0.4)]">
              <p className="text-sm uppercase tracking-[0.28em] text-amber-300/80">Reach us</p>
              <h2 className="text-3xl font-semibold text-white">Visit the shop or send a quick message.</h2>
              <div className="grid gap-4 rounded-3xl border border-white/10 bg-slate-950/80 p-6 text-sm text-slate-200 sm:grid-cols-2">
                <div className="space-y-3">
                  <p className="font-semibold text-white">Address</p>
                  <p>St. Teresa Kibuye Church Stalls</p>
                  <p>Kisumu-Kakamega Road</p>
                </div>
                <div className="space-y-3">
                  <p className="font-semibold text-white">Postal</p>
                  <p>P.O Box 4453-40103</p>
                  <p>Kisumu, Kenya</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_24px_60px_rgba(7,27,57,0.35)]">
              <p className="text-sm uppercase tracking-[0.28em] text-amber-300/80">Map</p>
              <div className="mt-4 aspect-[16/9] w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6 text-slate-400">
                <div className="flex h-full flex-col items-center justify-center text-center text-sm">
                  <p className="text-amber-300">Map Placeholder</p>
                  <p className="mt-3 max-w-xs text-slate-400">Add a live location map once the site is connected to a mapping service.</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </section>
      </main>
    </div>
  );
}
