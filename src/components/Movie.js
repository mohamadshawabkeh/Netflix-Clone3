import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ModalMovie from './ModalMovie';
import UpdateModal from './UpdateModal';
import axios from 'axios';
function Movie(props) {

    const [showFlag, setShowFlag] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});
    const [showUpdate, setShowUpdate] = useState(false);

    const handleShow = (item) => {
        setClickedMovie(item);
        setShowFlag(true);
    }

    const handleclose = () => {
        setShowFlag(false);
    }
    const closeUpdateModal = () => {
        setShowUpdate(false);
    }
    const handleUpdate = (item) => {
        setShowUpdate(true);
        setClickedMovie(item);
    }
    const takeFromUpdateModal =(arr)=>{
        props.takeNewArr(arr)
    }
    const handleDelete= async (item) =>{
        const serverURL = `${process.env.REACT_APP_SERVER_URL}`;
        const result = await axios.delete(`${serverURL}DELETE/${item.id}`);
        takeFromUpdateModal(result.data);
    }
    return (
        <>
            <Row xs={1} md={4} className="g-4">
                {props.favData.map((item) => {
                    return <Col>
                        <Card style={{ width: '25rem' }}>
                            <Card.Img variant="top" src={item.posterPath} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    <p>{item.overview}</p>
                                 
                                </Card.Text>
                                <Button variant="primary" onClick={() => { handleShow(item) }}>More Options</Button>
                                <Button variant="success"onClick={()=>{handleUpdate(item)}}>Update</Button>
                                <Button variant="danger" onClick={()=>{handleDelete(item)}}>Delete</Button>

                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>

            <ModalMovie showFlag={showFlag} handleclose={handleclose} favData={clickedMovie} />
            <UpdateModal showFlag={showUpdate} closeUpdateModal={closeUpdateModal} item={clickedMovie} takeFromUpdateModal={takeFromUpdateModal}/>
        </>
    )
}
export default Movie;