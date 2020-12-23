import { Avatar, Icon } from '@material-ui/core'
import React from 'react'
import "./SidebarRow.css"

function SidebarRow({src, Icon, title}) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src}></Avatar>}
            {/* pass a component as a prop */}
            {Icon && <Icon/>}

            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow