import FooterSecondary from "@/components/FooterSecondary";

export default function AboutPage() {
  return (
    <div className="md:mx-20 md:h-screen my-20">
      <div className="flex flex-col justify-start items-start p-8">
        <h1 className="font-bold text-6xl mb-10">About</h1>
        <h3 className="font-normal text-2xl mb-10 text-slate-400">Our Story</h3>
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          <div className="w-full md:w-1/2">
            <p className="mb-10 leading-7 justify-par">
              Welcome to PhilanthroLink, where generosity meets purpose. We are
              a dynamic crowdfunding platform dedicated to bridging the gap
              between passionate donors and the causes they care about the most.
              Our mission is to make philanthropy accessible, transparent, and
              impactful for everyone involved.
            </p>
            <p className="mb-10 leading-7 justify-par">
              At PhilanthroLink, we believe in the power of community and
              collaboration. Our platform offers a seamless and secure way for
              individuals and organizations to support verified charitable
              projects that make a real difference. Whether you're a seasoned
              philanthropist or just starting your journey in giving back,
              PhilanthroLink provides you with the tools and confidence to
              contribute meaningfully to the world around you.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex items-start justify-center">
            <img className="size-15" src="/about.jpeg" alt="About us" />
          </div>
        </div>
      </div>
      <FooterSecondary />
    </div>
  );
}
