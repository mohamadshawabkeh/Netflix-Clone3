import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { useState } from "react";


function ModalMovie(props) {
    const [comment, setComment] = useState("");
    const handleCommentChange = (event) => {
        setComment(event.target.value);
    }
        const handleSaveChange = () => {
            const movieData = {
                title: props.favData.title,
                posterPath: props.favData.posterPath,
                overview: props.favData.overview,
                comment: comment
            };
            fetch('/addMovie', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(movieData)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Movie data saved:', data);
            });
    }

    return (
        <Modal show={props.showFlag} onHide={props.handleclose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.favData.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image src={props.favData.posterPath} width='100%'></Image>
                <p>{props.favData.overview}</p>
            </Modal.Body>
            <Form.Group controlId={`comment_${props.favData.id}`}>
                                        <Form.Label>Add a Comment:</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            value={comment}
                                            onChange={handleCommentChange}
                                        />
                                    </Form.Group>
            <Modal.Footer>
                
                <Button variant="secondary" onClick={props.handleclose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSaveChange}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalMovie;