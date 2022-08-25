import { useState } from "react";
import "./Translate.css";
import axios from "axios";
import { chars } from "unescape";

const Translate = () => {
  const [input, setInput] = useState("");
  const [language, setLang] = useState({
    fr: "",
    de: "",
    it: "",
    es: "",
    sv: "",
  });

  const [text, setText] = useState("");

  const inputHandler = (event) => {
    setText(event.target.value);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(text);
  };

  const decode = require("unescape");

  const encodedParams = new URLSearchParams();
  encodedParams.append("text", input);
  encodedParams.append("to", "fr;de;it;es;sv");
  encodedParams.append("from", "en");

  const options = {
    method: "POST",
    url: "https://google-unlimited-multi-translate.p.rapidapi.com/api_translate_unlimited.php",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Host": "google-unlimited-multi-translate.p.rapidapi.com",
      "X-RapidAPI-Key": "65f9aa16d3msh87bbae5f4fbf8a7p116fbajsnfbf24f419fb1",
    },
    data: encodedParams,
  };

  //   axios.request(options).then(function (response) {
  //       console.log(response.data);
  //   }).catch(function (error) {
  //       console.error(error);
  //   });

  const handleClick = () => {
    // console.log(JSON.stringify(input));

    axios
      .request(options)
      .then(function (response) {
        // console.log(response.data.result.it);

        setLang(response.data.result);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <div className="input-wrapper">
        <input
          type="text"
          value={input.value}
          placeholder="Type your English translation here"
          onChange={handleChange}
        />
        <input type="submit" onClick={handleClick} value="Translate" />
      </div>

      <div className="card-wrapper">
        {/* {languages.map((language, index) => {
          return ( */}
        <div className="card" onClick={handleClick}>
          <div className="card-translation">
            <input
              type="text"
              value={decode(language.fr)}
              onChange={inputHandler}
            />
            <button onClick={copy} disabled={!decode(language.fr)}>
              Copy
            </button>
          </div>
          <div className="card-label">
            <h2>French</h2>
          </div>
        </div>
        {/* );
        })} */}

        <div className="card">
          <div className="card-translation">
            <input
              type="text"
              value={decode(language.de)}
              onChange={inputHandler}
            />
            <button onClick={copy} disabled={!decode(language.de)}>
              Copy
            </button>
          </div>
          <div className="card-label">
            <h2>German</h2>
          </div>
        </div>

        <div className="card">
          <div className="card-translation">
            <p>{decode(language.it)}</p>
          </div>
          <div className="card-label">
            <h2>Italian</h2>
          </div>
        </div>

        <div className="card">
          <div className="card-translation">
            <p>{decode(language.es)}</p>
          </div>
          <div className="card-label">
            <h2>Spanish</h2>
          </div>
        </div>

        <div className="card">
          <div className="card-translation">
            <p>{decode(language.sv)}</p>
          </div>
          <div className="card-label">
            <h2>Swedish</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Translate;

// {Object.values(lang).map((lol, index) => {
//     return (
//         <h2 key={index}>{lol}</h2>
//     )
// })}
