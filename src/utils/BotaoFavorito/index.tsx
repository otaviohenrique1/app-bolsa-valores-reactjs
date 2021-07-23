import { HTMLAttributes, useState } from "react";
import styled from "styled-components";
import star_fill from "../../assets/images/star_fill.svg";
import star_full from "../../assets/images/star_full.svg";

const ImgBotaoFavorito = styled.img`
  width: 24px;
  height: 24px;
`;

const Button = styled.button`
  border: none;
  background: none;
`;

export function BotaoFavorito(props: HTMLAttributes<HTMLButtonElement>) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Button {...props}>
      <ImgBotaoFavorito
        onClick={() => setIsActive(!isActive)}
        src={(isActive) ? star_full : star_fill}
        alt={(isActive) ? 'star_full' : 'star_fill'}
      />
    </Button>
  );
}
