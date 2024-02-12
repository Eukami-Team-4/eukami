"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

const ProductsPage = () => {
    const pathname = usePathname();

    const [selectedValue, setSelectedValue] = useState(1);
    return (
        <div className="p-6">
            This is the {pathname} page
            <div className="flex flex-col gap-3 p-3">
                <div className="space-x-2">
                    <label htmlFor="1">number 1</label>
                    <input type="radio" name="group" id="1" value="1" onChange={() => setSelectedValue(1)} checked={selectedValue === 1 ? true : false} />
                </div>
                <div className="space-x-2">
                    <label htmlFor="2">number 2</label>
                    <input type="radio" name="group" id="2" value="2" onChange={() => setSelectedValue(2)} checked={selectedValue === 2 ? true : false} />
                </div>
                <div className="space-x-2">
                    <label htmlFor="3">number 3</label>
                    <input type="radio" name="group" id="3" value="3" onChange={() => setSelectedValue(3)} checked={selectedValue === 3 ? true : false} />
                </div>
            </div>
            <div className="border rounded-md">
                <div className="p-3">this is content {selectedValue}</div>
            </div>
        </div>
    );
}

export default ProductsPage;