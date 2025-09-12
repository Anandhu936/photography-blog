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

const landscapes: string[] = [
    "/photos/nature.jpg",
    "/photos/sky.jpg",
]

const LandscapeSection = () => {
    return (
        <div className="">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="w-full max-w-6xl mx-auto py-10">
                <h2 className="text-lg md:text-2xl  lg:text-4xl font-medium text-center font-montserrat mb-4">Landscape</h2>
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-[315px] sm:max-w-[400px] md:max-w-[700px] lg:max-w-[1000px]">
                        <Carousel>
                            <CarouselContent>
                                {landscapes.map((src, index) => (
                                    <CarouselItem key={index} className="basis-full">
                                        <div className="flex justify-center p-2 sm:p-4">
                                            <div className="overflow-hidden rounded-2xl shadow-xl w-full">
                                                <Image
                                                    src={src}
                                                    alt={`Pets ${index + 1}`}
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

export default LandscapeSection
