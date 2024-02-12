import StorefrontButton from "@/app/(Storefront)/components/storefront-button";
import { UniqueSellingPoint } from "@/app/(Storefront)/components/unique-selling-point";
import Image from "next/image";
import { FeaturedCollection } from "./components/featured-collection";

export default function Home({ product }) {
  return (
    <main className="">
      <Hero />
      <FeaturedCollection />
      <FeaturedProduct />
      <UniqueSellingPoint />
    </main>
  );
}

const Hero = () => {
  return (
    <section className="h-[60vh] bg-indigoDye relative">
      <div className="container relative z-10 flex items-center justify-between h-full gap-3 text-seasalt bg-indigoDye/70">
        <div className="flex flex-col justify-center h-full max-w-3xl gap-5 text-center lg:text-left">
          <h3 className="uppercase text-platinum">Featured Product</h3>
          <h1 className="text-5xl uppercase">Featured Product</h1>
          <p className="hero__subtitle">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <div>
            <StorefrontButton href="/products/1">See Product</StorefrontButton>
          </div>
        </div>
        <div className="items-center justify-center hidden w-4/5 lg:flex">
          <Image
            src="/images/hero.png"
            width={500}
            height={500}
            className="object-cover aspect-square"
            alt="headphones"
          ></Image>
        </div>
      </div>
      <div className="absolute inset-0 z-0 flex items-center justify-center w-full h-full aspect-square lg:hidden">
        <Image
          src="/images/hero.png"
          width={500}
          height={500}
          className="object-cover aspect-square"
          alt="headphones"
        ></Image>
      </div>
    </section>
  );
};

const FeaturedProduct = () => {
  return (
    <section className="container py-16 space-y-16">
      <div className="flex flex-col items-center gap-12 p-8 rounded-lg lg:p-16 lg:flex-row bg-brightOrange">
        <div className="flex items-center justify-center lg:w-1/2">
          <Image
            src="/images/hp2.png"
            width={400}
            height={400}
            className="object-cover aspect-square"
            alt="headphones"
          ></Image>
        </div>
        <div className="flex flex-col justify-center h-full max-w-3xl gap-5 text-center lg:text-left">
          <h1 className="text-5xl uppercase drop-shadow-md text-seasalt">
            Featured Product
          </h1>
          <p className="hero__subtitle">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <div>
            <StorefrontButton href="/products/1" className={"bg-eerieBlack hover:bg-eerieBlack/90"}>
              See Product
            </StorefrontButton>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-12 rounded-lg lg:flex-row">
        <div className="relative flex items-center justify-center w-full max-w-3xl h-72 lg:w-1/2">
          <Image
            src="/images/hp3.png"
            fill
            className="object-cover rounded-lg lg:h-72"
            alt="headphones"
          ></Image>
        </div>
        <div className="flex flex-col justify-center w-full max-w-3xl gap-5 p-16 text-center rounded-lg lg:w-1/2 lg:h-72 bg-antiFlashWhite lg:text-left">
          <h1 className="text-2xl uppercase drop-shadow-md">YX1 Headphones</h1>
          <div>
            <StorefrontButton href="/products/1" className={"bg-eerieBlack hover:bg-eerieBlack/90"}>
              See Product
            </StorefrontButton>
          </div>
        </div>
      </div>
    </section>
  );
};


