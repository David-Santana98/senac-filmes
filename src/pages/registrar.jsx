
export default function Registrar() {
    return (
        <div className="flex flex-col items-center 
        justify-center h-screen bg-slate-800">

            <h1 className="text-4xl font-bold
            text-amber-400">Criar Conta</h1>

            <form className="flex flex-col w-1/3">
                <label htmlFor="email" className="text-amber-400
                font-bold">Email</label>
                <input id="email" type="email" className="rounded border-2
                text-white border-slate-600 bg-slate-800 p-2 mb-4"/>
            </form>
        </div>
    )
}