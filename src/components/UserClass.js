import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,

        };

    }
    render() {
        const { name, location } = this.props;
        const { count } = this.state;
        return (
            <div>
                <h2>Class Component</h2>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Count: {count}</h2>
                <button onClick={() => this.setState({ count: count + 1 })}>Increment</button>

            </div>

        )
    }

}

export default UserClass