import "./App.css";
import { createServer } from "miragejs";
import Header from "./components/header";

function App() {
  let server = createServer({
    routes() {
      this.namespace = "api";

      this.get("/products", () => {
        return {
          products: [
            {
              id: 1,
              name: "EA Sports FC 24 - PlayStation 5",
              price: 300,
              description:
                "O EA SPORTS FC 24 traz para você o Jogo de Todo Mundo. A experiência mais autêntica de futebol de todos os tempos com o HyperMotionV*, PlayStyles otimizada pela Opta e uma Frostbite Engine aprimorada, que reinventa como mais de 19.000 atletas realistas se movimentam, jogam e aparecem em todas as partidas.",
              imageUrl:
                "https://m.media-amazon.com/images/I/61+lZsNKGuL._AC_SL1020_.jpg",
            },
            {
              id: 2,
              name: "Marvel's Spider-Man 2 - Edição Standard - PlayStation 5",
              price: 249,
              description:
                "Efeitos visuais incríveis produzidos a partir do mecanismo personalizado da Insomniac Games.",
              imageUrl:
                "https://m.media-amazon.com/images/I/81RfcW3Ml-L._AC_SL1500_.jpg",
            },
            {
              id: 3,
              name: "Elden Ring - Shadow of The Erdtree - PlayStation 5",
              price: 380,
              description:
                "A Ordem Áurea foi quebrada. Levante-se, Maculado, e seja guiado pela graça para empunhar o poder do Anel Prístino e se tornar um Lorde Prístino nas Terras Intermédias. ELDEN RING, é um RPG de ação e fantasia ambientado em um mundo cheio de mistério e perigo.",
              imageUrl:
                "https://m.media-amazon.com/images/I/81j-34Pnr2L._AC_SL1500_.jpg",
            },
            {
              id: 4,
              name: "GTA V - PlayStation 5",
              price: 119,
              description:
                "Gráficos Deslumbrantes — Melhorias nos níveis de fidelidade e desempenho, incluindo novos modos gráficos com resolução de até 4K e 60 quadros por segundo, opções de HDR, raytracing, texturas aprimoradas e muito mais.",
              imageUrl:
                "https://m.media-amazon.com/images/I/718md8Ry+IL._AC_SL1020_.jpg",
            },
            {
              id: 5,
              name: "The Last of Us Part II Remastered - PlayStation 5",
              price: 208,
              description:
                "Vencedor de mais de 300 prêmios de Jogo do Ano, remasterizado para o console PS5.",
              imageUrl:
                "https://m.media-amazon.com/images/I/61KU9GYqDPL._AC_SL1000_.jpg",
            },
            {
              id: 6,
              name: "God of War Ragnarök - Edição Standard - PlayStation 5",
              price: 299,
              description:
                "Embarque em uma jornada épica e comovente onde Kratos e Atreus lutam entre o desejo de manterem-se unidos ou separar-se.",
              imageUrl:
                "https://m.media-amazon.com/images/I/8136lnf0n2L._AC_SL1500_.jpg",
            },
            {
              id: 7,
              name: "ASTRO BOT – PS5",
              price: 299,
              description:
                "Embarque em uma missão galáctica e explore mais de 50 planetas em busca da tripulação perdida de ASTRO.",
              imageUrl:
                "https://m.media-amazon.com/images/I/81NlyUp51nL._AC_SL1500_.jpg",
            },
            {
              id: 8,
              name: "Sonic Frontiers - PlayStation 5",
              price: 198,
              description:
                "Uma nova experiência de plataforma em zona aberta Percorra cinco ilhas enormes, repletas de florestas densas, cachoeiras exuberantes e desertos escaldantes. Cada cenário tem desafios únicos de ação-plataforma e segredos para você descobrir.",
              imageUrl:
                "https://m.media-amazon.com/images/I/81Q+mNuGfML._AC_SL1500_.jpg",
            },
          ],
        };
      });
    },
  });

  const response = fetch("/api/products")
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <>
      <Header />
      <h1>Hello world!</h1>
    </>
  );
}

export default App;
