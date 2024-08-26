import React from 'react';
import CourseCard from './CourseCard';

const MainContent = () => {
    const courses = [
        { title: "Cinematic Techniques", category: "Filming", chapters: 4, completion: 100, image: "image_url", price: null },
        { title: "Introduction to Filming", category: "Filming", chapters: 2, completion: 50, image: "image_url", price: null },
        { title: "Structural Design Principles", category: "Engineering", chapters: 10, completion: 30, image: "image_url", price: null },
        // Tambahkan course lainnya sesuai dengan data dari gambar
    ];

    return (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => (
                <CourseCard key={index} {...course} />
            ))}
        </div>
    );
}

export default MainContent;
