import { PlayButton, Player, PlayerTitle, PlayStation, PlaySym, Subtitle } from "./styledMusicPlayer";
import playButton from '../../images/playSym.png';
import pauseButton from '../../images/pauseSym.png';
import { useState } from 'react';

const MusicPlayer = (props) => {

    const [playing, setPlaying] = useState(false);

    const playTune = () => {
        props.playTune();
        setPlaying(!playing);
    }

    const pauseTune = () => {
        props.pauseTune();
        setPlaying(!playing);
    }

    return (
        <Player>
            <PlayerTitle>
                Piraeus
            </PlayerTitle>
            <Subtitle>by Tristan Boyd</Subtitle>
            <PlayStation>
                <PlayButton
                    onClick={playing ? pauseTune : playTune}>
                    <PlaySym src={playing ? pauseButton : playButton} />
                </PlayButton>
            </PlayStation>
        </Player>
    )
}

export default MusicPlayer;