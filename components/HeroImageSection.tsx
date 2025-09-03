"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroImageSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1], // smooth cubic bezier
            }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative min-h-[30vh] md:min-h-[70vh]-h 2xl:min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Full background image */}
            <Image
                src="/photos/hero-img.jpg" // put your image path here
                alt="Hero Background"
                fill
                priority
                className="object-cover object-center"
            />


        </motion.div>
    );
};

export default HeroImageSection;
