export const initialValue = { value: 0 };
export const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    case "RESET":
      return { value: 0 };
    case "INCREASE_BY":
      return { value: state.value + action.param };
    case "DECREASE_BY":
      return { value: state.value - action.param };
    default:
      return { initialValue };
  }
};
