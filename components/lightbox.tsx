"use client";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
    src: string;
    alt: string;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export default function Lightbox({
    src,
    alt,
    onClose,
    onNext,
    onPrev,
}: LightboxProps) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 overflow-hidden">
            {/* Close Button */}
            <button
                className="absolute top-5 right-5 text-white text-3xl cursor-pointer z-50"
                onClick={onClose}
            >
                <X size={32} />
            </button>

            {/* Prev Button */}
            <button
                className="absolute left-5 text-white cursor-pointer z-50"
                onClick={onPrev}
            >
                <ChevronLeft size={40} />
            </button>

            {/* Image Container with animation */}
            <div className="flex items-center justify-center max-w-[90vw] max-h-[90vh] overflow-hidden rounded-xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={src} // important: key must change so animation triggers
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center"
                    >
                        <Image
                            src={src}
                            alt={alt}
                            width={800}
                            height={600}
                            className="object-contain rounded-lg"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Next Button */}
            <button
                className="absolute right-5 text-white cursor-pointer z-50"
                onClick={onNext}
            >
                <ChevronRight size={40} />
            </button>
        </div>
    );
}
