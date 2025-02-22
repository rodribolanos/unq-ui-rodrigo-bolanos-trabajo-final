import {useNavigate} from "react-router-dom";

const Home = () => {
    const randomColors  = ['#4278FF', '#9F02FF', 'red', 'green', 'orange', 'yellow', 'orange', "#AEFF01", "#02FFE8", "#FF0294", "#FFE802"]

    const navigate = useNavigate();

    const goDifficulties = () => {
        navigate('/difficulty');
    }

    return (
        <div>
            <h1>Welcome to: </h1>
            <span>
                {randomColors.map((color, index) => (
                    <span key={index} style={{color, fontSize: 35}}>{'PREGUNTADOS'[index]}</span>
                ))}
            </span>
            <div className='button-container'>
                <button className='button' onClick={goDifficulties}>Start</button>
            </div>
        </div>
    );
}

export default Home