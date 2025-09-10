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

export default function CategoryCarousels() {
    return (
        <div>

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

            <div className="flex flex-col items-center space-y-12">
                {Object.entries(categories).map(([category, images]) => (
                    <div key={category} className="w-full max-w-[270px] sm:max-w-[350px] md:max-w-[600px] lg:max-w-[800px]">
                        {/* Section Heading */}
                        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-6">
                            {category}
                        </h2>

                        {/* Carousel */}
                        <Carousel className="w-full ">
                            <CarouselContent>
                                {images.map((src, index) => (
                                    <CarouselItem key={index} className="basis-full ">
                                        <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
                                            <Image
                                                src={src}
                                                alt={`${category}-${index}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                ))}
            </div>
        </div>
    )
}
