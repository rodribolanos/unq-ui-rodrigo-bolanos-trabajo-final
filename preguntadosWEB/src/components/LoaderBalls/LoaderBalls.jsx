import './LoaderBalls.css';
import {useEffect} from "react";

const LoaderBalls = () => {
    const colors = ['red', 'lightblue', 'pink', 'green', 'yellow'];
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
            <div className="texto-cargando">Cargando...</div>
        </div>
    )
}

export default LoaderBalls;

