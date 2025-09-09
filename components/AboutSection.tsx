"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section id='about' className="relative  bg-background text-foreground py-4 lg:py-16 px-6 md:px-12 lg:px-24 ">
            <motion.div initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .6 }}>
                <h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-serif font-medium italic mb-4 lg:mb-20">About Me</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">

                {/* Profile Image */}
                <motion.div className="flex justify-center order-2 lg:order-1"

                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}>
                    <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-lg overflow-hidden  border-[#2a1ada] shadow-[0_0_20px_#2a1ada]">
                        <Image
                            src="/my-pic.jpg"
                            alt="Photographer Profile"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                </motion.div>

                {/* About Content */}
                <motion.div initial={{ opacity: 0, scale: .8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: .8, delay: .4 }} className="order-1 lg:order-2">

                    <p className="text-center md:text-left text-lg leading-relaxed mb-6 text-muted-foreground">
                        Hi, I’m <span className="font-semibold text-foreground">Anandhu</span>,
                        a passionate photographer based in Kerala. I love capturing real, raw, and
                        timeless moments through my lens. My work focuses on portraits,
                        landscapes, and lifestyle photography, bringing emotions into every frame.
                    </p>
                    <p className="text-center md:text-left text-lg leading-relaxed text-muted-foreground">
                        With my camera, I don’t just take pictures—I tell stories.
                        Let’s create something beautiful together.
                    </p>


                </motion.div>
            </div>
        </section>
    );
}
