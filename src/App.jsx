<<<<<<< HEAD
import { useState } from "react";
import { theme } from "./styles/theme";
import { AuthProvider } from "./store/AuthContext";
import { useAuth } from "./hooks/useAuth";
import { useRequests } from "./hooks/useRequests";
import { useGuarantees } from "./hooks/useGuarantees";

import LoginScreen from "./screens/login/LoginScreen";
import RequestsScreen from "./screens/requests/RequestsScreen";
import ActiveGuaranteesScreen from "./screens/activeGuarantees/ActiveGuaranteesScreen";

import Sidebar from "./components/organisms/Sidebar";
import Topbar from "./components/organisms/Topbar";
import RequestDrawer from "./components/organisms/RequestDrawer";
import ActiveGuaranteeDrawer from "./components/organisms/ActiveGuaranteeDrawer";
import Toast from "./components/atoms/Toast";

function BankPortal() {
  const { user, signOut } = useAuth();
  const [screen, setScreen] = useState("requests");
  const [openRequestId, setOpenRequestId] = useState(null);
  const [openActiveId, setOpenActiveId] = useState(null);
  const [toast, setToast] = useState(null);

  const { active, addIssued } = useGuarantees();
  const { requests, approve, deny } = useRequests({
    onApprove: (issuedGuarantee) => {
      addIssued(issuedGuarantee);
      showToast(`${issuedGuarantee.id} issued to ${issuedGuarantee.contractor}`);
    },
  });

  const openRequest = requests.find((r) => r.id === openRequestId) || null;
  const openActive = active.find((g) => g.id === openActiveId) || null;

  function showToast(message) {
    setToast(message);
    setTimeout(() => setToast(null), 2600);
  }

  async function handleApprove(request) {
    await approve(request);
    setOpenRequestId(null);
  }

  async function handleDeny(request, reason) {
    await deny(request, reason);
    setOpenRequestId(null);
    showToast(`Sent back to ${request.contractor} for resubmission`);
  }

  return (
    <div
      style={{
        fontFamily: theme.font,
        display: "flex",
        width: "100%",
        minHeight: 720,
        background: theme.bg,
        color: theme.text,
        position: "relative",
        overflow: "hidden",
        borderRadius: 12,
        border: `1px solid ${theme.border}`,
      }}
    >
      <Sidebar
        screen={screen}
        onChangeScreen={setScreen}
        requestsCount={requests.length}
        activeCount={active.length}
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <Topbar userName={user?.name} onLogout={signOut} />
        {screen === "requests" ? (
          <RequestsScreen requests={requests} onOpenRequest={setOpenRequestId} />
        ) : (
          <ActiveGuaranteesScreen active={active} onOpenGuarantee={setOpenActiveId} />
        )}
      </div>

      {openRequest && (
        <RequestDrawer
          request={openRequest}
          onClose={() => setOpenRequestId(null)}
          onApprove={handleApprove}
          onDeny={handleDeny}
        />
      )}

      {openActive && (
        <ActiveGuaranteeDrawer guarantee={openActive} onClose={() => setOpenActiveId(null)} />
      )}

      <Toast message={toast} />
    </div>
  );
}

function AuthGate() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <BankPortal /> : <LoginScreen />;
}

export default function App() {
  return (
    <AuthProvider>
      <AuthGate />
    </AuthProvider>
  );
=======
import BankPortal from "./bank-portal";

export default function App() {
  return <BankPortal />;
>>>>>>> 29ab35231da095b808489bc10f4ec73e303d97cd
}
