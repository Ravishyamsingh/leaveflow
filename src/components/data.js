import {
  BanknotesIcon,
  CalendarDaysIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const benefitOne = {
  title: "Streamline leave requests and approvals",
  desc: "Make it simple for employees to request leave and for admins to approve with clear workflows and history.",
  image: "/img/benefit-one.png",
  bullets: [
    {
      title: "Clear apply flow",
      desc: "Submit requests with dates, reasons, and attachments so approvals are faster.",
      icon: <UserGroupIcon />,
    },
    {
      title: "Approval tracking",
      desc: "Keep approval notes and history tied to each request for audits and clarity.",
      icon: <ChatBubbleLeftRightIcon />,
    },
    {
      title: "Reduce admin time",
      desc: "Automate common decisions and surface likely duplicates to save manual work.",
      icon: <ClockIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Track balances and approvals accurately",
  desc: "Keep employee leave balances in sync and reduce manual reconciliation between teams.",
  image: "/img/benefit-two.png",
  bullets: [
    {
      title: "Balance visibility",
      desc: "Show remaining entitlement and how pending requests affect balances.",
      icon: <CalendarDaysIcon />,
    },
    {
      title: "Exportable records",
      desc: "Run reports and export leave history for payroll and HR audits.",
      icon: <BanknotesIcon />,
    },
    {
      title: "Secure by default",
      desc: "Role-based access and audit trails keep employee data safe.",
      icon: <ShieldCheckIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
