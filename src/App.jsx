import { useState, useEffect } from "react";
import "./App.css";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

import fire from "../public/fire.jpg";
import futurama from "../public/futurama.jpg";
import history from "../public/history.jpg";
import matrix from "../public/matrix.jpg";
import philosoraptor from "../public/philosoraptor.jpg";
import smart from "../public/smart.jpg";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [img, setImg] = useState("");

  // Custom image
  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imgData = e.target.result;
        setImg(imgData);
        localStorage.setItem("img", imgData); // guardamos la imagen en el Local Storage
      };
      reader.readAsDataURL(file);
    }
  };

  // load img from local storage
  const imgLocal = localStorage.getItem("img");
  useEffect(() => {
    const imgLocal = localStorage.getItem("img");
    if (imgLocal) {
      setImg(imgLocal);
    }
  }, []);

  const onChangeLinea1 = (e) => {
    setLinea1(e.target.value);
  };
  const onChangeLinea2 = (e) => {
    setLinea2(e.target.value);
  };
  // download meme
  const exportarMeme = () => {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      canvas.toBlob(function (blob) {
        saveAs(blob, `meme_${img}.png`);
      });
    });
  };

  const onChangeImg = (e) => {
    const { value } = e.target;
    switch (value) {
      case "fire":
        setImg(fire);
        break;
      case "futurama":
        setImg(futurama);
        break;
      case "history":
        setImg(history);
        break;
      case "matrix":
        setImg(matrix);
        break;
      case "philosoraptor":
        setImg(philosoraptor);
        break;
      case "smart":
        setImg(smart);
        break;
      case "custom":
        setImg(imgLocal);
        break;
      default:
        setImg(imgLocal);
        break;
    }
  };

  return (
    <div className="App">
      <div className="container">
        <select onChange={onChangeImg}>
          <option value="">Selecciona una imagen</option>
          <option value="fire">Fire</option>
          <option value="futurama">Futurama</option>
          <option value="history">History</option>
          <option value="matrix">Matrix</option>
          <option value="philosoraptor">Philosoraptor</option>
          <option value="smart">Smart guy</option>
          <option value="custom">Custom</option>
        </select>
      </div>
      <div className="containerInput">
        <input type="file" onChange={handleImageUpload} />
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
          src={img}
          alt="description image to make a meme"
          width={500}
          height={500}
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
        <a
          href="
            https://github.com/zusldev/react-memesGenerator"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
        </a>
      </div>
    </div>
  );
}

export default App;
