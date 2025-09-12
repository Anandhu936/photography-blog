"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel";
import { ReviewItems } from "@/lib/constants";
import RatingStars from "./RatingStars";
import Image from "next/image";

export function ReviewSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="py-10"
        >
            <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-serif font-medium italic mb-6 lg:mb-10">
                What People Are Saying
            </h2>

            <div className="flex justify-center  mx-[5%] lg:mx-0 py-2 px-0">
                <Carousel className="w-full max-w-[270px] sm:max-[350px] md:max-w-[600px] lg:max-w-[800px]">
                    <CarouselContent>
                        {ReviewItems.map((item, index) => (
                            <CarouselItem key={index}>
                                {/* Animate each card individually */}
                                <motion.div
                                    initial={{ opacity: 0, y: 1 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="p-2"
                                >
                                    <Card className="h-full bg-white dark:bg-gray-900 shadow-md">
                                        <CardContent className="flex flex-col items-center text-foreground text-center p-2 gap-2 lg:p-4 lg:gap-4">
                                            <div className=" w-20 md:w-40 h-20 md:h-40 relative rounded-full overflow-hidden">
                                                <Image
                                                    src={item.img}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <h3 className="text-[12px] lg:text-lg font-bold">
                                                {item.title}
                                            </h3>
                                            <p className="text-[10px] lg:text-sm">{item.content}</p>
                                            <div className="">
                                                <RatingStars rating={4.5} />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </motion.div>
    );
}
