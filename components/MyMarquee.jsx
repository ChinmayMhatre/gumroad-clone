import React from "react";
import Marquee from "react-fast-marquee";

const MyMarquee = () => {
    return (
        <Marquee className=" bg-black text-white py-6 text-8xl" speed={20} gradient={false}>
                See what sticks . See what sticks . See what sticks . See what sticks . See what sticks . See what sticks .
        </Marquee>
    );
};

export default MyMarquee;
