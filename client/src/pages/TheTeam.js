import React from 'react'

function TheTeam({teamImage, memberName, teamRole, personal}) {
    return (
        <div>
            <img src={teamImage}></img>
            <div className="teamMemberAbout">
                <h3 className="teammmateName">{memberName}</h3>
                <h4 className="teamRole">{teamRole}</h4>
                <p>{personal}</p>
            </div>
        </div>
    )
}

export default TheTeam
