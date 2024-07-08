import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const goDifficulties = () => {
        navigate('/difficulty');
    }

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to PREGUNTADOS</p>
            <div className='button-container'>
                <button className='button' onClick={goDifficulties}>Start</button>
            </div>
        </div>
    );
}

export default Home