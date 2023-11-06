/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

const AdConsultation = () => {
  return (
    <div className="bg-slate-900 flex flex-col md:flex-row items-center justify-center">
      <div className="md:flex-1 p-6">
        <h1 className="font-bold text-5xl text-white mb-8">
          Get a free ads consultation to help you grow your business.
        </h1>
        <div className="mb-8 text-2xl text-white ">
          You might be eligible for free, individualized campaign support if
          you're new to Placio Advertising. Get our top recommendations for
          expanding your business, including advice on campaigns, customized
          creative tactics, and more.
        </div>
        <Link
          href={"/#"}
          className="bg-primary text-white font-bold py-2 px-4 rounded-full"
        >
          Apply now
        </Link>
      </div>
      <div className="md:flex-1 w-full h-full">
        <Image
          src={"/Images/Homepage/ed15.jpg"}
          alt={"Image card"}
          width={600}
          height={400}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default AdConsultation;
