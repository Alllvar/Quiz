import { NEXT } from './constants/index';

export function next(question) {
    return {
        type: NEXT, payload: {
            ...question
        }
    }
};
