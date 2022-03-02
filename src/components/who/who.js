import { Pic, WhoInfo, WhoSection, WhoText, SectionTitle } from "./styledWho";
import pic from '../../images/hatPic.jpg';
import Slide from 'react-reveal/Slide';

const Who = () => {

    return (
        <WhoSection>
            <Slide left>
                <WhoText>
                    <SectionTitle>Who?</SectionTitle>
                    <WhoInfo>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum
                        eu facilisis sed odio morbi quis commodo. Morbi tristique senectus et
                        netus et. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque
                        mauris. Facilisis sed odio morbi quis commodo.
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