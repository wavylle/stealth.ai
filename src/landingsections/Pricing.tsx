import { twMerge } from "tailwind-merge";
import CheckIcon from "../assets/check.svg";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "AI-driven call handling",
      "Lead generation",
      "Basic customer support",
      "Appointment scheduling",
      "Data collection"
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "All Basic Plan features",
      "Advanced customer support",
      "Sales automation",
      "Call analytics and reporting",
      "Customizable call scripts",
      "Integration with CRM tools",
      "Priority customer service"
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "All Pro Plan features", "Unlimited call minutes", "Multi-language support", "Dedicated account manager", "Custom API access", "Advanced data security", "Detailed performance insights", "Personalized training sessions", "White-labeling options", "24/7 technical support"
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24" id="pricing">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description mt-5">
            Free forever. Update for unlimited tasks, better security, and exclusive features.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(({ title, monthlyPrice, buttonText, popular, inverse, features }, index) => (
          <div key={index} className={twMerge("p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full", inverse === true && 'border-black bg-black text-white')}>
            <div className="flex justify-between">
              <h3 className={twMerge("text-lg font-bold text-black/50", inverse === true && 'text-white/60')}>{title}</h3>
              {popular === true && (
              <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                <span className="gradient-background text-transparent bg-clip-text font-medium">Popular</span>
              </div>
              )}
            </div>
            <div className="flex items-baseline gap-1 mt-[30px]">
              <span className="text-4xl font-bold tracking-tighter leading-none">${monthlyPrice}</span>
              <span className="tracking-tight font-bold text-black/50">/month</span>
            </div>
            <a href={title === "Free" ? "/auth/sign-in" : "/auth/sign-up"} className={twMerge("bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight w-full mt-[30px]", inverse === true && 'bg-white text-black')}>{buttonText}</a>
            <ul className="flex flex-col gap-5 mt-8">
              {features.map((feature, featureIndex) => (
                <li key={featureIndex} className="text-sm flex items-center gap-4">
                  <CheckIcon className="h-6 w-6" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};
