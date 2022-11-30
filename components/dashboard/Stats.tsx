import { MdChevronRight } from "react-icons/md";

interface Props {
  title: string;
  icon: any;
  color?: string;
}

const Stats: React.FC<Props> = ({ title, icon, color }) => {
  return (
    <div
      style={{
        marginBottom: "1.5rem",
        background: "#fff",
        padding: "1.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "5px",
        boxShadow: "0 7px 7px rgba(0,0,0,0.05)",
      }}
    >
      <div
        style={{
          background: color || "#624BD6",
          padding: "1rem",
          borderRadius: "5px",
          fontSize: "1.25rem",
          color: "#fff",
        }}
      >
        {icon}
      </div>
      <span
        style={{
          fontSize: "1.125rem",
          fontWeight: "600",
          opacity: 0.9,
        }}
      >
        {title}
      </span>
      <MdChevronRight
        style={{
          fontSize: "1.25rem",
        }}
      />
    </div>
  );
};

export default Stats;
