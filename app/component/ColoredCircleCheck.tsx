import { LucideProps } from 'lucide-react';

export const ColoredCircleCheck = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Blue circle */}
    <circle cx="12" cy="12" r="10" stroke="#4A48FF" fill="#4A48FF" />
    {/* White checkmark */}
    <path d="M9 12l2 2 4-4" stroke="#ffffff" />
  </svg>
);
