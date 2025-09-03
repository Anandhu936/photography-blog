"use client"
import { navItems } from "@/lib/constants";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Camera } from "lucide-react";
import MobileNavigation from "./MobileNavigation";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
            <div className="max-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* {logo} */}
                    <div className="flex items-center justify-center">
                        <h1 className="text-sm lg:text-xl font-serif italic font-bold text-foreground">
                            <span className="md:hidden">Anandhu</span>
                            <span className="hidden md:inline">Anandhu Unnimadhavan</span>
                        </h1>
                        <Camera className="w-6 h-6 ml-2" />
                    </div>

                    {/* {desktop navigation} */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link key={item.name} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200">{item.name}</Link>
                        ))}
                        <ThemeToggle />
                    </div>
                    <MobileNavigation />

                </div>
            </div>
        </nav>
    );
}