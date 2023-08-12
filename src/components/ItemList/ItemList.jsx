import Item from "../item/item";

function ItemList({ itemArray = [] }){

  return (
    <>
    {itemArray.map((items) => {

      return(
        // id, foto, nombre, tamaño, precio
        <Item
          key={items.id}
          foto={items.foto}
          nombre={items.nombre}
          tamaño={items.tamaño}
          precio={items.precio}
        />
      );
    }
    )}
    </>
  )
}

export default ItemList;