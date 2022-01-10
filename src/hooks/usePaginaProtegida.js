import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const usePaginaProtegida = () => {
    const history = useHistory()
    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token === null) {
            history.push('/login')
        }
    }, [history])
} 