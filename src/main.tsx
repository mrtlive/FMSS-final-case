import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import SearchDetail from "./SearchDetail.tsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./index.css";

//implement react router
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/starships/:id" element={<SearchDetail />} />
      </Routes>
    </HashRouter>
  </QueryClientProvider>
);
