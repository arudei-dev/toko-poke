import React, { useEffect } from 'react'
import { useHistory, useParams } from "react-router-dom";
import { GridView } from 'components/GridView'
import { PageBase } from 'components/PageBase'
import { useQPokemonLists } from "core/services/pokemon-lists.hook";
import { PokemonCard } from 'components/PokemonCard'
import './PokemonLists.scss'
import { parseUrlQuery } from 'tools/url-helper';

const ITEM_LIMIT = 20;

function PokemonLists() {

  let history = useHistory();
  const urlQueries = parseUrlQuery(history.location.search ?? "")

  let page = urlQueries["page"] && parseInt(urlQueries["page"]) || 0;
      page = page > 0 ? (page - 1) : 0;

  let { data: pokeData, loading, error } = useQPokemonLists({ 
    limit: ITEM_LIMIT, offset: (page * ITEM_LIMIT) 
  })

  // - check if pokeData.next is null (out of bounds)
  // - cache max-count inside our context state,
  //   and update each reload.
  
  useEffect(() => {

    console.log(page)
  }, [loading])
  
  const onPokemonCardClick = (e: React.MouseEvent, id: number) => {
    history.push(`/pokemon/${id}/details`);
  }

  const renderComplete = () => (
    pokeData?.results?.map(poke => (
      <PokemonCard
        key={poke?.id!}
        id={poke?.id!}
        pokeName={poke?.name!} 
        pokeSpriteURL={poke?.image!}
        autoCapitalize={true}
        onClick={(e) => onPokemonCardClick(e, poke?.id!)}/>
    ))
  )

  const renderLoading = () => (
    Array.from({length: 20}, (_, i) => (
      <PokemonCard
        key={i}
        id={i}
        usePlaceholder={true}
        />
    ))
  )

  return (
    <PageBase noYScrolling={loading}>
      <div className="PagePokemonLists">
        <div className="page-header">
          Gotta catch 'em all!
        </div>
        <GridView usePadding={true}>
          {
            loading ? renderLoading() : renderComplete()
          }
        </GridView>
      </div>
    </PageBase>
  )
}

export { PokemonLists }
