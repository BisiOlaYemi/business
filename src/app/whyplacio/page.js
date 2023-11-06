"use client";
/* eslint-disable react/no-unescaped-entities */
import SmallButton from "@/components/Buttons/smallButtons";
import Layout from "@/components/Layout/layout";
import Image from "next/image";
import Link from "next/link";

const Card = ({ imageUrl, title }) => {
  return (
    <div className="relative rounded-lg overflow-hidden w-full sm:w-1/2 mb-4 sm:mb-0">
      <div className="absolute inset-0  transition-opacity hover:opacity-100">
        <h1 className="text-white text-2xl font-bold p-4">{title}</h1>
      </div>
      <Image
        src={imageUrl}
        alt={title}
        width={800}
        height={800}
        className="object-cover rounded-lg"
      />
    </div>
  );
};

const Page = () => {
  const cards = [
    {
      imageUrl: "/Images/r3.jpg",
      title: "",
    },
    {
      imageUrl: "/Images/r2.jpg",
      title: "",
    },
    {
      imageUrl: "/Images/r1.jpg",
      title: "",
    },
    {
      imageUrl: "/Images/r4.jpg",
      title: "",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto flex flex-wrap mt-52">
        <div className="w-full sm:w-2/4 flex justify-start">
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            {cards.map((card) => (
              <Card
                key={card.title}
                imageUrl={card.imageUrl}
                title={card.title}
              />
            ))}
          </div>
        </div>
        <div className="w-full sm:w-1/4 text-center mt-4 sm:mt-0">
          <h5 className="text-5xl font-bold text-white mb-4">
            {" "}
            People can get their next big idea from Placio.
          </h5>
          <div className="text-white font-bold text-xl mb-8">
            Anyone can get their next big idea from Placio. It serves as a
            one-stop shop for fresh ideas, goods, and opportunities.
          </div>
          <SmallButton
            className=""
            name={"Click here"}
            bgColor={"primary"}
            borderColor={"white"}
            textColor={"white"}
            action={() => router.push("/auth/signup")}
          />
        </div>
        <div className=" flex flex-col items-center justify-center h-screen text-center ">
          <h3 className="pt-16 sm:pt-36 font-bold text-white text-5xl mb-4">
            Placio is the app for inspiration
          </h3>
          <div className="text-white text-center font-bold text-lg sm:text-2xl  mt-4 mb-4">
            It helps people to find useful, relevant events and places—and then
            bring them to life. Sometimes <br></br>people struggle to find the
            right words to express what they're looking for. But, they&apos;ll
            know it <br></br>when they see it. As consumers browse content
            (called &apos;Placio&apos;), they fine-tune their likes and choice
            of events <br></br> and locate the perfect area to cruise and enjoy.
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:flex-1">
            <div className="grid place-items-center w-64 h-full rounded-lg overflow-hidden">
              <Image
                src="/Images/r4.jpg"
                alt="Image card"
                width={300}
                height={300}
                layout="responsive"
              />
            </div>
          </div>
          <div className="md:flex-1 p-6">
            <h1 className="font-bold text-5xl text-white mb-8">
              Suitable audience.<br></br>
              Right location.<br></br>
              Ideal moment.
            </h1>
            <div className="mb-8 text-2xl text-white">
              On Placio, you'll find your most ardent and devoted fans.
              Everybody enjoys trying new things, therefore Placio is appealing
              to everyone. All of the Gen Z students, millennial guys, and
              travel-obsessed retirees are looking for motivational, practical
              advice.
            </div>
            <Link
              href={"/#"}
              className="bg-white text-primary text-2xl font-bold py-2 px-4 rounded-full"
            >
              See Users Stats
            </Link>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center h-screen text-center mt-44">
          <h3 className="pt-16 sm:pt-36 font-bold text-white text-5xl mb-4">
            How you fit in
          </h3>
          <div className="text-white text-center font-bold text-lg sm:text-xl  mt-4 mb-4">
            <div className="mb-8">
              People are eagerly interested in hearing from you since they are
              here to learn about fresh concepts and goods. It turns into
              significant outcomes and solid connections with your target
              market. Create a free business account to get started. You'll
              receive additional tools like analytics, advertisements, and
              unique Placio layouts, all of which are intended to help you
              achieve your objectives.
            </div>
            <Link
              href={"/#"}
              className="bg-white text-primary text-xl py-2 px-4 rounded-full mt-12"
            >
              Create Account
            </Link>
          </div>
        </div>
        <div className="container mx-auto py-12">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="font-bold text-white text-5xl mb-8">
              Brands and Creators see strong results
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto px-4 text-center">
              <div className="rounded-lg p-4 md:w-1/2">
                <Image
                  src="/Images/Homepage/ec5.jpg"
                  width={800}
                  height={800}
                  alt="journey"
                  className="rounded-lg mb-4 w-full"
                />
                <div className="text-white text-2xl mb-4">
                  Conversion rates increased by 222% when Placio users were
                  exposed to CPM and CPC advertisements, demonstrating the
                  platform's genuine worth for performing full-funnel
                  activities.
                </div>
                <Link
                  href={"/#"}
                  className="text-white text-xl hover:text-blue-700"
                >
                  Learn More
                </Link>
              </div>
              <div className="rounded-lg p-4 md:w-1/2 mt-8 md:mt-0">
                <Image
                  src="/Images/Homepage/ec9.jpg"
                  width={800}
                  height={800}
                  alt="Vases"
                  className="rounded-lg mb-4 w-full"
                />
                <div className="text-white text-2xl mb-4">
                  The fashion and travel expert was able to connect with a
                  highly engaged audience because to Placio, which helped her
                  gain 148% more followers in a single month.
                </div>
                <Link
                  href={"/#"}
                  className="text-white text-xl hover:text-blue-700"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
