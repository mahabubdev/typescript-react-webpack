import { FC } from "react";
import { IState as Props } from './App';

// interface
interface IProps {
    data: Props["list"]
}

const List: FC<IProps> = ({ data }) => {
    return <div>
        <p>List | {data.length}</p>
        <hr />
        {data.length > 0 && <div>
            {data.map((l, i) => (
                <p key={i}>{l.name}</p>
            ))}
        </div>}
    </div>
}


export default List;