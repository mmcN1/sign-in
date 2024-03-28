import React from "react";
import Image from "next/image";

import SuccessIco from "../images/icon-success.svg";

export const Basic = () => {
  return (
    <>
      <h1 className="text-4xl p-5">Stay updated!</h1>

      <p className="font-serif p-5">
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ol className="flex flex-col justify-around text-left pt-7">
        <li className="flex font-mono ">
          <Image src={SuccessIco} width={15} height={15} className="mr-3" />{" "}
          Product discovery and building what matters{" "}
        </li>
        <li className="flex font-mono pt-7">
          <Image src={SuccessIco} width={15} height={15} className="mr-3" />{" "}
          Measuring to ensure updates are a success
        </li>
        <li className="flex font-mono pt-7">
          {" "}
          <Image src={SuccessIco} width={15} height={15} className="mr-3" />
          And much more!
        </li>
      </ol>
    </>
  );
};
