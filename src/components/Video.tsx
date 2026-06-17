"use client";

import { useState } from "react";
import { Container } from "@/components/Container";

interface VideoProps {
  videoId?: string;
}

const workflowSteps = [
  {
    label: "Staffing",
    title: "Open role created",
    detail: "Weekend server coverage needed for two locations.",
  },
  {
    label: "CRM",
    title: "Candidate shortlisted",
    detail: "Manager reviews notes, availability, and previous fit.",
  },
  {
    label: "Workforce",
    title: "Shift coverage approved",
    detail: "Candidate is assigned to a live shift plan with role details.",
  },
  {
    label: "Payroll",
    title: "Pay run prepared",
    detail: "Approved hours and exceptions are ready for payroll review.",
  },
];

export function Video({ videoId }: Readonly<VideoProps>) {
  const [playVideo, setPlayVideo] = useState(false);

  if (videoId && playVideo) {
    return (
      <Container>
        <div className="mx-auto h-[500px] w-full max-w-4xl overflow-hidden rounded-md bg-zinc-950 lg:mb-20">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?controls=0&autoplay=1`}
            title="LeaveFlow demo video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="h-full w-full aspect-video"
          ></iframe>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm lg:grid-cols-[0.9fr_1.1fr] dark:border-trueGray-800 dark:bg-trueGray-900">
        <div className="flex flex-col justify-between bg-zinc-950 p-8 text-white">
          <div>
            <div className="text-sm font-semibold uppercase text-emerald-300">
              Product preview
            </div>
            <h3 className="mt-3 text-3xl font-bold leading-tight">
              From request to approved balance in one flow
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-zinc-300">
              This demo path shows how LeaveFlow can connect apply → approve → balance updates in one place.
            </p>
          </div>

          {videoId ? (
            <button
              onClick={() => setPlayVideo(true)}
              className="mt-8 inline-flex w-fit items-center rounded-md bg-white px-5 py-3 font-medium text-zinc-950 transition hover:bg-emerald-50"
            >
              Play demo
            </button>
          ) : (
            <a
              href="mailto:hello@leaveflow.local?subject=LeaveFlow%20demo%20request"
              className="mt-8 inline-flex w-fit items-center rounded-md bg-white px-5 py-3 font-medium text-zinc-950 transition hover:bg-emerald-50"
            >
              Request full demo
            </a>
          )}
        </div>

        <div className="grid gap-4 p-6">
          {workflowSteps.map((step, index) => (
            <div
              key={step.title}
              className="grid gap-4 rounded-md border border-gray-200 bg-gray-50 p-4 sm:grid-cols-[88px_1fr] dark:border-trueGray-700 dark:bg-trueGray-800"
            >
              <div>
                <div className="text-xs font-semibold uppercase text-indigo-600 dark:text-indigo-300">
                  Step {index + 1}
                </div>
                <div className="mt-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {step.label}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h4>
                <p className="mt-1 text-gray-600 dark:text-gray-300">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
