import React, { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import { ItemCard } from '../../../components/ItemCard'
import { MUIButton } from '../../../components/MUIButton'

const LifeCycle = () => {
    const [count, setCount] = useState(0)
    const [isReal, setIsReal] = useState(true)
    console.log("render is run...")
    // == componentDidMount & componentDidUpdate
    // useEffect(() => {
    //     console.log("hello");
    //     // componentWillUnMount
    //     return () => {
    //         console.log("close");
    //     }
    // })

    // chay 1 lan duy nhat sau khi render
    useEffect(() => {
        console.log("hello world!");
    }, [])

    // chay khi count thay doi
    useEffect(() => {
        console.log("change count");
    }, [count])
    return (
        <Container>
            <div>this is LifeCycle hook</div>
            <Button onClick={() => { setCount(count + 1) }}>Click Me</Button>
            <p>{count}</p>

            <MUIButton onClickButton={() => { setIsReal(!isReal) }} title="Click"></MUIButton>
            {
                isReal && <ItemCard></ItemCard>
            }

        </Container>
    )
}

export default LifeCycle;