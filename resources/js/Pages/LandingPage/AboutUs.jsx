import React from "react";
// import Button from "../components/Button";
// import { shoe8 } from "../assets/images";

function AboutUs() {
    return (
        <section id="about-us" className="bg-slate-100 ">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex justify-between items-center max-lg:flex-col gap-10 w-full">
                <div className="flex flex-1 flex-col gap-6 lg:gap-8">
                    <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
                        Kami Adalah Yang Terbaik
                    </h2>
                    <p className="mt-4 lg:max-w-lg info-text">
                        Ensuring premium comfort and style, our meticulously
                        crafted footwear is designed to elevate your experience,
                        providing you with unmatched quality, innovation, and a
                        touch of elegance. Ensuring premium comfort and style,
                        our meticulously crafted footwear is designed to elevate
                        your experience, providing you with unmatched quality,
                        innovation, and a touch of elegance. Ensuring premium
                        comfort and style, our meticulously crafted footwear is
                        designed to elevate your experience, providing you with
                        unmatched quality, innovation, and a touch of elegance.
                    </p>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <img
                        width={570}
                        height={522}
                        className="object-contain"
                        src="/src/mark.svg"
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
