export default function Registrar() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-800">
      <h1 className="text-4xl font-bold text-amber-400">Criar Conta</h1>
      <form className="flex flex-col w-1/3">
        <label htmlFor="email" className="text-amber-400 font-bold">Email</label>
        <input
          className="rounded border-2 text-white border-slate-600 bg-slate-800 p-2 mb-4 focus:border-amber-400 focus:outline-none"
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="senha" className="text-amber-400 font-bold">Senha</label>
        <input 
          className="rounded border-2 text-white border-slate-600 bg-slate-800 p-2 mb-4 focus:border-amber-400 focus:outline-none"
          id="senha"
          type="password"
          value={senha}
          onChange={e => setSenha(e.target.value)}



        />
        <button className="rounded bg-amber-400 text-black px-5 py-2 hover:bg-amber-300">
          Criar Conta </button>
      </form>
    </div>
  );
}
