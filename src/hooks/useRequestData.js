import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
    const [data, SetData] = useState(initialData)

    useEffect(() => {
        axios.get(url, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
        .then((response) => {
            SetData(response.data)
        })
        .catch((error) => {
            console.log(error)
            alert("Ocorreu um erro, tente novamente")
        })
    }, [url])
    return (data)
}

export default useRequestData 