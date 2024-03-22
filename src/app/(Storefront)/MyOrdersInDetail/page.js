

const MyOrdersInDetail = () => {
    return (

        <div>

            <div className="grid w-auto h-64 grid-cols-3 mt-10 mb-1 overflow-hidden bg-antiFlashWhite pb rounded-xl ml-36 mr-36">
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

            <div className="w-auto h-[800px] mt-3 mb-10 bg-antiFlashWhite pb rounded-xl ml-36 mr-36 overflow-hidden">
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
        
    );
};
    
export default MyOrdersInDetail;