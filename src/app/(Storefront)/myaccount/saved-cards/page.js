import { Button } from "@/components/ui/button.jsx";
import Image from "next/image";
const savedCards = () => {
  return (
    <div>
      <main>
        <div className="flex items-center justify-between w-auto h-40 text-4xl font-medium uppercase">
          <h1 className=" ml-36">Saved cards</h1>
          <Button className="mr-36 bg-onyx hover:bg-onyx hover:opacity-85">
            Add card+
          </Button>
        </div>

        <div className="grid w-auto h-auto grid-cols-2 gap-6 px-6 py-8 mb-10 bg-antiFlashWhite pb rounded-xl ml-36 mr-36">
          <div className="relative flex justify-center overflow-hidden border">
            <div className="relative w-[400px] h-64">
              <Image
                src="/images/Card-image.png"
                fill
                alt="bank card"
                className="object-contain rounded-3xl bg-gradient-to-tr from-red-900 to-red-800"
              ></Image>
            </div>
          </div>
          <div className="relative flex justify-center overflow-hidden border">
            <div className="relative w-[400px] h-64">
              <Image
                src="/images/Card-image.png"
                fill
                alt="bank card"
                className="object-cover rounded-3xl bg-gradient-to-tr from-red-900 to-red-800"
              ></Image>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default savedCards;
