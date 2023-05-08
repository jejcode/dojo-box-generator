const DisplayBoxes = (props) => {
    // My original solution:
    // const boxes = props.listOfBoxes
    // the solution on the platform shows destructurng of props. My response:
    const {listOfBoxes: boxes} = props
    const boxStyle = (boxAtt) => {
        return {
            height: parseInt(boxAtt.size),
            width: parseInt(boxAtt.size),
            background: boxAtt.color,
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