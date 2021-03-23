/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { capitalizeEachWord } from "tools/string-helper"
import Button from "./Button"
import { CardView } from "./CardView"

interface Props {
  id: number,
  pokeName: string,
  autoCapitalize?: boolean,
}

const PokemonCard: React.FC<Props> = ({ id, pokeName, autoCapitalize }) => {

  const DivCss = css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const PokeImgCss = css`
    width: 128px;
    height: 128px;
    object-fit: fill;
    image-rendering: pixelated;

    @media (max-width: 420px) {
      width:  96px;
      height: 96px;
    }
  `

  const DivNameCss = css`
    color: #001f3f;
    font-family: 'Ubuntu';
    font-weight: 600;
    font-size: 16pt;
  `;

  const DivActionsCss = css`
    padding: 8px;
    padding-top: 16px;
    width: 100%;
  `;

  const pokeImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <CardView clickable={true}>
      <div css={DivCss}>
        <img css={PokeImgCss} src={pokeImgUrl}/>
        <div css={DivNameCss}>
          {autoCapitalize ? capitalizeEachWord(pokeName) : pokeName}
        </div>
        <div css={DivActionsCss}>
          <Button title="Catch 'em!"/>
        </div>
      </div>
    </CardView>
  )
}

export default PokemonCard
