import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { CardCarousel, ContentCarousel, LinkCarousel } from "../styles";

export function MyCarousel() {
  const projects = [
    {
      name: "Blog Github",
      description:
        "O projeto blog-github é um blog pessoal desenvolvido com React e Typescript.",
      link: "https://blog-github-virid.vercel.app/",
      novaCor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`,
    },
    {
      name: "Dg Academy Plataform",
      description:
        "A DG Academy Platform é uma plataforma de ensino online desenvolvido com React.",
      link: "https://dg-academy-plataform-pwsg.vercel.app/",
      novaCor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`,
    },
    {
      name: "Rick and Morty",
      description: `O projeto rick and morty mostra informações da série de animação "Rick and Morty".`,
      link: "https://azs-web-rickandmorty-drab.vercel.app/",
      novaCor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`,
    },
    {
      name: "Dt Money",
      description:
        "O projeto Dt Money é uma aplicação de controle financeiro que permite registrar gastos.",
      link: "https://dt-money-xthv.vercel.app/",
      novaCor: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`,
    },
  ];

  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval={3000}
      mouseTracking={true}
      disableDotsControls
      responsive={{
        0: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 },
      }}
    >
      {projects.map((item) => (
        <ContentCarousel>
          <CardCarousel style={{ borderColor: item.novaCor }}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <LinkCarousel
              href={item.link}
              target="blank"
              novaCor={item.novaCor}
              style={{ color: item.novaCor }}
            >
              Visualizar projeto
            </LinkCarousel>
          </CardCarousel>
        </ContentCarousel>
      ))}
    </AliceCarousel>
  );
}
