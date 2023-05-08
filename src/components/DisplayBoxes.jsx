const DisplayBoxes = (props) => {
    const boxes = props.listOfBoxes
    const boxStyle = (boxAtt) => {
        return {
            height: parseInt(boxAtt.size) || 50,
            width: parseInt(boxAtt.size) || 50,
            background: boxAtt.color || 'light-gray',
            margin: '10px'
        }
    }
    
    return (
        <div className="row justify-content-center">
            <div className="col-auto d-flex flex-row flex-wrap">
            {
                boxes.map( (box,index) => <div key={index} style={ boxStyle(box) }></div>)
            }
            </div>
        </div>
    )
}

export default DisplayBoxes