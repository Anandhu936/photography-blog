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

const portraits: string[] = [
    "/photos/ammu9.jpg",
    "/photos/arya5.jpg",
    "/photos/ammu11.jpg",
    "/photos/arya4.jpg",
    "/photos/ammu10.jpg",
    "/photos/family1.jpg",
    "/photos/ammu12.jpg",
    "/photos/arya3.jpg",
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
]

const CapturedSection = () => {
    return (
        <div className="" id="captured-moments">
            <motion.div initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .6 }}>
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-serif font-bold italic text-foreground  text-center mb-10">
                    Captured Moments
                </h1>
                <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-5">
                    Exploring light, shadow, and emotion — a collection of photographs that preserve fleeting moments forever.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="w-full max-w-6xl mx-auto py-10">
                <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-center font-serif mb-4">Portraits</h2>
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-[315px] sm:max-w-[400px] md:max-w-[700px] lg:max-w-[1000px]">
                        <Carousel>
                            <CarouselContent>
                                {portraits.map((src, index) => (
                                    <CarouselItem key={index} className="basis-full">
                                        <div className="flex justify-center p-2 sm:p-4">
                                            <div className="overflow-hidden rounded-2xl shadow-xl w-full">
                                                <Image
                                                    src={src}
                                                    alt={`Portrait ${index + 1}`}
                                                    width={1200}
                                                    height={600}
                                                    className="object-cover w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[700px] rounded-2xl"
                                                />
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>



            </motion.div>
        </div>
    )
}

export default CapturedSection
