import { useState } from 'react';
import './inputText.css';

const InputText = (props) => {

    const [input, setInput] = useState(''); // '' is the initial state value

    const translate = require('@imlinhanchao/google-translate-api');

    const handleClick = () => {
        console.log(input);
        translate(input, { from: 'en', to: 'de' }).then(res => {

            console.log(res.text);

        }).catch(err => {
            console.error(err);
        });
    }


    const handleChange = (event) => {
        setInput(event.target.value);
    }



    // translate(setInput, {from: 'en', to: 'de'}).then(res => {

    //     console.log(res.text);

    // }).catch(err => {
    //     console.error(err);
    // });


    return (
        <div className="input-wrapper">
            <input type="text" placeholder="Type your English translation here" onChange={handleChange} />
            <div onClick={handleClick}>
                <p>submit</p>
            </div>
        </div>
    )
}


export default InputText;