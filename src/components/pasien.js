import React, { useState } from "react";
import pasienData from "../data/pasien.json";

const PasienPage = ({pelayananItem,pasienItem,setPasienItem}) => {
    
    const [modalActive, setModalActive] = useState({ isModal: false });
    const [newItem, setNewItem] = useState({nama: "",nohp: "",jeniskel: "",agama: ""});
    const active = modalActive.isModal ? "is-active" : "";

  const handleSetPasien = (e) => {
    e.preventDefault();
    const addPasienItem = { ...pasienItem };
    addPasienItem.nama = newItem.nama;
    addPasienItem.jeniskel = newItem.jeniskel;
    addPasienItem.nohp = newItem.nohp;
    addPasienItem.agama = newItem.agama;
    setPasienItem(addPasienItem);
    handleClose();
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setNewItem((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  const handleClose = () => {
    setModalActive({ isModal: !modalActive.isModal });
  };

  const handleBoxClick = (nama, nohp, jeniskel, agama) => {
    setNewItem({ nama, nohp, jeniskel, agama });
  };

  const saveAllData = (e) => {
    e.preventDefault();
    var getId = pasienData.length;
    const data = {
      id: 3+getId,
      nama: pasienItem.nama,
      nohp: pasienItem.nohp,
      jeniskel: pasienItem.jeniskel,
      agama: pasienItem.agama,
      pelayanan: {
        status: pelayananItem.status,
        layanan: pelayananItem.layanan,
        pembayaran: pelayananItem.pembayaran,
        poli: pelayananItem.poli,
        dokter: pelayananItem.dokter,
      },
    };
        const element = document.createElement("a");
        const textFile = new Blob([JSON.stringify(data)], {type: 'json'}); //pass data from localStorage API to blob
        element.href = URL.createObjectURL(textFile);
        element.download = "pasien.json";
        document.body.appendChild(element); 
        element.click();
    localStorage.setItem("id",JSON.stringify(data));
  };

  return (
    <main class="container">
      <section class="hero">
        <div class="hero-body">
          <p class="title">Selamat Datang</p>
          <p class="subtitle">Silahkan Cek atau Isi</p>
        </div>
      </section>
      <div class="subtitle">Data Pasien</div>
      <div class="buttons">
        <button onClick={handleClose} className="button is-large">
          Isi Data Pasien
        </button>
        <button onClick={saveAllData} className="button is-large is-success">
          Simpan Semua Data
        </button>
      </div>
      <div class="box" onClick={() => handleBoxClick(pasienItem.nama,pasienItem.nohp,pasienItem.jeniskel,pasienItem.agama)}>
        <div class="subtitle is-6">klik untuk edit!</div>
        Nama : {pasienItem.nama},<br />
        NoHP : {pasienItem.nohp},<br />
        Jenis Kelamin : {pasienItem.jeniskel},<br />
        Agama : {pasienItem.agama}
      </div>
      <div class="column">
        <div class="box">
            {pasienData.map(e=>(
                <p key={e.id}>
                {e["nama"]+" "+e["jeniskel"]+" Pelayanan[ "+e["pelayanan"]["status"]+" "+e["pelayanan"]["poli"]+" "+e["pelayanan"]["dokter"]+" ]"}
                </p>
            ))}
        </div>
      </div>

      <div class={`modal ${active}`}>
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Isi data pasien</p>
            <button class="delete" aria-label="close" onClick={handleClose} />
          </header>
          <form onSubmit={handleSetPasien}>
            <section class="modal-card-body">
              <div class="field is-vertical">
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="e.g Alex Smith"
                      name="nama"
                      value={newItem.nama}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">No Hp</label>
                  <div className="control">
                    <input
                      className="input"
                      type="number"
                      placeholder="0872333"
                      name="nohp"
                      value={newItem.nohp}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Jenis Kelamin</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Pria"
                      name="jeniskel"
                      value={newItem.jeniskel}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Agama</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Islam"
                      name="agama"
                      value={newItem.agama}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </section>
            <footer class="modal-card-foot">
              <button class="button is-success">DAFTAR</button>
            </footer>
          </form>
        </div>
      </div>
    </main>
  );
};

export default PasienPage;
