import { useBill } from "../context/BillContext";

function TipOutput() {
  const { tipAmount } = useBill();

  return (
    <li className="amount-section">
      <section>
        <p className="label-1">Tip Amount</p>
        <p className="label-2">/ person</p>
      </section>
      <span className="amount">${tipAmount.toFixed(2)}</span>
    </li>
  );
}

export default TipOutput;
