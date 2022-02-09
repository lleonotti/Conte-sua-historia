import React, { useState } from 'react';
import milos from "../assets/milos.jpg";
import quit from "../assets/quit-icon.svg"
import lapiz from "../assets/lapiz.svg"
import "./Perfil.css"

function Perfil() {
    const [disable, setDisabled] = useState(true)
    const [name, setName] = useState('Strogonoff')

    const enableEditing = () => {
        setDisabled(false)
    }

  return (
  <div className="postAndtags-container">
      <section className="tags-container">
        <div className="tags-left">
        </div>
        <img id="button-quit-post" src={quit} alt="Botao sair" />
      </section>
      <div className="post-container">
        <header className="post-header">
          <div className="post-userInfo">
            <img
              className="post-image-container"
              src={milos}
              alt="Foto de Perfil"
            />
            <p className="post-username">@ Ricardo Milos</p>
          </div>
      
        </header>
        <form className="post-content-container">
            <section className="top-section-container">
                <div className="form-left-container">
                    <div className="form-g">
                    <label>Endereço:</label><br />
                    <div className="buttonInside">
                        <input type="text" id="endereco" disabled={disable} value={""} onChange={e => setName(e.target.value)} />
                        <button id="editNome" className="buttonInput" type="button" onClick={enableEditing}> <img src={lapiz} alt="" /> </button>
                    </div>
            </div>
                </div>
            </section>
          <div className="form-g">
                    <label>Endereço:</label><br />
                    <div className="buttonInside">
                        <input type="text" id="endereco" disabled={disable} value={""} onChange={e => setName(e.target.value)} />
                        <button id="editNome" className="buttonInput" type="button" onClick={enableEditing}> <img src={lapiz} alt="" /> </button>
                    </div>
            </div>

        </form>
      </div>
      </div>
      );
}

export default Perfil;
