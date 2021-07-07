import React, { useMemo, useState } from 'react'

const UseMemoDemo = () => {
    // tuong ung voi constructor
    useMemo(() => {
        console.log("useMemo run ..");

    }, [])
    const [count, setCount] = useState(2)
    const [user, setUser] = useState({
        firstName: 'Khoi',
        lastName: 'Nguyen'
    })

    const FullName = useMemo(() => {
        console.log("change");
        return user.firstName + " " + user.lastName
    }, [user])
    console.log("render here");

    return (
        <div className="container">
            this is demo use memo {FullName}
            <button onClick={() => setCount(count + 2)}>{count}</button>
        </div>
    )
}

export default UseMemoDemo;