"use client";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortfolioPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  
  const projects = [
    {
      name: "Game:space",
      imageUrl: "https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "projeto: (jogo de fliperama de space atack) Tecnologia usada:(HTML,CSS e JavaScript)",
      githubUrl: "https://github.com/Lucas-Santana-Oliveira/game",
      liveDemoUrl: "https://game-red-five.vercel.app/"
    },
    {
      name: "E-commerce",
      imageUrl: "https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Projeto:(Loja virtual de E-commerce da nike com sistema backend de manipulação de registro de produtos e lotes) tecnologia usada:(front:HTML,CSS e JavaScript back:node.js,express.js, mongodb).",
      githubUrl: "https://github.com/Lucas-Santana-Oliveira/e-commerce",
      liveDemoUrl: "https://e-commerce-omega-gold.vercel.app/"
    },
    {
      name: "Dashboard",
      imageUrl: "https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Projeto:(dashboard simples de resolução) tecnologia usada(HTML,CSS e JavaScript).",
      githubUrl: "https://github.com/Lucas-Santana-Oliveira/dashboard",
      liveDemoUrl: "https://dashboard-eight-xi-34.vercel.app/"
    },
    {
      name: "Dashboard Pagamento",
      imageUrl: "https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Projeto:(Dashboard de pagamento, vocè pode salvar e registra seu pagamentos e fatura feitas no dia a dia com um grafico de resolução do fluxo monetario). tecnologia usada:(front:React.js e javascript back:Node.js,express e mongodb).",
      githubUrl: "https://github.com/Lucas-Santana-Oliveira/page",
      liveDemoUrl: "https://page-theta-eight.vercel.app/"
    },
    {
      name: "Gemini-Clone",
      imageUrl: "https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Projetos:(clone do chat-gemini utilizando a propria api) tecnologia usada:(Next.js,ApiGemini,Tailwindss,JavaScript e React.js).",
      githubUrl: "https://github.com/Lucas-Santana-Oliveira/gemini-clone",
      liveDemoUrl: "https://gemini-clone-sage.vercel.app/"
    },
    {
      name: "Sound",
      imageUrl: "https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Projeto:(boxsound replicado as frases registrada dos personagems) Tecnologia usada:(React.js).",
      githubUrl: "https://github.com/Lucas-Santana-Oliveira/sound",
      liveDemoUrl: "https://sound-five.vercel.app/"
    },
    {
      name: "Music",
      imageUrl: "https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Projeto:(interface de playlist musica e albúns) Tecnologia usada(React.js,vite e Typescript).",
      githubUrl: "https://github.com/Lucas-Santana-Oliveira/music",
      liveDemoUrl: "https://music-seven-iota.vercel.app/"
    },
    {
      name: "Pokedex",
      imageUrl: "https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Projeto:( Pokedex onde você pode escolher um pokemon saber seu poderes,habilidades e evolução sabe sua localização, compara-lo com outros pokemons onde você tambem pode salva sua propria iista de pokemon)Tecnologia usada:( React.js,typescript,SaSS e firebase).",
      githubUrl: "https://github.com/Lucas-Santana-Oliveira/pokemon",
      liveDemoUrl: "https://pokedex-amber-gamma.vercel.app/pokemon/1"
    },
    {
      name: "Receita-IA",
      imageUrl: "https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Projeto:(Registra usario e cadastra o usuario para acessar a pagina de receita-ia, você pode pedi para inteligencia artificial criar uma receita de acordo com os ingrediente que você possui salva-los e paga-los quando você quiser) Tecnologia usada:(Front:React.js,javascript e API-Gemini back: node.js,typescript,express.js e prisma).",
      githubUrl: "https://github.com/Lucas-Santana-Oliveira/Receita-IA",
      liveDemoUrl: "https://receita-ia.vercel.app/"
    },
    {
      name: "Lading Page",
      imageUrl: "https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Projeto:(Uma lading Page simples falando sobre IA de uma rede paga) Tecnologia usada:(React.js,Vite e Tailwinds)",
      githubUrl: "https://github.com/Lucas-Santana-Oliveira/status",
      liveDemoUrl: "https://status-khaki.vercel.app/"
    },
  
  ];

  return (
    <motion.div
      className="h-full bg-gray-200"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <section id="projects" className="max-w-screen-md mx-auto px-8 py-12 md:py-12">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </Slider>
      </section>
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  const { name, imageUrl, description, githubUrl, liveDemoUrl } = project;

  return (
    <div className="border border-gray-300 bg-white rounded-lg p-6 mx-auto rounded-6x3 shadow-md">
      <img
        src={imageUrl}
        alt="Project Image"
        className="rounded-full w-64 h-44 mx-auto"
      />
      <h2 className="mt-4 text-xl font-bold text-black">{name}</h2>
      <p className="mt-2 text-gray-700">{description}</p>
      <div className="flex justify-center mt-4">
        <button className="px-4 py-2 mr-2 text-sm text-black border border-gray-300 rounded">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-black">Github</a>
        </button>
        <button className="px-4 py-2 ml-2 text-sm text-black border border-gray-300 rounded">
          <a href={liveDemoUrl} target="_blank" rel="noopener noreferrer" className="text-black">Live Demo</a>
        </button>
      </div>
    </div>
  );
};

export default PortfolioPage;
