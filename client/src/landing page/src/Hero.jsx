import React from "react";
import Typewriter from "typewriter-effect";
import GetStarted from "../../components/GetStarted";
import brunnetgirl from '../../assets/images/brunnetgirl.png' ; 
import bus from '../../assets/elements/bus.png' ; 
import clock from '../../assets/elements/clock.png' ; 
import graduation from '../../assets/elements/graduation.png' ; 
import london from "../../assets/elements/london.png";
import telephone from "../../assets/elements/telephone.png"; 


const Hero = () => {
  return (
    <div className="">
      <div className="mx-auto flex max-w-[1280px] items-center">
        <section className="flex basis-[70%] flex-col gap-4">
          <h1>Elites School E-learning platform</h1>
          <h2 className="relative mb-[2rem] flex">
            <span className="  ">
              “To have another <span className="text-accent">language</span> is{" "}
              <br /> to possess a
            </span>
            <span className="absolute bottom-0  left-[11.5ch] text-accent">
              <Typewriter
                options={{
                  strings: [
                    "second soul”",
                    "unique identity”",
                    "fresh spirit”",
                    "diverse mindset”",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h2>
          <p className="max-w-[70%]">
            Lorem ipsum dolor sit amet consectetur. In duis habitant ac nisi. Id
            odio nec vivamus id gravida. A nisl elit lorem posuere venenatis
            auctor(description 3la platform)
          </p>
          <div className="h-[54px]">
            <GetStarted text={"Start Learning"} />
          </div>
        </section>
        <section className="basis-[30%]">
          <div className="yellow-gradient relative z-0  h-[489.9px] w-[349.93px]">
            <img src={clock} className="absolute -bottom-[20px] z-10 -left-[30px]" />
            <img src={brunnetgirl} className="absolute min-w-[120%] bottom-0 right-[5%] z-5" />
            <img src={bus} className="absolute -bottom-8 -z-10 -right-8"  />
            <img src={graduation} className="absolute -top-2 left-[28%]" />
            <img src={telephone} className="absolute -top-5 -left-[60px] -z-10" />
            <img src={london} className="absolute -z-10 -top-0 -right-3" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
