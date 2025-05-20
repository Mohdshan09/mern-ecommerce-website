import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import UserProvider from "./providers/user-provider";

const router = createRouter({ routeTree });

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </UserProvider>
  </StrictMode>,
);
