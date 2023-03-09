import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import products from "../json/products.json";

export default function Home() {
  return (
    <div className="container main-layout">
      <Header className="layout-header" />
      <ProductList products={products} className="layout-content" />
      <Footer className="layout-footer" />
    </div>
  );
}
