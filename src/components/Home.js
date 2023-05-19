import { useEffect } from "react";
import { useState } from "react";
import MovieList from "./MovieList";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from "axios";

function Home(){
    const [movieData, setMovieData] = useState([]);
    const resultReq = async () => {
        const serverURL = `${process.env.REACT_APP_SERVER_URL}trending`;
        const response = await fetch(serverURL);
        const data = await response.json();
        
        console.log(serverURL);
        setMovieData(data);
    }
    const addFavMovie= async (item)=>{
    const serverURL = `${process.env.REACT_APP_SERVER_URL}trending`;
        const obj ={
            posterPath:item.poster_path,
            title:item.title,
            overview:item.overview
        }
        const result = await axios.post(`${process.env.REACT_APP_SERVER_URL}getmovies`,obj);

    }
    useEffect(()=>{
        resultReq();

    },[]);
    return (
       <>
       <h1>Home</h1>
            {/* <button onClick={sendReq}>send req</button> */}
            <Row xs={1} md={4} className="g-4">
                {movieData.map((item) => {
                    return <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.poster_path} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    <p>{item.overview}</p>
                                    
                                </Card.Text>
                                <Button variant="primary"onClick={()=>{addFavMovie(item)}}>Add to favorite⭐!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>

        <MovieList /> 

        </>


);
};
export default Home;