import { FC } from "react";
import { IState as props } from "./App";

// interface
interface IProps {
    msg: props["message"]
}

const Welcome: FC<IProps> = ({ msg }) => {
    return <h1>{msg}</h1>
}

export default Welcome;