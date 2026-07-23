import { theme } from "../../styles/theme";

export default function StatusPill({ expired }) {
  const color = expired ? theme.danger : theme.success;
  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: 12,
        color,
        fontWeight: 600,
      }}
    >
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: color }} />
      {expired ? "Expired" : "Active"}
    </span>
  );
}
