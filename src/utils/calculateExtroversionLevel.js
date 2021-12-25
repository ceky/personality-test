export const INTROVERT = 'introvert';
export const EXTROVERT = 'extrovert';

/**
 * Each answer is marked from 1-10 based on the extroversion level, 1 being the most introvert
 * 
 * @param {array} answers 
 * @returns {string} extrovert / introvert
 */
export default function calculateExtroversionLevel(answers) {
    const sumExtroversion = answers.reduce((sum, answer) => sum += answer.extroversionLevel, 0);
    const averageExtroversionLevel = sumExtroversion / answers.length;

    return averageExtroversionLevel > 5 ? EXTROVERT : INTROVERT;
}