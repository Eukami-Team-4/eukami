import {Button} from "@/components/ui/button.jsx"
import React from "react";
import card from "public\Images\cart-image.png"
const savedCards = () => {
    return (
        <div>
            

            <main>
                <div className="flex items-center justify-between w-auto h-40 text-4xl font-medium uppercase">
                    <h1 className=" ml-36">Manage Addresses</h1>
                    <Button className="mr-36 bg-onyx">Add card+</Button>
                </div>

                <div className="grid w-auto h-auto grid-cols-2 px-6 py-8 mb-10 bg-antiFlashWhite pb rounded-xl ml-36 mr-36">
                    <div className=""> <img src={card} alt="card image" /></div>
                </div>

            </main>
        </div>
    );
}

export default savedCards;