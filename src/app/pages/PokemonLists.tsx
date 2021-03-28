import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import { useLQPokemonLists } from "context/Apollo/services/lqPokemonLists";
import { useAppState } from 'context/App/hooks';
import { parseUrlQuery } from 'core/utils/url-helper';
import { GridView } from 'components/GridView'
import { PageBase } from 'components/PageBase'
import { PokemonCard } from 'components/PokemonCard'
import { StandardButton } from 'components/Button';
import './PokemonLists.scss'

const ITEM_LIMIT = 20;
  // - check if pokeData.next is null (out of bounds)
  // - cache max-count inside our context state,
  //   and update each reload.


const PokemonLists = () => {
  const { useTheme } = useAppState()

  const history = useHistory()
  const location = useLocation()
  const urlQueries = parseUrlQuery(history.location.search ?? "")
  const [page, setPage] = useState(0)

  const [fetchPokeLists, {data: pokeData, loading, called}] = useLQPokemonLists()

  useEffect(() => {
    const currentPage = urlQueries["page"] 

    // Check if the page query is valid, a number & > 0.
    if (!currentPage || (parseInt(urlQueries["page"]) || 0) < 1) {
      history.push({
        pathname: `/`,
        search: `?page=1`
      })
    }

    setPage(parseInt(urlQueries["page"]))
    window.scrollTo(0, 0);
  }, [history, location.search, location.pathname])

  useEffect(() => {
    fetchPokeLists({
      variables: {
        limit: ITEM_LIMIT, offset: ((page - 1) * ITEM_LIMIT) 
      }
    })
  }, [page])

  const _onPokemonCardClick = (e: React.MouseEvent, name: string) => {
    history.push(`/pokemon/${name}/details`);
  }

  const _onPreviousPageClick = (e: React.MouseEvent) => {
    const prevPage = page - 1

    history.push({
      pathname: `/`,
      search: `?page=${prevPage}`
    })
    // setPage(page - 1)
  }

  const _onNextPageClick = (e: React.MouseEvent) => {
    const nextPage = page + 1

    history.push({
      pathname: `/`,
      search: `?page=${nextPage}`
    })
    // setPage(page + 1)
  }

  const _renderComplete = () => (
    pokeData?.results?.map(poke => (
      <PokemonCard 
        themeStyle={useTheme}
        key={poke?.id!}
        id={poke?.id!}
        pokeName={poke?.name!} 
        pokeSpriteURL={poke?.image!}
        autoCapitalize={true}
        onClick={(e) => _onPokemonCardClick(e, poke?.name!)}/>
    ))
  )

  const _renderLoading = () => (
    Array.from({length: 20}, (_, i) => (
      <PokemonCard
        themeStyle={useTheme}
        key={i}
        id={i}
        usePlaceholder={true}
        />
    ))
  )

  return (
    <PageBase 
      autoScrollRestore={true}
      noYScrolling={loading} 
      themeStyle={useTheme} 
      >
      <div className="page-pokemon-lists">
        <GridView usePadding="medium">
          {
            (loading || !called)  ? _renderLoading() : _renderComplete()
          }
        </GridView>
        <div className="view-actions">
          <StandardButton
            themeStyle={useTheme}
            isDisabled={page < 2 && true}
            title="Previous page"
            onClick={_onPreviousPageClick}
            />
          <div className="separator"/>
          <StandardButton
            themeStyle={useTheme}
            title="Next page"
            onClick={_onNextPageClick}
            />
        </div>
      </div>
    </PageBase>
  )
}

export { PokemonLists }
