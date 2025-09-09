"use client"
import React from "react";

interface RatingStarsProps {
    rating: number;
    max?: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating, max = 5 }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = max - fullStars - (halfStar ? 1 : 0);

    return (
        <div className="flex space-x-1 text-yellow-500">
            {Array(fullStars).fill(0).map((_, i) => <span key={`full-${i}`}>★</span>)}
            {halfStar && <span>☆</span>}
            {Array(emptyStars).fill(0).map((_, i) => <span key={`empty-${i}`}>☆</span>)}
        </div>
    );
};

export default RatingStars;
