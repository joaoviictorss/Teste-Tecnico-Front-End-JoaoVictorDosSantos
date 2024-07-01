import useCart from "../../hooks/use-cart";
import { formatter } from "../../utils/format-currency";
import "./style.css";

const Sumary = () => {
  const items = useCart((state) => state.items);

  const totalPrice = items.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  return (
    <div className="sumary-container">
      <h2>Resumo do pedido:</h2>
      <div className="sumary-total-price-container">
        <div className="sumary-total-price">
          <div className="text-total-price">Valor total:</div>
          <div className="total-price">{formatter.format(totalPrice)}</div>
        </div>
      </div>
      <button
        className="button-checkout"
        onClick={() => {}}
        disabled={items.length === 0}
      >
        Finalizar compra
      </button>
    </div>
  );
};

export default Sumary;
