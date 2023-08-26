import { Field, Form, Formik, ErrorMessage } from "formik";
import './formCompra.css'


function FormCompra(){

    const guardarDatos = (values) => {
        console.log(values);
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
            onSubmit={ guardarDatos }
            validate={ validar }
            >
                <div className="form-container">
                <p className="mt-4 mb-2">Para finalizar tu compra, por favor completa los siguientes datos</p>
                
                <Form>
                    
                    <div className="d-inline-flex p-2 row">
                    
                    <Field className="mb-2" name="name" type="text" placeholder="Ingresa tu nombre y apellido"/>
                    
                    <Field className= "mb-2" name= "email" type="email" placeholder="Ingresa tu email"/>
                    
                    <Field className="mb-2" name= "phone" type="text"  placeholder="Ingresa tu telefono de contacto"/>
                    
                    <button type="submit">Guardar datos</button>
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

export default FormCompra;