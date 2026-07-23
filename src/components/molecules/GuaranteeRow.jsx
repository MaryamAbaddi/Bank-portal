import { theme } from "../../styles/theme";
import StatusPill from "../atoms/StatusPill";
import { isExpired } from "../../utils/date";

export default function GuaranteeRow({ guarantee, isFirst, onClick }) {
  const expired = isExpired(guarantee.guarantee.expiryDate);
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 4px",
        borderTop: isFirst ? `1px solid ${theme.border}` : "none",
        borderBottom: `1px solid ${theme.border}`,
        cursor: "pointer",
        opacity: expired ? 0.6 : 1,
      }}
    >
      <div>
        <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>
          {guarantee.contractor}{" "}
          <span style={{ color: theme.muted, fontWeight: 400 }}>· {guarantee.id}</span>
        </p>
        <p style={{ fontSize: 12, color: theme.muted, margin: "2px 0 0" }}>
          {guarantee.project.name} · {guarantee.guarantee.type}
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <span style={{ fontSize: 12, color: theme.muted }}>{guarantee.guarantee.validity}</span>
        <span style={{ fontSize: 14, fontWeight: 600 }}>{guarantee.guarantee.amount}</span>
        <StatusPill expired={expired} />
      </div>
    </div>
  );
}
