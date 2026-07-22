import { useState } from "react";

const TODAY = new Date("2026-07-23");

const initialRequests = [
  {
    id: "req-1",
    contractor: "Al-Fahad Contracting",
    requestedDate: "July 12, 2026",
    applicant: {
      contractorId: "TRV-CTR-11840",
      legalName: "Al-Fahad Contracting LLC",
      cr: "JO-CR-118820",
      tax: "JO-TAX-994512",
      address: "Wadi Saqra, Amman, Jordan",
      contact: "Ahmad Khalil, Operations Director",
      email: "ahmad.khalil@alfahad.jo",
      phone: "+962 79 123 4567",
    },
    project: {
      name: "Al-Noor Tower Construction",
      location: "Amman, Jordan",
      value: "JOD 238,000",
      description:
        "High-rise residential tower, structural and finishing works",
      duration: "14 months (Sep 2026 – Oct 2027)",
    },
    guarantee: {
      type: "Performance Guarantee",
      amount: "JOD 23,800",
      validity: "Aug 1, 2026 – Oct 31, 2027",
      expiryDate: "2027-10-31",
      conditions: "—",
    },
    beneficiary: {
      company: "Al-Noor Development",
      address: "Shmeisani, Amman, Jordan",
      contact: "Yousef Amer, Development Manager",
      email: "yousef.amer@alnoordev.jo",
      phone: "+962 6 555 8814",
    },
    documents: [
      { name: "Signed Contract / Agreement", status: "Uploaded" },
      { name: "Letter of Award", status: "Uploaded" },
      { name: "Other Supporting Documents", status: "None" },
    ],
    declarations: {
      accuracy: true,
      indemnify: true,
      terms: true,
      signature: "Ahmad Khalil",
    },
  },
  {
    id: "req-2",
    contractor: "Zamzam Builders",
    requestedDate: "July 11, 2026",
    applicant: {
      contractorId: "TRV-CTR-20337",
      legalName: "Zamzam Builders Co.",
      cr: "JO-CR-102244",
      tax: "JO-TAX-771103",
      address: "Al-Rabiah, Amman, Jordan",
      contact: "Salma Odeh, General Manager",
      email: "salma.odeh@zamzambuilders.jo",
      phone: "+962 79 887 2201",
    },
    project: {
      name: "Riverside Complex Phase 2",
      location: "Amman, Jordan",
      value: "JOD 980,000",
      description: "Mixed-use residential and retail complex, civil works",
      duration: "18 months (Sep 2026 – Feb 2028)",
    },
    guarantee: {
      type: "Advance Payment Guarantee",
      amount: "JOD 118,000",
      validity: "Aug 15, 2026 – Feb 28, 2028",
      expiryDate: "2028-02-28",
      conditions: "Reduces proportionally with each certified payment.",
    },
    beneficiary: {
      company: "Riverside Holdings",
      address: "Abdoun, Amman, Jordan",
      contact: "Mazen Tal, Procurement Director",
      email: "mazen.tal@riversideholdings.jo",
      phone: "+962 6 555 3390",
    },
    documents: [
      { name: "Signed Contract / Agreement", status: "Uploaded" },
      { name: "Letter of Award", status: "Uploaded" },
      { name: "Other Supporting Documents", status: "Uploaded" },
    ],
    declarations: {
      accuracy: true,
      indemnify: true,
      terms: true,
      signature: "Salma Odeh",
    },
  },
  {
    id: "req-3",
    contractor: "Horizon Engineering",
    requestedDate: "July 9, 2026",
    applicant: {
      contractorId: "TRV-CTR-33851",
      legalName: "Horizon Engineering LLC",
      cr: "JO-CR-095512",
      tax: "JO-TAX-441987",
      address: "Jubeiha, Amman, Jordan",
      contact: "Nour Saleh, Projects Director",
      email: "nour.saleh@horizoneng.jo",
      phone: "+962 79 440 6612",
    },
    project: {
      name: "Zaytoonah Business Park",
      location: "Amman, Jordan",
      value: "JOD 480,000",
      description: "Commercial fit-out, MEP works",
      duration: "10 months (Aug 2026 – Jun 2027)",
    },
    guarantee: {
      type: "Performance Guarantee",
      amount: "JOD 9,400",
      validity: "Aug 1, 2026 – Jun 30, 2027",
      expiryDate: "2027-06-30",
      conditions: "—",
    },
    beneficiary: {
      company: "Zaytoonah Group",
      address: "Shmeisani, Amman, Jordan",
      contact: "Lina Haddad, Procurement Lead",
      email: "procurement@zaytoonahgroup.jo",
      phone: "+962 6 555 2210",
    },
    documents: [
      { name: "Signed Contract / Agreement", status: "Uploaded" },
      { name: "Letter of Award", status: "Uploaded" },
      { name: "Other Supporting Documents", status: "None" },
    ],
    declarations: {
      accuracy: true,
      indemnify: true,
      terms: true,
      signature: "Nour Saleh",
    },
  },
];

