import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

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
            <a
              href="#"
              className="text-black underline block md:text-left pb-6"
            >
              Read more
            </a>
            <h3 className="text-2xl font-bold mt-8 mb-4 text-center md:text-left pb-6">
              Frequently asked questions
            </h3>

            <div className="bg-white shadow-md rounded-lg mb-4 p-4">
              <Collapsible>
                <CollapsibleTrigger className="font-semibold text-primary cursor-pointer my-2">
                  Lorem ipsum sit dolor?
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <span className="text-primary">
                    Answer to question 1 goes here.
                  </span>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <div className="bg-white shadow-md rounded-lg mb-4 p-4">
              <Collapsible>
                <CollapsibleTrigger className="font-semibold text-primary cursor-pointer my-2">
                  Lorem ipsum sit dolor?
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <span className="text-primary">
                    Answer to question 2 goes here.
                  </span>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <div className="bg-white shadow-md rounded-lg mb-8 p-4">
              <Collapsible>
                <CollapsibleTrigger className="font-semibold text-primary cursor-pointer my-2">
                  Lorem ipsum sit dolor?
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <span className="text-primary">
                    Answer to question 3 goes here.
                  </span>
                </CollapsibleContent>
              </Collapsible>
            </div>
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
