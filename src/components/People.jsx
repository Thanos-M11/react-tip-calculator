import { useBill } from "../context/BillContext";
import { useClickOut } from "../hooks/useClickOut";

function People() {
  const { people, onPeople, borderActive, borderAlert } = useBill();
  const isValid = Number(people) > 0 || people === "";

  const [parentRef, inputRef] = useClickOut();

  function handleMouseEnter() {
    parentRef.current.style.border = borderActive;
  }

  function handleMouseLeave() {
    if (isValid) {
      parentRef.current.style.border = "1px solid transparent";
    } else {
      parentRef.current.style.border = borderAlert;
    }
  }

  function handleChange(e) {
    onPeople(e.target.value === "" ? "" : Number(e.target.value));

    const eValid = e.target.value === "" || Number(e.target.value) > 0;

    eValid && (parentRef.current.style.border = borderActive);
    !eValid && (parentRef.current.style.border = borderAlert);
  }

  return (
    <li className="data-item">
      <ul className="label-line">
        <li>
          <label className="label">Number of People</label>
        </li>
        <li>
          {!isValid && <label className="alert">Can&apos;t be zero</label>}
        </li>
      </ul>

      <ul className="input-item-row" ref={parentRef}>
        <li>
          <img
            className="icon"
            src="./images/icon-person.svg"
            alt="person"
          ></img>
        </li>
        <li>
          <input
            className="input"
            type="text"
            placeholder="0"
            value={people}
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

export default People;
