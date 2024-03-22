

const MyOrdersInDetail = () => {
    return (

        <div>

            <div className="grid w-auto h-64 grid-cols-3 mt-10 mb-10 overflow-hidden bg-antiFlashWhite pb rounded-xl ml-36 mr-36">
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
                <div className="w-auto">
                    <p></p>
                </div>
                <div className="w-auto border-l border-gray-300"></div>
            </div>

        </div>
        
    );
};
    
export default MyOrdersInDetail;