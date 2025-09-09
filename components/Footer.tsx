"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background/80 backdrop-blur-md border-t border-border/50 py-8 mt-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Navigation */}
                <nav className="flex space-x-6 text-sm font-medium">
                    <Link href="#home" className="hover:text-primary transition">Home</Link>
                    <Link href="#about" className="hover:text-primary transition">About</Link>
                    <Link href="#captured-moments" className="hover:text-primary transition">Captured Moments</Link>
                    <Link href="#contact" className="hover:text-primary transition">Contact</Link>
                </nav>

                {/* Social Media */}
                <div className="flex space-x-4">
                    <Link href="https://www.facebook.com/anandhu.unnimadhavan" target="_blank">
                        <Facebook className="w-5 h-5 hover:text-primary transition" />
                    </Link>
                    <Link href="https://www.instagram.com/anandhuunnimadhavan?igsh=MWpwcmZzMngxaGZndg%3D%3D" target="_blank">
                        <Instagram className="w-5 h-5 hover:text-primary transition" />
                    </Link>
                    <Link href="https://x.com/Anandhu936" target="_blank">
                        <Twitter className="w-5 h-5 hover:text-primary transition" />
                    </Link>
                    <Link href="https://github.com/Anandhu936" target="_blank">
                        <Github className="w-5 h-5 hover:text-primary transition" />
                    </Link>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-6 text-center text-xs text-muted-foreground">
                © {new Date().getFullYear()} Anandhu Unnimadhavan. All rights reserved.
            </div>
        </footer>
    );
}
