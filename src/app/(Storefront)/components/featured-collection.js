import StorefrontButton from "@/app/(Storefront)/components/storefront-button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import CollectionHeadphones from "../../../../public/images/collection-headphones.png";

export const FeaturedCollection = ({params}) => {
  return (
    <section className="container py-12">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection, index) => (
          <div key={index} className="relative rounded-md h-96">
            <div className="flex flex-col items-center justify-end h-full gap-3 p-6">
              <Image
                width={380}
                height={380}
                className="object-contain w-48 rounded-md aspect-square"
                src={collection.image}
                alt="" />
              <div className="space-y-4 text-center">
                <h3 className="font-medium uppercase">{collection.name}</h3>
                <StorefrontButton
                href={`/collections/${collection.name.toLowerCase()}`}
                  variant="ghost"
                  className="flex items-center text-sm text-gray-500 rounded-full group"
                >
                  Shop
                  <ChevronRight
                    className="ml-2 transition-all text-brightOrange group-hover:ml-4"
                    size={16} />
                </StorefrontButton>
              </div>
            </div>
            <div className="absolute bottom-0 w-full rounded-md bg-antiFlashWhite h-3/5 -z-10"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const collections = [
  {
    name: "Headphones",
    image: CollectionHeadphones,
  },
  {
    name: "Earphones",
    image: "/images/hp1.png",
  },
  {
    name: "Speakers",
    image: "/images/hp2.png",
  },
];

