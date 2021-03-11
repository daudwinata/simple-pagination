import React from 'react'

const User = ({ user }) => {
    return (
        <article className='card'>
            <hr />
            <p>{`Username: ${user.name.first} ${user.name.last}`}</p>

            <img src={user.picture.medium} />
            <p>{`Phone: ${user.phone}`}</p>
        </article>
    )
}

export default User;