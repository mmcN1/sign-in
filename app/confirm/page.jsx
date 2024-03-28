"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import SuccessIco from "../images/icon-success.svg";
import Image from "next/image";
import Link from "next/link";

const Confirm = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <main className="flex  min-h-screen text-xs justify-center items-center bg-slate-600 md:text-lg ">
      <section className="flex flex-col justify-evenly w-full md:justify-around  md:w-1/2 h-screen md:h-2/3 bg-gradient-to-t from-green-100 to-slate-100 p-5">
        
        <div className="m-5">
        <Image src={SuccessIco} />
          <h1 className="text-3xl font-bold font-sans m-12">
            Thanks for subscribing!
          </h1>
          <p className="tracking-normal">
            A confirmation email has been sent to <strong>{email}</strong>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>
        <Link href="/" className="flex justify-center p-5 m-auto w-2/3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded hover:scale-95 ease-linear duration-300">Dismiss Message</Link>
      </section>
    </main>
  );
};

export default Confirm;
