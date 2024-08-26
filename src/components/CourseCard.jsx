import React from 'react';

const CourseCard = ({ title, category, chapters, completion, price, image }) => {
    return (
        <div className="bg-white p-4 rounded shadow-md">
            <img src={image} alt={title} className="w-full h-32 object-cover rounded mb-4" />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-600">{category}</p>
            <div className="text-sm text-gray-600">{chapters} Chapters</div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${completion}%` }}></div>
            </div>
            {price && <div className="text-lg font-bold mt-4">${price}</div>}
        </div>
    );
}

export default CourseCard;
