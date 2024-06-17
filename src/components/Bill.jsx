import { useBill } from "../context/BillContext";
import { useClickOut } from "../hooks/useClickOut";

function Bill() {
  const { bill, onBill, borderActive } = useBill();
  const [parentRef, inputRef] = useClickOut();

  function handleMouseEnter() {
    parentRef.current.style.border = borderActive;
  }

  function handleMouseLeave() {
    parentRef.current.style.border = "1px solid transparent";
  }

  function handleChange(e) {
    onBill(e.target.value === "" ? "" : Number(e.target.value));
    const eValid = e.target.value === "" || Number(e.target.value) > 0;
    eValid && (parentRef.current.style.border = borderActive);
  }

  return (
    <li className="data-item">
      <label className="label">Bill</label>
      <ul className="input-item-row" ref={parentRef}>
        <li>
          <img
            className="icon"
            src="./images/icon-dollar.svg"
            alt="dollar"
          ></img>
        </li>
        <li>
          <input
            className="input"
            placeholder="0"
            type="number"
            value={isNaN(bill) ? "" : bill}
            onChange={handleChange}
            ref={inputRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </li>
      </ul>
    </li>
  );
}

export default Bill;
