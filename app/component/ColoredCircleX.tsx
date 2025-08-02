import { LucideProps, X } from "lucide-react";

export const ColoredCircleX = (props: LucideProps) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      borderRadius: "50%",
      backgroundColor: "#4A48FF", // red-400
    }}
  >
    <X {...props} size={14} color="#fff" />
  </span>
);
