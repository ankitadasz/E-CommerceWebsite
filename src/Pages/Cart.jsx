import { useCart } from "../Context/CartContext";
import "../Cart.css";

export const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const formatPrice = (price) =>
    price.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const totalItems = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, product) =>
      total + product.price * 70 * product.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-cart">
          <h1>Your Cart is Empty</h1>
          <p>Add something you love to your cart.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1 className="cart-heading">My Cart</h1>

      <div className="cart-layout">
        {/* CART ITEMS */}
        <div className="cart-items">
          {cart.map((product) => (
            <div className="cart-item" key={product.id}>
              <div className="cart-image-box">
                <img
                  src={product.image}
                  alt={product.title}
                />
              </div>

              <div className="cart-item-info">
                <h2>{product.title}</h2>

                <p className="cart-category">
                  {product.category}
                </p>

                <p className="cart-price">
                  ₹{formatPrice(product.price * 70)}
                </p>

                <div className="quantity-control">
                  <button
                    onClick={() =>
                      decreaseQuantity(product.id)
                    }
                  >
                    −
                  </button>

                  <span>{product.quantity}</span>

                  <button
                    onClick={() =>
                      increaseQuantity(product.id)
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="remove-cart-btn"
                  onClick={() =>
                    removeFromCart(product.id)
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ORDER SUMMARY */}
        <div className="cart-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Items</span>
            <span>{totalItems}</span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{formatPrice(totalPrice)}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span className="free-delivery">FREE</span>
          </div>

          <div className="cart-total">
            <span>Total</span>
            <span>₹{formatPrice(totalPrice)}</span>
          </div>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};