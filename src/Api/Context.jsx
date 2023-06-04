import React, { useCallback, useEffect , useState , useContext } from "react";

const AppContext = React.createContext();
const url = ""

const AppProvider = ({children})=>{
    const [loading  , setLoading] = useState(false);
    const [ link, SetLink ] = useState("");
    const [ links, SetLinks ] = useState([]);
    const [ copied, setcopied ] = useState(false);



    const fetchShorter = useCallback(async()=>{{
       setLoading(true);
       try{
        if(link != ""){
            const response = await fetch( `https://api.shrtco.de/v2/shorten?url=${link}/very/long/link.html` )
            const data = await response.json();
            console.log(data)
            SetLinks(
                [
                 ...links ,
                 {
                    code : data.result.code,
                    original : data.result.original_link,
                    short : data.result.short_link ,
                    copied : false
    
                 }
                ]
            )
            setLoading(false)
        }
    }catch(error){
        console.log(error)
        setLoading(false)
    }

    }} , [link , copied]) 

    useEffect(()=>{
        fetchShorter();
    } , [link , copied ,  fetchShorter])

    return (
        <AppContext.Provider value={{loading , links , SetLink , setcopied }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext =()=>{
    return useContext(AppContext);
}

export {AppContext , AppProvider}