import useCart from "../../hooks/use-cart";
import { CartItem } from "../../types";
import "./style.css";
import { useEffect, useState } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";

interface InputQuantityProps {
  item: CartItem;
}

const InputQuantity = ({ item }: InputQuantityProps) => {
  const cart = useCart();

  const [productQuantity, setProductQuantity] = useState(item.quantity);

  useEffect(() => {
    cart.updateItemQuantity(item.product.id, productQuantity);
    productQuantity <= 0 && cart.removeItem(item.product.id);
  }, [productQuantity]);

  return (
    <div className="input-quantity-container">
      <button onClick={() => setProductQuantity(productQuantity + 1)}>
        {<PlusIcon size={12} />}
      </button>
      <span>{productQuantity}</span>
      <button onClick={() => setProductQuantity(productQuantity - 1)}>
        {<MinusIcon size={12} />}
      </button>
    </div>
  );
};

export default InputQuantity;
