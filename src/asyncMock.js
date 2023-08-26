const items = [
    {
        id: 1,
        marca: "Heineken",
        nombre: "Heineken Rubia",
        categoria: "cerveza",
        tamaño: "473ml",
        precio: 360,
        foto: "https://i.postimg.cc/qvnrw3Cs/heineken-x473-v2.png",
        descripcion: "Es una cerveza tipo Pilsen elaborada, siguiendo estándares de la más alta calidad, exclusivamente con ingredientes naturales, según un proceso que data de 1873 que preserva la mejor tradición cervecera europea. Heinken tiene cuerpo y a la vez es ligera, suave y fácil de beber."
    },
    {
        id: 2,
        marca: "Stella Artois",
        nombre: "Stella Artois Rubia",
        categoria: "cerveza",
        tamaño: "473ml",
        precio: 340,
        foto: "https://i.postimg.cc/fbnzQKhq/cerveza-stella-artois-lata-473-ml1-ebf7da00967ac0788215684053276672-640-0.jpg",
        descripcion: "Lager de color dorado pálido, muy brillante y con una espuma consistente. Una cerveza muy equilibrada donde predominan moderadas notas a frutas blancas y de cereal que resaltan levemente sobre el aroma herbal del lúpulo Saaz. En boca presenta una sensación suave, ligera de amargo y con efecto refrescante."
    },
    {
        id: 3,
        marca: "Stella Artois",
        nombre: "Stella Artois Blanche",
        categoria: "cerveza",
        tamaño: "473ml",
        precio: 350,
        foto: "https://i.postimg.cc/9X8cQVh7/blanch-473-v2.png",
        descripcion: "Stella Blanche es una White Lager, con notas frescas y cítricas de un amargor ligero y con un gran aroma por su lúpulo Mandarina Bavaria. Es una cerveza para los que eligen suavidad, pero también para los que prefieren el sabor intenso y con carácter. En otras palabras, es amigable a cualquier paladar cervecero."
    },
    {
        id: 4,
        marca: "Stella Artois",
        nombre: "Stella Artois Noire",
        categoria: "cerveza",
        tamaño: "473ml",
        precio: 345,
        foto: "https://i.postimg.cc/TY5v2D0z/stella-noire-473.jpg",
        descripcion: "Cerveza Artois Noire: cerveza negra premium, de espuma cremosa y color negro intenso. Esta cerveza presenta el característico aroma a lúpulo de una Stella Artois con el agregado de sus notas caramelo. Equilibrada, de cuerpo justo y amargor balanceado."
    },
    {
        id: 5,
        marca: "Schweppes",
        nombre: "Schweppes Pomelo",
        categoria: "gaseosa",
        tamaño: "1500ml",
        precio: 460,
        foto: "https://i.postimg.cc/rmh2sGvk/schweppes-pomelo-15l.jpg",
        descripcion: "Schweppes es una gaseosa con un sabor único, con carácter y sutiles burbujas y muy refrescante. Ideal para disfrutar sus distintos sabores en ocasiones sociales y de disfrute, para explorar y saborear las experiencias de la vida."
    },
    {
        id: 6,
        marca: "Schweppes",
        nombre: "Schweppes Tonica",
        categoria: "gaseosa",
        tamaño: "1500ml",
        precio: 430,
        foto: "https://i.postimg.cc/mktfHzsF/schweppes-tonica-15l-v2.png",
        descripcion: "Agua Schweppes tonic, es una bebida mineral con un famoso y delicado burbujeo, es perfecta para combinar con vodka, ginebra, cualquier coctelería o disfrutarse sola."
    },
    {
        id: 7,
        marca: "Coca Cola",
        nombre: "Coca Cola Clasica",
        categoria: "gaseosa",
        tamaño: "1500ml",
        precio: 510,
        foto: "https://i.postimg.cc/sDMsB8j0/cocacola-15l-v2.png",
        descripcion: "Coca-Cola (conocida comúnmente como Coca en muchos países hispanohablantes; en inglés también conocida como Coke) es una bebida azucarada gaseosa vendida a nivel mundial en tiendas, restaurantes y máquinas expendedoras en más de doscientos países o territorios."
    },
    {
        id: 8,
        marca: "Coca Cola",
        nombre: "Coca Cola Zero",
        categoria: "gaseosa",
        tamaño: "1500ml",
        precio: 490,
        foto: "https://i.postimg.cc/prTxJcDr/cocazero-15l-v2.png",
        descripcion: "Zero es una de las variantes no calóricas de Coca-Cola y es parte del compromiso de The Coca-Cola Company para ofrecer más opciones de productos sin calorías que satisfagan las necesidades y deseos de las personas. Es un refresco que tiene un gran sabor, de alta calidad, con cero calorías, cero azúcar y baja en sodio."
    },
    {
        id: 9,
        marca: "Gordons",
        nombre: "Gordons Clasic",
        categoria: "gin",
        tamaño: "700ml",
        precio: 2600,
        foto: "https://i.postimg.cc/HsFHb2jW/gordonsgin-750ml-v2.png",
        descripcion: "El Gin Gordon´s se elabora a base de alcohol de grano, es un London Dry Gin con un matizado entre los sabores del enebro, fresas, cítricos junto a las hierbas y especias seleccionadas para su creación."
    },
    {
        id: 10,
        marca: "Beefeater",
        nombre: "Beefeater Clasic",
        categoria: "gin",
        tamaño: "1000ml",
        precio: 5040,
        foto: "https://i.postimg.cc/DZ778w0q/beefeater-clasic-1-L.png",
        descripcion: "Representante de la ciudad moderna, excitante y energética que es Londres, Beefeater London Dry tiene un sabor extraordinariamente limpio, con un intenso toque de enebro, equilibrado con fuertes matices cítricos, lo que la convierte en la ginebra perfecta para disfrutar con la tónica preferida."
    },
    {
        id: 11,
        marca: "Beefeater",
        nombre: "Beefeater Orange",
        categoria: "gin",
        tamaño: "1000ml",
        precio: 7040,
        foto: "https://i.postimg.cc/W4G2NkNN/beefeater-orange-1l-v2.jpg",
        descripcion: "Nota aromática y floral con un matiz de Violeta de Parma. Notas de madera y agridulces, especiado pero delicado. Añade notas de madera y picantes, así como sabores equilibrados. Aromática y similar al lúpulo con matices florales."
    },
    {
        id: 12,
        marca: "Brighton",
        nombre: "Brighton Clasic",
        categoria: "gin",
        tamaño: "1000ml",
        precio: 2190,
        foto: "https://i.postimg.cc/zvcNtwjj/brighton-700-v2.png",
        descripcion: "Inspirado en una ciudad portuaria, donde la brisa de mar o la frescura de una noche cerca del río, te transporta a ese momento de escapada con amigos en primavera o en otoño, refrescando tu espíritu."
    },
    {
        id: 13,
        marca: "Smirnoff",
        nombre: "Smirnoff Clasic",
        categoria: "vodka",
        tamaño: "700ml",
        precio: 3560,
        foto: "https://i.postimg.cc/8c98BppX/smirnoff-clasic-1l-v2.png",
        descripcion: "Smirnoff es un vodka de origen ruso, de 37,5% alc./vol., obtenido por triple destilación del alcohol de grano, y filtrado por carbón, cuya fabricación se inició en el año 1864 por Pyotr Alexandrovich Smirnov."
    },
    {
        id: 14,
        marca: "Smirnoff",
        nombre: "Smirnoff Apple",
        categoria: "vodka",
        tamaño: "700ml",
        precio: 3950,
        foto: "https://i.postimg.cc/52cdX2k6/smirnoff-green-1l-v2.png",
        descripcion: "Smirnoff Green Apple es una combinación de Vodka Premium Smirnoff No.21 con los sabores naturales de manzanas verdes. Una variante innovadora por la que Smirnoff ha apostado y que las ventas reconocen el exito de esta exquisita bebida."
    },
    {
        id: 15,
        marca: "Absolut",
        nombre: "Absolut Clasic",
        categoria: "vodka",
        tamaño: "750ml",
        precio: 7500,
        foto: "https://i.postimg.cc/7ZTHRRjT/absolut-clasico-vodka1-L.jpg",
        descripcion: "Absolut es, de hecho, tan puro como puede ser el vodka. Aún así, la pureza tiene un sabor: rico, con cuerpo y complejo, pero suave y maduro con el carácter distintivo del grano de trigo, seguido de un toque a frutas secas. Los ingredientes principales de Absolut Vodka son agua y trigo de invierno."
    },
    {
        id: 16,
        marca: "Absolut",
        nombre: "Absolut Raspberry",
        categoria: "vodka",
        tamaño: "750ml",
        precio: 8200,
        foto: "https://i.postimg.cc/tTDpPGn8/absolut-rasp1-L-v2.png",
        descripcion: "Su aroma es rico e intenso, revela el carácter fresco y frutado de los frutos rojos. Es de sabor suave, sabroso y dulce con notas a frambuesas maduras. De final largo, suave y sabroso. Actualmente es el tercer vodka saborizado premium más vendido en el mundo."
    },
    {
        id: 17,
        marca: "Luigi Bosca",
        nombre: "Luigi Bosca Malbec",
        categoria: "vino",
        tamaño: "750ml",
        precio: 5600,
        foto: "https://i.postimg.cc/nzVtnSS2/luigibosca-malbec-750ml-v2.png",
        descripcion: "Luigi Bosca Malbec es un tinto de color rojo violáceo brillante. Sus aromas son intensos y amables, con notas que recuerdan a frutas rojas, y tonos algo florales y especiados. En boca es generoso, fluido y expresivo, con taninos incipientes. De paladar franco y paso refrescante, con buen cuerpo y carácter."
    },
    {
        id: 18,
        marca: "Luigi Bosca",
        nombre: "Luigi Bosca Cabernet Sauvignon",
        categoria: "vino",
        tamaño: "750ml",
        precio: 4400,
        foto: "https://i.postimg.cc/zfrrcGn9/luigibosca-cabernet-750ml-v2.png",
        descripcion: "Luigi Bosca Cabernet Sauvignon es un tinto de color rojo rubí profundo y brillante. Sus aromas son sutiles y equilibrados, con notas de frutos negros, especias y cuero. En boca es jugoso y expresivo, con taninos finos y firmes que se agarran."
    },
    {
        id: 19,
        marca: "Nieto senetiner",
        nombre: "Nieto Senetiner Malbec",
        categoria: "vino",
        tamaño: "750ml",
        precio: 3200,
        foto: "https://i.postimg.cc/s24rdCm1/nietosenetiner-malbec-750ml-v2.png",
        descripcion: "Vino de color intenso, con reflejos violáceos. Aromáticamente, expresa frutos rojos como cerezas y ciruelas, confituras y violetas. Aparecen algunas notas de cacao amargo aportadas por la madera, que se encuentra muy bien integrada. En boca se presenta con taninos dulces, entrada suave y largo final."

    },
    {
        id: 20,
        marca: "Trumpeter",
        nombre: "Trumpeter Cabernet Franc",
        categoria: "vino",
        tamaño: "750ml",
        precio: 4500,
        foto: "https://i.postimg.cc/N0Y3xPtt/trumpeter-malbec-750ml-v2.png",
        descripcion: "De un impactante color violeta. Nariz frutal destacando ciruelas, cerezas y notas florales que nos recuerdan a las violetas. Posee gran cuerpo y su vivaz estructura acentúa sus taninos intensos que se vuelven aterciopelados en el retrogusto."
    }
];

export const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(items)
        } , 500)
    })
}


export const getItem = (itemId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const newItem = items.find(item => item.id === itemId);
            if (newItem) {
                resolve(newItem);
            } else {
                reject("No se encontro el item");
            }
        },500);
    });
};

export const getItemCategory = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const itemsCategory = items.filter(item => item.categoria === category);
            if (itemsCategory.length > 0) {
                resolve(itemsCategory);
            } else {
                reject("No se encontraron elementos en la categoría");
            }
        }, 500);
    });
};