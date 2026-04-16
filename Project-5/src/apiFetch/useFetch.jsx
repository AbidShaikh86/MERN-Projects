import { useEffect, useState } from 'react'

function useFetch(url) {
    const [data, setData] = useState(null);
    const [load, setLoad] = useState(true);
    const [err, setErr] = useState(null);

    
    useEffect(() => {
        fetch(url).then((res) => res.json())
            .then((json) => {
                setData(json)
                setLoad(false)
            })
            .catch((err) => {
                setErr(err.message)
                setLoad(false)
            })
    } , [url])
    return {data, load, err}
}

export default useFetch