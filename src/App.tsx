import img from "./tswr.png";
import logoSvg from "./react.svg";

const App = () => {
    return <>
        <h1>TypeScript + React + Webpack</h1>
        <hr />
        <div className="_img">
            <img src={logoSvg} alt="logo" />
            <hr />
            <img src={img} alt="TS+React+Webpack" />
        </div>
    </>
}

export default App;