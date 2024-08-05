import ArrowIcon from "../assets/arrow-right.svg";
import starImage from "../assets/star.png";
import springImage from "../assets/spring.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading relative">
        <h2 className="section-title">Sign up for free today</h2>
        <p className="section-description mt-5">Discover the benefits of AI-driven calls and enhance your business operations.</p>
        <Image src={starImage} alt="star" width={360} className="absolute -left-[350px] -top-[137px]"/> 
        <Image src={springImage} alt="spring" width={360} className="absolute -right-[331px] -top-[19px]"/>
        </div>
        <div className="flex gap-2 mt-10 justify-center">
        <a href="/auth/sign-up" className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight">
              Get for free
            </a>
            <a href="mailto:abhirath.dubey@outlook.com" className="text-black bg-transparent px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight gap-1">
            <span>Learn more</span><ArrowIcon className="h-5 w-5" />
            </a>
        </div>

      </div>
    </section>
  )
};
