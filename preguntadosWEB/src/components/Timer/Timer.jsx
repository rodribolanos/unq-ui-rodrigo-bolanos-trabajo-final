import './Timer.css';
import {useEffect, useState} from "react";
import {incorrectSound} from "../../utils/utils.js";

const Timer = ({initialTime, onTimeUp, resetKey}) => {
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
            } else {
                setVisibleError(true);
                incorrectSound.play();
                setTimeout(() => {
                    setVisibleError(false)
                    onTimeUp() } , 2000);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft, onTimeUp]);

    return (
        <div className="timer">
            <span>Time left: {timeLeft}s</span>
            {visibleError && (
                <div className="red-cross"></div>
            )}
        </div>
    );
}

export default Timer