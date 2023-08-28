import { Field, Form, Formik, ErrorMessage } from "formik";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import logo from "../../assets/logo/bestbarlogoxl.png"
import './cartOrders.css'


function CartOrders () {

    const [pedidoId, setPedidoId] = useState("");
    const {finalizarCompra, calcularTotalAPagar, cartItems} = useContext(CartContext);
    

    const comprar = (values) => {
        const pedido = {
                buyer: values, 
                items: cartItems,
                total: calcularTotalAPagar(),
                date: Date.now()
            };
        console.log(pedido);

        const pedidosRef = collection(db, "orders");
        addDoc(pedidosRef, pedido)
        .then((doc) => {
            setPedidoId(doc.id);
            finalizarCompra();
        })
    }

    if(pedidoId){
        return (
            <>
            <div className="d-flex justify-content-center container-fluid bg-dark p-2 pedido-confirm">
            <img src={logo} alt="" />
            </div>
            <div className="container-fluid bg-dark p-2 d-flex flex-column align-items-center pedido-confirm ">
                <h3>Gracias por tu pedido! ❤</h3>
                <p>El ID de tu pedido es: {pedidoId}</p>
            </div>
            </>
        )
    }
    

    const validar = (values) =>{
        const errors = {}
        if (values.name.length < 8 ) errors.name = "ingrese un nombre y apellido validos"
        return errors;
    }

    return (
        <>

        <div className="bg-dark d-flex justify-content-center">
            <img src={logo} alt="" />
        </div>

        <Formik initialValues={{
            name: "",
            email: "",
            phone: ""
        }}
        onSubmit={ comprar }
        validate={ validar }
        >
            <div className="form-container d-flex flex-column align-items-center mb-3 container-fluid">
            <p className="mt-4 mb-2">Para finalizar tu compra, por favor completa los siguientes datos</p>
            
            <Form>
                
                <div className="d-inline-flex p-2 row">
                
                <Field className="mb-3" name="name" type="text" placeholder="Ingresa tu nombre y apellido"/>
                
                <Field className= "mb-3" name= "email" type="email" placeholder="Ingresa tu email"/>
                
                <Field className="mb-3" name= "phone" type="text"  placeholder="Ingresa tu telefono de contacto"/>
                
                <button type="submit">Finalizar Compra</button>
                </div>
                <div className="d-flex justify-content-center">
                <p className="error-form text-center"><ErrorMessage name="name"/></p>
                </div>
            </Form>
            </div>

        </Formik>
    </>
    )
}


export default CartOrders;