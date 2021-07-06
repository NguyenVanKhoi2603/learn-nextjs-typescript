import React from 'react';

type AppProps = {
    isReal: boolean
}

class MyClass extends React.Component<AppProps> {
    render() {
        return (
            <div>This is class Component Example</div>
        )
    }
}

export default MyClass;