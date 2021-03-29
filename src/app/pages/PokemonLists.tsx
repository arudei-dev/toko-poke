import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import { ContentLoadingStatus } from 'core/types/AsyncStatus';
import { parseUrlQuery } from 'core/utils/url-helper';
import { useLQPokemonLists } from "context/Apollo/services/lqPokemonLists";
import { useAppState } from 'context/App/hooks';
import { useModalDispatch } from 'context/Modal/hooks'
import { LayoutPokemonCardDefault } from 'app/layouts/PokemonCard'
import { GridView, PageBase, StandardButton } from 'components'
import './PokemonLists.scss'

const ITEM_LIMIT = 40;


const PokemonLists = () => {
  const appState = useAppState()
  const themeStyle = appState.useTheme

  const modalDispatch = useModalDispatch()

  const history = useHistory()
  const location = useLocation()
  const urlQueries = parseUrlQuery(history.location.search ?? "")
  
  const [page, setPage] = useState(1)
  const [contentStatus, setcontentStatus] = useState<ContentLoadingStatus>('loading')
  const [isLast, setIsLast] = useState(false)

  const [fetchPokeLists, {data: pokeData, loading, called, error}] = useLQPokemonLists()

  useEffect(() => {
    const currentPage = urlQueries["page"] 

    // Check if the page query is valid, a number & > 0.
    if (!currentPage) {
      setPage(1)
      return;
    }

    else if ((parseInt(urlQueries["page"]) || 0) < 1) {
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

  useEffect(() => {
    setIsLast(false)

    if (!loading && called) {
      if (!pokeData?.next) {
        setIsLast(true)

        if (pokeData?.results?.length === 0) {
          setcontentStatus('error')

          modalDispatch({
            type: 'SHOW_MODAL',
            payload: {
              modalType: 'Page Not Found',
              modalPayload: {
                errorTitle: "Page not found",
                errorMessage: `
                  Oops, looks like there's no more pokemon here!
                `
              }
            }
          })
        }
      }
      else {
        setcontentStatus('ready')
      }
    }
    else {
      setcontentStatus('loading')
    }

  }, [pokeData, loading, called])




  const LayoutComplete = () => {

    const _onPokemonCardClick = (e: React.MouseEvent, name: string) => {
      history.push(`/pokemon/${name}/details`);
    }
    
    return (
      <GridView usePadding="medium">
        {
          pokeData?.results?.map(poke => (
            <LayoutPokemonCardDefault 
              themeStyle={themeStyle}
              key={poke?.id!}
              id={poke?.id!}
              pokeName={poke?.name!} 
              pokeSpriteURL={poke?.image!}
              autoCapitalize={true}
              onClick={(e) => _onPokemonCardClick(e, poke?.name!)}/>
          ))
        }
      </GridView>
    )
  }

  const LayoutLoading = () => (
    <GridView usePadding="medium">
      {
        Array.from({length: 40}, (_, i) => (
          <LayoutPokemonCardDefault
            themeStyle={themeStyle}
            key={i}
            id={i}
            usePlaceholder={true}
            />
        ))
      }
    </GridView>
  )

  const LayoutPagination = () => {

    const _onHomePageClick = () => {
      history.push({
        pathname: `/`,
      })
    }
  
    const _onPreviousPageClick = () => {
      const prevPage = page - 1
  
      history.push({
        pathname: `/`,
        search: `?page=${prevPage}`
      })
      // setPage(page - 1)
    }
  
    const _onNextPageClick = () => {
      const nextPage = page + 1
  
      history.push({
        pathname: `/`,
        search: `?page=${nextPage}`
      })
      // setPage(page + 1)
    }
  
    return (
      <div className="view-actions">
        {
          page > 2 && (
            <>
              <StandardButton
                themeStyle={themeStyle}
                isDisabled={(page < 2) && true}
                title="<<"
                onClick={_onHomePageClick}
                />
              <div className="separator"/>
            </>
          )
        }
        <StandardButton
          themeStyle={themeStyle}
          isDisabled={(page < 2) && true}
          title="< Previous"
          onClick={_onPreviousPageClick}
          />
        <div className="separator"/>
        <StandardButton
          themeStyle={themeStyle}
          isDisabled={isLast}
          title="Next >"
          onClick={_onNextPageClick}
          />
      </div>
    )
  }

  return (
    <PageBase 
      autoScrollRestore={true}
      noYScrolling={loading} 
      themeStyle={themeStyle} 
      >
      {
        contentStatus !== 'error' && (
          <div className="page-pokemon-lists">
            <div className="page-title">
              Available Pokemons

              <div className="page-subtitle">
                Owned: {appState.myProfile?.myPokeList?.length ?? 0}
              </div>
            </div>
            {
              contentStatus === 'loading'
              ? <LayoutLoading/>
              : contentStatus === 'ready'
                ? <LayoutComplete/>
                : <></>
            }
            <LayoutPagination/>
          </div>
        )
      }
    </PageBase>
  )
}

export { PokemonLists }
