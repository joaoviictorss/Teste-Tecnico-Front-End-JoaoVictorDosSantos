import { ShoppingBag } from "lucide-react";
import Container from "../container";
import "./style.css";
import useCart from "../../hooks/use-cart";

const Header = () => {
  const cart = useCart();

  return (
    <header>
      <Container>
        <div className="header-content">
          <a href="/" className="logo">
            NextGen
          </a>

          <nav>
            <ul>
              <li>
                <a href="/#id-billboard">Home</a>
              </li>
              <li>
                <a href="/#id-products">Produtos</a>
              </li>
            </ul>
          </nav>

          <div className="cart">
            <button>
              <a href="/cart">
                <ShoppingBag size={20} color="white" />
                <span className="cart-count">{cart.items.length}</span>
              </a>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
