import React, { useState } from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [file, setFile] = useState();

  // On file select 
  const onFileChange = e => {
    setFile(e.target.files[0]);
    // alert('fileSelected', file)
    console.log(e.target.files[0]);

  };


  const onSubmitHandler = (e) => {
    e.preventDefault()

    let formData = new FormData();
    formData.append("file", file);

    console.log("FILE", file);
    console.log("FORMDTA", formData);

    axios.post('http://localhost:5000/upload', formData, {
      header: {
        "Content-Type": "multipart/form-data",
      }
    })

      .then(response => {
        console.log("Status: ", response.status);
        alert(response.data);

      }).catch(error => {
        console.error('Something went wrong!', error);
      });

    setFile();

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>CSV IMPORT FILE</h1>

        <form onSubmit={e => onSubmitHandler(e)} encType='multipart/form-data'>
          <input
            type="file" name="file"
            accept='*.csv'
            onChange={onFileChange}
          />
          <button type="submit">UPLOAD</button>
        </form>

      </header>
    </div>
  );
}

export default App;
