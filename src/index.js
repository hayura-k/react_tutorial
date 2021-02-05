import React from 'react';
import ReactDOM from 'react-dom';
import ColorfulMsg from './components/ColorfulMsg';

const App = ()=>{
    return(
        <>
        <h2>Reactハンズオン！</h2>
        <ColorfulMsg color="blue">これは使わねーだろ</ColorfulMsg>
        <ColorfulMsg color="green">Vue</ColorfulMsg>
        <ColorfulMsg color="red">Angular</ColorfulMsg>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'))
