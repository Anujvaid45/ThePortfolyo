import React, { useState, useEffect } from 'react';

const Testimonial = ({ testimonials }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
        }, 5000); // Change the duration (in milliseconds) as needed

        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section className="py-12 px-4 sm:px-8 bg-gradient-to-r from-black to-gray-600 pt-16">
            <div className="container mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white">Client Testimonials</h2>
                <div className="flex items-center justify-center">
                    <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
                        <div className="text-center">
                            <img
                                src={testimonials[currentSlide]?.image.url}
                                alt={testimonials[currentSlide]?.name}
                                className="mx-auto h-32 w-32 sm:h-48 sm:w-48 rounded-full object-cover mb-4"
                            />
                            <p className="text-lg sm:text-xl font-bold mb-2">{testimonials[currentSlide]?.name}</p>
                            <p className="text-gray-700 mb-4">{testimonials[currentSlide]?.position}</p>
                            <p className="text-lg sm:text-xl">{testimonials[currentSlide]?.review}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
