



function ClickFunction(props) {
    props.forEach(item => {
        return (
            <ul>
                <li>{item.title}
                    <ul>
                        <li>{item.description}</li>
                        <li>${item.price}</li>
                    </ul>
                </li>
            </ul>
        )
    })
}

export default ClickFunction;