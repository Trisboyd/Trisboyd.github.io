import newCrobP from './NewCrobPlace.png';
import newCrobR from './NewCrobRace.png';
import newCrob from './NewCrobuzonMap.png'

import aroundHome from './aroundUs.png';

import newsHome from './newsHomeP.png';
import newsSearch from './newsSearch.png';
import newsSaved from './newsSaved.png';

export const NewCrobData = {
    title: 'Explore New Crobuzon',
    about: 'Fascinated by the fantasy/steampunk world of China Mieville, I created an interactive site to explore the city and races of New Crobuzon.',
    images: [
        newCrob,
        newCrobP,
        newCrobR
    ],
    stack: 'React',
    site: 'https://trisboyd.github.io/new-crobuzon-app/',
    code: 'https://github.com/Trisboyd/new-crobuzon-app'
};

export const NewsData = {
    title: 'News Explorer',
    about: 'Create an account, search for articles (through NewsAPI), and save your own collection of news you find personally relevant.',
    images: [
        newsHome,
        newsSearch,
        newsSaved
    ],
    stack: 'React | Styled-Components | Node.js',
    site: 'https://wonderful-yonath-9a8bb2.netlify.app/#/',
    code: 'https://github.com/Trisboyd/news-explorer-frontend'
}

export const AroundData = {
    title: 'Around the US',
    about: 'Like Instagram, save photos of locations and interact with other users posts in an interactive web community.',
    images: [
        aroundHome
    ],
    stack: 'React | Node.js',
    site: 'https://trisboyd.github.io/react-around-auth/#/signup',
    code: 'https://github.com/Trisboyd/react-around-auth'
}