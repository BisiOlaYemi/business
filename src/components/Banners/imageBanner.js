/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const ImageBanner = () => {
  return (
    <div className="h-auto w-full mt-24">
      <div className="relative">
        <Image
          src={"/Images/Homepage/banss.svg"}
          alt={"Section"}
          priority={true}
          quality={75}
          layout="fill"
          objectFit="cover"
          className="object-center object-cover"
        />
      </div>
    </div>
  );
};

export default ImageBanner;
