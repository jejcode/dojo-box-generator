import React, {useState } from 'react'

const BoxForm = (props) => {
    const [boxColor, SetBoxColor] = useState("")
    const [boxSize, SetBoxSize] = useState("")

    const drawBox = (e) => {
        e.preventDefault()
        props.onNewBox({color: boxColor || 'black', size: boxSize || 25})

        SetBoxColor("")
        SetBoxSize("")

    }

    return (
        <form onSubmit={ drawBox }>
            <div className="row m-4 justify-content-center">
                <div className="col-auto">
                    <label className="form-label" htmlFor="color">Color:</label>
                </div>
                <div className="col-auto">
                    <input autoFocus className="form-input" type="text" name="color" id="color" onChange={ (e) => SetBoxColor(e.target.value)} value={ boxColor }/>
                </div>
                <div className="col-auto">
                    <label className="form-label" htmlFor="size">Size:</label>
                </div>
                <div className="col-auto">
                    <input className="form-input" type="number" name="size" id="size" onChange={ (e) => SetBoxSize(e.target.value)} value={ boxSize }/>
                </div>
                <div className="col-auto">
                    <input className="btn btn-light" type="submit" value="Add" />
                </div>
            </div>
        </form>
    )
}

export default BoxForm