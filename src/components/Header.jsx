import React from 'react';

const Header = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-white shadow-md">
            <input type="text" placeholder="Search for a course" className="border rounded p-2 w-1/2" />
            <div className="flex items-center">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center">A</div>
            </div>
        </div>
    );
}

export default Header;
