import { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";
function App() {
    const [linea1, setLinea1] = useState("");
    const [linea2, setLinea2] = useState("");
    const [img, setImg] = useState("fire");

    const onChangeLinea1 = (e) => {
        setLinea1(e.target.value);
    };
    const onChangeLinea2 = (e) => {
        setLinea2(e.target.value);
    };
    const exportarMeme = () => {
        html2canvas(document.querySelector("#meme")).then((canvas) => {
            let link = document.createElement("a");
            link.download = `meme${img}.png`;
            link.href = canvas.toDataURL();
            link.click();
        });
    };
    const onChangeImg = (e) => {
        setImg(e.target.value);
    };
    return (
        <div className="App">
            <div className="container">
                <select onChange={onChangeImg}>
                    <option value="fire">Fire</option>
                    <option value="futurama">Futurama</option>
                    <option value="history">History</option>
                    <option value="matrix">Matrix</option>
                    <option value="philosoraptor">Philosoraptor</option>
                    <option value="smart">Smart guy</option>
                </select>
            </div>

            <div className="containerInput">
                <input
                    onChange={onChangeLinea1}
                    type="text"
                    placeholder="Your text here..."
                />
                <br />
                <input
                    onChange={onChangeLinea2}
                    type="text"
                    placeholder="Your text here..."
                />
                <br />
                <br />
                <button onClick={exportarMeme}>Download</button>
            </div>
            <div className="meme" id="meme">
                <h2>{linea1}</h2>
                <img
                    src={"./assets/" + img + ".jpg"}
                    alt="description image to make a meme"
                />
                <h2>{linea2}</h2>
            </div>
            <div className="footer">
                <h3 className="madeBy">
                    Made by:{" "}
                    <a
                        href="https://github.com/zusldev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @zusldev
                    </a>
                </h3>
            </div>
        </div>
    );
}

export default App;
