import {Button} from "@/components/ui/button.jsx"
const ManageAddressesPage = () => {
    return (
        <main>
            <div className="flex items-center justify-between w-auto h-40 text-4xl font-medium uppercase w w-">
                <h1 className=" ml-36">Manage Addresses</h1>
                <Button className=" mr-36">Add Address +</Button>
            </div>

            <div id = "Address-container" className="w-auto h-auto px-6 py-8 mb-10 bg-gray-50 rounded-xl ml-36 mr-36">
                <div className="px-5 py-6 font-medium bg-antiFlashWhite">
                    <p className="">John Doe</p>
                    <p className="">XXXx</p>
                    <p className="">XXXXXX</p>
                    <p className="">XXXx</p>
                </div>
                
            </div>

        </main>
    );
}

export default ManageAddressesPage;