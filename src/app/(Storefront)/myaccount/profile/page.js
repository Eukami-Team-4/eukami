import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";

const ProfilePage = () => {
    return (
        <div className="flex flex-col">
            <h1 className="flex items-center justify-center w-full h-20 mt-20 mb-5 text-4xl font-bold uppercase">
            PROFILE
            </h1>
            
            <div className ="flex items-center justify-center mb-10">
                <div className="rounded-full w-28 h-28 w bg-slate-300">
                </div>
            </div>

            <div className ="relative flex items-center justify-center w-2/5 mx-auto mb-10">
                <Input className=" h-10 block w-full rounded-none py-1.5 pr-10 bg-white border-white text-xs"
                type="text" id="name" name="name" placeholder="Name"></Input><Pencil size={16} className="absolute pointer-events-none right-4"/>
            </div>

            <div className ="flex items-center justify-center mb-10">
                <input className="w-2/5 h-10 text-xs bo"
                type="text" id="name" name="name" placeholder="       Email"></input>
            </div>


            <div className ="flex items-center justify-center mb-10">
                <input className="w-2/5 h-10 text-xs text-gray-500"
                type="text" id="name" name="name" placeholder="       Phone Number"></input>
            </div>

            <div className ="flex items-center justify-center mb-10">
                <button>Save</button>
            </div>
            

            
        </div>
    );
}

export default ProfilePage;