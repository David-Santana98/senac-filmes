import SecaoFilmes from "@/components/SecaoFIlmes";

export default function Home() {

  const filmes = [
  {
    titulo: "Super Mario Bros.: O Filme",
    poster:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/i9XdxHsFrcqLkRWSF1coOHo4R39.jpg",
  },

  {
    titulo: "Creed III",
    poster:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/wDugyjvDQsuwm9j9hkmK4whCOti.jpg",
  }
 ]
  return (
    <>
      <h1>Senac Filmes</h1>

      <SecaoFilmes titulo="Filmes em alta" filme={filmes}/>
      <SecaoFilmes titulo="Melhores dramas" filme={filmes}/>
    </>
  );
}
