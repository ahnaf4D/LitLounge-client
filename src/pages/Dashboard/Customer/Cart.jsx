import useCart from "../../../hooks/useCart";

const Cart = () => {
    const { cartItems } = useCart();
    console.log(cartItems);
    return (
        <div className="px-4 bg-red-400">
            <h1>Your Cart : {0}</h1>
        </div>
    );
};

export default Cart;