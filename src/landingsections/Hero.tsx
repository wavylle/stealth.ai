import ArrowIcon from "../assets/arrow-right.svg";
import cogImage from "../assets/cog.png";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
        <div className="md:w-[478px]">
          <div className="tag">
            Version 2.0 is here
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Pathway to seamless customer support
          </h1>
          <p className="text-xl text-[#010D3E] tracking-tight mt-6">Thousands of simultaneous outbound and inbound calls, driven by AI call agents, aimed at accelerating lead
          generation, customer retention, customer support, and various other functions.</p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight">Get for free</button>
            <button className="text-black bg-transparent px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight gap-1"><span>Learn more</span><ArrowIcon className="h-5 w-5" /></button>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
          <Image src={cogImage} alt="cog" className="md:absolute md:h-full md:w-auto md:max-w-none md:-left06" />
        </div>
        </div>
      </div>
    </section>
  );
};
