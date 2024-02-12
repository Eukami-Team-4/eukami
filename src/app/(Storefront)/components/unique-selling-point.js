import Image from "next/image";

export function UniqueSellingPoint() {
  return (
    <section className="container py-16">
      <div className="flex flex-col items-center gap-12 rounded-lg lg:flex-row">
        <div className="flex flex-col justify-center w-full max-w-3xl gap-5 p-16 text-center rounded-lg lg:w-1/2 lg:h-96 lg:text-left">
          <h3 className="text-2xl uppercase">
            Bringing you the <span className="text-amber-500">best</span> audio
            gear
          </h3>
          <p className="pt-3 text-onyx text-small">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="relative flex items-center justify-center w-full max-w-3xl h-96 lg:w-1/2">
          <Image
            src="/images/hp2.png"
            fill
            className="object-cover rounded-lg lg:h-72"
            alt="headphones"
          ></Image>
        </div>
      </div>
    </section>
  );
}
