import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { allEntries } from '../redux/actions/allEntries'

const Allentries = ({ entriesReducer, allEntries }) => {

    useEffect(() => {
        allEntries()
    }, [])


    return (
        <div>
            <div style={{ borderBottom: "1px solid black", marginLeft: "10px", paddingLeft: "10px" }}><h3>Entry Count: {entriesReducer.length}</h3></div>
            {entriesReducer.map((e, index) => (
                < div key={index} style={{ borderBottom: "1px solid black", margin: "10px", padding: "10px" }}>
                    <h3>Date: {e.date}</h3>
                    <ul>
                        {Object.keys(e.entry).map(function (key) {
                            return <li key={index} style={{ listStylePosition: "outside" }}>{key + ' : ' + e.entry[key]}</li> // RETURN was the solution.......
                            // add a ul around li for listStylePosition:"outside" to work
                        })}
                    </ul>
                </div>
            ))
            }
        </div >
    )
}

const mapStateToProps = state => ({
    entriesReducer: state.entriesReducer.reverse()
})

//when null is present that means it's not connecting to any of the state
//{setAlert} could also have more within it
export default connect(mapStateToProps, { allEntries })(Allentries)