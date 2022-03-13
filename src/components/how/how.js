import { SectionTitle } from "../who/styledWho";
import { HowSection, HowGrid } from "./styledHow";
import { images } from '../../constants/how/how';
import Language from "../language/language";


const How = () => {

    return (
        <HowSection id='how'>
            <SectionTitle>
                How?
            </SectionTitle>
            <HowGrid>
                {images.map((language) => {
                    return (
                        <Language
                            image={language.image}
                            text={language.name} />
                    )
                })}
            </HowGrid>
        </HowSection>
    )
}

export default How;