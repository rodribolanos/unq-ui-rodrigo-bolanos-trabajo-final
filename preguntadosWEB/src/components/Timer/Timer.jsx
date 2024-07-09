import './Timer.css';
import {useEffect, useState} from "react";
import {incorrectSound} from "../../utils/utils.js";

const Timer = ({initialTime, onTimeUp, resetKey, playable, setPlayable}) => {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [visibleError, setVisibleError] = useState(false);

    useEffect(() => {
        //Cada vez que cambia el index desde Questions, seteo un nuevo tiempo
        setTimeLeft(initialTime);
        setVisibleError(false);
    }, [resetKey, initialTime]);

    useEffect(() => {
        // Timeout para que el tiempo se vaya restando.
        const timer = setTimeout(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            } else if (playable) {
                setVisibleError(true);
                incorrectSound.play();
                setPlayable(false);
                setTimeout(() => {
                    setVisibleError(false)
                    onTimeUp() } , 2000);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft, onTimeUp]);

    return (
        <>
            <div className="cross-container">
                {visibleError && (
                <div className="timeout-text">TIMEOUT! </div>
                )}
            </div>
        <div className="timer">
            <span>Time left: {timeLeft}s</span>
        </div>
        </>
    );
}

export default Timer