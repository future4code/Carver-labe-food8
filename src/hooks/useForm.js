import { useState } from "react"

const useForm = (estadoinicial) => {
    const [formulario, setFormulario] = useState(estadoinicial)


    const criaCadastro = (event) => {
        const { value, name } = event.target
        setFormulario({ ...formulario, [name]: value })
    }

    const clear = () => {
        setFormulario(estadoinicial)
    }

    return [formulario, criaCadastro, clear]

}
export default useForm
