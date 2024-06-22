import {useEffect, useState} from "react";
import {getDifficulty} from "../../service/api.js";
import {useNavigate} from "react-router-dom";
import LoaderBalls from "../../components/LoaderBalls/LoaderBalls.jsx";

const Difficulty = ()  => {
    const [difficulties, setDifficulties] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading]    = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        getDifficulty()
            .then((response) => {
                setDifficulties(response.data);
            })
            .catch(() => {
                setError("Something has happened, try again")
            })
            .finally( () => {
                setLoading(false)
                }
            )
    }, []);

    const goHome = () => {
        navigate('/');
    }
    return (
        <div>
            <h1>Difficulty</h1>
            <p>Choose the difficulty</p>
            {loading ?
                <LoaderBalls/>
                :
                <div className='button-container'>
                {difficulties.map((difficulty) => (
                    <button className='button'>{difficulty}</button>
                ))}
                </div>
            }
            <button onClick={goHome}>
                Welcome back
            </button>
        </div>
    )
}

export default Difficulty;