import { useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "dddfdf",
    photo:
      "https://adminapi.applegadgetsbd.com/storage/media/large/MacBook-Pro-M3-16inch---Silver-3587.jpg",
    name: "Macbook",
    price: 343535,
    quantity: 3434,
    stock: 22,
  },
];
const subtotal = 40000;
const tax = Math.round(subtotal * 0.18);
const shipingCharges = 200;
const total = subtotal + tax + shipingCharges;
const discount = 400;

const Cart = () => {
  const [coupon, setCoupon] = useState<string>("");
  const [isValidCoupon, setIsValidCoupon] = useState<boolean>(false);
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => <CartItem key={idx} cartItem={i} />)
        ) : (
          <h1>No Item Added</h1>
        )}
      </main>

      <aside>
        <p>Subtotal: ${subtotal}</p>
        <p>Shiping Charges: ${shipingCharges}</p>
        <p>Taxes : ${tax}</p>
        <p>
          Discount : <em>-${discount}</em>
        </p>
        <p>
          <b>Total: {total}</b>
        </p>
        <input
          type="text"
          placeholder="coupon code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        {coupon &&
          (isValidCoupon ? (
            <span>
              ${discount} of using the <code>{coupon}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}
        {cartItems.length > 0 && <Link to={"/shipping"}>Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
