

const MyOrdersInDetail = () => {
    return (

        <div className="flex mt-10">
          <div className="w-1/5 grid-cols-3 mt-10 mb-1 mr-5 overflow-hidden h-96 ml-14 basis-1/5 bg-antiFlashWhite pb rounded-xl">
            <div className="w-auto h-8 pl-2 font-semibold border-b border-slate-300"> Filters
            </div>
            <div className="w-auto h-40 pl-2 border-b border-slate-300">
                <p className="font-semibold">Order Status</p>
                <p className ="mt-4 ml-2 cursor-pointer hover:underline">Shipped</p>
                <p className ="mt-4 ml-2 cursor-pointer hover:underline">Delivered</p>
                <p className ="mt-4 ml-2 cursor-pointer hover:underline">Cancelled</p>
            </div>
            <div className="pl-2">
            <p className="font-semibold">Order Time</p>
                <p className ="mt-4 ml-2 cursor-pointer hover:underline">Last 30 days</p>
                <p className ="mt-4 ml-2 cursor-pointer hover:underline">Last 3 months</p>
                <p className ="mt-4 ml-2 cursor-pointer hover:underline">2023</p>
                <p className ="mt-4 ml-2 cursor-pointer hover:underline">2022</p>
            </div>
          </div>
            

            <div className="mt-5 basis-4/5">
                <div className="ml-8 uppercase text-onyx"> <span className="font-semibold">Order ID:</span> 123456789
                </div>
                
                <div className="grid w-auto h-64 grid-cols-3 mb-1 ml-5 mr-10 overflow-hidden bg-antiFlashWhite pb rounded-xl">
                    
                    <div className="w-auto p-5 border-r border-gray-300">
                        <p className="font-semibold ">Delivery Address</p>
                        <br></br>
                        <p className="font-semibold ">John Doe</p>
                        <p className="">XXXXX</p>
                        <p className="">XXXXXX</p>
                        <p className="">XXXXXX</p>
                        <br></br>
                        <p className="font-semibold ">Mobile Number:</p>
                        <p className="">+44 7945723121</p> 
                    </div>
                    <div className="w-auto p-5">
                        <p className="font-semibold uppercase">price details</p>
                        <br></br>
                        <br></br>
                        <p>£1200</p>
                        <br></br>
                        <br></br>
                        <p className="font-semibold uppercase">payment methods</p>
                        <br></br>
                        <p className="uppercase">credit card</p>
                    </div>
                    <div className="w-auto p-5 border-l border-gray-300">
                        <p className="font-semibold uppercase">reviews</p>
                        <p>* * * * *</p>
                    </div>
                </div>

                <div className="w-auto h-[800px] mt-5 mb-10 bg-antiFlashWhite pb rounded-xl ml-5 mr-10 overflow-hidden">
                    <div className="flex items-center justify-center text-black uppercase bg-gray-300 rw-full h-[480px] h center"> Image 
                    </div>
                    <div>
                        <p className="flex items-center justify-center text-3xl font-bold text-onyx">Product name</p>
                        <div className="flex justify-center gap-3 text-gray-500">
                            <p>Colour: black</p>
                            <p>Quantity: 1</p>
                        </div>
                    </div>
                    <div className="w-full h-full bg-gray-400 mt-9">
                        
                    </div>
                </div>

            </div>

        </div>
        
    );
};
    
export default MyOrdersInDetail;