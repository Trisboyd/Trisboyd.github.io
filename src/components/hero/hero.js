import React from 'react';
import { HeroSection, Job, Name, Profile, ProfileText } from './styledHero';
import Header from '../header/header';
import MusicPlayer from '../musicPlayer/musicPlayer';

const Hero = () => {

    return (
        <HeroSection>
            <MusicPlayer />
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