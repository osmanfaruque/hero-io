import heroImage from "../../hero-io-resources/assets/hero.png";

function HomePage() {
  return (
    <section className="overflow-hidden rounded-md bg-[#f2f3f5]">
      <div className="mx-auto max-w-[860px] px-4 pb-0 pt-10 text-center md:px-6 md:pt-14">
        <h1 className="text-4xl font-bold leading-tight text-[#0f2842] md:text-6xl">
          We Build
          <br />
          <span className="text-violet-500">Productive</span> Apps
        </h1>
        <p className="mx-auto mt-4 max-w-[720px] text-sm leading-7 text-slate-500 md:text-xl">
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and
          more exciting.
        </p>
        <p className="mx-auto max-w-[720px] text-sm leading-7 text-slate-500 md:text-xl">
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            className="rounded border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800"
            href="https://play.google.com/store"
            rel="noreferrer"
            target="_blank"
          >
            Google Play
          </a>
          <a
            className="rounded border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800"
            href="https://www.apple.com/app-store/"
            rel="noreferrer"
            target="_blank"
          >
            App Store
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-3 max-w-[900px] px-4 md:px-8">
        <img alt="Hero app showcase" className="mx-auto h-auto max-w-full" src={heroImage} />
      </div>
    </section>
  );
}

export default HomePage;
