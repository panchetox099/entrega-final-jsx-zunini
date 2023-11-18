import React from 'react'
import Item from './Item'

const ItemList = ({ name, description, price }) => {
    return (
        <div>


            {
                productos.map((p) => {
                    return (
                        <Item
                            key={p.id}
                            nombre={p.nombre}
                            descripcion={p.descripcion}
                            precio={p.precio}
                        />
                    )
                })

            }

        </div>
    )
}

export default ItemList