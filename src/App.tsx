import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/app.routes";

export function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}
