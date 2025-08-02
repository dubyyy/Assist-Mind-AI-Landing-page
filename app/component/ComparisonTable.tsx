import { ColoredCircleX } from "./ColoredCircleX";
import { ColoredCircleCheck } from "./ColoredCircleCheck";

const features = [
  {
    label: "Available 24/7",
    ai: { icon: "check", note: "Always on — nights, weekends, holidays" },
    voicemail: { icon: "x" },
    human: { icon: "x", note: "Office hours only" },
  },
  {
    label: "Answers Every Call",
    ai: { icon: "check", note: "Never misses a call" },
    voicemail: { icon: "x" },
    human: { icon: "check", note: "during hours" },
  },
  {
    label: "Books Appointments Automatically",
    ai: { icon: "check", note: "Syncs with your calendar in real time" },
    voicemail: { icon: "x" },
    human: { icon: "check", note: "manually" },
  },
  {
    label: "Monthly Cost",
    ai: { text: "From $99" },
    voicemail: { text: "$0" },
    human: { text: "$2,500+" },
  },
  {
    label: "Handles Multiple Calls at Once",
    ai: { text: "Up to 20 concurrent calls" },
    voicemail: { icon: "x" },
    human: { icon: "x" },
  },
  {
    label: "Call Summaries & Transcripts",
    ai: { icon: "check", note: "Instant email or CRM delivery" },
    voicemail: { icon: "x" },
    human: { icon: "x" },
  },
  {
    label: "Customizable Scripts & Tone",
    ai: { icon: "check", note: "Fully editable responses" },
    voicemail: { icon: "x" },
    human: { icon: "x" },
  },
  {
    label: "Setup Time",
    ai: { icon: "check", note: "Live in 15 minutes" },
    voicemail: { text: "None" },
    human: { text: "Weeks to hire/train" },
  },
];



const renderCell = (data: any) => {
  if (data?.icon === "check") {
    return (
      <div className="flex flex-col items-start gap-1">
        <ColoredCircleCheck className="text-[#4F46E5] w-5 h-5" />
        {data.note && <span className="text-xs text-gray-500">{data.note}</span>}
      </div>
    );
  }
  if (data?.icon === "x") {
    return (
      <div className="flex flex-col items-start gap-1">
        <ColoredCircleX className="w-5 h-5" />
        {data.note && <span className="text-xs text-gray-500">{data.note}</span>}
      </div>
    );
  }
  if (data?.text) {
    return <span className="text-sm font-medium text-gray-700">{data.text}</span>;
  }
  return null;
};

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto w-full rounded-2xl">
      <table className="min-w-[800px] w-full border-separate border-spacing-0">
        <thead>
          <tr className="bg-[#2A2DCB] text-white text-sm">
            <th className="text-left p-4">Features</th>
            <th className="text-left p-4">AI Agent (AssistMind)</th>
            <th className="text-left p-4">Voicemail</th>
            <th className="text-left p-4">Human Receptionist</th>
          </tr>
        </thead>
        <tbody>
          {features.map((row, index) => (
            <tr key={index} className="border-b border-gray-200 bg-white">
              <td className="p-4 text-sm font-semibold text-gray-800">{row.label}</td>
              <td className="p-4">{renderCell(row.ai)}</td>
              <td className="p-4">{renderCell(row.voicemail)}</td>
              <td className="p-4">{renderCell(row.human)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
