import React from 'react';
import { Spinner } from "reactstrap";

const Loader = () => {
    return (
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <Spinner style={{ height: 100, width: 100 }} color="primary" />
        </div>
    )
}

export default Loader;