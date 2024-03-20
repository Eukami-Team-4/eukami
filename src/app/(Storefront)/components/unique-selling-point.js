import Image from "next/image";

export function UniqueSellingPoint() {
  return (
    <section className="container py-16">
      <div className="flex flex-col items-center gap-12 rounded-lg lg:flex-row">
        <div className="flex flex-col justify-center w-full max-w-3xl gap-5 p-16 text-center rounded-lg lg:w-1/2 lg:h-96 lg:text-left">
          <h3 className="text-2xl uppercase">
            Bringing you the <span className="text-brightOrange">best</span>{" "}
            audio equipment
          </h3>
          <p className="pt-3 text-onyx text-small">
            Situated in the bustling center of Birmingham City, United Kingdom,
            Eukami stands as the top destination for luxury headphones,
            earphones, speakers, and audio accessories. Our expansive showroom
            and opulent demo rooms invite you to explore and test an extensive
            selection of our offerings. Visit us to encounter the incredible
            team that establishes Eukami as the prime spot for purchasing your
            portable audio devices.
          </p>
        </div>
        <div className="relative flex items-center justify-center w-full max-w-3xl h-96 lg:w-1/2">
          <Image
            src="https://xbufnzihtjlgkfljttlv.supabase.co/storage/v1/object/public/images/usp-image.png"
            fill
            className="object-cover rounded-lg lg:h-72"
            alt="headphones"
          ></Image>
        </div>
      </div>
    </section>
  );
}
