import StorefrontButton from "@/app/(Storefront)/components/storefront-button";
import Image from "next/image";

export const Hero = ({ product }) => {
  return (
    <section className="h-[60vh] min-h-[500px] bg-indigoDye relative">
      <div className="container relative z-10 flex items-center justify-between h-full gap-3 text-seasalt bg-indigoDye/70">
        <div className="flex flex-col justify-center h-full max-w-3xl gap-5 text-center lg:text-left">
          <h3 className="uppercase text-platinum">NEW PRODUCT</h3>
          <h1 className="text-5xl uppercase">{product.name}</h1>
          <p className="hero__subtitle">{product.description}</p>
          <div>
            <StorefrontButton href={`/products/${product.name}`}>
              See Product
            </StorefrontButton>
          </div>
        </div>
        <div className="relative items-center justify-center hidden w-3/5 h-full lg:flex shrink-0">
          <Image
            src={product.images[0]?.publicUrl}
            fill
            className="object-contain p-6 aspect-square"
            alt={product.name}
          ></Image>
        </div>
      </div>
      <div className="absolute inset-0 z-0 flex items-center justify-center w-full h-full aspect-square lg:hidden">
        <Image
          src={product.images[0]?.publicUrl}
          width={500}
          height={500}
          className="object-cover p-6 aspect-square"
          alt="headphones"
        ></Image>
      </div>
    </section>
  );
};
