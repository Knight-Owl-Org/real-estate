import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
    { id: 1, text: "Now you can get all your medical records to your mobile device. Saving the cost of twice the transport. And life made easier with a click of a button.", name: "Lydia Smith" },
    { id: 2, text: "A seamless experience! Everything is accessible instantly, no more waiting in long queues. Highly recommended!", name: "John Doe" },
    { id: 3, text: "Excellent service and user-friendly design. It has changed the way I manage my medical records.", name: "Emma Brown" },
    { id: 4, text: "Super easy to use and navigate! It has truly made my healthcare management easier.", name: "Michael Lee" },
];

const extendedTestimonials = [
    testimonials[testimonials.length - 1],
    ...testimonials,
    testimonials[0],
];

const TestimonialCarousel = () => {
    const [index, setIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextTestimonial = () => {
        setIndex((prevIndex) => prevIndex + 1);
    };

    const prevTestimonial = () => {
        setIndex((prevIndex) => prevIndex - 1);
    };

    useEffect(() => {
        if (index === extendedTestimonials.length - 1) {
            setTimeout(() => setIndex(1), 500);
        } else if (index === 0) {
            setTimeout(() => setIndex(extendedTestimonials.length - 2), 500);
        }
    }, [index]);

    return (
        <div className="w-full flex flex-col px-6 md:px-20 py-10 overflow-hidden mb-20 items-center justify-center min-h-screen">
            <h2 className="text-xl md:text-3xl font-semibold mb-6 px-6 md:px-10 text-left self-start text-black">
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
                            className="w-full md:w-1/3 min-w-[90%] md:min-w-[30%] bg-gray-100 p-6 rounded-xl shadow-lg flex flex-col h-[220px] md:h-[250px]"
                        >
                            <div className="flex-grow overflow-hidden">
                                <p className="text-gray-700 line-clamp-4">{testimonial.text}</p>
                            </div>
                            <div className="mt-4 text-yellow-500 flex">★★★★★</div>
                            <p className="mt-2 font-semibold text-black">{testimonial.name}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className="flex justify-center mt-6 space-x-4 w-full">
                <button
                    className="p-1.5 bg-transparent border-2 text-black border-gray-300 rounded-full hover:bg-gray-400 transition"
                    onClick={prevTestimonial}
                >
                    ←
                </button>
                <button
                    className="p-1.5 bg-transparent border-2 text-black border-gray-300 rounded-full hover:bg-gray-400 transition"
                    onClick={nextTestimonial}
                >
                    →
                </button>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
