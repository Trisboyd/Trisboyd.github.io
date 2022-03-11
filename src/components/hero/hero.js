import React from 'react';
import { HeroSection, Job, Name, Profile, ProfileText } from './styledHero';
import Header from '../header/header';

const Hero = () => {

    return (
        <HeroSection>
            <Header />
            <Profile>
                <ProfileText>
                    <Name>
                        Tristan Boyd
                    </Name>
                    <Job>
                        Full Stack Developer
                    </Job>
                </ProfileText>
            </Profile>
        </HeroSection>
    )
}

export default Hero;