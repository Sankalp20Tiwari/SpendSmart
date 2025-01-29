"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { useEffect, useRef } from "react"

const HeroSection = () => {
   const imageRef =useRef()

   useEffect(() => {
    const imageElement = imageRef.current

    const handleScroll = () => {
        const scrollPosition = window.scrollY
        const scrollThreshold = 100

        if (scrollPosition > scrollThreshold) {
            imageElement.classList.add("scrolled")
        }else{
            imageElement.classList.remove("scrolled")
        }
    }

    window.addEventListener("scroll", handleScroll)

    return ()=>window.removeEventListener("scroll", handleScroll)
   }, [])
  return (
    <div className="pb-20 px-4 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">Manage your finances<br /> with Intelligence</h1>
        <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
            {" "}
            An AI-powered financial management app that helps you make smarter<br /> financial decisions.
        </p>
        <div className="flex justify-center gap-4">
            <Link href={"/dashboard"}>
              <Button size="lg" className="px-8">
                Get Started
              </Button>
            </Link>
            <Link href={"#"}>
              <Button variant="outline" size="lg" className="px-8 text-black">
                Learn More
              </Button>
            </Link>
        </div>
        <div className="hero-image-wrapper">
            <div ref={imageRef} className="hero-image">
                <Image 
                  src={"/banner.jpeg"} 
                  width={1280} 
                  height={720} 
                  alt="banner"
                  priority
                  className="rounded-lg shadow-2xl  mx-auto"
                  />
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
