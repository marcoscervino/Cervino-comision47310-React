import { Field, Form, Formik, ErrorMessage } from "formik";



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

                <Form>
                    <Field name="name" type="text"/>
                    <Field name= "email" type="email"/>
                    <Field name= "phone" type="text"/>
                    <ErrorMessage name="name"/>
                    <button type="submit">Guardar datos</button>
                </Form>

            </Formik>
        </>
    )
}

export default FormCompra;