const initialActive = [
  {
    id: "TRV-GT-65210",
    contractor: "Yarmouk Contracting Est.",
    issuedDate: "July 10, 2026",
    applicant: {
      contractorId: "TRV-CTR-08850",
      legalName: "Yarmouk Contracting Establishment",
      cr: "JO-CR-076651",
      tax: "JO-TAX-330298",
      address: "Sweifieh, Amman, Jordan",
      contact: "Rami Btoush, Managing Partner",
      email: "rami.btoush@yarmoukcontracting.jo",
      phone: "+962 79 502 1187",
    },
    project: {
      name: "Zaytoonah Business Park",
      location: "Amman, Jordan",
      value: "JOD 480,000",
      description: "Commercial fit-out, MEP works",
      duration: "10 months (Aug 2026 – Jun 2027)",
    },
    guarantee: {
      type: "Performance Guarantee",
      amount: "JOD 9,400",
      validity: "Jul 10, 2026 – Jun 30, 2027",
      expiryDate: "2027-06-30",
      conditions: "—",
    },
    beneficiary: {
      company: "Zaytoonah Group",
      address: "Shmeisani, Amman, Jordan",
      contact: "Lina Haddad, Procurement Lead",
      email: "procurement@zaytoonahgroup.jo",
      phone: "+962 6 555 2210",
    },
    documents: [
      { name: "Signed Contract / Agreement", status: "Uploaded" },
      { name: "Letter of Award", status: "Uploaded" },
      { name: "Other Supporting Documents", status: "None" },
    ],
    declarations: {
      accuracy: true,
      indemnify: true,
      terms: true,
      signature: "Rami Btoush",
    },
  },
  {
    id: "TRV-GT-40015",
    contractor: "Cedar Line Interiors",
    issuedDate: "January 14, 2026",
    applicant: {
      contractorId: "TRV-CTR-05512",
      legalName: "Cedar Line Interiors LLC",
      cr: "JO-CR-061238",
      tax: "JO-TAX-118804",
      address: "Khalda, Amman, Jordan",
      contact: "Dana Farah, Owner",
      email: "dana.farah@cedarline.jo",
      phone: "+962 79 330 5567",
    },
    project: {
      name: "Boulevard Retail Fit-out",
      location: "Amman, Jordan",
      value: "JOD 92,000",
      description: "Retail interior fit-out, joinery and finishes",
      duration: "4 months (Dec 2025 – Mar 2026)",
    },
    guarantee: {
      type: "Performance Guarantee",
      amount: "JOD 6,200",
      validity: "Jan 14, 2026 – May 31, 2026",
      expiryDate: "2026-05-31",
      conditions: "—",
    },
    beneficiary: {
      company: "Boulevard Retail Group",
      address: "Abdali, Amman, Jordan",
      contact: "Hazim Qutub, Leasing Manager",
      email: "hazim.qutub@boulevardretail.jo",
      phone: "+962 6 555 7742",
    },
    documents: [
      { name: "Signed Contract / Agreement", status: "Uploaded" },
      { name: "Letter of Award", status: "Uploaded" },
      { name: "Other Supporting Documents", status: "None" },
    ],
    declarations: {
      accuracy: true,
      indemnify: true,
      terms: true,
      signature: "Dana Farah",
    },
  },
];

function Field({ label, value }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 16,
        padding: "7px 0",
      }}
    >
      <span style={{ fontSize: 13, color: "var(--muted)" }}>{label}</span>
      <span
        style={{
          fontSize: 13,
          color: "var(--text)",
          textAlign: "right",
          maxWidth: "62%",
        }}
      >
        {value}
      </span>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div
      style={{ padding: "18px 28px", borderBottom: "1px solid var(--border)" }}
    >
      <p
        style={{
          fontSize: 12,
          fontWeight: 600,
          color: "var(--muted)",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          margin: "0 0 4px",
        }}
      >
        {title}
      </p>
      {children}
    </div>
  );
}

