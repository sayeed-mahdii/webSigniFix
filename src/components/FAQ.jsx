import React, { useState } from "react";
import styles from "../style";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    id: "faq-1",
    question: "What services does WebSignifix provide?",
    answer:
      "We build modern websites, mobile apps, custom software, and AI-powered automation systems. We also provide UI/UX design, maintenance, and integrations such as online payments and third-party APIs."
  },
  {
    id: "faq-2",
    question: "How long does it take to complete a project?",
    answer:
      "A standard website takes 1–3 weeks, while full apps or software solutions take 3–10 weeks depending on complexity."
  },
  {
    id: "faq-3",
    question: "Do you provide post-launch support or maintenance?",
    answer:
      "Yes. We offer free maintenance for the initial period and optional long-term support plans including updates, backups, and improvements."
  },
  {
    id: "faq-4",
    question: "Can you integrate payment gateways or AI tools?",
    answer:
      "Absolutely. We integrate SSLCommerz, Stripe, PayPal, Nagad, and AI tools including chatbots and automation systems."
  },
  {
    id: "faq-5",
    question: "How much does a project cost?",
    answer:
      "Pricing depends on requirements. We offer startup-friendly packages and custom quotations for advanced systems."
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className={`${styles.paddingY} flex flex-col relative`}>
      {/* Title */}
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h2 className={styles.heading2}>Frequently Asked Questions</h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} max-w-[500px] mt-4`}>
          Find answers to the most common questions regarding development,
          pricing, timeline, and support.
        </p>
        </div>
      </div>

      {/* FAQ List */}
      <div className="flex flex-col space-y-4 relative z-[1]">
        {faqs.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className="p-6 rounded-[20px] bg-black-gradient-2 border border-gray-700 transition-all"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full flex justify-between items-center text-left"
              >
                <h4 className="font-poppins font-semibold text-white text-[20px]">
                  {item.question}
                </h4>

                <FaChevronDown
                  className={`text-white text-[18px] transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer Area (Collapsible) */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-[300px] mt-3" : "max-h-0"
                }`}
              >
                <p className="font-poppins text-dimWhite text-[16px] leading-[24px]">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Gradient */}
      <div className="absolute z-[0] w-[50%] h-[50%] -right-[40%] rounded-full blue__gradient bottom-20" />
    </section>
  );
};

export default FAQ;
