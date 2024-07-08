import '../../utils/globals.css'
import {useEffect, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import LoaderBalls from "../../components/LoaderBalls/LoaderBalls.jsx";
import Option from "../../components/Option/Option.jsx";
import {getQuestions} from "../../service/api.js";

const Questions = () => {
    const [params] = useSearchParams();
    const difficulty = params.get('difficulty')

    const [questions, setQuestions] = useState([])
    const [index, setIndex] = useState(0)
    const [result, setResult] = useState(0)
    const [playable, setPlayable] = useState(true)

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        getQuestions(difficulty)
            .then((response) => {
                setQuestions(response.data)
            })
            .catch(() => {
                setError("Something has happened, try again")
            })
            .finally(() => {
                setTimeout( () => setLoading(false), 2000)
            })
    }, [difficulty])

    if (error) {
        return <div>{error}</div>;
    }

    if (loading) {
        return <LoaderBalls />;
    }
    return (
        index <= questions.length - 1 ?
            <>
                <div className="resultContainer">
                    <h2>Result: {result}</h2>
                </div>
                <div className="questionContainer">
                    <h1>{questions[index].question}</h1>
                </div>
                <div className="button-container">
                    {Object.keys(questions[index])
                        .filter(key => key.startsWith('option'))
                        .map(optionKey => (
                            <Option
                                key={optionKey}
                                questionID={questions[index].id}
                                optionKey={optionKey}
                                text={questions[index][optionKey]}
                                setResult={setResult}
                                setIndex={setIndex}
                                playable={playable}
                                setPlayable={setPlayable}
                            />
                        ))}
                </div>
            </>
            :
            <div className="finish">
                <h1>Thanks for playing!</h1>
                <h2>Result: {result}</h2>
                <Link to={'/'}>Play again</Link>
              </div>
    )
}

export default Questions;