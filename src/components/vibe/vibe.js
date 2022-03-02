import { Vibe, VibeBar, Link } from "../vibe/styledVibe";

const VibeNav = () => {

    return (
        <Vibe>
            <VibeBar>
                <Link>Home</Link>
            </VibeBar>
            <VibeBar>
                <Link>Who</Link>
            </VibeBar>
            <VibeBar>
                <Link>What</Link>
            </VibeBar>
            <VibeBar>
                <Link>Why</Link>
            </VibeBar>
            <VibeBar>
                <Link>How</Link>
            </VibeBar>
        </Vibe>
    )
}

export default VibeNav;