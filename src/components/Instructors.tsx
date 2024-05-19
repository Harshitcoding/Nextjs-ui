"use client"
import React from 'react'
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const instructor = [
    {
        id: 1,
        name: "Harshit",
        designation: "vocal coach",
        image : "https://images.unsplash.com/photo-1665779912168-c6d48ec98dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29uJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 2,
        name: "anurag",
        designation: "violen coach",
        image : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbiUyMGltYWdlfGVufDB8fDB8fHww"
    },
    {
        id: 3 ,
        name: "harkirat",
        designation: "guitar coach",
        image : "https://images.unsplash.com/photo-1521038199265-bc482db0f923?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbiUyMGltYWdlfGVufDB8fDB8fHww"
    }
]


function Instructors() {
    return (
        <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
            <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>
                <h2 className='text-2xl md:text-4xl lg:text-7xl  text-white font-bold text-center mb-8'>
                    Meet Our Instructors
                </h2>
                <p className='text-base md:text-lg text-white text-center mb-4 '>
                    Discover the talented proffesionals who will guide your musical journey
                </p>
                <div className='flex flex-row items-center justify-center mb-10 w-full'>
                    <AnimatedTooltip items={instructor}/>
                </div>
            </WavyBackground>
        </div>

    )
}

export default Instructors