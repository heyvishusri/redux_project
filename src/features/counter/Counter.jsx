import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");

  return (
    <div style={styles.card}>
      <h2>Counter</h2>
      <p style={styles.count}>{count}</p>

      <div style={styles.row}>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>

      <div style={styles.row}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(incrementByAmount(Number(amount) || 0));
            setAmount("");
          }}
        >
          Add Amount
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #eee",
    padding: 16,
    borderRadius: 12,
    maxWidth: 320,
  },
  row: { display: "flex", gap: 8, marginTop: 8 },
  count: { fontSize: 32, margin: 0 },
};
