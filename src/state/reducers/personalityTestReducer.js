const initialState = {
  questions: [],
  answers: []
};
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "populateQuestions":
        return {
          ...state,
          questions: action.payload
        };
      case "addAnswer":
        return {
            ...state,
            answers: [
                ...state.answers,
                action.payload
            ]
        }
      default:
        return state;
    }
  };
  
  export default reducer;
  