"use client"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const MusicSchoolTestimonials = [
    {
      quote: "As a violinist, finding the right mentor can be challenging but this school matched me with a teacher who truly understands my goals and challenges ",
      name: 'Emaily Taylor',
      title: 'Violin Student'
    },
    {
      quote: "I never thought I could sing, but the vocal coaches here are so encouraging and patient. They helped me unlock my voice and gain real confidence!",
      name: 'David Lee',
      title: 'Adult Vocal Student'
    },
    {
      quote: "My son has been taking drum lessons here for 2 years and his progress is amazing! The teachers are passionate and make learning fun, which keeps him motivated.",
      name: 'Sarah Rodriguez',
      title: 'Parent of a Student'
    },
    {
      quote: "This music school offers a fantastic variety of classes. I started with guitar lessons and now I'm learning music theory too. It's a great way to develop my musical skills holistically.",
      name: 'Michael Brown',
      title: 'Multi-Instrumentalist Student'
    },
    {
      quote: "The performance opportunities provided by the school are invaluable. It's a great way to gain experience and share my music with others. ",
      name: 'Lily Chen',
      title: 'Young Musician'
    }
  ];
  
  // You can access and use the testimonials here!
  

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2]  relative flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of Success</h2>
        <div className="flex justify-center w-full  overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
        items={MusicSchoolTestimonials}
        direction="right"
        speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default TestimonialCards