function isExpired(expiryDate) {
  return new Date(expiryDate) < TODAY;
}

function StatusPill({ expired }) {
  const color = expired ? "#a83232" : "#1a7a4c";
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
      <span
        style={{ width: 6, height: 6, borderRadius: "50%", background: color }}
      />
      {expired ? "Expired" : "Active"}
    </span>
  );
}

function DetailBody({ data }) {
  return (
    <>
      <Section title="Applicant">
        <Field label="Legal name" value={data.applicant.legalName} />
        <Field label="Contractor ID" value={data.applicant.contractorId} />
        <Field label="Registration (CR)" value={data.applicant.cr} />
        <Field label="Tax / VAT" value={data.applicant.tax} />
        <Field label="Address" value={data.applicant.address} />
        <Field label="Contact" value={data.applicant.contact} />
        <Field label="Email" value={data.applicant.email} />
        <Field label="Phone" value={data.applicant.phone} />
      </Section>

      <Section title="Project">
        <Field label="Project" value={data.project.name} />
        <Field label="Location" value={data.project.location} />
        <Field label="Contract value" value={data.project.value} />
        <Field label="Description" value={data.project.description} />
        <Field label="Duration" value={data.project.duration} />
      </Section>

      <Section title="Guarantee">
        <Field label="Type" value={data.guarantee.type} />
        <Field label="Amount" value={data.guarantee.amount} />
        <Field label="Validity" value={data.guarantee.validity} />
        <Field label="Conditions" value={data.guarantee.conditions} />
        <Field
          label="Status"
          value={<StatusPill expired={isExpired(data.guarantee.expiryDate)} />}
        />
      </Section>

      <Section title="Beneficiary">
        <Field label="Company" value={data.beneficiary.company} />
        <Field label="Address" value={data.beneficiary.address} />
        <Field label="Contact" value={data.beneficiary.contact} />
        <Field label="Email" value={data.beneficiary.email} />
        <Field label="Phone" value={data.beneficiary.phone} />
      </Section>

      <Section title="Documents">
        {data.documents.map((d) => (
          <Field key={d.name} label={d.name} value={d.status} />
        ))}
      </Section>

      <Section title="Declarations">
        <Field
          label="Information accurate"
          value={data.declarations.accuracy ? "Confirmed" : "Not confirmed"}
        />
        <Field
          label="Indemnifies bank"
          value={data.declarations.indemnify ? "Confirmed" : "Not confirmed"}
        />
        <Field
          label="Accepts terms"
          value={data.declarations.terms ? "Confirmed" : "Not confirmed"}
        />
        <Field label="Signature" value={data.declarations.signature} />
      </Section>
    </>
  );
}

