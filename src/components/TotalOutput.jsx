import { useBill } from "../context/BillContext";

function TotalOutput() {
  const { totalAmount } = useBill();

  return (
    <li className="amount-section">
      <section>
        <p className="label-1">Total</p>
        <p className="label-2">/ person</p>
      </section>
      <span className="amount">${totalAmount.toFixed(2)}</span>
    </li>
  );
}

export default TotalOutput;
