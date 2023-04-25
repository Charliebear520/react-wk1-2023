import "antd/dist/reset.css";
import "./App.css";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

// import { feedProducts } from "./api";
// feedProducts();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />;
    </QueryClientProvider>
  );
}

export default App;
