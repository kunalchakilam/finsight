import { BrowserRouter } from "react-router-dom";

import { FinanceProvider } from "./context/FinanceContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <FinanceProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </FinanceProvider>
  );
}

export default App;