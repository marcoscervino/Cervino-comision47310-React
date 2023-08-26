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
                <Form>
                    <div className="d-inline-flex p-2 row">
                    
                    <Field name="name" type="text" placeholder="Ingresa tu nombre y apellido"/>
                    
                    <Field name= "email" type="email" placeholder="Ingresa tu email"/>
                    
                    <Field name= "phone" type="text"  placeholder="Ingresa tu telefono de contacto"/>
                    <ErrorMessage name="name"/>
                    <button type="submit">Guardar datos</button>
                    </div>
                </Form>
                </div>

            </Formik>
        </>
    )
}

export default FormCompra;