import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: 1,
    question: "How can I donate through PhilanthroLink?",
    answer:
      "To donate through PhilanthroLink, simply browse the list of verified charitable projects on our platform, select a project that resonates with you, and click on the 'Donate Now' button. Follow the prompts to make your contribution securely.",
  },
  {
    id: 2,
    question: "Are the charitable projects on PhilanthroLink verified?",
    answer:
      "Yes, all projects seeking donations on PhilanthroLink undergo thorough verification to ensure legitimacy and transparency. We take great care to ensure that your donations are supporting credible and impactful causes.",
  },
  {
    id: 3,
    question: "Can I create a fundraising campaign on PhilanthroLink?",
    answer:
      "At the moment, PhilanthroLink focuses on featuring verified charitable projects rather than hosting individual fundraising campaigns. However, if you represent a charitable organization, you can contact us to discuss potential collaboration opportunities.",
  },
  {
    id: 4,
    question: "How can I get in touch with PhilanthroLink?",
    answer:
      "If you have any questions, feedback, or concerns, you can contact our support team via email at support@philanthrolink.com. We're here to assist you and ensure that your philanthropic journey with us is a positive one.",
  },
  {
    id: 5,
    question: "Can I volunteer with PhilanthroLink?",
    answer:
      "PhilanthroLink does not currently offer volunteer opportunities directly through our platform. However, many of the charitable projects featured on our platform may be seeking volunteers. You can explore individual project pages for more information.",
  },
];

function AboutSection() {
  return (
    <div className="p-6 bg-gray-100">
      <div className="mt-4 mx-auto max-w-[970px]">
        <p className="text-sm text-gray-500 mb-4 mt-10">
          MODERN CROWDFUNDING PLATFORM
        </p>
        <h2 className="text-3xl font-bold font-dm-sans mb-10">
          <span className="text-black">Distribute aid</span>
          <span className="text-primary"> easily, quickly,</span>
          <br />
          <span className="text-primary"> and transparently.</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center">
          <img
            src="/phone.png"
            alt="Phone"
            className="w-screen-phone mb-4 md:mr-4 md:mb-0 pr-6 hidden md:block"
          />
          <div className="md:ml-4">
            <p className="text-gray-600 mb-4 md:text-left">
              PhilanthroLink is a crowdfunding platform dedicated to connecting
              donors with causes they care about. It provides a seamless way for
              individuals and organizations to donate to verified charitable
              projects while fostering a sense of community and collaboration in
              the realm of philanthropy.
            </p>
            <h3 className="text-2xl font-bold mt-8 mb-4 text-center md:text-left pb-6">
              Frequently asked questions
            </h3>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-primary">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-4 mt-16">HUMANITARIAN MISSION</p>
        <h2 className="text-3xl font-bold font-dm-sans mb-10 md:text-left">
          <span className="text-black">Help the affected by</span>
          <br />
          <span className="text-primary"> disaster, shortage,</span>
          <br />
          <span className="text-primary"> and emergency relief.</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:mr-4 md:mb-0">
            <p className="text-gray-600 mb-4 md:text-left">
              <span className="text-primary">22,690 </span>
              Donations have been verified and still active.
            </p>
            <p className="text-gray-600 mb-4 md:text-left">
              <span className="text-primary">6,450 </span>
              Donations have been distributed to disaster-affected areas.
            </p>
            <p className="text-gray-600 mb-4 md:text-left">
              <span className="text-primary">1.4 Billion </span>
              total funds raised so far.
            </p>
            <p className="text-gray-600 mb-4 md:text-left">
              <span className="text-primary">10,517 </span>
              donations have been distributed to the needy.
            </p>
            <p className="text-gray-600 mb-4 md:text-left">
              <span className="text-primary">5,058 </span>
              donations were distributed to social foundations and orphanages.
            </p>
            <p className="text-gray-600 mb-4 md:text-left">
              <span className="text-primary">4,803 </span>
              donations have been distributed to people in emergency situations.
            </p>
          </div>
          <img
            src="/about-circle.png"
            alt="About Circle"
            className="w-[314px] h-[331px] mt-10 md:mt-0 md:ml-auto"
          />
        </div>
        <div className="hidden md:block shadow-md rounded-2xl mb-4 mt-20">
          <img
            src="/contact-banner.png"
            alt="Contact Banner"
            className="w-full h-[220px]"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
