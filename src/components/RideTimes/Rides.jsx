import React, { Component } from 'react';
import { ListGroup } from "reactstrap";
import themeparks from "themeparks";

class Rides extends Component {
    state = {
        rides: []
    }

    componentDidMount() {
        const DisneyLand = new themeparks.Parks.DisneylandResortCaliforniaAdventure();

        DisneyLand.GetWaitTimes()
            .then(rideTimes => {
                rideTimes.forEach(ride =>
                    this.setState(prevState => ({
                        rides: [...prevState, ride]
                    }))
                ); 
            })
            .catch(console.error);
    }

    render() {
        return (
            <ListGroup>
                
            </ListGroup>
        )
    }
}

export default Rides;