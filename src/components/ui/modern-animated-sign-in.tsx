"use client";

import React, { memo, forwardRef } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

// Simplified, non-animated versions of the UI components to avoid heavy motion deps

const Input = memo(
  forwardRef(function Input(
    { className, type, ...props }: React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) {
    return (
      <div className="group/input rounded-lg p-[2px] transition duration-300">
        <input
          type={type}
          className={cn(
            `shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600`,
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  })
);

Input.displayName = "Input";

const BoxReveal = memo(function BoxReveal({ children, className }: any) {
  return (
    <section className={className}>
      {children}
    </section>
  );
});

const Ripple = memo(function Ripple({ className }: any) {
  return <div className={className} />;
});

const OrbitingCircles = memo(function OrbitingCircles({ children, className }: any) {
  return <div className={className}>{children}</div>;
});

const TechOrbitDisplay = memo(function TechOrbitDisplay({ iconsArray, text = "Animated Login" }: any) {
  return (
    <section className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        {text}
      </span>
      <div className="mt-4">{iconsArray?.map((i: any, idx: number) => <div key={idx}>{i.component()}</div>)}</div>
    </section>
  );
});

const AnimatedForm = memo(function AnimatedForm({ header, subHeader, fields, submitButton, textVariantButton, errorField, fieldPerRow = 1, onSubmit, googleLogin, goTo }: any) {
  return (
    <section className="max-md:w-full flex flex-col gap-4 w-96 mx-auto">
      <BoxReveal>
        <h2 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">{header}</h2>
      </BoxReveal>

      {subHeader && (
        <BoxReveal className="pb-2">
          <p className="text-neutral-600 text-sm max-w-sm dark:text-neutral-300">{subHeader}</p>
        </BoxReveal>
      )}

      {googleLogin && (
        <>
          <BoxReveal>
            <button className="g-button group/btn bg-transparent w-full rounded-md border h-10 font-medium outline-hidden hover:cursor-pointer" type="button" onClick={() => console.log("Google login clicked")}>
              <span className="flex items-center justify-center w-full h-full gap-3">
                <Image src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" width={26} height={26} alt="Google Icon" />
                {googleLogin}
              </span>
            </button>
          </BoxReveal>

          <BoxReveal className="w-full">
            <section className="flex items-center gap-4">
              <hr className="flex-1 border-1 border-dashed border-neutral-300 dark:border-neutral-700" />
              <p className="text-neutral-700 text-sm dark:text-neutral-300">or</p>
              <hr className="flex-1 border-1 border-dashed border-neutral-300 dark:border-neutral-700" />
            </section>
          </BoxReveal>
        </>
      )}

      <form onSubmit={onSubmit as any}>
        <section className={`grid grid-cols-1 md:grid-cols-${fieldPerRow} mb-4`}>
          {fields?.map((field: any) => (
            <section key={field.label} className="flex flex-col gap-2">
              <BoxReveal>
                <Label htmlFor={field.label}>{field.label} <span className="text-red-500">*</span></Label>
              </BoxReveal>

              <BoxReveal className="flex flex-col space-y-2 w-full">
                <section className="relative">
                  <Input type={field.type} id={field.label} placeholder={field.placeholder} onChange={field.onChange} />
                </section>
              </BoxReveal>
            </section>
          ))}
        </section>

        <BoxReveal>
          {errorField && <p className="text-red-500 text-sm mb-4">{errorField}</p>}
        </BoxReveal>

        <BoxReveal>
          <button className="bg-gradient-to-br relative group/btn from-zinc-200 dark:from-zinc-900 dark:to-zinc-900 to-zinc-200 block dark:bg-zinc-800 w-full text-black dark:text-white rounded-md h-10 font-medium outline-hidden hover:cursor-pointer" type="submit">
            {submitButton} &rarr;
          </button>
        </BoxReveal>

        {textVariantButton && goTo && (
          <BoxReveal>
            <section className="mt-4 text-center hover:cursor-pointer">
              <button className="text-sm text-blue-500 hover:cursor-pointer outline-hidden" onClick={goTo}>{textVariantButton}</button>
            </section>
          </BoxReveal>
        )}
      </form>
    </section>
  );
});

const BottomGradient = () => {
  return (
    <>
      <span className="block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const AuthTabs = memo(function AuthTabs({ formFields, goTo, handleSubmit }: any) {
  return (
    <div className="flex max-lg:justify-center w-full md:w-auto">
      <div className="w-full lg:w-1/2 h-[100dvh] flex flex-col justify-center items-center max-lg:px-[10%]">
        <AnimatedForm {...formFields} fieldPerRow={1} onSubmit={handleSubmit} goTo={goTo} googleLogin="Login with Google" />
      </div>
    </div>
  );
});

const Label = memo(function Label({ className, ...props }: any) {
  return <label className={cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', className)} {...props} />;
});

export { Input, BoxReveal, Ripple, OrbitingCircles, TechOrbitDisplay, AnimatedForm, AuthTabs, Label, BottomGradient };
