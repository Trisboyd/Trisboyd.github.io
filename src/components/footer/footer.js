import { FooterSection, FooterText, Image, Link, Links } from "./styledFooter";
import twitter from '../../images/twitter.png';
import youtube from '../../images/youtube.jpg';
import github from '../../images/github.jpg';
import linkedin from '../../images/linkedin.png';
import { links } from '../../constants/footer/footer';

const Footer = () => {

    return (
        <FooterSection>
            <Links>
                <Link
                    href={links.github}
                    target='_blank'>
                    <Image src={github} />
                </Link>
                <Link
                    href={links.linkedin}
                    target='_blank'>
                    <Image
                        src={linkedin}
                        padding='5px' />
                </Link>
                <Link
                    href={links.twitter}
                    target='_blank'>
                    <Image src={twitter} />
                </Link>
                <Link
                    href={links.youtube}
                    target='_blank'>
                    <Image src={youtube} />
                </Link>
            </Links>
            <FooterText>
                © 2022 | Tristan Boyd
            </FooterText>
        </FooterSection>
    )
}

export default Footer;