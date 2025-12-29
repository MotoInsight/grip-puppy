import { useMemo } from "react";

type Variant = {
  key: "original" | "bigpaw";
  title: string;
  sizeLabel: string;
  sizeDetail: string;
  bestFor: string;
  amazonUrl: string;
  walmartUrl: string;
  headerImageUrl: string;
  packagingImageUrl: string;
};

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M20 7L10 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M13 2L3 14h7l-1 8 12-14h-7l-1-6Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconHand() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M8 13V6a2 2 0 1 1 4 0v6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M12 12V5a2 2 0 1 1 4 0v8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M16 13V7a2 2 0 1 1 4 0v10c0 3-2 5-5 5H11c-2.8 0-5-2.2-5-5v-3a2 2 0 1 1 4 0v2"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconRuler() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M4 8h16M4 16h16M7 8v8M11 8v4M15 8v8M19 8v4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconCart() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path
        d="M6 6h15l-2 9H7L6 6Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M6 6 5 3H2" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

function ExternalButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition ${className}`}
    >
      {children}
    </a>
  );
}

export default function App() {
  const variants: Variant[] = useMemo(
    () => [
      {
        key: "original",
        title: "Original Grip Puppy",
        sizeLabel: '7/8" bars',
        sizeDetail: "22mm",
        bestFor: "Most bikes and scooters",
        amazonUrl:
          "https://www.amazon.com/Grip-Puppy-Comfort-Grips-Original/dp/B00CP9ADD8",
        walmartUrl:
          "https://www.walmart.com/ip/Grip-Puppy-Comfort-Grips-Original/15627253409",
        headerImageUrl: "/images/GP_Header.jpg",
        packagingImageUrl: "/images/GP_Packaging.jpg",
      },
      {
        key: "bigpaw",
        title: "Grip Puppy Big Paw",
        sizeLabel: '1" bars',
        sizeDetail: "28mm",
        bestFor: "Cruisers and touring bikes",
        amazonUrl:
          "https://www.amazon.com/Grip-Puppy-Big-PAW-Oversized/dp/B0859ZJXVM",
        walmartUrl:
          "https://www.walmart.com/ip/Grip-Puppy-Comfort-Grips-Big-Paw/5453214577",
        headerImageUrl: "/images/BP_Header.jpg",
        packagingImageUrl: "/images/BP_Packaging.jpg",
      },
    ],
    []
  );

  const benefits = [
    "Soft, squeezable comfort that helps reduce vibration and hand fatigue",
    "Slides over existing grips - no removal required",
    "Adds comfortable thickness for better control",
    "Excellent for long rides and daily commuting",
    "Works with most stock rubber grips and heated grips",
    '5 inch length (12.7cm), trimmable for fit',
    "Simple installation using common methods",
    "Immediate comfort improvement",
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              Grip Puppy Comfort Overgrips
            </h1>

            <p className="mt-4 max-w-xl text-lg text-zinc-300">
              A simple upgrade that slips over your existing grips to dramatically
              improve comfort and reduce vibration.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="font-semibold">Motorcycle Insight</span>
              <span className="text-zinc-300">
                is the official US importer for Grip Puppy products
              </span>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                <IconHand /> Comfort
              </div>
              <div className="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                <IconBolt /> Vibration
              </div>
              <div className="rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                <IconRuler /> Proper Fit
              </div>
            </div>

            <div className="mt-8 grid gap-2">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-2 text-sm">
                  <IconCheck />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-white/10">
            <img
              src="/images/Overview.jpg"
              alt="Grip Puppy overview"
              className="h-full w-full object-cover opacity-80"
            />
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {variants.map((v) => (
            <div
              key={v.key}
              className="rounded-[2rem] bg-white/5 p-6 ring-1 ring-white/10"
            >
              <div className="mb-4">
                <div className="text-xs text-zinc-300">{v.bestFor}</div>
                <h2 className="text-3xl font-semibold">{v.title}</h2>
                <div className="text-sm text-zinc-300">
                  Fits {v.sizeLabel} handlebars ({v.sizeDetail})
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white ring-1 ring-zinc-300">
                  <img
                    src={v.headerImageUrl}
                    alt={v.title}
                    className="h-64 w-full object-contain p-4"
                  />
                </div>
                <div className="rounded-xl bg-white ring-1 ring-zinc-300">
                  <img
                    src={v.packagingImageUrl}
                    alt={`${v.title} packaging`}
                    className="h-64 w-full object-contain p-4"
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <ExternalButton
                  href={v.amazonUrl}
                  className="bg-amber-400 text-zinc-950 hover:bg-amber-300"
                >
                  <IconCart /> Amazon
                </ExternalButton>
                <ExternalButton
                  href={v.walmartUrl}
                  className="bg-sky-400 text-zinc-950 hover:bg-sky-300"
                >
                  <IconCart /> Walmart
                </ExternalButton>
              </div>
            </div>
          ))}
        </div>
      </section>
	  
	{/* OpenSourceEV callout */}
	<section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
	  <div className="rounded-[2rem] bg-white/5 p-6 ring-1 ring-white/10 sm:p-6">
		<div className="grid gap-8 lg:grid-cols-[320px_1fr_260px] lg:items-center">
		  
		  {/* Column 1: big logo tile */}
		  <div className="flex items-center justify-center">
			<div className="w-full rounded-2xl bg-black p-5 ring-1 ring-white/20">
			  <img
				src="https://opensourceev.com/cdn/shop/files/OpenSourceEV_Logo_300px.png"
				alt="OpenSourceEV Parts logo"
				className="h-14 w-auto"
				loading="lazy"
			  />
			</div>
		  </div>

		  {/* Column 2: features */}
		  <div>
			<div className="text-xl font-bold uppercase tracking-wide text-zinc-400">
			  Also from Motorcycle Insight
			</div>
			<div className="mt-5 grid gap-1 text-sm text-zinc-200">
			  <div className="flex items-start gap-2">
				<span className="mt-0.5 text-zinc-100">
				  <IconCheck />
				</span>
				<span>Bespoke 3D printed parts for the Rivian R1T/R1S and the GM Silverado EV and Sierra EV</span>
			  </div>

			  <div className="flex items-start gap-2">
				<span className="mt-0.5 text-zinc-100">
				  <IconCheck />
				</span>
				<span>Open-source STL files published free for every design</span>
			  </div>

			  <div className="flex items-start gap-2">
				<span className="mt-0.5 text-zinc-100">
				  <IconCheck />
				</span>
				<span>3D print our parts yourself for little to no cost</span>
			  </div>
			</div>
		  </div>

		  {/* Column 3: CTA */}
		  <div className="flex h-full items-start lg:items-center">
			<a
			  href="https://opensourceev.com/"
			  target="_blank"
			  rel="noreferrer"
			  className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-xl bg-sky-500 px-6 py-3 text-base font-semibold text-zinc-950 hover:bg-sky-400"
			>
			  Visit OpenSourceEV.com
			</a>
		  </div>
		</div>
	  </div>
	</section>





	
      <footer className="pb-10 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Motorcycle Insight LLC
      </footer>
    </div>
  );
}
