import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import products from "../json/products.json";
import { useProducts } from "../react-query";

export default function Home() {
  const { data, isLoading } = useProducts();
  const products = data || [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];
  return (
    <div className="container main-layout">
      <Header className="layout-header" />
      <ProductList
        products={products}
        isLoading={isLoading}
        className="layout-content"
      />
      <Footer className="layout-footer" />
    </div>
  );
}
