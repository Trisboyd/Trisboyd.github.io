import { Vibe, VibeBar, Link } from "../vibe/styledVibe";
import { VibeData } from '../../constants/vibe/vibe';

const VibeNav = () => {

    return (
        <Vibe>
            {VibeData.map((data) => {
                return (
                    <VibeBar href={data.link}>
                        <Link>{data.name}</Link>
                    </VibeBar>
                )
            })}
        </Vibe>
    )
}

export default VibeNav;