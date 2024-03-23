import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const MyOrders = () => {
  return (
    <div className="flex flex-col mt-10 mx-14">
      {/* Filters and Search Bar Section */}
      <div className="flex justify-between w-full mb-4">
        <div className="w-1/5 p-4 bg-antiFlashWhite rounded-xl">
          <div className="pb-2 font-semibold border-b border-slate-300">Filters</div>
          <div className="py-4 border-b border-slate-300">
            <p className="font-semibold">Order Status</p>
            <div className="mt-2">
              <label className="flex items-center"><input type="checkbox" id="shipped" className="mr-2"/>Shipped</label>
              <label className="flex items-center mt-2"><input type="checkbox" id="delivered" className="mr-2"/>Delivered</label>
              <label className="flex items-center mt-2"><input type="checkbox" id="cancelled" className="mr-2"/>Cancelled</label>
            </div>
          </div>
          <div className="py-4">
            <p className="font-semibold">Order Time</p>
            <div className="mt-2">
              <label className="flex items-center"><input type="checkbox" id="last30days" className="mr-2"/>Last 30 days</label>
              <label className="flex items-center mt-2"><input type="checkbox" id="last3months" className="mr-2"/>Last 3 months</label>
              <label className="flex items-center mt-2"><input type="checkbox" id="year2023" className="mr-2"/>2023</label>
              <label className="flex items-center mt-2"><input type="checkbox" id="year2022" className="mr-2"/>2022</label>
            </div>
          </div>
            
        </div>
        
        <div className="flex justify-end w-4/5 h-2">
          <Input type="search" placeholder="Enter the item you're searching for"/>
          <Button className="ml-2">Search</Button>
        </div>

        
      </div>
      
      {/** Order details */}
      <div className="justify-end flex-grow w-4/5 p-6 bg-white">
        <h2 className="pb-4 text-xl font-semibold border-b">My Orders</h2>
        <div className="flex items-center justify-between mt-6 bg-white ">
         
          <div className="flex items-center justify-center w-1/4 p-2 bg-white ">
            <div className="w-16 h-16 bg-gray-300"></div> {/* Placeholder for image */}
          </div>

          
          <div className="w-1/4 p-2 bg-white">
            <p className="text-lg font-medium">Headphones 121</p>
            <p className="text-sm text-gray-600">Color: Black</p>
            <p className="text-sm text-gray-600">Quantity: 1</p>
          </div>

          
          <div className="flex items-center justify-center w-1/4 p-2 bg-white">
            <p className="text-lg font-medium">£200</p>
            
          </div>

          
          <div className="w-1/4 p-2 bg-white">
            <p className="text-sm text-gray-500">Delivered on Mar 1, 2024.</p>
            <p className="text-xs text-gray-500">Your item has been delivered.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
