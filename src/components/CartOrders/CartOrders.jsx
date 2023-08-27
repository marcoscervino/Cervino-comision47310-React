import { Field, Form, Formik, ErrorMessage } from "formik";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import './cartOrders.css'

function CartOrders () {

    const [pedidoId, setPedidoId] = useState("");
    const {finalizarCompra, calcularTotalAPagar, cartItems} = useContext(CartContext);
    

    const comprar = (values) => {
        const pedido = {
                buyer: values, 
                items: cartItems,
                total: calcularTotalAPagar(),
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
            <div className="container">
                <h3>Gracias por tu pedido! ❤</h3>
                <p>El ID de tu pedido es: {pedidoId}</p>
            </div>
        )
    }
    

    const validar = (values) =>{
        const errors = {}
        if (values.name.length < 8 ) errors.name = "ingrese un nombre y apellido validos"
        return errors;
    }

    return (
        <>
        <Formik initialValues={{
            name: "",
            email: "",
            phone: ""
        }}
        onSubmit={ comprar }
        validate={ validar }
        >
            <div className="form-container">
            <p className="mt-4 mb-2">Para finalizar tu compra, por favor completa los siguientes datos</p>
            
            <Form>
                
                <div className="d-inline-flex p-2 row">
                
                <Field className="mb-2" name="name" type="text" placeholder="Ingresa tu nombre y apellido"/>
                
                <Field className= "mb-2" name= "email" type="email" placeholder="Ingresa tu email"/>
                
                <Field className="mb-2" name= "phone" type="text"  placeholder="Ingresa tu telefono de contacto"/>
                
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