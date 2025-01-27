import { Petition } from 'src/app/models/petition';

export const PETITIONS: Petition[] = [
    {
        id: 1,
        title: 'Help find Madeleine McCann',
        image: 'https://w0.peakpx.com/wallpaper/740/727/HD-wallpaper-r-d-r-2-view-ultra-games-red-dead-redemption-game-reddeadredemption-reddeadredemption2-view.jpg',
        description: 'Madeleine Beth McCann (born 12 May 2003) disappeared on the evening of 3 May 2007 from her bed in a holiday apartment ',
        creationDate: new Date('2019-06-01'),
        tags: [],
        signatureCount: 702,
        signatureGoal: 1000,
        author: 'John Doe',
    },
    {
        id: 2,
        title: 'Stop the Yulin Dog Meat Festival',
        image: '/assets/images/Logo.png',
        description: 'The Yulin Dog Meat Festival is an annual celebration held in Yulin, Guangxi, China, during the ',
        creationDate: new Date('2019-06-01'),
        tags: [],
        signatureCount: 21,
        signatureGoal: 5500,
        author: 'Hamid Hamid',
    },
    {
        id: 3,
        title: 'Help the Amazon Rainforest',
        image: '/assets/images/Logo.png',
        description: 'the Amazon rainforest is the world\'s largest tropical rainforest. It covers an area of 5,500,000 km2 (2,100,000 sq mi). ',
        creationDate: new Date('2019-06-01'),
        tags: [],
        signatureCount: 0,
        signatureGoal: 10,
        author: 'xXBlaireauXx',
    },
    ]
