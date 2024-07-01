import "./style.css";
import { X } from "lucide-react";
import { CartItem as CartItemType } from "../../types";
import { formatter } from "../../utils/format-currency";
import InputQuantity from "../input-quantity";

interface CartItemProps {
  data: CartItemType;
  onRemove: (cartItem: CartItemType) => void;
}

const CartItem = ({ data, onRemove }: CartItemProps) => {
  const onClick = () => {
    onRemove(data);
  };

  const totalPriceItem = data.product.price * data.quantity;

  return (
    <li className="cart-item-container">
      <div className="cart-item-image-container">
        <img src={data.product.imageUrl} alt={data.product.name} />
      </div>
      <div className="cart-item-infos">
        <div className="remove-item-button">
          <button onClick={onClick}>
            <X size={15} />
          </button>
        </div>
        <div className="cart-item-infos-grid">
          <div className="cart-item-name">
            <p>{data.product.name}</p>
          </div>
          <div className="cart-item-description">
            <p>{data.product.description}</p>
          </div>
          <div className="cart-item-quantity">
            <InputQuantity item={data} />
          </div>
          <div className="cart-item-price">
            <div>{formatter.format(totalPriceItem)}</div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
