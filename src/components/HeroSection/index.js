import React, { useState } from 'react';
import Video from '../../videos/keyboard.mp4'
import { Button } from '../ButtonElements';
import { useCookies } from 'react-cookie';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroSectionElement';

const HeroSection = () => {
    const [cookies, setCookie] = useCookies(['name']);

    fetch('http://c6d0e633b39a.ngrok.io/api/csfr_token', {
        credentials: 'include',
    })
    console.log('here')
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>A Time Machine for</HeroH1>
                <HeroH1>Personal Knowledge</HeroH1>
                <HeroP>Join our free Beta program now!</HeroP>
                <HeroBtnWrapper>
                    <Button
                        to='signup'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        primary='true'
                        dark='true'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
