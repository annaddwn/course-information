import React from 'react';

const Sidebar = () => {
    return (
        <div className="bg-gray-100 w-1/5 h-screen p-4">
            <div className="text-xl font-bold mb-4">Course Information</div>
            <div className="mb-8">
                <button className="block w-full text-left text-gray-700 mb-2">Dashboard</button>
                
            </div>
            <div>
                <p className="text-gray-700 font-bold">Categories</p>
                <div className="flex flex-wrap mt-2">
                    <span className="px-2 py-1 m-1 rounded-full">Accounting</span>
                    <span className="px-2 py-1 m-1 rounded-full">Computer Science</span>
                    <span className="px-2 py-1 m-1 rounded-full">Engineering</span>
                    <span className="px-2 py-1 m-1 rounded-full">Filming</span>
                    <span className="px-2 py-1 m-1 rounded-full">Fitness</span>
                    <span className="px-2 py-1 m-1 rounded-full">Music</span>
                    <span className="px-2 py-1 m-1 rounded-full">Photography</span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
