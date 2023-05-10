

export default function CardFilme({filme}) {
    // const {filme} = props; destruturação
    return (
        <div>
            <img src={filme.poster} alt="poster do filme" />
            <h3 className="text-xl">{filme.titulo}</h3>
            <a href="#">detallhes</a>
        </div>
    )
}