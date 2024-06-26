import "./App.css";
import Container from "./components/container";
import ProductCard from "./components/product-card";
import { Product } from "./types";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <>
      <Container>
        <div className="billboard-container" id="id-billboard">
          <div className="billboard">
            <div className="title-container">
              <div className="title">
                Descontos de 10% em Jogos de Playstation 5
              </div>
            </div>
          </div>
        </div>

        <div className="products" id="id-products">
          <h2>Produtos com desconto</h2>
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard data={product} key={product.id} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
