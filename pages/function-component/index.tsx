import React from 'react'

const MyFunction: React.FC = ({ name, age }: any) => {
    return (
        <div className="class">
            this is function component
        </div>
    )
}

// example 2
const MyFunction2: React.FC<any> = ({ name, age }) => {
    return (
        <div className="class">
            this is function component
        </div>
    )
}

export default MyFunction;