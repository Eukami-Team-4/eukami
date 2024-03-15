import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";

const ProfilePage = () => {
    return (
        <div className="flex flex-col">
            <h1 className="flex items-center justify-center w-full h-20 mt-20 mb-5 text-4xl font-bold uppercase">
            PROFILE 
            </h1>
            
            <div className ="flex items-center justify-center mb-10">
                <div className="flex items-end justify-end rounded-full w-28 h-28 w bg-slate-300"><Pencil size={16} className="pointer-events-none"/>
                </div>
            </div>

            <div className ="relative flex items-center justify-center w-2/5 mx-auto mb-10">
                <Input className="block w-full h-10 py-1.5 pr-10 text-xs bg-white border-white rounded-none "
                type="text" id="name" name="name" placeholder="Name"></Input><Pencil size={16} className="absolute pointer-events-none right-4"/>
            </div>

            <div className ="relative flex items-center justify-center w-2/5 mx-auto mb-10">
                <Input className="block w-full h-10 py-1.5 pr-10 text-xs bg-white border-white rounded-none "
                type="text" id="email" name="email" placeholder="Email"></Input><Pencil size={16} className="absolute pointer-events-none right-4"/>
            </div>

            <div className ="relative flex items-center justify-center w-2/5 mx-auto mb-10">
                <Input className="block w-full h-10 py-1.5 pr-10 text-xs bg-white border-white rounded-none "
                type="text" id="phoneNumber" name="phoneNumber" placeholder="Phone Number"></Input><Pencil size={16} className="absolute pointer-events-none right-4"/>
            </div>


            <div className ="flex items-center justify-center mb-10">
                <button className="px-4 py-2 text-[#F8F9FA] bg-[#0C233B] rounded-sm hover:text-[#FF9900]">Save</button>
            </div>
            
        </div>
    );
}

export default ProfilePage;