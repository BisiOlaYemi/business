/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link className="" href="/">
      <div className="w-44 h-40 max-lg:w-32 max-lg:h-32 max-lgMobile:h-20 max-mobile:w-28 max-mobile:h-16">
        <Image
          src="/Images/Homepage/whiteLogo.svg"
          alt="Workflow"
          width={100}
          height={100}
          className="object-cover w-full "
        />
      </div>
    </Link>
  );
}
