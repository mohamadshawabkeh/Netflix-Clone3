import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


function UpdateModal(props){
    const updateMovie = async (e) => {
        e.preventDefault();
    const obj = {
        posterPath: e.target.image.value,
        title: e.target.name.value,
        // rank: e.target.rank.value,
        // tags: e.target.tags.value,
        overview: e.target.top_text.value
    }
    // console.log(props.item.id);
    const serverURl = `${process.env.REACT_APP_SERVER_URL}UPDATE/${props.item.id}`
    const axiosRes = await axios.put(serverURl, obj);
    // console.log(axiosRes.data);
    //close the update modal
    props.closeUpdateModal();
    //update the old FavArr
    props.takeFromUpdateModal(axiosRes.data);


    // console.log(obj);
}
    return (
        <>
        <Modal show={props.showFlag} onHide={props.closeUpdateModal}>
            <Modal.Header closeButton>
                <Modal.Title>Update Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={updateMovie}>
                    <Form.Group className="mb-3">
                        <Form.Label>Image Path</Form.Label>
                        <Form.Control name="image" type="text" defaultValue={props.item.posterPath} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" defaultValue={props.item.title} />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Top Text</Form.Label>
                        <Form.Control name="top_text" type="text" defaultValue={props.item.overview} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeUpdateModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
};
export default UpdateModal;