"use client"
import * as React from "react";
import Image from "next/image";
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

export function ReviewSection() {
    return (
        <div>
            <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-serif font-medium italic mb-6 lg:mb-10">What People Are Saying</h2>
            <div className="flex justify-center mx-[5%] lg:mx-0 p-2 ">

                <Carousel className="w-full max-w-[300px] md:max-w-[600px] lg:max-w-[800px]">
                    <CarouselContent>
                        {ReviewItems.map((item, index) => (
                            <CarouselItem key={index}>
                                <div className="p-2">
                                    <Card className="h-full  bg-white dark:bg-gray-900">
                                        <CardContent className=" flex flex-col items-center text-foreground text-center p-4 gap-4">
                                            <div className="w-50 h-50 relative rounded-full overflow-hidden">
                                                <Image
                                                    src={item.img}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <h3 className=" text-[14px] lg:text-lg font-bold">
                                                {item.title}
                                            </h3>
                                            <p className="text-[12px] lg:text-sm ">
                                                {item.content}
                                            </p>
                                            <div>
                                                <RatingStars rating={4.5} />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
}
