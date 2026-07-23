import { theme } from "../../styles/theme";
import DetailBody from "../molecules/DetailBody";

export default function ActiveGuaranteeDrawer({ guarantee, onClose }) {
  return (
    <>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(20,20,22,0.35)" }} />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: 460,
          background: theme.surface,
          boxShadow: "-8px 0 24px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 28px",
            borderBottom: `1px solid ${theme.border}`,
          }}
        >
          <div>
            <p style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>{guarantee.contractor}</p>
            <p style={{ fontSize: 12, color: theme.muted, margin: "2px 0 0" }}>
              {guarantee.id} · Issued {guarantee.issuedDate}
            </p>
          </div>
          <div onClick={onClose} style={{ cursor: "pointer", fontSize: 18, color: theme.muted, lineHeight: 1 }}>
            ×
          </div>
        </div>

        <div style={{ flex: 1, overflowY: "auto" }}>
          <DetailBody data={guarantee} />
        </div>
      </div>
    </>
  );
}
