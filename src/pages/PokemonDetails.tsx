import { PageBase } from "components/PageBase";
import React from "react"
import { useParams } from "react-router"

interface Props {}

const PokemonDetails: React.FC<Props> = ({ ...props }) => {
  let { id } = useParams<{ id: string, }>();

  return (
    <PageBase>
      
    </PageBase>
  )
}

export { PokemonDetails }
