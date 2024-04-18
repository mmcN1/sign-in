"use client";

import Link from "next/link";
export const InputForm = ({
  validate,
  email,
  validateRe,
  handleClick,
  handleChange,
}) => {
  return (
    <>
      <div className="flex justify-between w-full">
        <h1>Email Address</h1>
        {validate === false ? <p className="text-red-500 font-light text-xs">This email is invalid!</p> : null}
      </div>

      <input
        className={
          validate === false
            ? "rounded-md w-full p-1 m-4 shadow  border border-red-500 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
            : "rounded-md w-full p-1 m-4 shadow  border border-gray-400 text-gray-700 leading-tight focus:outline-blue-500 focus:shadow-outline"
        }
        value={email}
        onChange={handleChange}
      />
      <button
        className="p-2 bg-emerald-600 rounded-md hover:scale-90 ease-linear duration-300"
        type="email"
        required
      >
        <Link
          href={{
            pathname: email.match(validateRe) ? "/confirm" : "/",
            query: { email: email },
          }}
          onClick={handleClick}
        >
          Submit
        </Link>
      </button>
    </>
  );
};
