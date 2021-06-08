// import img from "./tswr.png";
// import logoSvg from "./react.svg";
import { useState } from 'react';
import Welcome from './Welcome';
import List from './List';

// interface
export interface IState {
    message: string
    list: { name: string }[]
}

const App = () => {
    const [message, setMessage] = useState<IState["message"]>("Welcome! TS + React + Webpack");
    const [list, setList] = useState<IState["list"]>([
        {name: "TypeScript"}, {name: "React"}, {name: "WebPack"}
    ]);

    return <>
        <Welcome msg={message} />
        <hr />
        <List data={list} />
    </>
}

export default App;