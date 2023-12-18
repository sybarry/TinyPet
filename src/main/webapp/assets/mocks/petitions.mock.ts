import { Petition } from 'src/app/models/petition';

export const PETITIONS: Petition[] = [
    {
        title: 'Help find Madeleine McCann',
        image: '/assets/images/Logo.png',
        description: 'Madeleine Beth McCann (born 12 May 2003) disappeared on the evening of 3 May 2007 from her bed in a holiday apartment ',
        creationDate: new Date('2019-06-01'),
        tags: [],
        signatureCount: 3,
        signatureGoal: 1000,
        author: {
            id: '1X2Y3Z',
            name: 'John Doe',
            image: '/assets/images/Logo.png',
            email: '',
            signedPetitions: [],
            createdPetitions: [],
        },
        comments: [],
    },
    {
        title: 'Stop the Yulin Dog Meat Festival',
        image: '/assets/images/Logo.png',
        description: 'The Yulin Dog Meat Festival is an annual celebration held in Yulin, Guangxi, China, during the ',
        creationDate: new Date('2019-06-01'),
        tags: [],
        signatureCount: 21,
        signatureGoal: 5500,
        author: {
            id: '1X2Y3Z',
            name: 'Hamid Zaml',
            image: '/assets/images/Logo.png',
            email: '',
            signedPetitions: [],
            createdPetitions: [],
        },
        comments: [],
    },
    {
        title: 'Help the Amazon Rainforest',
        image: '/assets/images/Logo.png',
        description: 'the Amazon rainforest is the world\'s largest tropical rainforest. It covers an area of 5,500,000 km2 (2,100,000 sq mi). ',
        creationDate: new Date('2019-06-01'),
        tags: [],
        signatureCount: 0,
        signatureGoal: 10,
        author: {
            id: '1X2Y3Z',
            name: 'Je suis une merde',
            image: '/assets/images/Logo.png',
            email: '',
            signedPetitions: [],
            createdPetitions: [],
        },
        comments: [],
    }
];
