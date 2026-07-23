import { theme } from "../../styles/theme";
import GuaranteeRow from "../../components/molecules/GuaranteeRow";

export default function ActiveGuaranteesScreen({ active, onOpenGuarantee }) {
  return (
    <div style={{ padding: "28px 32px", overflowY: "auto", flex: 1 }}>
      <p style={{ fontSize: 20, fontWeight: 700, margin: "0 0 4px" }}>Active guarantees</p>
      <p style={{ fontSize: 13, color: theme.muted, margin: "0 0 24px" }}>
        Guarantees currently issued. Expiry is checked against today, July 23, 2026.
      </p>

      {active.length === 0 && (
        <p style={{ fontSize: 13, color: theme.muted }}>No active guarantees yet.</p>
      )}

      <div>
        {active.map((g, i) => (
          <GuaranteeRow
            key={g.id}
            guarantee={g}
            isFirst={i === 0}
            onClick={() => onOpenGuarantee(g.id)}
          />
        ))}
      </div>
    </div>
  );
}
