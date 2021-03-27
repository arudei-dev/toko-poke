/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useLQPokemonDetailsByName } from "core/api/pokemon-details.hook";
import { 
  PokeDetails_moves, 
  PokeDetails_stats 
} from 'core/api/types/PokeDetails';
import { useRootState }          from 'core/rootContext';
import { useMediaQuery }         from 'core/hooks/mediaQuery';
import { capitalizeEachWord }    from 'tools/string-helper';
import { PokeSilhouette }        from 'assets/svg/PokeSilhouette';
import {
  PageBase,
  CardView,
  AsyncImage,
  InfoChip,
  Text,
  StandardButton,
  ToggleButton,
} from 'components'

import { mqSizes, ThemeStyle } from 'components/theme';
import { LayoutPokemonMovesList } from './layouts/PokemonMovesList';
import { LayoutPokemonStatsList } from './layouts/PokemonStatsList';
import { cssPagePokemonDetails } from './PokemonDetails.style'

interface Props {}

const PokemonDetails: React.FC<Props> = ({ ...props }) => {
  let enableOneColumn = useMediaQuery({
    queryType: 'max-width',
    queryValue: mqSizes.desktopL
  })
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


  const _renderComplete = () => (
    <div className="poke-details-content">
      
      <div className="poke-bio">

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

        <div className="poke-details">
          <div className="poke-infohero">
            <Text 
              text={capitalizeEachWord(pokeData?.name || "???")}
              textColor='primary'
              themeStyle={themeStyle}
              />
          </div>

          <div className="poke-types">
            <div className="poke-types-list">
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
            </div>
          </div>
        </div>

      </div>

      <div className="poke-actions">
        <StandardButton 
          // add buttonSize {small, med, large}
          // add buttonStyle { highlight(color), normal }
          title="Catch 'em!"
          themeStyle={themeStyle}
          stretchWidth={true}
          />
      </div>

      {
        !enableOneColumn && (
          <div className="poke-stats-list flex-rwc">
            <LayoutPokemonStatsList 
              isLoading={loading}
              themeStyle={themeStyle}
              statsList={pokeData?.stats}/>
          </div> 
        )
      }
      
    </div>
  )

  return (
    <PageBase 
      themeStyle={themeStyle}
      autoScrollRestore={true} 
      noYScrolling={loading || !called}
      >

      <div className="page-pokemon-details" css={cssPagePokemonDetails()}>
        <div className="fragment poke-details">
          <CardView 
            isLoading={loading || !called}
            isClickable={false}
            stretchWidth={true}
            stretchHeight={true}
            themeStyle={themeStyle}
            >
              {!loading && called 
                  ? _renderComplete() 
                  : <div></div> 
              }
          </CardView>
        </div>
        { 
          !enableOneColumn 
            ? (
              <LayoutDetailsDesktop 
                defaultTab="moves"
                isLoading={loading || !called}
                themeStyle={themeStyle}
                movesList={pokeData?.moves}
                />
            )
            : (
              <LayoutDetailsMobile 
                defaultTab="moves"
                isLoading={loading || !called}
                themeStyle={themeStyle}
                movesList={pokeData?.moves}
                statsList={pokeData?.stats}/>
            )
        }
      </div>
    </PageBase>
  )
}

type LayoutDetailsTab = 'moves' | 'stats'

interface LayoutDetailsProps {
  defaultTab: LayoutDetailsTab
  isLoading: boolean,
  themeStyle: ThemeStyle,
  movesList?: (PokeDetails_moves | null)[] | null,
  statsList?: (PokeDetails_stats | null)[] | null,
}

const LayoutDetailsDesktop: React.FC<LayoutDetailsProps> = ({
  defaultTab,
  isLoading,
  themeStyle,
  movesList,
}) => {
  const [tabActive, setTabActive] = useState(defaultTab)

  const onToggleButtonClick = (tab: LayoutDetailsTab) => {
    setTabActive(tab)
  }

  return (
    
    <div className="fragment poke-additionals">
      <div className="additionals-header">
        <Text
          themeStyle={themeStyle}
          text="Available Moves"
          />
      </div>
      <div className="additionals-list">
        <LayoutPokemonMovesList
          isLoading={isLoading}
          themeStyle={themeStyle}
          movesList={movesList}
          />
      </div>
    </div>
  )
}

const LayoutDetailsMobile: React.FC<LayoutDetailsProps> = ({
  defaultTab,
  isLoading,
  themeStyle,
  movesList,
  statsList,
}) => {
  const [tabActive, setTabActive] = useState(defaultTab)

  const onToggleButtonClick = (tab: LayoutDetailsTab) => {
    setTabActive(tab)
  }

  return (
    <div className="fragment poke-additionals">
      <div className="additionals-header">
        {/* Standardize Tab and TabItem as Component. */}
        <div className="tab-item">
          <ToggleButton 
            title="Moves"
            oneWayToggle={true}
            checked={tabActive === 'moves'}
            stretchWidth={false}
            stretchHeight={false}
            onClick={e => onToggleButtonClick('moves')}
            />
        </div>

        <div className="tab-item">
          <ToggleButton 
            title="Stats"
            oneWayToggle={true}
            checked={tabActive === 'stats'}
            stretchWidth={false}
            stretchHeight={false}
            onClick={e => onToggleButtonClick('stats')}
            />
        </div>
        
      </div>
      <div className="additionals-list">
        {
          tabActive === 'moves' ? (
            <LayoutPokemonMovesList
              isLoading={isLoading}
              themeStyle={themeStyle}
              movesList={movesList}
              />
          ) : (
            <LayoutPokemonStatsList 
              isLoading={isLoading}
              themeStyle={themeStyle}
              statsList={statsList}/>
          )
        }
      </div>
    </div>
  )
}




export { PokemonDetails }
