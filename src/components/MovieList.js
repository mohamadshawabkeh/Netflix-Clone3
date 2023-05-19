import { useEffect } from "react";
// import Movie from "./Movie";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function MovieList(){

    const [favList, setFavList] = useState([]);
    const sendReq = async () => {
        const serverURL = `${process.env.REACT_APP_SERVER_URL}toprated`;
        const response = await fetch(serverURL);
        const data = await response.json();
        console.log(data)
        setFavList(data);
    }

    useEffect(()=>{
      sendReq()

    },[]);
    return (
       <>
       <h1>Movie List</h1>
            {/* <button onClick={sendReq}>send req</button> */}
            <Row xs={1} md={4} className="g-4">
                {favList.map((item) => {
                    return <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.poster_path} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    <p>{item.overview}</p>
                                    <p>Popularity:{item.popularity}</p>
                                    
                                </Card.Text>
                                <Button variant="primary">See More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>

       {/* <Movie favData={favList}/> */}

        </>


);
};
export default MovieList;