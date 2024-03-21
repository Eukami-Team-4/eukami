import {Button} from "@/components/ui/button.jsx"
const ManageAddressesPage = () => {
    return (
        <main>
            <div className="flex items-center justify-between w-auto h-40 text-4xl font-medium uppercase">
                <h1 className=" ml-36">Manage Addresses</h1>
                <Button className=" mr-36">Add Address +</Button>
            </div>

            <div className="w-auto h-auto px-6 py-8 mb-10 bg-gray-50 rounded-xl ml-36 mr-36 ">
                <div id = "Address-container" className="mb-5 ">
                <div className="px-5 py-6 font-medium bg-antiFlashWhite min-w-60">
                    <p className="">John Doe</p>
                    <p className="">XXXx</p>
                    <p className="uppercase">xxxxx</p>
                    <p className="">XXXx</p>
                    <br></br>
                    <p className="uppercase ">mobile: xxxxx</p>  
                </div>
                <div className="grid grid-cols-2 min-h-9 bg-antiFlashWhite min-w-60">
                        <button className="border border-solid border-onyx hover:shadow-md">Edit</button>
                        <button className="border border-solid border-onyx hover:shadow-md">Delete</button>

                    </div>
                </div>

                <div id = "Address-container" className="mb-5 ">
                <div className="px-5 py-6 font-medium bg-antiFlashWhite min-w-60">
                    <p className="">John Doe</p>
                    <p className="">XXXx</p>
                    <p className="uppercase">xxxxx</p>
                    <p className="">XXXx</p>
                    <br></br>
                    <p className="uppercase ">mobile: xxxxx</p>  
                </div>
                <div className="grid grid-cols-2 min-h-9 bg-antiFlashWhite min-w-60">
                        <button className="border border-solid border-onyx hover:shadow-md">Edit</button>
                        <button className="border border-solid border-onyx hover:shadow-md">Delete</button>

                    </div>
                </div>
            </div>

        </main>
    );
}

export default ManageAddressesPage;