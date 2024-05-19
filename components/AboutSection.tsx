import React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

function AboutSection() {
  return (
    <div className="p-6 bg-gray-100">
      <div className="mt-16 ml-auto mr-auto max-w-[970px]">
        <p className="text-sm text-gray-500 mb-4">MODERN CROWDFUNDING PLATFORM</p>
        <h2 className="text-3xl font-bold font-dm-sans mb-10">
          <span className="text-black">Distribute aid</span>
          <span className="text-primary"> easily</span>
          <span className="text-black">,</span>
          <span className="text-primary"> quickly</span>
          <span className="text-black">, and</span>
          <br />
          <span className="text-primary"> transparently</span>
          <span className="text-black">.</span>
        </h2>

        <div className="flex items-center">
          <img src="/phone.png" alt="Phone" className="w-screen-phone mr-4" />
          <div className="ml-36">
            <p className="text-gray-600 mb-4">
              PhilanthroLink is a crowdfunding platform dedicated to connecting donors with causes they care about. It provides a seamless way for individuals and organizations to donate to verified charitable projects while fostering a sense of community and collaboration in the realm of philanthropy.
            </p>
            <a href="#" className="text-black underline">Read more</a>
            <h3 className="text-2xl font-bold mt-16 mb-8">Frequently asked questions</h3>

            {/* Collapsible 1 */}
            <div className="bg-white shadow-md rounded-lg mb-4 p-4">
              <Collapsible>
                <CollapsibleTrigger className="font-semibold text-primary cursor-pointer my-2">
                  Lorem ipsum sit dolor?
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <span className="text-primary">Answer to question 1 goes here.</span>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Collapsible 2 */}
            <div className="bg-white shadow-md rounded-lg mb-4 p-4">
              <Collapsible>
                <CollapsibleTrigger className="font-semibold text-primary cursor-pointer my-2">
                  Lorem ipsum sit dolor?
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <span className="text-primary">Answer to question 2 goes here.</span>
                </CollapsibleContent>
              </Collapsible>
            </div>

            {/* Collapsible 3 */}
            <div className="bg-white shadow-md rounded-lg mb-4 p-4">
              <Collapsible>
                <CollapsibleTrigger className="font-semibold text-primary cursor-pointer my-2">
                  Lorem ipsum sit dolor?
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <span className="text-primary">Answer to question 3 goes here.</span>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default AboutSection;
