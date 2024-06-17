import { useEffect, useRef } from "react";
import { useBill } from "../context/BillContext";

function Reset() {
  const { onReset, bill, people, tip, customTip } = useBill();
  const resetRef = useRef();

  const isActive = [bill, people, tip, customTip].some(
    (el) => el > 0 && !isNaN(el)
  );

  useEffect(
    function () {
      if (isActive) {
        resetRef.current.style.opacity = "1";
      } else {
        resetRef.current.style.opacity = "0.2";
      }
    },
    [isActive]
  );

  return (
    <button className="reset" onClick={onReset} ref={resetRef}>
      RESET
    </button>
  );
}

export default Reset;
