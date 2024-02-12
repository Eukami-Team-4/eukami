import MainNav from "@/app/(Storefront)/components/main-nav";

export function Footer() {
  return (
    <footer className="bg-indigoDye">
      <div className="container relative flex flex-col gap-4 p-8 mx-auto text-white">
        <div className="absolute top-0 w-48 h-1 -translate-x-1/2 left-1/2 bg-brightOrange md:left-32"></div>
        <div className="flex flex-col items-center gap-8 py-8 text-sm lg:justify-between lg:flex-row md:items-start">
          <h3 className="text-2xl font-medium uppercase">Eukami</h3>
          <MainNav />
        </div>
        <div className="w-full max-w-3xl space-y-6 text-sm text-center text-platinum md:text-left">
          <p>
            Eukami is an all in one stop to fulfill your audio needs. We&apos;re a
            small team of music lovers and sound specialists who are devoted to
            helping you get the most out of personal audio. Come and visit our
            demo facility - we&apos;re open 7 days a week.
          </p>
          <p>Copyright {new Date().getFullYear()}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
