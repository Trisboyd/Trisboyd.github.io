import { WhatBlock, WhatGrid, WhatSection } from './styledWhat';
import around from '../../images/aroundUs.png';
import newsSearch from '../../images/newsSearch.png';
import newCrob from '../../images/NewCrobuzonMap.png';
import { SectionTitle } from '../who/styledWho';
import WhatBlockHover from '../whatBlock/whatBlockHover';
import Fade from 'react-reveal/Fade';

const What = (props) => {

    const openPopup = () => {
        props.openPopup();
    }

    return (
        <WhatSection>
            <SectionTitle>What?</SectionTitle>
            <Fade>
                <WhatGrid>
                    <WhatBlock
                        pic={around}
                        rStart={2}
                        cStart={1}>
                        <WhatBlockHover
                            title={'Around the US'}
                            stack={'React | Node.js'}
                            openPopup={openPopup} />
                    </WhatBlock>
                    <WhatBlock
                        pic={newsSearch}
                        rStart={1}
                        cStart={2}>
                        <WhatBlockHover
                            title={'News Explorer'}
                            stack={'React | Node.js'}
                            openPopup={openPopup} />
                    </WhatBlock>
                    <WhatBlock
                        pic={newCrob}
                        rStart={2}
                        cStart={3}>
                        <WhatBlockHover
                            title={'New Crobuzon'}
                            stack={'React'}
                            openPopup={openPopup} />
                    </WhatBlock>
                </WhatGrid>
            </Fade>
        </WhatSection>
    )
}

export default What;