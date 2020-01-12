import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const ServerError = ({ isOpen, reloadPage }) => {
    return (
        <Modal isOpen={isOpen} centered>
            <ModalHeader>
                Internal Server Error
            </ModalHeader>
            <ModalBody className="mt-2 mb-2 text-center">
                <h5>Click the reload button to try reloading the page, or try again later.</h5>
            </ModalBody>
            <ModalFooter>
                <Button size="lg" color="primary" className="btn-block" onClick={reloadPage}>Reload</Button>
            </ModalFooter>
        </Modal>
    )
}

ServerError.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    reloadPage: PropTypes.func.isRequired
}

export default ServerError;