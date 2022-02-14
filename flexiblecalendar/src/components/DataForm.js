import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { keysCount } from '../redux/actions/keysCount'
import { allRecords } from '../redux/actions/allRecords'
import { timeAction } from '../redux/actions/timeAction'


const DataForm = ({ keysCountReducer, keysCount, recordsReducer, allRecords, timeReducer, timeAction }) => {

    useEffect(() => {
        keysCount()
        allRecords()
        timeAction()
    }, [])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div>
            <div style={{ borderBottom: "1px solid black", margin: "5px", padding: "5px" }}>
                {<h3 style={{ borderBottom: "1px solid black", paddingBottom: "10px" }}>Average Wake Time: {timeReducer.average_wake}</h3>}
                {<h3>{keysCountReducer.length} topics</h3>}
            </div>
            <div style={{ borderBottom: "1px solid black", margin: "5px", padding: "5px", display: "flex", flexWrap: "wrap", flexDirection: "row", textAlign: "center" }}>
                {keysCountReducer.map((e, index) => (
                    <div>
                        <h3 style={{ margin: "5px", padding: "5px", border: "1px solid white", width: "250px" }}>{capitalizeFirstLetter(e)}</h3>
                    </div>
                ))}
            </div >
            <div style={{ borderBottom: "1px solid black", margin: "5px", padding: "5px" }}>
                {recordsReducer.map((e, index) => (
                    <div>
                        {Object.keys(e).map(function (key) {
                            return <h4 key={index} style={{ margin: "10px", padding: "10px", borderBottom: "1px solid black" }}>{capitalizeFirstLetter(key) + ' : ' + e[key]}</h4> // RETURN was the solution.......
                        })}
                    </div>
                ))}
            </div>
        </div >
    )
}

const mapStateToProps = state => ({
    keysCountReducer: state.keysCountReducer,
    recordsReducer: state.recordsReducer,
    timeReducer: state.timeReducer
})

//when null is present that means it's not connecting to any of the state
//{setAlert} could also have more within it
export default connect(mapStateToProps, { keysCount, allRecords, timeAction })(DataForm)