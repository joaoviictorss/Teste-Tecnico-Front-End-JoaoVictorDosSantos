import { ShoppingBag } from "lucide-react";
import Container from "../container";
import "./style.css";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="header-content">
          <span className="logo">NextGen</span>

          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Produtos</a>
              </li>
            </ul>
          </nav>

          <div className="cart">
            <button>
              <a href="/cart">
                <ShoppingBag size={20} color="white" />
                <span className="cart-count">0</span>
              </a>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
