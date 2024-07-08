import './LoaderBalls.css';
import {useEffect} from "react";

const LoaderBalls = () => {
    const colors = ['#4278FF', '#9F02FF', 'red', 'green', 'orange', 'yellow', 'orange', "#AEFF01", "#02FFE8", "#FF0294", "#FFE802"]
    function getRandomColor() {
        return colors[Math.floor(Math.random() * colors.length)];
    }

    useEffect(() => {
        const pelotas = document.querySelectorAll('.pelotas');
        pelotas.forEach(pelota => {
            pelota.style.backgroundColor = getRandomColor();
            pelota.addEventListener('animationiteration', () => {
                pelota.style.backgroundColor = getRandomColor();
            });
        });
    }, []);

    return (
        <div className="container">
            <div className="cargando">
                <div className="pelotas"></div>
                <div className="pelotas"></div>
                <div className="pelotas"></div>

            </div>
            <div className="texto-cargando">Wait a moment...</div>
        </div>
    )
}

export default LoaderBalls;

