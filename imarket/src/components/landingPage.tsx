"use client";
import { useEffect } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

export const LandingPage = () => {
  useEffect(() => {
    new SplitType("#text");

    setTimeout(() => {
      const charAnimation = document.querySelectorAll(".char");

      charAnimation.forEach((char) => {
        char.classList.add("translate-y-full");
      });

      gsap.to(".char", {
        y: 0,
        stagger: 0.05,
        delay: 0.02,
        duration: 0.5,
      });
    }, 50);
  }, []);

  return (
    <div className="flex flex-col gap-4 items-center justify-center h-[70vh] w-11/12 rounded-xl bg-[url('/blue_flow_bg.png')] bg-cover px-1 py-0.5 font-semibold z-0">
      <h1
        id="text"
        className="text-center text-6xl text-white font-bold z-10"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
      >
        Buy a company🪙
      </h1>
      <Button
        effect={"shine"}
        className="bg-[#2384d388] hover:bg-[#2384d3c7] hover:border border-neutral-100 flex items-center justify-center text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 z-10"
      >
        Sign up for free now
      </Button>
    </div>
  );
};
