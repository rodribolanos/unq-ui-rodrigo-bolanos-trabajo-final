import {useNavigate} from "react-router-dom";

const Home = () => {
    const randomColors  = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6']

    const navigate = useNavigate();

    const goDifficulties = () => {
        navigate('/difficulty');
    }

    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to PREGUNTADOS</p>
            <p>
                {randomColors.map((color, index) => (
                    <span key={index} style={{color}}>{'PREGUNTADOS'[index]}</span>
                ))}
            </p>
            <div className='button-container'>
                <button className='button' onClick={goDifficulties}>Start</button>
            </div>
        </div>
    );
}

export default Home