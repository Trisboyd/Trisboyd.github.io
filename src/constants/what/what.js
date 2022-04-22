import newCrobP from './NewCrobPlace.png';
import newCrobR from './NewCrobRace.png';
import newCrob from './NewCrobuzonMap.png'

import aroundHome from './aroundUs.png';
import aroundLogin from './around-login.png';
import aroundAdd from './around-add.png';

import newsHome from './newsHomeP.png';
import newsSearch from './newsSearch.png';
import newsSaved from './newsSaved.png';

import cryptoMain from './crypto-main.png';
import cryptoGraph from './crypto-graph.png';

import accHome from './accHome.png';
import accProblem from './accProblem.png';
import accCycle from './accCycle.png';


export const NewCrobData = {
    title: 'Explore New Crobuzon',
    about: 'Fascinated by the fantasy/steampunk world of China Mieville, I created an interactive site to explore the city and races of New Crobuzon.',
    images: [
        newCrob,
        newCrobP,
        newCrobR
    ],
    stack: 'React | BEM',
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
    stack: 'React | Styled-Components | Node.js | Netlify | Heroku',
    site: 'https://wonderful-yonath-9a8bb2.netlify.app/#/',
    code: 'https://github.com/Trisboyd/news-explorer-frontend'
}

export const AroundData = {
    title: 'Around the US',
    about: 'Like Instagram, save photos of locations and interact with other users posts in an interactive web community.',
    images: [
        aroundHome,
        aroundLogin,
        aroundAdd
    ],
    stack: 'React | Node.js | Heroku',
    site: 'https://trisboyd.github.io/react-around-auth/#/signup',
    code: 'https://github.com/Trisboyd/react-around-auth'
}

export const CryptoData = {
    title: 'Crypto Watch',
    about: 'Collects current market information on top cryptocurrencies and presents the information in accessible formats.',
    images: [
        cryptoMain,
        cryptoGraph
    ],
    stack: 'React | Styled-Components',
    site: 'https://trisboyd.github.io/coin-mock/',
    code: 'https://github.com/Trisboyd/coin-mock'
}

export const AccData = {
    title: "Awesome Container Company",
    about: "Hung Lam aims to drastically reduce restaurant waste through the use of reusable containers. This website teaches about his company and connects new partners.",
    images: [
        accHome,
        accProblem,
        accCycle
    ],
    stack: 'React | Styled-Components | Framer-Motion',
    site: 'https://beautiful-meringue-f9bf10.netlify.app/',
    code: 'https://github.com/rileydanejohnston/apiary-acc'
}