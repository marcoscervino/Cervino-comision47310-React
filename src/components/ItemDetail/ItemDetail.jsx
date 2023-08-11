export function ItemDetail ({nombre, precio, foto}) {
    return <article>
        <div><img src={foto} alt="" /></div>
        <h5>{nombre}</h5>
        <p>{precio}</p>
    </article>
}

//1:27 link productdetail clase 9