export default function BankPortal() {
  const [requests, setRequests] = useState(initialRequests);
  const [active, setActive] = useState(initialActive);
  const [screen, setScreen] = useState("requests");
  const [openRequestId, setOpenRequestId] = useState(null);
  const [openActiveId, setOpenActiveId] = useState(null);
  const [denying, setDenying] = useState(false);
  const [reason, setReason] = useState("");
  const [toast, setToast] = useState(null);
  const [nextGtNumber, setNextGtNumber] = useState(90501);

  const openRequest = requests.find((r) => r.id === openRequestId) || null;
  const openActive = active.find((g) => g.id === openActiveId) || null;
  const drawerOpen = Boolean(openRequest || openActive);

  function closeDrawer() {
    setOpenRequestId(null);
    setOpenActiveId(null);
    setDenying(false);
    setReason("");
  }

  function showToast(message) {
    setToast(message);
    setTimeout(() => setToast(null), 2600);
  }

  function approve(req) {
    const gtId = `TRV-GT-${nextGtNumber}`;
    setNextGtNumber((n) => n + 1);
    setActive((prev) => [
      {
        id: gtId,
        contractor: req.contractor,
        issuedDate: "July 23, 2026",
        applicant: req.applicant,
        project: req.project,
        guarantee: req.guarantee,
        beneficiary: req.beneficiary,
        documents: req.documents,
        declarations: req.declarations,
      },
      ...prev,
    ]);
    setRequests((prev) => prev.filter((r) => r.id !== req.id));
    closeDrawer();
    showToast(`${gtId} issued to ${req.contractor}`);
  }

  function submitDenial(req) {
    if (!reason.trim()) return;
    setRequests((prev) => prev.filter((r) => r.id !== req.id));
    closeDrawer();
    showToast(`Sent back to ${req.contractor} for resubmission`);
  }

  return (
    <div
      style={{
        "--bg": "#fafafa",
        "--surface": "#ffffff",
        "--border": "#e9e9ec",
        "--text": "#17171c",
        "--muted": "#7a7a83",
        "--accent": "#c8202e",
        "--accent-hover": "#a81b27",
        "--sidebar": "#17171c",
        "--sidebar-muted": "#9a9aa2",
        fontFamily:
          "'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif",
        display: "flex",
        width: "100%",
        minHeight: 720,
        background: "var(--bg)",
        color: "var(--text)",
        position: "relative",
        overflow: "hidden",
        borderRadius: 12,
        border: "1px solid var(--border)",
      }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: 200,
          background: "var(--sidebar)",
          padding: "24px 16px",
          flexShrink: 0,
        }}
      >
        <p
          style={{
            color: "#fff",
            fontWeight: 700,
            fontSize: 16,
            margin: "0 0 28px",
            paddingLeft: 8,
          }}
        >
          Trova
        </p>
        {[
          { key: "requests", label: "Requests", count: requests.length },
          { key: "active", label: "Active guarantees", count: active.length },
        ].map((item) => (
          <div
            key={item.key}
            onClick={() => setScreen(item.key)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "9px 10px",
              borderRadius: 7,
              marginBottom: 2,
              cursor: "pointer",
              background: screen === item.key ? "var(--accent)" : "transparent",
              color: screen === item.key ? "#fff" : "var(--sidebar-muted)",
              fontSize: 13,
              fontWeight: screen === item.key ? 600 : 400,
            }}
          >
            <span>{item.label}</span>
            {item.count > 0 && (
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: screen === item.key ? "#fff" : "var(--sidebar-muted)",
                  opacity: screen === item.key ? 0.85 : 1,
                }}
              >
                {item.count}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Main */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 32px",
            borderBottom: "1px solid var(--border)",
            background: "var(--surface)",
          }}
        >
          <span style={{ fontSize: 14, fontWeight: 600 }}>
            Arab Bank — Bank Portal
          </span>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "#f7e5e7",
              color: "var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            B
          </div>
        </div>

        <div style={{ padding: "28px 32px", overflowY: "auto" }}>
          {screen === "requests" ? (
            <>
              <p style={{ fontSize: 20, fontWeight: 700, margin: "0 0 4px" }}>
                Requests
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--muted)",
                  margin: "0 0 24px",
                }}
              >
                Contractors awaiting a decision on their guarantee application.
              </p>
              {requests.length === 0 && (
                <p style={{ fontSize: 13, color: "var(--muted)" }}>
                  No pending requests.
                </p>
              )}
              <div>
                {requests.map((r, i) => (
                  <div
                    key={r.id}
                    onClick={() => setOpenRequestId(r.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "16px 4px",
                      borderTop: i === 0 ? "1px solid var(--border)" : "none",
                      borderBottom: "1px solid var(--border)",
                      cursor: "pointer",
                    }}
                  >
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>
                        {r.contractor}
                      </p>
                      <p
                        style={{
                          fontSize: 12,
                          color: "var(--muted)",
                          margin: "2px 0 0",
                        }}
                      >
                        {r.project.name} · Requested {r.requestedDate}
                      </p>
                    </div>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 20 }}
                    >
                      <span style={{ fontSize: 14, fontWeight: 600 }}>
                        {r.guarantee.amount}
                      </span>
                      <span style={{ fontSize: 13, color: "var(--muted)" }}>
                        Review →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <p style={{ fontSize: 20, fontWeight: 700, margin: "0 0 4px" }}>
                Active guarantees
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "var(--muted)",
                  margin: "0 0 24px",
                }}
              >
                Guarantees currently issued. Expiry is checked against today,
                July 23, 2026.
              </p>
              {active.length === 0 && (
                <p style={{ fontSize: 13, color: "var(--muted)" }}>
                  No active guarantees yet.
                </p>
              )}
              <div>
                {active.map((g, i) => {
                  const expired = isExpired(g.guarantee.expiryDate);
                  return (
                    <div
                      key={g.id}
                      onClick={() => setOpenActiveId(g.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "16px 4px",
                        borderTop: i === 0 ? "1px solid var(--border)" : "none",
                        borderBottom: "1px solid var(--border)",
                        cursor: "pointer",
                        opacity: expired ? 0.6 : 1,
                      }}
                    >
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>
                          {g.contractor}{" "}
                          <span
                            style={{ color: "var(--muted)", fontWeight: 400 }}
                          >
                            · {g.id}
                          </span>
                        </p>
                        <p
                          style={{
                            fontSize: 12,
                            color: "var(--muted)",
                            margin: "2px 0 0",
                          }}
                        >
                          {g.project.name} · {g.guarantee.type}
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 20,
                        }}
                      >
                        <span style={{ fontSize: 12, color: "var(--muted)" }}>
                          {g.guarantee.validity}
                        </span>
                        <span style={{ fontSize: 14, fontWeight: 600 }}>
                          {g.guarantee.amount}
                        </span>
                        <StatusPill expired={expired} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Drawer */}
      {drawerOpen && (
        <>
          <div
            onClick={closeDrawer}
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(20,20,22,0.35)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: 460,
              background: "var(--surface)",
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
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div>
                <p style={{ fontSize: 16, fontWeight: 700, margin: 0 }}>
                  {openRequest ? openRequest.contractor : openActive.contractor}
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: "var(--muted)",
                    margin: "2px 0 0",
                  }}
                >
                  {openRequest
                    ? `Requested ${openRequest.requestedDate}`
                    : `${openActive.id} · Issued ${openActive.issuedDate}`}
                </p>
              </div>
              <div
                onClick={closeDrawer}
                style={{
                  cursor: "pointer",
                  fontSize: 18,
                  color: "var(--muted)",
                  lineHeight: 1,
                }}
              >
                ×
              </div>
            </div>

            <div style={{ flex: 1, overflowY: "auto" }}>
              <DetailBody data={openRequest || openActive} />
            </div>

            {openRequest && (
              <div
                style={{
                  padding: "18px 28px",
                  borderTop: "1px solid var(--border)",
                }}
              >
                {!denying ? (
                  <div style={{ display: "flex", gap: 10 }}>
                    <button
                      onClick={() => setDenying(true)}
                      style={{
                        flex: 1,
                        padding: "11px 0",
                        borderRadius: 8,
                        border: "1px solid var(--border)",
                        background: "transparent",
                        color: "var(--text)",
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      Deny
                    </button>
                    <button
                      onClick={() => approve(openRequest)}
                      style={{
                        flex: 1,
                        padding: "11px 0",
                        borderRadius: 8,
                        border: "none",
                        background: "var(--accent)",
                        color: "#fff",
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      Approve & issue
                    </button>
                  </div>
                ) : (
                  <div>
                    <p
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: "var(--muted)",
                        margin: "0 0 8px",
                      }}
                    >
                      Reason for denial
                    </p>
                    <textarea
                      autoFocus
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      placeholder="Explain what's missing or incorrect so the contractor can resubmit."
                      style={{
                        width: "100%",
                        minHeight: 84,
                        padding: 12,
                        borderRadius: 8,
                        border: "1px solid var(--border)",
                        fontSize: 13,
                        fontFamily: "inherit",
                        resize: "vertical",
                        boxSizing: "border-box",
                        marginBottom: 10,
                      }}
                    />
                    <div style={{ display: "flex", gap: 10 }}>
                      <button
                        onClick={() => {
                          setDenying(false);
                          setReason("");
                        }}
                        style={{
                          flex: 1,
                          padding: "11px 0",
                          borderRadius: 8,
                          border: "1px solid var(--border)",
                          background: "transparent",
                          color: "var(--text)",
                          fontSize: 13,
                          fontWeight: 600,
                          cursor: "pointer",
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => submitDenial(openRequest)}
                        disabled={!reason.trim()}
                        style={{
                          flex: 1,
                          padding: "11px 0",
                          borderRadius: 8,
                          border: "none",
                          background: reason.trim()
                            ? "var(--accent)"
                            : "#e9c1c4",
                          color: "#fff",
                          fontSize: 13,
                          fontWeight: 600,
                          cursor: reason.trim() ? "pointer" : "not-allowed",
                        }}
                      >
                        Send denial
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </>
      )}

      {/* Toast */}
      {toast && (
        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: "50%",
            transform: "translateX(-50%)",
            background: "var(--text)",
            color: "#fff",
            fontSize: 13,
            padding: "10px 18px",
            borderRadius: 8,
          }}
        >
          {toast}
        </div>
      )}
    </div>
  );
}
