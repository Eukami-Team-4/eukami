import StorefrontButton from "@/app/(Storefront)/components/storefront-button";
import Image from "next/image";

export const FeaturedProducts = ({ featuredProducts }) => {
  return (
    <section className="container py-16 space-y-16">
      <div className="flex flex-col items-center gap-12 p-8 rounded-lg lg:p-16 lg:flex-row bg-brightOrange">
        <div className="flex items-center justify-center lg:w-1/2">
          <Image
            src={featuredProducts[0].image}
            width={400}
            height={400}
            className="object-cover aspect-square"
            alt={featuredProducts[0].name}
          ></Image>
        </div>
        <div className="flex flex-col justify-center h-full max-w-3xl gap-5 text-center lg:text-left">
          <h1 className="text-5xl uppercase drop-shadow-md text-seasalt">
            {featuredProducts[0].name}
          </h1>
          <p className="">{featuredProducts[0].description}</p>
          <div>
            <StorefrontButton
              href={`/products/${featuredProducts[0].name}`}
              className={"bg-eerieBlack hover:bg-eerieBlack/90"}
            >
              See Product
            </StorefrontButton>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-12 rounded-lg lg:flex-row">
        <div className="relative flex items-center justify-center w-full max-w-3xl h-72 lg:w-1/2">
          <Image
            src={featuredProducts[1].image}
            fill
            className="object-cover rounded-lg lg:h-72"
            alt={featuredProducts[1].name}
          ></Image>
        </div>
        <div className="flex flex-col justify-center w-full max-w-3xl gap-5 p-16 text-center rounded-lg lg:w-1/2 lg:h-72 bg-antiFlashWhite lg:text-left">
          <h1 className="text-2xl uppercase drop-shadow-md">
            {featuredProducts[1].name}
          </h1>
          <p className="">{featuredProducts[1].description}</p>
          <div>
            <StorefrontButton
              href={`/products/${featuredProducts[1].name}`}
              className={"bg-eerieBlack hover:bg-eerieBlack/90"}
            >
              See Product
            </StorefrontButton>
          </div>
        </div>
      </div>
    </section>
  );
};
