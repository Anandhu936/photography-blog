"use client"

import * as React from "react"
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { motion } from "framer-motion"

const categories: Record<string, string[]> = {
    Portraits: [
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
        "/photos/toby1.jpg",
        "/photos/cat.jpg",
        "/photos/nani2.jpg",
        "/photos/toby2.jpg",
    ],
}

// Framer Motion Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
}

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

export default function CategoryCarousels() {
    return (
        <div className="px-4 md:px-8 lg:px-16">
            {/* Page Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12"
            >
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-serif font-bold italic text-foreground text-center mb-5 lg:mb-10">
                    Captured Moments
                </h1>
                <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
                    Exploring light, shadow, and emotion — a collection of photographs that preserve fleeting moments forever.
                </p>
            </motion.div>

            {/* Categories */}
            <motion.div
                className="flex flex-col items-center space-y-15 lg:space-y-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {Object.entries(categories).map(([category, images]) => (
                    <motion.div
                        key={category}
                        className="w-full max-w-[270px] sm:max-w-[350px] md:max-w-[600px] lg:max-w-[800px]"
                        variants={sectionVariants}
                    >
                        {/* Section Heading */}
                        <motion.h2
                            className="text-center text-2xl md:text-3xl font-semibold mb-6"
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {category}
                        </motion.h2>

                        {/* Carousel */}
                        <Carousel className="w-full">
                            <CarouselContent>
                                {images.map((src, index) => (
                                    <CarouselItem key={index} className="basis-full">
                                        <motion.div
                                            className="relative w-full h-[500px] rounded-xl overflow-hidden"
                                            variants={imageVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.3 }}
                                        >
                                            <Image
                                                src={src}
                                                alt={`${category}-${index}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
