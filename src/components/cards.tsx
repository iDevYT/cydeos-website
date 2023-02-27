import React from 'react';
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'

interface CardProps {
    title: string;
    text: string;
}

function FeatureCard ({title, text}: CardProps) {
    return (
        <>
        <h2>{title}</h2>
        <p>{text}</p>
        </>
    )
}

export { FeatureCard }