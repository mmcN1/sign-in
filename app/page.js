"use client";

import Image from "next/image";

import SignUp from "./images/illustration-sign-up-desktop.svg";
import { InputForm } from "./components/InputForm";
import { Basic } from "./components/Basic";
import { useState } from "react";


export default function Home() {
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState(null);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const validateRe =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleClick = () => {
    if (email.match(validateRe)) {
      setValidate(true);
    } else {
      setValidate(false);
    }
  };

  return (
    <main className="flex  min-h-screen text-xs justify-center items-center bg-slate-600 md:text-lg  ">
      <section className="flex flex-col-reverse items-center  w-11/12 min-h-full bg-gradient-to-t from-green-100 to-slate-100 rounded min-[800]:w-2/6 md:flex-row m-1">
        <section className="flex flex-col justify-center items-center text-center pb-2 w-full">
          <Basic />
          <section className="flex flex-col justify-center items-center  text-center">
            <InputForm validate={validate} email={email} handleClick={handleClick} handleChange={handleChange} validateRe={validateRe}  />
          </section>
        </section>
        <section className="m-4">
          <Image src={SignUp} className="h-52 w-full md:h-full" />
        </section>
      </section>
    </main>
  );
}
