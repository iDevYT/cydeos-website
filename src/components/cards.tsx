import React from 'react';
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'

interface CardProps {
    title: string;
    text: string;
}

function FeatureCard ({title, text}: CardProps) {
    return (
        <div className='flex flex-col justify-center items-center'>
        <h2>{title}</h2>
        <p>{text}</p>
        </div>
    )
}

export { FeatureCard }