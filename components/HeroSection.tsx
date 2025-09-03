
"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
    return (
        <div id='home' className="min-h-[70vh] md:min-h-[75vh] lg:min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className=' grid lg:grid-cols-2 gap-12 items-center'>



                    {/* Left side - Image */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='text-center x2l:text-left'
                    >
                        <h1 className='text-4xl md:text-6xl lg:text-7xl font-serif font bold text-foreground leading-tight mb-6'>Framing Life <span className='text-primary italic'> Through Lenses</span></h1>
                        <p className=' text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl'>
                            A visual journey through portraits, landscapes, and street photography —
                            celebrating the stories that images tell without words.
                        </p>
                        <motion.div initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: .8, delay: .2 }}>
                            <a href="#contact">
                                <Button size="lg" className="group">
                                    Contact me
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Text */}

                    <motion.div initial={{ opacity: 0, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .8, delay: .4 }}>
                        <div className='relative'>
                            <div className=' w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl absolute -top-10 -right-10 hidden lg:block'>
                            </div>
                            <div className="flex justify-center xl:justify-start">
                                <div className="relative w-60 md:w-110 h-60 md:h-96 ">
                                    <Image
                                        src="/my-pic.jpg"
                                        alt="Profile"
                                        fill
                                        className="object-cover rounded-2xl shadow-2xl  lg:rotate-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    );
}

export default HeroSection;