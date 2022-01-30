export const increment = (num: number) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const decrement = (num: number) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};

const counterReducer = (state = 0, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

export default counterReducer;
