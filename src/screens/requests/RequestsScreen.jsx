import { theme } from "../../styles/theme";
import RequestRow from "../../components/molecules/RequestRow";

// Deliberately "dumb": this screen only renders the list. Which drawer is
// open is owned by App.jsx, since the drawer overlay needs to cover the
// whole portal card (sidebar included), not just this content pane.
export default function RequestsScreen({ requests, onOpenRequest }) {
  return (
    <div style={{ padding: "28px 32px", overflowY: "auto", flex: 1 }}>
      <p style={{ fontSize: 20, fontWeight: 700, margin: "0 0 4px" }}>Requests</p>
      <p style={{ fontSize: 13, color: theme.muted, margin: "0 0 24px" }}>
        Contractors awaiting a decision on their guarantee application.
      </p>

      {requests.length === 0 && (
        <p style={{ fontSize: 13, color: theme.muted }}>No pending requests.</p>
      )}

      <div>
        {requests.map((r, i) => (
          <RequestRow
            key={r.id}
            request={r}
            isFirst={i === 0}
            onClick={() => onOpenRequest(r.id)}
          />
        ))}
      </div>
    </div>
  );
}
