"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: 'Discover the sound with us: A personal journey in Music Mastery',
      description:
        "Embark on your musical journey that's uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery."
    },
    {
      title: 'Unleash Your Inner Musician: It\'s never too late to begin',
      description:
        "Have you always dreamed of making music? It's never too late to turn that dream into reality! Our beginner-friendly classes provide a supportive and encouraging environment where you can learn the fundamentals at your own pace. Rediscover the joy of music and express yourself in a whole new way."
    },
    {
      title: 'Find Your Band: The Power of Ensemble Playing',
      description:
        "Experience the magic of music creation together. Join our ensemble programs and connect with fellow musicians of all skill levels. Learn from experienced instructors, collaborate on exciting repertoire, and discover the thrill of performing as part of a group."
    },
    {
      title: 'More Than Just Notes: Explore the Theory Behind the Music',
      description:
        "Dive deeper into the world of music with our comprehensive music theory courses. Gain a deeper understanding of harmony, rhythm, and melody. Learn how to analyze your favorite pieces and unlock your full potential as a musician."
    },
    {
      title: 'Take Center Stage: Performance Opportunities for All',
      description:
        "Sharpen your skills and gain valuable performance experience. Our music school offers a variety of opportunities for students to showcase their talents, from student recitals to masterclasses and community events. Build confidence, connect with audiences, and share your passion for music with the world."
    }
  ];
  
function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs