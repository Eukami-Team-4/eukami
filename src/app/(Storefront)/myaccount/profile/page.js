const ProfilePage = () => {
    return (
        <div>
            <h1 className="flex items-center justify-center w-full h-20 mt-20 mb-5 text-4xl font-bold uppercase">
            PROFILE
            </h1>
            
            <div className ="flex items-center justify-center mb-10">
                <div className="rounded-full w-28 h-28 w bg-slate-300">
                </div>
            </div>

            <div className ="flex items-center justify-center mb-10">
                <input className="w-2/5 h-10 pl-10 text-xs bg-[#F8F9FA]"
                type="text" id="name" name="name" placeholder="Name"></input>
            </div>

            <div className ="flex items-center justify-center mb-10">
                <input className="w-2/5 h-10 pl-10 text-xs"
                type="text" id="name" name="name" placeholder="Email"></input>
            </div>


            <div className ="flex items-center justify-center mb-10">
                <input className="w-2/5 h-10 pl-10 text-xs text-gray-500"
                type="text" id="name" name="name" placeholder="Phone Number"></input>
            </div>

            <div className ="flex items-center justify-center mb-10">
                <button className="px-4 py-2 text-[#F8F9FA] bg-[#0C233B] rounded-sm hover:text-[#FF9900]">Save</button>
            </div>
            
        </div>
    );
}

export default ProfilePage;