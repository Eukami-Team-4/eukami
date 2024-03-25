import StorefrontButton from "@/app/(Storefront)/components/storefront-button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export const FeaturedCollection = ({params}) => {
  return (
    <section className="container py-12">
      <h2 className="py-3 text-3xl font-medium text-center uppercase">
        Featured Collections
      </h2>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {featuredCollections.map((collection, index) => (
          <div key={index} className="relative rounded-md h-96">
            <div className="flex flex-col items-center justify-end h-full gap-3 p-6">
              <Image
                width={380}
                height={380}
                className="object-contain w-48 rounded-md aspect-square"
                src={collection.image}
                alt={collection.name} />
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

export const featuredCollections = [
  {
    name: "Headphones",
    image: "https://xbufnzihtjlgkfljttlv.supabase.co/storage/v1/object/public/images/headphones.png?t=2024-03-20T07%3A56%3A24.595Z",
  },
  {
    name: "Earphones",
    image: "https://xbufnzihtjlgkfljttlv.supabase.co/storage/v1/object/public/images/earphones.png?t=2024-03-20T07%3A54%3A32.897Z",
  },
  {
    name: "Speakers",
    image: "https://xbufnzihtjlgkfljttlv.supabase.co/storage/v1/object/public/images/speakers.png",
  },
  {
    name: "Accessories",
    image:"https://xbufnzihtjlgkfljttlv.supabase.co/storage/v1/object/public/images/513493082.png?width=100&height=100"
  },
  {
    name: "Limited Edition",
    image:"https://xbufnzihtjlgkfljttlv.supabase.co/storage/v1/object/public/images/hero-image.png?t=2024-03-20T08%3A00%3A40.138Z"
  }
  
];

