import React, { useState } from 'react'
import Heading from '../../../ui/Typography/Heading/Heading'
import Paragraph from '../../../ui/Typography/Paragraph/Paragraph'
import { StaticMinusIcon, StaticPlusIcon } from '../../../ui/Icons/StaticIcons';

const faqData = [
  {
    question: "Can you trust Fluffy Paws Pet Sitters?",
    answer: `At Fluffy Paws, we understand how hard it can be to entrust your pet’s care to someone else. After all, they’re not just pets – they’re part of your family. That’s why we take Pet Sitting very seriously, ensuring every sitter is passionate about animals.`,
  },
  {
    question: "How are Fluffy Paws Pet Sitters vetted?",
    answer: `Every Fluffy Paws Pet Sitter undergoes a strict vetting process before joining our platform. We carefully review applications, conduct interviews, and verify experience. Only 1 out of 4 applicants are approved to ensure top-quality care.`,
  },
  {
    question: "What is Fluffy Paws Accident Cover?",
    answer: `Each booking on Fluffy Paws is covered by our Accident Protection Plan. This means that, in the unlikely event of an emergency, you can rely on our coverage to ensure your pet’s safety and well-being.`,
  },
  {
    question: "When do Pet Sitters get paid?",
    answer: `Fluffy Paws Pet Sitters receive their payment only after you confirm the service is complete and your pet is happy and safe. This ensures trust and transparency throughout the process.`,
  },
  {
    question: "Do Fluffy Paws Sitters provide daily updates?",
    answer: `Yes! Most of our sitters provide regular updates, photos, and even short videos to keep you informed and reassured while you’re away from your furry friend.`,
  },
  {
    question: "Can I meet a Pet Sitter before booking?",
    answer: `Absolutely! With Fluffy Paws, you can arrange a free meet-and-greet session to get to know the sitter before confirming your booking.`,
  },
  {
    question: "What services do Fluffy Paws offer?",
    answer: `Fluffy Paws offers pet sitting, dog walking, grooming, and overnight care. We also provide customizable care plans based on your pet's needs.`,
  },
  {
    question: "Is Fluffy Paws available in my city?",
    answer: `Fluffy Paws is expanding rapidly! Check our website by entering your location to see if we currently have sitters in your area.`,
  },
];

export default function Faqs() {
  const [openIndexes, setOpenIndexes] = useState([]); 

  const toggleFaq = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) 
        : [...prev, index] 
    );
  };

  return (
    <div className="flex flex-col items-center px-6">
      <Heading className="text-4xl mb-8 text-center text-[#414141]">FAQS</Heading>

      <div className="w-full max-w-2xl space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="pb-4">
            <button
              onClick={() => toggleFaq(index)}
              className="group flex items-center justify-between w-full text-primary-color cursor-pointer"
            >
              <span className="text-2xl text-left basis-3/4 transition-colors duration-300 group-hover:text-pink-600">
                {faq.question}
              </span>
              <div className="basis-1/4 flex justify-end">
                <div className="bg-[oklch(0.94_0.02_347.16)] rounded-full p-1 transition-colors duration-300 group-hover:bg-pink-200">
                  {openIndexes.includes(index) ? <StaticMinusIcon /> : <StaticPlusIcon />}
                </div>
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndexes.includes(index) ? 'max-h-screen mt-4' : 'max-h-0'
              }`}
            >
              <Paragraph className="text-gray-700 mt-2">
                {faq.answer}
              </Paragraph>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

