function Welcome(props) {
    console.log(props)
    const sample = [1,2,3,4];
    for (let i=0; i<sample.length; i++) {
        console.log(sample[i]);
    }

    return (
        <h2 style= {props.style}>Hello, {props.name}!</h2>
    )
}

export default Welcome