import React, { useState } from "react";


function App() {

  // Statement
  const [usia, setUsia] = useState(0)
  const [tinggi, setTinggi] = useState(0)
  const [berat, setBerat] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setmessage] = useState('')


  let calculatBmi = (e) => {
    e.preventDefault()

    if (berat === 0 || tinggi === 0) {
      alert('masukan nilai yang benar')
    } else {
      
      let bmi = ( berat / (tinggi/100*tinggi/100) )
      setBmi(bmi.toFixed(1))

      if (bmi < 18.5) {
        setmessage('kurang berat badan')
      } else if (bmi >= 18.5 && bmi < 25) {
        setmessage('Berat badan kamu IDEAL. Pertahankan!')
      } else {
        setmessage('Kelebihan berat badan')
      }

    }
  }

  let reload = () => {
    window.location.reload()
  }
  

  return (
    <div className="app">
      <div className="container">
      <h2 className="center">Hallo kak, silahkan coba BMI Calculator nya!</h2>
      <form onSubmit={calculatBmi}>
        <div className="mb-3">
          <label className="form-label">Usianya berapa kak ? (Tahun)</label>
          <input type="number" className="form-control" id="exampleInputTahun1" value={usia} onChange={(e) => setUsia(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Tingginya Berapa ? (cm)</label>
          <input type="number" className="form-control" id="exampleInputTinggi1" value={tinggi} onChange={(e) => setTinggi(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Kalo beratnya, berapa ? (kg)</label>
          <input type="number" className="form-control" id="exampleInputBerat1" value={berat} onChange={(e) => setBerat(e.target.value)} />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary m-3" type="submit" >Klik ini untuk melihat hasilnya kak</button>
          <button className="btn btn-outline btn-danger" onClick={reload} type="submit">Hapus</button>
        </div>
      </form>

      

      <center><h3>HASIL BMI</h3></center>
      <div className="alert alert-primary" role="alert">{bmi}</div>
      <div className="alert alert-primary" role="alert">{message}</div>
      
      {/* <div class="form-floating mb-2">
        <textarea class="form-control bg-primary"></textarea>
        <label for="floatingTextarea">
        <p class="text-white">{bmi}</p>
        </label>
      </div>
      <div class="form-floating">
        <textarea class="form-control bg-primary "></textarea>
        <label for="floatingTextarea">
        <p class="text-white">{message}</p>
        </label>
      </div> */}

      </div>      
    </div>
  );
}

export default App;
