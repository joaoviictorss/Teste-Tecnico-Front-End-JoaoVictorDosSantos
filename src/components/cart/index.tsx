import "./style.css";
import Container from "../container";
import useCart from "../../hooks/use-cart";
import CartItem from "../cart-item/cart-item";
import Sumary from "../sumary";
import { CartItem as CartItemType } from "../../types";

const Cart = () => {
  const cart = useCart();

  const onRemove = (cartItem: CartItemType) => {
    cart.removeItem(cartItem.product.id);
  };

  return (
    <div>
      <Container>
        <div className="cart-container">
          <h1>Carrinho</h1>
          <div className="cart-grid-container">
            <div className="cart-items-container">
              {cart.items.length === 0 && <p>Seu carrinho está vazio</p>}
              <ul>
                {cart.items.map((item) => (
                  <CartItem
                    data={item}
                    key={item.product.id}
                    onRemove={onRemove}
                  />
                ))}
              </ul>
            </div>

            <Sumary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
