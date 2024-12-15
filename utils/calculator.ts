export const initialState = {
  currentValue: '0',
  previousValue: null,
  operator: null,
};

export const calculator = (type: any, value: any, state: any) => {
  switch (type) {
    case 'number':
      // If it's the first number, set it directly
      if (state.currentValue === '0') {
        return { ...state, currentValue: String(value) };
      }
      // Concatenate the number to the current value
      return { ...state, currentValue: state.currentValue + value };

    case 'operator':
      // If there's already an operator, calculate the previous and current value
      if (state.operator && state.previousValue !== null) {
        return {
          ...state,
          currentValue: evaluate(state.previousValue, state.operator, state.currentValue),
          previousValue: state.currentValue,
          operator: value,
        };
      }
      return {
        ...state,
        previousValue: state.currentValue,
        operator: value,
        currentValue: '0', // Reset current value for the next number input
      };

    case 'equal':
      if (state.operator && state.previousValue !== null) {
        return {
          ...state,
          currentValue: evaluate(state.previousValue, state.operator, state.currentValue),
          previousValue: null,
          operator: null,
        };
      }
      return state;

    case 'clear':
      return { ...initialState };

    case 'posneg':
      return {
        ...state,
        currentValue: (parseFloat(state.currentValue) * -1).toString(),
      };

    case 'percentage':
      return {
        ...state,
        currentValue: (parseFloat(state.currentValue) / 100).toString(),
      };

    default:
      return state;
  }
};

// Utility function to evaluate the operation
const evaluate = (previous, operator, current) => {
  const prev = parseFloat(previous);
  const currentVal = parseFloat(current);

  switch (operator) {
    case '+':
      return (prev + currentVal).toString();
    case '-':
      return (prev - currentVal).toString();
    case '*':
      return (prev * currentVal).toString();
    case '/':
      if (currentVal === 0) return 'Error';
      return (prev / currentVal).toString();
    default:
      return current;
  }
};
