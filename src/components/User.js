const User = (props) => {
    return (
        <div>
            <h2>Functional Component</h2>
            <h2>Name: {props.name}</h2>
            <h2>Location: {props.location}</h2>
        </div>
    )
}

export default User;