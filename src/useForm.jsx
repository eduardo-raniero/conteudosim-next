import {useState} from 'react';

const useForm = validate => {
    const [values, setValues] = useState({
        Nome: '',
        Email: '',
        Mensagem: ''
    })
    const [errors, setErrors] = useState({})


    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })

        setErrors(validate(values))
    };

    const handleSubmit = e => {
        const {Nome, Email, Mensagem} = values

        if((Nome == '' || errors.Nome != '') 
           || (Email == '' || errors.Email != '') 
           || (Mensagem == '' || errors.Mensagem != '')
        ){
            e.preventDefault()
        }

        setErrors(validate(values))
    }

    return { handleChange, values, handleSubmit, errors }
};

export default useForm;