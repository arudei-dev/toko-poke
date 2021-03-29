/** @jsxImportSource @emotion/react */
import { PokemonDetailsByName_pokemon } from 'context/Apollo/types/PokemonDetailsByName'
import { capitalize1stLetterOfEachWord } from 'core/utils/string-helper'
import { 
  AsyncImage,
  Text, 
  InfoChip 
} from 'components'
import { PokeSilhouette } from 'assets/svg/PokeSilhouette'
import { cssLayoutPokemonBio } from './PokemonBio.style'
import { ThemeAwareLayout } from 'components/theme'


interface Props extends Partial<ThemeAwareLayout> {
  pokeData?: PokemonDetailsByName_pokemon,
  usePlaceholder?: boolean
}

export const LayoutPokemonBio: React.FC<Props> = ({
  pokeData,
  themeStyle,
  usePlaceholder,
}) => {

  const pokeName = "charizard"

  return (
    <div
      css={cssLayoutPokemonBio({
        themeStyle: themeStyle ?? 'light'
      })}
      >
      
      <div className="poke-bio">

        <div className="poke-avatar">
          {
            !usePlaceholder ? (
              (pokeData?.sprites?.front_default) && (
                <AsyncImage src={pokeData?.sprites?.front_default} alt={`Pokemon '${pokeName}'`}>
                  <PokeSilhouette color="#00000033"/>
                </AsyncImage>
              ) 
            ) : (
              <PokeSilhouette color="#00000011"/>
            )
          }
        </div>

        <div className="poke-details">
          <div className="poke-infohero">
            {
              !usePlaceholder ? (
                <Text 
                  text={capitalize1stLetterOfEachWord(pokeData?.name || "???")}
                  textColor='primary'
                  themeStyle={themeStyle}
                  />
              ) : (
                <Text 
                  text={"Loading..."}
                  textColor='disabled'
                  themeStyle={themeStyle}
                  />
              )
            }
          </div>

          <div className="poke-types">
            <div className="poke-types-list">
              {
                !usePlaceholder ? (
                  <>
                  {
                    pokeData?.types?.map((type, idx) => (
                      type?.type?.name ? (
                        <InfoChip 
                          key={`pokeType-${type}-${idx}`}
                          size="small"
                          title={type.type.name}
                          themeStyle={themeStyle}
                          />
                      ) : <></>
                    ))
                  }
                  {
                    pokeData?.weight && (
                      <InfoChip 
                        size="small"
                        title={`Weight: ${pokeData?.weight / 10.0} kg`}
                        themeStyle={themeStyle}
                        />
                    )
                  }
                  </>
                ) : (
                  <>
                  </>
                )
              }
              
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}
