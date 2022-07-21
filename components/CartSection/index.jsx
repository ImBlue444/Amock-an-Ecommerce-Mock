import { useAppContext } from "../Context/state";

export default function CartSection() {
  const context = useAppContext();

  return (
    <div>
      <h2> {context.cart.length > 0 ? "Your cart:" : "Your cart is empty!"}</h2>
      {context.cart.map((e) => (
        <div className="card">
          <img src={e.image} width={200}></img>
          <h3>
            <b>{e.title}</b>
          </h3>
          <p>{e.price}</p>
        </div>
      ))}
    </div>
  );
}
