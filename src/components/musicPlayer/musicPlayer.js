import { PlayButton, Player, PlayerSpan, PlayerTitle, PlayStation, PlaySym } from "./styledMusicPlayer";
import playButton from '../../images/playSym.png';
import pauseButton from '../../images/pauseSym.png';

const MusicPlayer = () => {

    return (
        <Player>
            <PlayerTitle>Now Playing:<br /><PlayerSpan>Hire Me</PlayerSpan></PlayerTitle>
            <PlayStation>
                <PlayButton>
                    <PlaySym src={playButton} />
                </PlayButton>
                <PlayButton>
                    <PlaySym src={pauseButton} />
                </PlayButton>
            </PlayStation>
        </Player>
    )
}

export default MusicPlayer;