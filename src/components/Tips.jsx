import { useBill } from "../context/BillContext";

function Tips() {
  const { tips } = useBill();

  return (
    <li className="data-item">
      <label className="label">Select Tip %</label>
      <ul className="tip-group">
        {tips.map((el, i) => (
          <Tip key={el} id={i} tip={el} />
        ))}
      </ul>
    </li>
  );
}

function Tip({ tip, id }) {
  const { onTip, activeTipId, onCustomTip, tips, customTip } = useBill();

  const isCustom = id === tips.indexOf("custom");
  const isActive = activeTipId === id;

  return (
    <>
      {!isCustom ? (
        <li
          className={`tip-item ${isActive ? "active-tip" : ""}`}
          value={id}
          onClick={(e) => onTip(e.target.value)}
        >
          {tip}%
        </li>
      ) : (
        <li>
          <input
            className="tip-custom"
            type="text"
            placeholder="Custom"
            value={isActive ? customTip : ""}
            onChange={(e) => onCustomTip(Number(e.target.value))}
          />
        </li>
      )}
    </>
  );
}
export default Tips;
