import React, { useEffect } from 'react'
import { connect } from 'react-redux'

const EntryForm = ({ }) => {

    useEffect(() => {

    }, [])

    return (
        <div style={{ margin: "10px", padding: "10px" }}>
            figure the form thing out this thursday....
            you want to add to this compnent dynamically.
        </div >
    )
}

const mapStateToProps = state => ({
    hello: "disco"
})

export default connect(mapStateToProps, {})(EntryForm)