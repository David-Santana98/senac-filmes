

export default function CardFilme({filme}) {
    // const {filme} = props; destruturação
    return (
        <div className="p-4 w-56">
            <img className="rounded-lg"  src={filme.poster} alt="poster do filme" />
            <h3 className="text-xl my-3 line-clamp-1">{filme.titulo}</h3>
            <a className="bg-amber-500 text-black px-5 py-1 rounded"  href="#">detallhes</a>
        </div>
    )
}