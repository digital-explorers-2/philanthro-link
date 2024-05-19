export default function AboutPage() {
  return (
    <div className="md:grid grid-cols-2 mx-auto md:h-screen">
      <div className="flex flex-col justify-start items-start p-8">
        <h1 className="font-bold text-6xl mb-10">About</h1>
        <p className="mb-10 font-normal md:text-lg leading-7">
          PhilanthroLink is a crowdfunding platform dedicated to connecting donors with causes they care about. <br/>
          It provides a seamless way for individuals and organizations to donate to verified charitable projects while fostering a sense of community and collaboration in the realm of philanthropy.
        </p>
      </div>
      <div className="md:flex md:justify-center items-center max-sm:p-4">
        <img className="max-w-md md:h-2/3 max-sm:max-h-81 rounded-md" src="/About.jpeg" alt="About us"/>
      </div>
    </div>
  );
}
