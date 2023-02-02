import "./bootstrap";
import ReactDOM from "react-dom/client";
import Counter from "./components/Counter";

function App() {
    return (
        <>
            <h1>Hello World</h1>
            <img src="images/iphone.jpg" />
            <Counter />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
