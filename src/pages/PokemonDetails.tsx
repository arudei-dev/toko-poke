import React, { useEffect, useState } from 'react'
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useLQPokemonDetailsByName } from "core/services/pokemon-details.hook";
import { useRootState } from 'core/rootContext';
import { capitalizeEachWord } from 'tools/string-helper';
import { PokeSilhouette } from 'assets/svg/PokeSilhouette';
import { PageBase }       from "components/PageBase";
import { CardView }       from 'components/CardView';
import { AsyncImage }     from 'components/AsyncImage';
import { Button }         from 'components/Button';
import { InfoChip }       from 'components/InfoChip';
import './PokemonDetails.scss'

interface Props {}

const PokemonDetails: React.FC<Props> = ({ ...props }) => {
  let { pokeName } = useParams<{ pokeName: string, }>()

  const { useTheme: themeStyle } = useRootState()

  const [loadDetails, { called, loading, data: pokeData, error }] = useLQPokemonDetailsByName()

  useEffect(() => {
    loadDetails({
      variables: {
        poke_name: pokeName
      }
    })
  }, [])

  useEffect(() => {
    console.log(pokeData)
  }, [loading])

  const _renderComplete = () => (
    <>
      <div className="poke-avatar">
        {
          pokeData?.sprites?.front_default ? (
            <AsyncImage src={pokeData.sprites.front_default} alt={`Pokemon '${pokeName}'`}>
              <PokeSilhouette color="#00000033"/>
            </AsyncImage>
          ) : (
            <PokeSilhouette color="#00000011"/>
          )
        }
      </div>

      <div className="poke-infohero">
        {capitalizeEachWord(pokeData?.name || "???")}
      </div>

      <div className="poke-actions">
        <Button 
          // add buttonSize {small, med, large}
          // add buttonStyle { highlight(color), normal }
          title="Catch 'em!"
          themeStyle={themeStyle}
          stretchWidth={true}
          />
      </div>

      <div className="poke-types">
        <div className="header">
          Pokemon Types
        </div>

        <div className="poke-types-list">
          {
            pokeData?.types?.map((type, idx) => (
              type?.type?.name ? (
                <InfoChip 
                  key={`pokeType-${type}-${idx}`}
                  size="small"
                  title={type.type.name}
                  />
              ) : <></>
            ))
          }
        </div>
      </div>
    </>
  )

  return (
    <PageBase 
      themeStyle={themeStyle}
      autoScrollRestore={true} 
      noYScrolling={loading || !called}
      >
      <div className="page-pokemon-details">
        <div className="fragment poke-details">
          <CardView 
            isLoading={loading || !called}
            isClickable={false}
            stretchWidth={true}
            stretchHeight={true}
            themeStyle={themeStyle}
            >
              <div className="details-content">
                {!loading && called 
                  ? _renderComplete() 
                  : <div></div> 
                }
              </div>
          </CardView>
        </div>
        <div className="fragment poke-additionals">
          
        </div>
      </div>
    </PageBase>
  )
}

export { PokemonDetails }
