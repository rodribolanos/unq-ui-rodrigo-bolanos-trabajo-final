import './Option.css';
import {postAnswer} from "../../service/api.js";
import {useState} from "react";
import {correctSound, incorrectSound} from "../../utils/utils.js";

const Option = ({questionID, optionKey, text, setResult, setIndex, playable, setPlayable, setNetworkError}) => {
    const [status, setStatus] = useState('unselected')


    const submitAnswer = () => {
        if (!playable) return;

        const body = {
            questionId: questionID,
            option: optionKey
        };
        setPlayable(false);
        postAnswer(body)
            .then(response => {
                const result = response.data.answer;
                setStatus(result ? 'correct' : 'incorrect');
                if (result) {
                    correctSound.play();
                } else {
                    incorrectSound.play();
                }
                setTimeout(() => {
                    setResult(prevResult => prevResult + (result ? 1 : 0));
                    setIndex(prevIndex => prevIndex + 1);
                    setStatus('unselected');
                    setPlayable(true);
                }, 2000);
            })
            .catch(() => {
                setNetworkError(true);
                setPlayable(true);
                setTimeout(() => {
                    setNetworkError(false);
                }, 2000)
            });

    };

    return (
        <button onClick={submitAnswer} className={'option'+status}> {text} </button>
    )
}

export default Option