import { styled } from "styled-components";

interface LinkCarouselProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  novaCor: string;
}

export const Header = styled.header`
  background-color: #111;
  width: 100%;
  position: fixed;
  top: 0;
  padding: 5px 0;
  z-index: 20;
`;

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

export const NavBar = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;

  a {
    font-size: 1.2rem;
    color: #9ca3af;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 1px;
      bottom: -7px;
      left: 0;
      background: linear-gradient(270deg, #986dff 0%, #17161d 100%);
      transform-origin: bottom right;
      transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
    }

    &:hover {
      color: #fff;
      transition: all 0.2s;

      &::after {
        transform: scaleX(1.01);
        transform-origin: bottom left;
      }
    }
  }
`;

export const ContainerAbout = styled.section`
  background-color: #111;
  padding-top: 130px;
  padding-bottom: 75px;
`;

export const ContentAbout = styled.div`
  background-color: #151515;
  border: 2px solid #1f1f1f;
  padding: 24px;
  border-radius: 4px;
  height: auto;
  display: flex;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  justify-content: space-between;
  gap: 45px;
`;

export const ImgPerfil = styled.div`
  width: 90%;

  img {
    width: 100%;
    border-radius: 5px;
  }
`;

export const DescAbout = styled.div`
  width: 100%;

  span {
    font-size: 1.4rem;
    font-weight: 400;
    color: #986dff;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 500;
    margin: 16px 0px;
    color: #fff;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 16px;
    color: #fff;
  }

  p {
    font-size: 1.1rem;
    color: #9ca3af;
    line-height: 160%;
    margin: 32px 0px 48px 0px;
  }
`;

export const SocialMedia = styled.ul`
  display: flex;
  gap: 20px;

  a {
    background-color: #111;
    border: 2px solid #1f1f1f;
    border-radius: 6px;
    padding: 16px;

    &:hover {
      transition: 0.2s;
      border: 2px solid #986dff;
    }
  }
`;

export const ContainerExperience = styled.section`
  background-color: #151515;
  padding: 90px 0 60px 0;
`;

export const ContentExperience = styled.div`
  width: 85%;
  margin: 0 auto;

  h2 {
    padding-bottom: 24px;
    color: #fff;
    font-size: 2.6rem;
    font-weight: 500;
  }
`;

export const DescExperience = styled.div`
  display: flex;
  gap: 40px;
`;

export const CompanyExperience = styled.ul`
  background-color: #111;
  height: max-content;

  li {
    font-size: 1.2rem;
    font-weight: 400;
    padding: 24px 32px;
    white-space: nowrap;
    min-width: 214px;
    cursor: pointer;
    color: #fff;

    a {
      color: #986dff;
      &:active {
        color: #986dff;
      }
    }
  }
  .active {
    color: #986dff;
    border-left: 4px solid #986dff;
    font-weight: 500;
    padding: 24px 28px;
  }
`;

export const InfoBoxExperience = styled.div`
  min-height: 250px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-size: 1.8rem;
      font-weight: 400;
      color: #fff;
    }
  }
  h5 {
    font-size: 1.2rem;
    margin: 32px 0px;
    font-weight: 500;
    color: #986dff;
  }

  span {
    font-size: 1.2rem;
    color: #9ca3af;
  }

  p {
    font-size: 1.2rem;
    line-height: 160%;
    color: #9ca3af;
    font-weight: 400;
  }
`;

export const ContainerProject = styled.section`
  background-color: #111;
  padding: 90px 0;
`;

export const ContentProject = styled.div`
  width: 85%;
  margin: 0 auto;

  .alice-carousel__prev-btn-item,
  .alice-carousel__next-btn-item {
    font-size: 50px;
    font-weight: 700;
    color: #986dff;
    margin-top: 20px;
  }

  h2 {
    padding-bottom: 44px;
    color: #fff;
    font-size: 2.7rem;
    font-weight: 500;
    text-align: center;
  }
`;

export const ContentCarousel = styled.div`
  border-right: 8px solid #111111;
  border-left: 8px solid #111111;
`;

export const CardCarousel = styled.div`
  background-color: #151515;
  padding: 32px;
  border: 2px solid;
  max-width: 350px;

  h3 {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
  }

  p {
    margin: 24px 0px;
    color: #9ca3af;
    line-height: 2rem;
    font-size: 1.1rem;
  }
`;

export const LinkCarousel = styled.a<LinkCarouselProps>`
  font-size: 1.2rem;
  font-weight: 400;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 1px;
    bottom: -7px;
    left: 0;
    background: ${(props) => props.novaCor};
    transform-origin: bottom right;
    transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
  }

  &:hover {
    color: #fff;
    transition: all 0.2s;

    &::after {
      transform: scaleX(1.01);
      transform-origin: bottom left;
    }
  }
`;

export const ContainerLearning = styled.section`
  background-color: #151515;
  padding: 90px 0;
`;
export const ContentLearning = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 8px;
`;

export const DescLearning = styled.div`
  width: 50%;

  h2 {
    margin-bottom: 32px;
    color: #fff;
    font-size: 2.6rem;
    font-weight: 500;
  }

  p {
    max-width: 500px;
    line-height: 2rem;
    color: #9ca3af;
    font-size: 1.2rem;
  }
`;

export const CardsLearning = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  article {
    padding: 30px;
    border: 1px solid #444343;
    background-color: #1f1f1f;
    border-radius: 4px;
    :hover {
      border: none;
    }
  }
  :hover {
    border: 1px solid #986dff;
    transition: 1s all ease;
  }
`;

export const Footer = styled.footer`
  background-color: #111;

  div {
    width: 85%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    text {
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 1.2rem;
      color: #fff;
      font-weight: 500;
    }
    p {
      font-size: 1rem;
      color: #fff;
      font-weight: 500;

      span {
        color: #986dff;
      }
    }
  }
`;
