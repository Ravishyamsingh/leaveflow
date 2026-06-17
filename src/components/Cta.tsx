import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-5 rounded-md bg-zinc-950 px-7 py-7 text-white lg:flex-nowrap lg:px-12 lg:py-12">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-semibold lg:text-3xl">
            Ready to simplify leave management for your team?
          </h2>
          <p className="mt-2 text-white text-opacity-80 lg:text-xl">
            Start with core leave workflows and expand as your organisation
            requires.
          </p>
        </div>
        <div className="flex w-full flex-shrink-0 flex-col gap-3 text-center sm:flex-row lg:w-auto">
          <a
            href="mailto:hello@leaveflow.local?subject=LeaveFlow%20demo%20request"
            className="inline-block rounded-md bg-white px-7 py-3 text-center text-lg font-medium text-zinc-950 transition hover:bg-emerald-50 lg:px-10 lg:py-5"
          >
            Get Started
          </a>
          <a
            href="#demo"
            className="inline-block rounded-md border border-white/30 px-7 py-3 text-center text-lg font-medium text-white transition hover:border-white lg:px-10 lg:py-5"
          >
            Watch Demo
          </a>
        </div>
      </div>
    </Container>
  );
};
