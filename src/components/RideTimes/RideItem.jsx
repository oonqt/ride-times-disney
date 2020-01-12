import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Row, Col } from "reactstrap";

import { colorMap } from "../../constants.js";

const RideItem = ({ ride }) => {
    return (
        <div style={{ marginRight: 25, marginLeft: 25 }}>
            <Row className="mt-2">
                <h3 className="ml-auto mr-auto text-center">{ride.name}</h3>
            </Row>
            <Row>
                {ride.location ? <h4 className="ml-auto mr-auto mb-3 text-muted">[{ride.location}]</h4> : <div className="mb-3"></div>}
            </Row>
            <Row>
                <Badge
                    style={{
                        width: "100%",
                        height: 40
                    }}
                    className="bg-dark d-block mb-3"
                >
                    <span
                        style={{
                            display: "block",
                            marginTop: 6,
                            fontSize: "1.5rem"
                        }}
                    >
                        {ride.waitTime} Minutes
                    </span>
                </Badge>
            </Row>
            <Row className="text-center mb-1">
                <Col xs="6" className="pl-0">
                    <h5
                        style={{
                            border: "1px solid",
                            borderRadius: 3,
                            backgroundColor: "#e8e8e8",
                        }}
                        className="pb-2 pt-2"
                    >
                        Status: <span className={`text-${colorMap[ride.status]}`}>{ride.status}</span>
                    </h5>
                </Col>
                <Col xs="6" className="pr-0">
                    <h5
                        style={{
                            border: "1px solid",
                            borderRadius: 3,
                            backgroundColor: "#e8e8e8",
                        }}
                        className="pt-2 pb-2"
                    >
                        FastPass: <input type="checkbox" className="ml-1" readOnly checked={ride.fastPast} />
                    </h5>
                </Col>
            </Row>
        </div>
    )
}

RideItem.propType = {
    ride: PropTypes.object.isRequired
}

export default RideItem;