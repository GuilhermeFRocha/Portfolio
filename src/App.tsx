import { useState } from "react";

import { MyCarousel } from "./components/Carousel";

import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineWhatsApp,
  AiOutlineHtml5,
} from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript, IoLogoSass } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiGraphql,
} from "react-icons/si";
import { RxDiscordLogo } from "react-icons/rx";

import Logo from "./assets/Logo.png";
import Perfil from "./assets/perfil.jpg";

import {
  CardsLearning,
  CompanyExperience,
  ContainerAbout,
  ContainerExperience,
  ContainerHeader,
  ContainerLearning,
  ContainerProject,
  ContentAbout,
  ContentExperience,
  ContentLearning,
  ContentProject,
  DescAbout,
  DescExperience,
  DescLearning,
  Footer,
  Header,
  ImgPerfil,
  InfoBoxExperience,
  NavBar,
  SocialMedia,
} from "./styles";

interface ItemsProps {
  name: string;
  title: string;
  duration: string;
  description: string;
}

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [desc, setDesc] = useState(
    "Passe o cursor do mouse no card para ler..."
  );

  const company = [
    {
      name: "Dgthus Company",
      title: "Desenvolvedor Front-End",
      duration: "Nov 2022 - Abr 2023 (6 meses)",
      description:
        "Desenvolvedor da plataforma Dgthus company, uma plataforma que gerencia os dados dos clientes e dos cientistas de dados. Tecnologias utilizadas: Prisma, React, Typescript, Styled-components, Git e AWS. Criaçao de conteúdo digital para o instagram e de videos para o youtube falando sobre tecnologia e programaçao.",
    },
    {
      name: "Lazertur",
      title: "Desenvolvedor Front-End",
      duration: "Jun 2022 - Nov 2022 (6 meses)",
      description:
        "Desenvolvedor da plataforma Férias Facil, que é uma plataforma que o cliente inseri e ganha creditos para viagens futuras. Tecnologias utilizadas: Fire, React, Typescript, Styled-components, Git e AWS. Criaçao de landing pages de alta conversão.",
    },
    {
      name: "Agencia R8",
      title: "Desenvolvedor Front-End",
      duration: "Ago 2021 - Jun 2022 (11 meses)",
      description: `Desenvolvedor de aplicaçoes na tray, shopfy, wordpress e nuvemshop. Criaçao de landing pages de alta conversão.Usabilidade do Figma e Photoshop.`,
    },
  ];

  const learning = [
    {
      icon: AiOutlineHtml5,
      desc: "HTML (Hypertext Markup Language) é a linguagem usada para criar conteúdo web estático.",
    },
    {
      icon: IoLogoCss3,
      desc: "CSS (Cascading Style Sheets) é uma linguagem de estilo usada para adicionar design e layout a páginas web.",
    },
    {
      icon: IoLogoJavascript,
      desc: "JS (JavaScript) é uma linguagem de programação usada para adicionar interatividade a páginas web.",
    },
    {
      icon: IoLogoSass,
      desc: "SASS é um pré-processador CSS para escrever estilos de forma mais eficiente, possui variáveis e funções.",
    },
    {
      icon: FaReact,
      desc: "React é uma biblioteca JavaScript usada para criar interfaces de usuário (UI) complexas e escaláveis.",
    },
    {
      icon: TbBrandNextjs,
      desc: "Next.js é um framework JavaScript que permite criar aplicativos React com facilidade e eficiência.",
    },
    {
      icon: SiStyledcomponents,
      desc: "Styled Components é uma biblioteca que permite criar estilos reutilizáveis para componentes React.",
    },
    {
      icon: SiTailwindcss,
      desc: "Tailwind é uma biblioteca CSS que oferece classes pré-definidas para estilos comuns, permitindo criar rapidamente designs personalizados.",
    },
    {
      icon: SiTypescript,
      desc: "TypeScript é uma linguagem de programação que adiciona recursos de tipagem estática ao JavaScript.",
    },
    {
      icon: SiStorybook,
      desc: "Storybook é uma ferramenta que ajuda a desenvolver, testar e documentar componentes UI isoladamente.",
    },
    {
      icon: FaNodeJs,
      desc: "Node.js é um ambiente de execução de JavaScript no servidor, permitindo a construção de aplicações escaláveis como servidores web, APIs e chatbots",
    },
    {
      icon: SiGraphql,
      desc: "GraphQL é uma linguagem de consulta usada para obter dados de uma API, permitindo aos clientes solicitar apenas as informações necessárias.",
    },
  ];

  function handleClick(item: ItemsProps | any) {
    setActiveIndex(item);
  }

  const activeCompany = company[activeIndex];

  const handleMouseOver = (desc: any) => {
    setDesc(desc);
  };

  return (
    <>
      <Header>
        <ContainerHeader>
          <img src={Logo} alt="Logo header" width={100} />
          <NavBar>
            <li>
              <a href=""> Ínicio</a>
            </li>
            <li>
              <a href=""> Sobre mim</a>
            </li>
            <li>
              <a href=""> Experiências</a>
            </li>
            <li>
              <a href=""> Projetos</a>
            </li>
            <li>
              <a href=""> Conhecimentos</a>
            </li>
          </NavBar>
        </ContainerHeader>
      </Header>

      <main>
        <ContainerAbout>
          <ContentAbout>
            <ImgPerfil>
              <img src={Perfil} alt="perfil" />
            </ImgPerfil>

            <DescAbout>
              <span>Sobre mim</span>
              <h2>Guilherme Freitas da Rocha</h2>
              <h3>Frontend Developer</h3>
              <p>
                Me chamo Guilherme, tenho 24 anos e sou um programador
                autodidata que sempre teve uma paixão pela tecnologia e
                computadores. Atuo na área de desenvolvimento há mais de 2 anos
                e desenvolvo em diversas linguagens e framewroks como React,
                JavaScript, Typescrcipt, Jquery, Next, Node, entre outros...
              </p>

              <SocialMedia>
                <a href="https://www.instagram.com/guicodev/" target="Blank">
                  <AiOutlineInstagram size="32px" color="#986dff" />
                </a>
                <a
                  href="https://www.linkedin.com/in/guilherme-freitas-dev/"
                  target="Blank"
                >
                  <AiOutlineLinkedin size="32px" color="#986dff" />
                </a>
                <a href="https://github.com/GuilhermeFRocha" target="Blank">
                  <AiOutlineGithub size="32px" color="#986dff" />
                </a>
                <a href="https://discord.gg/AvBHMuEp" target="Blank">
                  <RxDiscordLogo size="32px" color="#986dff" />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5534988860312&text=Seja%20bem-vindo!"
                  target="Blank"
                >
                  <AiOutlineWhatsApp size="32px" color="#986dff" />
                </a>
              </SocialMedia>
            </DescAbout>
          </ContentAbout>
        </ContainerAbout>
        <ContainerExperience>
          <ContentExperience>
            <h2>Experiências</h2>

            <DescExperience>
              <CompanyExperience>
                {company.map((item, index) => (
                  <li
                    key={index}
                    className={index === activeIndex ? "active" : ""}
                    onClick={() => handleClick(index)}
                  >
                    {item.name}
                  </li>
                ))}
              </CompanyExperience>
              <InfoBoxExperience>
                <div>
                  <h4>{activeCompany.title}</h4>
                  <span>{activeCompany.duration}</span>
                </div>
                <h5>{activeCompany.name}</h5>
                <p>{activeCompany.description}</p>
              </InfoBoxExperience>
            </DescExperience>
          </ContentExperience>
        </ContainerExperience>

        <ContainerProject>
          <ContentProject>
            <h2>Projetos</h2>
            <MyCarousel />
          </ContentProject>
        </ContainerProject>

        <ContainerLearning>
          <ContentLearning>
            <DescLearning>
              <h2>Conhecimentos</h2>
              <p>{desc}</p>
            </DescLearning>

            <CardsLearning>
              {learning.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article
                    key={index}
                    onMouseOver={() => handleMouseOver(item.desc)}
                    onMouseLeave={() =>
                      setDesc("Passe o cursor do mouse no card para ler...")
                    }
                  >
                    <Icon key={index} size={50} color="#986dff" />
                  </article>
                );
              })}
            </CardsLearning>
          </ContentLearning>
        </ContainerLearning>
      </main>

      <Footer>
        <div>
          <p>
            Copyright © 2023 <span> guicodev. </span> Todos os direitos
            reservados.
          </p>

          <text>
            Powered by <img src={Logo} alt="Logo rodape" width={50} />
          </text>
        </div>
      </Footer>
    </>
  );
}

export default App;
