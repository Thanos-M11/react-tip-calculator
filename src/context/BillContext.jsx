import { createContext, useContext, useReducer } from "react";

const BillContext = createContext();

const initialState = {
  bill: "",
  tip: "",
  people: "",
  tips: [5, 10, 15, 25, 50, "custom"],
  activeTipId: null,
  customTip: "",
  borderActive: "2px solid var(--color-primary)",
  borderAlert: "2px solid var(--color-red)",
};

const reducer = function (state, action) {
  switch (action.type) {
    case "reset":
      return initialState;
    case "bill/entered":
      return {
        ...state,
        bill: action.payload,
      };
    case "tip/entered":
      return {
        ...state,
        tip: state.tips[action.payload],
        activeTipId: action.payload,
      };
    case "customTip/entered":
      return {
        ...state,
        tip: action.payload,
        activeTipId: state.tips.indexOf("custom"),
        customTip: action.payload,
      };

    case "people/entered":
      return {
        ...state,
        people: action.payload,
      };

    default:
      return initialState;
  }
};

function BillProvider({ children }) {
  const [
    {
      bill,
      tip,
      people,
      tips,
      activeTipId,
      customTip,
      borderActive,
      borderAlert,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  // derived state
  const tipAmount =
    Number(people) < 1
      ? 0
      : (Number(bill) * Number(tip)) / 100 / Number(people);
  const totalAmount =
    Number(people) < 1
      ? 0
      : (Number(bill) + (Number(bill) * Number(tip)) / 100) / Number(people);

  // dispatch handlers
  function handleBill(value) {
    dispatch({ type: "bill/entered", payload: value });
  }

  function handleTip(tipId) {
    dispatch({ type: "tip/entered", payload: tipId });
  }

  function handleCustomTip(value) {
    dispatch({ type: "customTip/entered", payload: value });
  }

  function handlePeople(value) {
    dispatch({ type: "people/entered", payload: value });
  }

  function handleReset() {
    dispatch({ type: "reset" });
  }

  return (
    <BillContext.Provider
      value={{
        bill,
        tip,
        people,
        tipAmount,
        totalAmount,
        tips,
        activeTipId,
        customTip,
        borderActive,
        borderAlert,
        onBill: handleBill,
        onTip: handleTip,
        onCustomTip: handleCustomTip,
        onPeople: handlePeople,
        onReset: handleReset,
      }}
    >
      {children}
    </BillContext.Provider>
  );
}

function useBill() {
  const context = useContext(BillContext);
  if (context === undefined)
    throw new Error(
      "The Bill Context used outside of the Bill Context Provider"
    );
  return context;
}

export { BillProvider, useBill };
