import '../../utils/globals.css'
import {useEffect, useState} from "react";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import LoaderBalls from "../../components/LoaderBalls/LoaderBalls.jsx";
import Option from "../../components/Option/Option.jsx";
import Timer from "../../components/Timer/Timer.jsx";
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
    const navigate = useNavigate()

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
    }, [])


    const handleTimeUp = () => {
        setIndex(prevIndex => prevIndex + 1);
        setPlayable(true)
    };

    if (error) {
        return (
            <>
                <div className={'error'}>{error}</div>
                <button onClick={() => navigate('/play?difficulty='+difficulty)}> Start again! </button>
                <button onClick={() => navigate('/')}> Go back to home </button>
            </>
        )
    }

    if (loading) {
        return <LoaderBalls />;
    }
    return (
        index <= questions.length - 1 ?
            <>
                <Timer initialTime={10} onTimeUp={handleTimeUp} resetKey={index}  playable={playable} setPlayable={setPlayable}/>
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
                <div className="resultContainer">
                    <h2>Result: {result}</h2>
                </div>
            </>
            :
            <div className="finish">
                <h1>Thanks for playing!</h1>
                <h2>Result: {result}</h2>
                { result < 5 ? <h3>Try again!</h3> : <h3>Good job!</h3> }
                {result === 10 ? <h3>Perfect score! You are J!</h3> : null}
                <Link to={'/'} style={{ color: 'white' }}>Play again</Link>
            </div>
    )
}

export default Questions;