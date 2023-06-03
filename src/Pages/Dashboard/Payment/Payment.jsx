import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../Hooks/useCart";

//TODO: Provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const totalPrice = parseFloat(total.toFixed(2));
  return (
    <div>
      <SectionTitle subHeading={"Please process"} heading={"Payment"} />
      <h3 className="text-3xl">Teka o tkea tumi uira uira aso ....</h3>
      <Elements stripe={stripePromise}>
        <CheckOutForm cart={cart} totalPrice={totalPrice} />
      </Elements>
    </div>
  );
};

export default Payment;

