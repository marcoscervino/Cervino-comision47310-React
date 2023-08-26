import Item from "../Item/Item";



function ItemList({ itemArray = [] }){

  return (
    <>
    {itemArray.map((items) => {

      return(
        // id, foto, nombre, tamaño, precio
        
        <Item key={items.id}
          id={items.id}
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