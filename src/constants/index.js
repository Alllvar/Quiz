export const NEXT = 'NEXT';

export const INPUT_TYPES = {
    RADIO: 'radio',
    CHECKBOX: 'checkbox',
    TEXT: 'text',
    SELECT: 'select',
};

export const QUESTIONS = [
    {
        id: 1,
        text: 'When second world war started?',
        inputType: INPUT_TYPES.RADIO,
        correctAnswerId: 2,
        answers: [
            {
                id: 1,
                text: '1938'
            },
            {
                id: 2,
                text: '1939'
            },
            {
                id: 3,
                text: '1940'
            },
            {
                id: 4,
                text: '1941'
            }
        ]
    },
    {
        id: 2,
        text: 'What is proper age to buy cigarettes?',
        inputType: INPUT_TYPES.CHECKBOX,
        correctAnswerIds: [1,2],
        answers: [
            {
                id: 1,
                text: '19'
            },
            {
                id: 2,
                text: '18'
            },
            {
                id: 3,
                text: '17'
            },
            {
                id: 4,
                text: '12'
            }
        ]
    },
    {
        id: 3,
        text: 'What is proper age to buy alcohol?',
        inputType: INPUT_TYPES.SELECT,
        correctAnswerId: 1,
        answers: [
            {
                id: 1,
                text: '19'
            },
            {
                id: 2,
                text: '16'
            },
            {
                id: 3,
                text: '17'
            },
            {
                id: 4,
                text: '12'
            }
        ]
    },
    {
        id: 4,
        text: 'What is official language in Ukraine',
        inputType: INPUT_TYPES.TEXT,
        correctAnswer: 'Ukrainian'
    }
];

// export const QUESTIONS = [
//     {
//         text: 'Сколько планет в Солнечной системе?',
//         id: 1,
//         answers: [
//             { text: '8', id: 1 },
//             { text: '9', id: 2 },
//             { text: '11', id: 3 }
//         ]
//      },
//     {
//         text: 'Ближайшая к Солнцу планета',
//         id: 2,
//         answers: [
//             { text: 'Юпитер', id: 1 },
//             { text: 'Плутон', id: 2 },
//             { text: 'Меркурий', id: 3 }
//         ]
//      },
//     {
//         text: 'Самая большая планета Солнечной системы',
//         id: 3,
//         answers: [
//             { text: 'Марс', id: 1 },
//             { text: 'Земля', id: 2 },
//             { text: 'Юпитер', id: 3 }
//         ]
//      },
//     {
//         text: 'Какая по счету от Солнца планета Земля?',
//         id: 4,
//         answers: [
//             { text: '5', id: 1 },
//             { text: '3', id: 2 },
//             { text: '4', id: 3 }
//         ]
//     }
// ];
