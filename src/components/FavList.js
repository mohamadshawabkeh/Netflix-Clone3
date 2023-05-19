import { useEffect,useState } from "react";
import Movie from "./Movie"
import axios from "axios";

function FavList(){
    const [favList, setFavList ] = useState([]);
    const resultReq = async () => {
        const serverURL = `${process.env.REACT_APP_SERVER_URL}getmovies`;
        const response = await axios.get(serverURL);        
        console.log(serverURL);
        setFavList(response.data);
    }
    const takeNewArr = (newarr)=>{
        setFavList(newarr);
    }
    useEffect(()=>{
        resultReq();

    },[]);
    return (
        <>
        <h1>Favorite List </h1>
        <Movie favData={favList} takeNewArr={takeNewArr}/>
        </>

    );
};
export default FavList;