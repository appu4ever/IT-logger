import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addLog } from '../../actions/logActions'
import M from 'materialize-css/dist/js/materialize.min.js'
import TechSelectOptions from '../techs/TechSelectOptions'

const AddLogModal = ({ addLog }) => {
    const [message, setMessage] = useState('')
    const [attention, setAttention] = useState(false)
    const [tech, setTech] = useState('')

    const onSubmit = e => {
        if (message === '' || tech === '') {
            M.toast({ html : 'Please enter the message and the name of the technician'})
        } else {
            addLog({
                message,
                attention,
                tech,
                date: new Date()
            })
            M.toast({
                html: `Log added by ${tech}`
            })
            // Clear the state variables
            setMessage('')
            setAttention(false)
            setTech('')
        }
        
    }

    return (
        <div className= "modal" id= "add-log-modal" style= {modalStyle}>
            <div className= "modal-content">
                <h4>Enter System Log</h4>
                <div className= "row">
                    <div className= "input-field">
                        <input type= "text" name= 'message' value= {message} onChange= {e => setMessage(e.target.value)} />
                        <label htmlFor= "message" className= "active">Log Message</label>
                    </div>
                </div>
                <div className= "row">
                    <div className= "input-field">
                        <select className= "browser-default" value= {tech} onChange= {e => setTech(e.target.value)}>
                            <option value= "">Select Technician</option>
                            <TechSelectOptions />
                        </select>
                    </div>
                </div>
                <div className= "row">
                    <div className= "input-field">
                        <p>
                            <label>
                                <input type="checkbox" value= {attention} checked= {attention} onChange= {e => setAttention(!attention)} />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className= "modal-footer">
                <a href= "#!" onClick = {onSubmit} className= "modal-close waves-effect blue btn">Enter</a>
            </div>
        </div>
    )
}

const modalStyle= {
    width: '75%',
    height: '75%'
}

AddLogModal.propTypes = {
    addLog: PropTypes.func.isRequired
}

export default connect(null, { addLog })(AddLogModal)
