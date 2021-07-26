import { HTMLAttributes, useState } from "react";
import { IoMdTrash } from "react-icons/io";
import styled from "styled-components";

const BotaoEstilizado = styled.button`
  border: transparent;
  background: transparent;
`;

export function BotaoRemover(props: HTMLAttributes<HTMLButtonElement>) {
  const [isActive, setIsActive] = useState(false);

  return (
    <BotaoEstilizado {...props}>
      <IoMdTrash
        size={24}
        onClick={() => setIsActive(!isActive)}
        color={(isActive) ? '#2c343a' : '#657786'}
      />
    </BotaoEstilizado>
  );
}
