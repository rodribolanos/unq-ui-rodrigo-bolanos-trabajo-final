import './LoaderBalls.css';

const LoaderBalls = () => {
    return (
        <div className="container">
            <div className="cargando">
                <div className="pelotas"></div>
                <div className="pelotas"></div>
                <div className="pelotas"></div>
                <span className="texto-cargando">Cargando...</span>
            </div>
        </div>
    )
}

export default LoaderBalls;

