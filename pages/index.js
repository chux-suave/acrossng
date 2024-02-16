import Hero from "./components/Hero";
import Layout from "./components/Layout";
import ProductItem from "./components/ProductItem";

export default function Home() {
  return (
    <Layout title="Home">
      <Hero />
      <ProductItem />
    </Layout>
  );
}
