import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteTech } from '../../actions/techActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const TechItem = ({ tech, deleteTech }) => {

    const onDelete = (id) => {
        deleteTech(id)
        M.toast({html: 'Technician deleted'})
    }
    return (
        <li className= "collection-item">
            {tech.firstName} {tech.lastName}
            <a href= "#!" onClick = {() => onDelete(tech.id)} className= "secondary-content">
                <i className= "material-icons grey-text">delete</i>
            </a>
        </li>
    )
}

TechItem.propTypes = {
    tech: PropTypes.object.isRequired,
    deleteTech: PropTypes.func.isRequired
}

export default connect(null, { deleteTech })(TechItem)
