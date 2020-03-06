export function handleAnswer(e, questionId) {
    return {
        type: 'HANDLE_ANSWER', payload: {
            questionId, questionId: e.target.value
        }
    }
};

export function next(question) {
    return {
        type: 'NEXT', payload: {
            ...question
        }
    }
};
