import React, { useState } from 'react';
import Video from '../../videos/keyboard.mp4'
import { Button } from '../ButtonElements';
import { BackendURL }from '../BackendURL'
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
import Signup from '../SignUp'


const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const [popup, setState] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    
    
    return (
        
        <>
        <Signup open={popup} onClose={() => setState(false)} />
        
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>We built a Time Machine</HeroH1>
                <HeroH1>for Personal Knowledge</HeroH1>
                <HeroP>Join our free Beta program now!</HeroP>
                <HeroBtnWrapper>
                    <Button
                        onClick={() => setState(true)}
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
        </>
    )
}

export default HeroSection
