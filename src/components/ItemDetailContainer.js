import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from './ItemDetail'
import { getProductById } from "./utils"

function ItemDetailContainer() {

    const [item, setItems] = useState([])

    const { elementId } = useParams()

    useEffect(() => {
        getProductById(elementId)
            .then(res => {
                setItems(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [elementId])

    return (
        <>
            {item.length == 0 ? <h1>Cargando...</h1> : <ItemDetail item={item} /> }
        </>

    )
}
export default ItemDetailContainer
