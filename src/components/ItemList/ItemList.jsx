import { useEffect, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";

const simulateProductLoad = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productos = [
        {
            id: 1,
            marca: "Heineken",
            nombre: "Heineken Rubia",
            categoria: "cerveza",
            tamaño: "473ml",
            precio: 360,
            foto: "https://i.postimg.cc/qvnrw3Cs/heineken-x473-v2.png",
          },
          {
            id: 2,
            marca: "Stella Artois",
            nombre: "Stella Artois Rubia",
            categoria: "cerveza",
            tamaño: "473ml",
            precio: 340,
            foto: "https://i.postimg.cc/fbnzQKhq/cerveza-stella-artois-lata-473-ml1-ebf7da00967ac0788215684053276672-640-0.jpg",
          },
          {
            id: 3,
            marca: "Stella Artois",
            nombre: "Stella Artois Blanche",
            categoria: "cerveza",
            tamaño: "473ml",
            precio: 350,
            foto: "https://i.postimg.cc/9X8cQVh7/blanch-473-v2.png",
          },
          {
            id: 4,
            marca: "Stella Artois",
            nombre: "Stella Artois Noire",
            categoria: "cerveza",
            tamaño: "473ml",
            precio: 345,
            foto: "https://i.postimg.cc/TY5v2D0z/stella-noire-473.jpg",
          },
          {
            id: 5,
            marca: "Schweppes",
            nombre: "Schweppes Pomelo",
            categoria: "gaseosa",
            tamaño: "1500ml",
            precio: 460,
            foto: "https://i.postimg.cc/rmh2sGvk/schweppes-pomelo-15l.jpg",
          },
          {
            id: 6,
            marca: "Schweppes",
            nombre: "Schweppes Tonica",
            categoria: "gaseosa",
            tamaño: "1500ml",
            precio: 430,
            foto: "https://i.postimg.cc/mktfHzsF/schweppes-tonica-15l-v2.png",
          },
          {
            id: 7,
            marca: "Coca Cola",
            nombre: "Coca Cola Clasica",
            categoria: "gaseosa",
            tamaño: "1500ml",
            precio: 510,
            foto: "https://i.postimg.cc/sDMsB8j0/cocacola-15l-v2.png",
          },
          {
            id: 8,
            marca: "Coca Cola",
            nombre: "Coca Cola Zero",
            categoria: "gaseosa",
            tamaño: "1500ml",
            precio: 490,
            foto: "https://i.postimg.cc/prTxJcDr/cocazero-15l-v2.png",
          },
          {
            id: 9,
            marca: "Gordons",
            nombre: "Gordons Clasic",
            categoria: "gin",
            tamaño: "700ml",
            precio: 2600,
            foto: "https://i.postimg.cc/HsFHb2jW/gordonsgin-750ml-v2.png",
          },
          {
            id: 10,
            marca: "Beefeater",
            nombre: "Beefeater Clasic",
            categoria: "gin",
            tamaño: "1000ml",
            precio: 5040,
            foto: "https://i.postimg.cc/DZ778w0q/beefeater-clasic-1-L.png",
          },
          {
            id: 11,
            marca: "Beefeater",
            nombre: "Beefeater Orange",
            categoria: "gin",
            tamaño: "1000ml",
            precio: 7040,
            foto: "https://i.postimg.cc/W4G2NkNN/beefeater-orange-1l-v2.jpg",
          },
          {
            id: 12,
            marca: "Brighton",
            nombre: "Brighton Clasic",
            categoria: "gin",
            tamaño: "1000ml",
            precio: 2190,
            foto: "https://i.postimg.cc/zvcNtwjj/brighton-700-v2.png",
          },
          {
            id: 13,
            marca: "Smirnoff",
            nombre: "Smirnoff Clasic",
            categoria: "vodka",
            tamaño: "700ml",
            precio: 3560,
            foto: "https://i.postimg.cc/8c98BppX/smirnoff-clasic-1l-v2.png",
          },
          {
            id: 14,
            marca: "Smirnoff",
            nombre: "Smirnoff Apple",
            categoria: "vodka",
            tamaño: "700ml",
            precio: 3950,
            foto: "https://i.postimg.cc/52cdX2k6/smirnoff-green-1l-v2.png",
          },
          {
            id: 15,
            marca: "Absolut",
            nombre: "Absolut Clasic",
            categoria: "vodka",
            tamaño: "750ml",
            precio: 7500,
            foto: "https://i.postimg.cc/7ZTHRRjT/absolut-clasico-vodka1-L.jpg",
          },
          {
            id: 16,
            marca: "Absolut",
            nombre: "Absolut Raspberry",
            categoria: "vodka",
            tamaño: "750ml",
            precio: 8200,
            foto: "https://i.postimg.cc/tTDpPGn8/absolut-rasp1-L-v2.png",
          },
          {
            id: 17,
            marca: "Luigi Bosca",
            nombre: "Luigi Bosca Malbec",
            categoria: "vino",
            tamaño: "750ml",
            precio: 5600,
            foto: "https://i.postimg.cc/nzVtnSS2/luigibosca-malbec-750ml-v2.png",
          },
          {
            id: 18,
            marca: "Luigi Bosca",
            nombre: "Luigi Bosca Cabernet Sauvignon",
            categoria: "vino",
            tamaño: "750ml",
            precio: 4400,
            foto: "https://i.postimg.cc/zfrrcGn9/luigibosca-cabernet-750ml-v2.png",
          },
          {
            id: 19,
            marca: "Nieto senetiner",
            nombre: "Nieto Senetiner Malbec",
            categoria: "vino",
            tamaño: "750ml",
            precio: 3200,
            foto: "https://i.postimg.cc/s24rdCm1/nietosenetiner-malbec-750ml-v2.png",
          },
          {
            id: 20,
            marca: "Trumpeter",
            nombre: "Trumpeter Cabernet Franc",
            categoria: "vino",
            tamaño: "750ml",
            precio: 4500,
            foto: "https://i.postimg.cc/N0Y3xPtt/trumpeter-malbec-750ml-v2.png",
          }
        ];
      resolve(productos);
    }, 2000);
  });
};

export const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    simulateProductLoad().then((productos) => {
      setProductos(productos);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading && <h3> Cargando... </h3>}

      {!isLoading &&
        productos.map((producto) => (
          <div className="card mt-3 mb-3 ms-2 mx-2 border-dark text-center col-md-2" key={producto.id}>
            <img className="card-img-top" src={producto.foto}></img>
            <div className="card-body">
            <h5 className="card-title">{producto.nombre}</h5>
            <span>x{producto.tamaño}</span>
            <p className="card-text">${producto.precio}</p>
            {/* <button className="btn btn-dark compra">Comprar</button> */}
            <ItemCount/>
            </div>
          </div>
        ))}
    </>
  );
};