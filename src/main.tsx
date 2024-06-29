import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from "react-router-dom";
import { CarsProvider } from "./context/provider/CarsProvider";
import { GlobalHistory } from "@/lib/utils";
import App from './App.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <BrowserRouter>
        <CarsProvider>
          <GlobalHistory />
          <App />
        </CarsProvider>
      </BrowserRouter>
    </React.StrictMode>
  </QueryClientProvider>
);
