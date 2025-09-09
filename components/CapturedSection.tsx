"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "@/components/lightbox";
import { motion } from "framer-motion"
const categories: Record<string, string[]> = {
    Potraits: [
        "/photos/ammu13.jpg",
        "/photos/arya6.jpg",
        "/photos/ammu15.jpg",
        "/photos/arya7.jpg",
        "/photos/ammu14.jpg",
        "/photos/arya8.jpg",
        "/photos/ammu9.jpg",
        "/photos/arya5.jpg",
        "/photos/ammu11.jpg",
        "/photos/arya4.jpg",
        "/photos/ammu10.jpg",
        "/photos/family1.jpg",
        "/photos/ammu12.jpg",
        "/photos/ammu8.jpg",
        "/photos/ammu7.jpg",
        "/photos/ammu.jpg",
        "/photos/ammu3.jpg",
        "/photos/ammu4.jpg",
        "/photos/arya.jpg",
        "/photos/ammu5.jpg",
        "/photos/family.jpg",
        "/photos/akhil.jpg",
        "/photos/akash.jpg",
        "/photos/amith.jpg",
        "/photos/prashanth.jpg",

    ],
    Landscape: [
        "/photos/nature.jpg",
        "/photos/sky.jpg",
    ],
    Macro: [
        "/photos/flower.jpg",
        "/photos/pumpkin.jpg",
        "/photos/urumabazham.jpg",

    ],
    Pets: [
        "/photos/cat2.jpg",
        "/photos/nani1.jpg",
        "/photos/dog1.jpg",
        "/photos/cat.jpg",
        "/photos/nani2.jpg",
    ],

};

export default function HeroSection() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleImageClick = (category: string, index: number) => {
        setSelectedCategory(category);
        setCurrentIndex(index);
    };

    const handleClose = () => {
        setSelectedCategory(null);
        setCurrentIndex(0);
    };

    const handleNext = () => {
        if (selectedCategory) {
            const images = categories[selectedCategory];
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }
    };

    const handlePrev = () => {
        if (selectedCategory) {
            const images = categories[selectedCategory];
            setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        }
    };

    return (
        <div className="py-5 px-4 lg:py-14 lg:px-10" id="captured-moments">
            <div className=" rounded-xl">
                <motion.div initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}>
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-serif font-bold italic text-foreground  text-center mb-5 lg:mb-10">
                        Captured Moments
                    </h1>
                    <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-5">
                        Exploring light, shadow, and emotion — a collection of photographs that preserve fleeting moments forever.
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: false, amount: 0.3 }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 p-6  justify-items-center">
                    {Object.entries(categories).map(([title, images]) => (
                        <div key={title} className="group">
                            <Image
                                src={images[0]}
                                alt={title}
                                width={500}
                                height={300}
                                className="border-2 border-black cursor-pointer rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg group-hover:brightness-90"
                                onClick={() => handleImageClick(title, 0)}
                            />
                            <h2 className="text-md lg:text-xl font-semibold font-serif flex justify-center items-center cursor-pointer mt-2 mb-4 group-hover:text-foreground">
                                {title}
                            </h2>
                        </div>
                    ))}
                </motion.div>

                {selectedCategory && (
                    <Lightbox
                        src={categories[selectedCategory][currentIndex]}
                        alt={selectedCategory}
                        onClose={handleClose}
                        onNext={handleNext}
                        onPrev={handlePrev}
                    />
                )}
            </div>
        </div>
    );
}
