import { MouseEventHandler } from "react";
import useCart from "../../hooks/use-cart";
import { Product } from "../../types";
import { formatter } from "../../utils/format-currency";
import "./style.css";

import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const cart = useCart();

  const onAddtoCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem({ product: data, quantity: 1 });
  };

  return (
    <div className="card-container">
      {/* Imagem do produto */}
      <div className="image-container">
        <img src={data.imageUrl} alt="product-image" />
        <div className="cart-button-container">
          <div className="cart-button-center">
            <button className="cart-button" onClick={onAddtoCart}>
              <ShoppingCart size={20} color="#4b5563" />
            </button>
          </div>
        </div>
      </div>
      {/* Descrição do produto */}
      <div>
        <p className="product-name">{data.name}</p>
        <p className="product-description">{data.description}</p>
      </div>
      {/* Preço do produto */}
      <div className="product-price">
        <div>{formatter.format(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
