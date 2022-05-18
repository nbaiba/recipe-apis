import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'

const Popup = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.header}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={props.img} style={{width: '250px', margin: 'auto'}} rounded />
        <p>
          {props.instructions.strInstructions}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Popup
