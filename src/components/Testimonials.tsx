import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

const userOneImg = "/img/user1.svg";
const userTwoImg = "/img/user2.svg";
const userThreeImg = "/img/user3.svg";

const useCases = [
  {
    copy: (
      <>
        Keep <Mark>labor demand</Mark> visible across locations so owners can
        spot staffing gaps before service quality drops.
      </>
    ),
    image: userOneImg,
    name: "Multi-location operators",
    title: "Coverage and performance visibility",
  },
  {
    copy: (
      <>
        Build a warmer <Mark>candidate pipeline</Mark> with notes, follow-ups,
        and availability in one place.
      </>
    ),
    image: userTwoImg,
    name: "Hiring teams",
    title: "Faster conversations and decisions",
  },
  {
    copy: (
      <>
        Send <Mark>approved hours</Mark> and exceptions into payroll review with
        fewer manual checks.
      </>
    ),
    image: userThreeImg,
    name: "Payroll teams",
    title: "Cleaner handoffs and records",
  },
];

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {useCases.map((item, index) => (
          <div
            key={item.name}
            className={index === 0 ? "lg:col-span-2 xl:col-auto" : ""}
          >
            <div className="flex h-full w-full flex-col justify-between rounded-md bg-gray-100 px-8 py-10 dark:bg-trueGray-800 lg:px-10">
              <p className="text-2xl leading-normal text-gray-900 dark:text-white">
                {item.copy}
              </p>

              <Avatar image={item.image} name={item.name} title={item.title} />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="mt-8 flex items-center space-x-3">
      <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-full">
        <Image src={props.image} width={56} height={56} alt="" />
      </div>
      <div>
        <div className="text-lg font-medium text-gray-900 dark:text-white">
          {props.name}
        </div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="rounded-md bg-emerald-100 text-emerald-800 ring-4 ring-emerald-100 dark:bg-emerald-900 dark:text-emerald-100 dark:ring-emerald-900">
        {props.children}
      </mark>{" "}
    </>
  );
}
