/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { DefaultThemeColors, ThemeAwareLayout } from 'components/theme'

export type CssMyPokemonsListPageProps = ThemeAwareLayout & {

}

export const cssMyPokemonsListPage = (props: CssMyPokemonsListPageProps) => css`
  width: 100%;
  height: 100%;
  padding: 8px;
  padding-top: 16px;

  color: ${DefaultThemeColors(props.themeStyle).TEXT_COLOR_PRIMARY};

  .poke-item {
    padding: 8px;
  }

  .div-no-pokemons {
    width: 100%;
    height: 100%;

    padding: 16px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > .message {
      padding-bottom: 24px;
      text-align: center;
    }
  }

`



export {

}