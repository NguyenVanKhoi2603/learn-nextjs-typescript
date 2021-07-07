import React, { useCallback, useState } from 'react'

const useCallBackDemo = () => {
    const [count, setCount] = useState(0)

    // khoi tao khong mong muon
    const handleOnClickButton = () => {
        console.log("no call back");
        setCount(count + 1)
    }

    const handleOnchangeButton = useCallback(() => {
        console.log("use call back");
        setCount(count + 1)
    }, [count])

    return (
        <div className="container">
            This is demo useCallback
            <button onClick={handleOnClickButton}>count: {count}</button>
        </div>
    )
}

export default useCallBackDemo;