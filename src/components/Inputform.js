import React, { useState } from 'react'
//react hooks



export default function Inputform(props) {
    const [text, settext] = useState("");
    const upperCaseClicked = () => {
        console.log("UpperCase was clicked!");
        let upptext = text.toUpperCase();
        settext(upptext);
        if(text==""){
            props.showAlert("PLEASE ENTER SOME TEXT","warning");
        }
        else{
        props.showAlert("CONVERTED TO UPPERCASE","success");
        }
    }
    const lowerCaseClicked = () => {
        console.log("lowerCase was clicked!");
        let lowtext = text.toLowerCase();
        settext(lowtext);
        if(text==""){
            props.showAlert("PLEASE ENTER SOME TEXT","warning");
        }
        else{
        props.showAlert("CONVERTED TO LOWERCASE","success");
        }
    }
    const clearTextClicked = () => {
        console.log("clearText was clicked!");
        let cleartext = "";
        settext(cleartext);
    }
    const copyTextClicked = () => {
        console.log("copyText was clicked!");
        let copiedText = document.getElementById('myBox');
        copiedText.select();
        navigator.clipboard.writeText(copiedText.value);
        if(text==""){
            props.showAlert("PLEASE ENTER SOME TEXT","warning");
        }
        else{
        props.showAlert("COPIED TO CLIPBOARD!","success");
        }
    }
    const removeSpacesClicked = () => {
        console.log("removeExtraSpaces was clicked!");
        let newtext = text.split(/[ ]+/);
        settext(newtext.join(" "));
        if(text==""){
            props.showAlert("PLEASE ENTER SOME TEXT","warning");
        }
        else{
        props.showAlert("REMOVED EXTRA SPACES!","success");
        }
    }
    const downloadClicked = () => {
        console.log("download Text was clicked!");
        var blob = new Blob([text], { type: "text/plain" });
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = "textutils.txt";
        a.click();
    }
    const onChangeHandler = (event) => {
        settext(event.target.value);
    }
    return (
        <>
            <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.title}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={onChangeHandler} id="myBox" rows="7" style={{ color: 'black' }}></textarea>
                    <button className="btn btn-primary my-3" onClick={upperCaseClicked}>UPPERCASE</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={lowerCaseClicked}>LOWERCASE</button>
                    <button className="btn btn-primary my-3 " onClick={copyTextClicked}>COPYTEXT</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={removeSpacesClicked}>REMOVE EXTRA SPACES</button>
                    <button className="btn btn-primary my-3" onClick={clearTextClicked}>CLEARTEXT</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={downloadClicked}>DOWNLOAD TEXT</button>
                </div>
            </div>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3>WORDS AND CHARACTERS</h3>
                <p><b>{text === "" ? "0" : text.match(/(\w+)/g).length}</b> WORDS <b>{text.length}</b> CHARACTERS</p>
            </div>
        </>
    )

}
