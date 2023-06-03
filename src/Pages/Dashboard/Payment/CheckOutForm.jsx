import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import "./CheckOutForm.css";

const CheckOutForm = ({ totalPrice }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useAuth();
    useEffect(() => {
        if (totalPrice > 0) {
        console.log(  totalPrice);
      axiosSecure.post("/create-payment-intent", { totalPrice }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [totalPrice, axiosSecure]);

  //   useEffect(() => {
  //     fetch("http://localhost:5000/create-payment-intent", {
  //       method: "POST",
  //       headers: { "content-type": "application/json" },
  //       body: JSON.stringify({ totalPrice }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }, [totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("payment method", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "unknown",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log("pay intent", paymentIntent);
    if (paymentIntent?.status === "succeeded") {
      const transactionId = paymentIntent.id;
    }
  };
  return (
    <>
      <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="btn  btn-primary btn-sm my-4"
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 text-sm">{cardError}</p>}
    </>
  );
};

export default CheckOutForm;
