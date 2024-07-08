import './Option.css';
import {postAnswer} from "../../service/api.js";
import {useState} from "react";

const Option = ({questionID, optionKey, text, setResult, setIndex, playable, setPlayable}) => {
    const [status, setStatus] = useState('unselected')


    const submitAnswer = () => {
        if (!playable) return;

        const body = {
            questionId: questionID,
            option: optionKey // Suponiendo que optionKey es un número y quieres convertirlo en 'optionX'
        };
        setPlayable(false);
        postAnswer(body)
            .then(response => {
                const result = response.data.answer;
                setStatus(result ? 'correct' : 'incorrect');
                setTimeout(() => {
                    setResult(prevResult => prevResult + (result ? 1 : 0));
                    setIndex(prevIndex => prevIndex + 1);
                    setStatus('unselected');
                    setPlayable(true);
                }, 2000);
            })
            .catch(() => {
                setStatus('incorrect');
                setPlayable(true);
            });

    };

    return (
        <button onClick={submitAnswer} className={'option'+status}> {text} </button>
    )
}

export default Option