export const saveQuestions = (questions) => {
  return {
    type: "populateQuestions",
    payload: questions
  };
};