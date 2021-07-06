import React, { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import { ItemCard } from '../../../components/ItemCard'
import { MUIButton } from '../../../components/MUIButton'

const LifeCycle = () => {
    const [count, setCount] = useState(0)
    const [isReal, setIsReal] = useState(true)

    // == componentDidMount & componentDidUpdate
    useEffect(() => {
        console.log("hello");
        // componentWillUnMount
        return () => {
            console.log("close");

        }
    })
    return (
        <Container>
            <div>this is LifeCycle hook</div>
            <Button onClick={() => { setIsReal(!isReal) }}>Click Me</Button>
            <p>{count}</p>

            <MUIButton onClickButton={() => { setIsReal(!isReal) }} title="Click"></MUIButton>
            {
                isReal && <ItemCard></ItemCard>
            }

        </Container>
    )
}

export default LifeCycle;