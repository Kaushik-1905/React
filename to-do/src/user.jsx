import React, { useRef, useState } from 'react'

const User = () => {

    const nameRef = useRef(null)
    const mailRef = useRef(null)

    const [userData, setUserData] = useState(null)

    function userSubmit(e) {
        e.preventDefault()

        const obj = {
            name: nameRef.current.value,
            mail: mailRef.current.value
        }

        setUserData(obj)

        nameRef.current.value = ""
        mailRef.current.value = ""
    }

    return (
        <div>
            <form onSubmit={userSubmit}>
                <input ref={nameRef} type="text" placeholder='name' />
                <input ref={mailRef} type="email" placeholder='mail' />
                <button type="submit">Submit</button>
            </form>

            {userData && (
                <div>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.mail}</p>
                </div>
            )}
        </div>
    )
}

export default User
