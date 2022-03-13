import { Pic, WhoInfo, WhoSection, WhoText, SectionTitle } from "./styledWho";
import pic from '../../constants/who/hatPic.jpg';
import Slide from 'react-reveal/Slide';
import { bio, bio2 } from '../../constants/who/who';

const Who = () => {

    return (
        <WhoSection id='who'>
            <Slide left>
                <WhoText>
                    <SectionTitle>Who?</SectionTitle>
                    <WhoInfo>
                        {bio}
                    </WhoInfo>
                    <WhoInfo>
                        {bio2}
                    </WhoInfo>
                </WhoText>
            </Slide>
            <Slide right>
                <Pic src={pic} />
            </Slide>
        </WhoSection>
    )
}

export default Who;