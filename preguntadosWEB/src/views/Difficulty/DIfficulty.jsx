import '../../utils/globals.css'
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import LoaderBalls from "../../components/LoaderBalls/LoaderBalls.jsx";
import {getDifficulty} from "../../service/api.js";

const Difficulty = ()  => {
    const [difficulties, setDifficulties] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading]    = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        getDifficulty()
            .then((response) => {
                setDifficulties(response.data)
            })
            .catch(() => {
                setError("Something has happened, try again")
            })
            .finally( () => {
                 setTimeout( () => setLoading(false), 2000)
                }
            )
    }, []);

    const goHome = () => {
        navigate('/');
    }

    const goPlay = (difficulty) => () => {
        navigate('/play?difficulty='+difficulty)
    }
    if (error) {
       return (
           <div>
               <h1>Difficulty</h1>
               <p className={'error'}>{error}</p>
               <button onClick={goHome}>
                   Welcome back
               </button>
           </div>
       )
    }
    return (
        <div>
            {loading ? <LoaderBalls/> :
                (<>
                    <h1>Difficulty</h1>
                    <span>Choose the difficulty</span>
                    <div className='button-container'>
                        {difficulties.map((difficulty) => (
                        <button key={difficulty} className='button' onClick={goPlay(difficulty)}>{difficulty}</button>
                    ))}
                    </div>
                </>)
            }
            <button onClick={goHome}>
                Welcome back
            </button>
        </div>
    )
}

export default Difficulty;