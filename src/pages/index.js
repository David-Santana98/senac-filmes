import CardFilme from "@/components/CardFilme";

export default function Home() {
  const mario = {
    titulo: "Super Mario Bros.: O Filme",
    poster:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/i9XdxHsFrcqLkRWSF1coOHo4R39.jpg",
  };

  const creed = {
    titulo: "Creed III",
    poster:
      "https://www.themoviedb.org/t/p/w220_and_h330_face/wDugyjvDQsuwm9j9hkmK4whCOti.jpg",
  };
  return (
    <>
      <h1>Senac Filmes</h1>

      <h2>Filmes em alta</h2>
      <section>
      <CardFilme filme={mario} />
      <CardFilme filme={creed} />
      </section>

      <h2>Melhores dramas</h2>
      <section>
      <CardFilme filme={mario} />
      <CardFilme filme={creed} />
      </section>
    </>
  );
}
