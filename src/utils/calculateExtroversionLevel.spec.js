import calculateExtroversionLevel, {INTROVERT, EXTROVERT} from './calculateExtroversionLevel';
import '@testing-library/jest-dom/extend-expect';

it("should return introvert for answers with an average below 5 of extroverionLevel", () => {
    const answers = [
        {
            answer: 'answer1',
            extroversionLevel: 5,
        },
        {
            answer: 'answer2',
            extroversionLevel: 5,
        },
        {
            answer: 'answer3',
            extroversionLevel: 4,
        }
    ];

    expect(calculateExtroversionLevel(answers)).toBe(INTROVERT);
});

it("should return extrover for answers with an average above 5 of extroverionLevel", () => {
    const answers = [
        {
            answer: 'answer1',
            extroversionLevel: 5,
        },
        {
            answer: 'answer2',
            extroversionLevel: 5,
        },
        {
            answer: 'answer3',
            extroversionLevel: 6,
        }
    ];

    expect(calculateExtroversionLevel(answers)).toBe(EXTROVERT);
});