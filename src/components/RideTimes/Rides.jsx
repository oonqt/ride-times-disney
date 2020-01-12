import React, { Component, Fragment } from 'react';
import axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

import ServerError from "../common/ServerError";
import RideItem from "./RideItem";
import Loader from "../common/Loader";

class Rides extends Component {
    state = {
        rides: [],
        loading: true,
        error: false
    }

    reloadPage() {
        window.location.reload();
    }

    componentDidMount() {
        axios.get("/api/rideTimes")
            .then(res => {
                this.setState({
                    rides: res.data,
                    loading: false,
                });
            })
            .catch(err => {
                console.error(err);
                this.setState({
                    error: true,
                    loading: false
                });
            });
    }

    render() {
        const rideData = this.state.rides
            .map(ride => (
                <ListGroupItem key={`{ride.name}-${Math.floor(Math.random() * 9999999)}`}>
                    <RideItem ride={ride} />
                </ListGroupItem>
            ));

        return (
            <Fragment>
                <ServerError isOpen={this.state.error} reloadPage={this.reloadPage} />
                {this.state.loading && <Loader />}
                <ListGroup>
                    {rideData}
                </ListGroup>
            </Fragment>
        )
    }
}

export default Rides;