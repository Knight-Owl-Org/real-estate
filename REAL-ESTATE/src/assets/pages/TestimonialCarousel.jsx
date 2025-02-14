import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    { id: 1, text: "Now you can get all your medical records to your mobile device. Saving the cost of twice the transport. And life made easier with a click of a button.", name: "Lydia Smith" },
    { id: 2, text: "A seamless experience! Everything is accessible instantly, no more waiting in long queues. Highly recommended!", name: "John Doe" },
    { id: 3, text: "Excellent service and user-friendly design. It has changed the way I manage my medical records.", name: "Emma Brown" },
    { id: 4, text: "Super easy to use and navigate! It has truly made my healthcare management easier.", name: "Michael Lee" },
];

// Clone first and last items to make looping seamless
const extendedTestimonials = [
    testimonials[testimonials.length - 1], // Clone last item to the start
    ...testimonials,
    testimonials[0], // Clone first item to the end
];

const TestimonialCarousel = () => {
    const [index, setIndex] = useState(1); // Start from the first real testimonial

    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 5000); // Auto-scroll every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const nextTestimonial = () => {
        setIndex((prevIndex) => prevIndex + 1);
    };

    const prevTestimonial = () => {
        setIndex((prevIndex) => prevIndex - 1);
    };

    // Handle infinite looping
    useEffect(() => {
        if (index === extendedTestimonials.length - 1) {
            setTimeout(() => setIndex(1), 500); // Jump to first real item
        } else if (index === 0) {
            setTimeout(() => setIndex(extendedTestimonials.length - 2), 500); // Jump to last real item
        }
    }, [index]);

    return (
        <div className="w-full flex flex-col items-center px-4 py-10 overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
                What our customers have to say
            </h2>

            <div className="relative w-full max-w-6xl overflow-hidden">
                <motion.div
                    className="flex gap-4"
                    animate={{ x: `-${index * 25}%` }}
                    transition={{ type: "tween", duration: 0.8 }}
                >
                    {extendedTestimonials.map((testimonial, i) => (
                        <div
                            key={i}
                            className="w-1/3 min-w-[30%] bg-gray-100 p-6 rounded-lg shadow-lg"
                        >
                            <p className="text-gray-700">{testimonial.text}</p>
                            <div className="mt-4 text-yellow-500 flex justify-center">★★★★★</div>
                            <p className="mt-2 font-semibold">{testimonial.name}</p>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex mt-6 space-x-4">
                <button
                    className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
                    onClick={prevTestimonial}
                >
                    ←
                </button>
                <button
                    className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
                    onClick={nextTestimonial}
                >
                    →
                </button>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
