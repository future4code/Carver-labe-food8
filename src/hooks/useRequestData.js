import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constantes/urls";

const useRequestData = (initialData, url) => {
    const [data, SetData] = useState(initialData)

    useEffect(() => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlhISndnN2Nra29GR2NXY25qT1psIiwibmFtZSI6IkNhbWlsYSIsImVtYWlsIjoiY2FsaW9wZWZlcnJlckBnbWFpbC5jb20iLCJjcGYiOiIxMjMuMTExLjExMS0xMSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBDYW1pbGEsIDEyMiwgOTUgLSBWaWxhIEFzc3Vuw6fDo28iLCJpYXQiOjE2NDE5MDg5Njd9.Ot8SRsnH0eeMldurUsSFqLWA3sm6tKr4aVTLvPs5mk8"
        axios.get(`${BASE_URL}/restaurants`, {
            headers: {
                auth: token
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