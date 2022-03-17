import React, { useState } from "react";
import ReactDom from "react-dom";
import milos from "../assets/milos.jpg";
import quit from "../assets/quit-icon.svg";
import lapiz from "../assets/lapiz.svg";
import "./Perfil.css";

function Perfil({ open, onClose }) {
  const [disable, setDisabled] = useState(true);
  const [name, setName] = useState("Strogonoff");

  const enableEditing = () => {
    setDisabled(false);
  };

  if (!open) return null;
  else document.getElementById("root").style.filter = "blur(8px)";

  return ReactDom.createPortal(
    <div className="perfil-container">
      <section className="tags-container">
        <div className="tags-left"></div>
        <img
          id="button-quit-post"
          src={quit}
          alt="Botao sair"
          onClick={onClose}
        />
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
        <form className="perfil-content-container">
          <section className="top-section-container">
            <div className="form-left-container">
              <div className="form-g">
                <label>Nome:</label>
                <br />
                <div className="buttonInside">
                  <input
                    type="text"
                    id="nome-input"
                    disabled={disable}
                    // value={""}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                  />
                  <button
                    id="editNome"
                    className="buttonInput-form-g"
                    type="button"
                    onClick={enableEditing}
                  >
                    {" "}
                    <img src={lapiz} alt="" />{" "}
                  </button>
                </div>
              </div>
              <div className="form-g">
                <label>Email:</label>
                <br />
                <div className="buttonInside">
                  <input
                    type="text"
                    id="email"
                    disabled={disable}
                    // value={""}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="user@email.com.br"
                  />
                  <button
                    id="editEmail"
                    className="buttonInput-form-g"
                    type="button"
                    onClick={enableEditing}
                  >
                    {" "}
                    <img src={lapiz} alt="" />{" "}
                  </button>
                </div>
              </div>
              <div className="sideBySideForm">
                <div className="form-m">
                  <label>Gênero:</label>
                  <br />
                  <div className="buttonInside">
                    <input
                      type="text"
                      id="genero-form"
                      disabled={disable}
                      // value={""}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Meu gênero"
                    />
                    <button
                      id="edit-genero"
                      className="buttonInput-form-m"
                      type="button"
                      onClick={enableEditing}
                    >
                      {" "}
                      <img src={lapiz} alt="" />{" "}
                    </button>
                  </div>
                </div>
                <div className="form-m">
                  <label>Celular:</label>
                  <br />
                  <div className="buttonInside">
                    <input
                      type="number"
                      id="numeroCelular"
                      disabled={disable}
                      // value={""}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="(99)99999-9999"
                    />
                    <button
                      id="editNome"
                      className="buttonInput-form-m"
                      type="button"
                      onClick={enableEditing}
                    >
                      {" "}
                      <img src={lapiz} alt="" />{" "}
                    </button>
                  </div>
                </div>
                <div className="form-m">
                  <label>Data de Nascimento:</label>
                  <br />
                  <div className="buttonInside">
                    <input
                      type="date"
                      id="dataNascimento-form"
                      disabled={disable}
                      // value={""}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <button
                      id="edit-dataNascimento"
                      className="buttonInput-form-m"
                      type="button"
                      onClick={enableEditing}
                    >
                      {" "}
                      <img src={lapiz} alt="" />{" "}
                    </button>
                  </div>
                </div>
                <div className="form-m">
                  <label>Horário Padrão:</label>
                  <br />
                  <div className="buttonInside">
                    <select
                      type="time"
                      id="horario-form"
                      disabled={disable}
                      value={""}
                      onChange={(e) => setName(e.target.value)}
                    >
                      <option
                        timeZoneId="1"
                        gmtAdjustment="GMT-12:00"
                        useDaylightTime="0"
                        value="-12"
                      >
                        (GMT-12:00) International Date Line West
                      </option>
                      <option
                        timeZoneId="2"
                        gmtAdjustment="GMT-11:00"
                        useDaylightTime="0"
                        value="-11"
                      >
                        (GMT-11:00) Midway Island, Samoa
                      </option>
                      <option
                        timeZoneId="3"
                        gmtAdjustment="GMT-10:00"
                        useDaylightTime="0"
                        value="-10"
                      >
                        (GMT-10:00) Hawaii
                      </option>
                      <option
                        timeZoneId="4"
                        gmtAdjustment="GMT-09:00"
                        useDaylightTime="1"
                        value="-9"
                      >
                        (GMT-09:00) Alaska
                      </option>
                      <option
                        timeZoneId="5"
                        gmtAdjustment="GMT-08:00"
                        useDaylightTime="1"
                        value="-8"
                      >
                        (GMT-08:00) Pacific Time (US & Canada)
                      </option>
                      <option
                        timeZoneId="6"
                        gmtAdjustment="GMT-08:00"
                        useDaylightTime="1"
                        value="-8"
                      >
                        (GMT-08:00) Tijuana, Baja California
                      </option>
                      <option
                        timeZoneId="7"
                        gmtAdjustment="GMT-07:00"
                        useDaylightTime="0"
                        value="-7"
                      >
                        (GMT-07:00) Arizona
                      </option>
                      <option
                        timeZoneId="8"
                        gmtAdjustment="GMT-07:00"
                        useDaylightTime="1"
                        value="-7"
                      >
                        (GMT-07:00) Chihuahua, La Paz, Mazatlan
                      </option>
                      <option
                        timeZoneId="9"
                        gmtAdjustment="GMT-07:00"
                        useDaylightTime="1"
                        value="-7"
                      >
                        (GMT-07:00) Mountain Time (US & Canada)
                      </option>
                      <option
                        timeZoneId="10"
                        gmtAdjustment="GMT-06:00"
                        useDaylightTime="0"
                        value="-6"
                      >
                        (GMT-06:00) Central America
                      </option>
                      <option
                        timeZoneId="11"
                        gmtAdjustment="GMT-06:00"
                        useDaylightTime="1"
                        value="-6"
                      >
                        (GMT-06:00) Central Time (US & Canada)
                      </option>
                      <option
                        timeZoneId="12"
                        gmtAdjustment="GMT-06:00"
                        useDaylightTime="1"
                        value="-6"
                      >
                        (GMT-06:00) Guadalajara, Mexico City, Monterrey
                      </option>
                      <option
                        timeZoneId="13"
                        gmtAdjustment="GMT-06:00"
                        useDaylightTime="0"
                        value="-6"
                      >
                        (GMT-06:00) Saskatchewan
                      </option>
                      <option
                        timeZoneId="14"
                        gmtAdjustment="GMT-05:00"
                        useDaylightTime="0"
                        value="-5"
                      >
                        (GMT-05:00) Bogota, Lima, Quito, Rio Branco
                      </option>
                      <option
                        timeZoneId="15"
                        gmtAdjustment="GMT-05:00"
                        useDaylightTime="1"
                        value="-5"
                      >
                        (GMT-05:00) Eastern Time (US & Canada)
                      </option>
                      <option
                        timeZoneId="16"
                        gmtAdjustment="GMT-05:00"
                        useDaylightTime="1"
                        value="-5"
                      >
                        (GMT-05:00) Indiana (East)
                      </option>
                      <option
                        timeZoneId="17"
                        gmtAdjustment="GMT-04:00"
                        useDaylightTime="1"
                        value="-4"
                      >
                        (GMT-04:00) Atlantic Time (Canada)
                      </option>
                      <option
                        timeZoneId="18"
                        gmtAdjustment="GMT-04:00"
                        useDaylightTime="0"
                        value="-4"
                      >
                        (GMT-04:00) Caracas, La Paz
                      </option>
                      <option
                        timeZoneId="19"
                        gmtAdjustment="GMT-04:00"
                        useDaylightTime="0"
                        value="-4"
                      >
                        (GMT-04:00) Manaus
                      </option>
                      <option
                        timeZoneId="20"
                        gmtAdjustment="GMT-04:00"
                        useDaylightTime="1"
                        value="-4"
                      >
                        (GMT-04:00) Santiago
                      </option>
                      <option
                        timeZoneId="21"
                        gmtAdjustment="GMT-03:30"
                        useDaylightTime="1"
                        value="-3.5"
                      >
                        (GMT-03:30) Newfoundland
                      </option>
                      <option
                        timeZoneId="22"
                        gmtAdjustment="GMT-03:00"
                        useDaylightTime="1"
                        value="-3"
                      >
                        (GMT-03:00) Brasilia
                      </option>
                      <option
                        timeZoneId="23"
                        gmtAdjustment="GMT-03:00"
                        useDaylightTime="0"
                        value="-3"
                      >
                        (GMT-03:00) Buenos Aires, Georgetown
                      </option>
                      <option
                        timeZoneId="24"
                        gmtAdjustment="GMT-03:00"
                        useDaylightTime="1"
                        value="-3"
                      >
                        (GMT-03:00) Greenland
                      </option>
                      <option
                        timeZoneId="25"
                        gmtAdjustment="GMT-03:00"
                        useDaylightTime="1"
                        value="-3"
                      >
                        (GMT-03:00) Montevideo
                      </option>
                      <option
                        timeZoneId="26"
                        gmtAdjustment="GMT-02:00"
                        useDaylightTime="1"
                        value="-2"
                      >
                        (GMT-02:00) Mid-Atlantic
                      </option>
                      <option
                        timeZoneId="27"
                        gmtAdjustment="GMT-01:00"
                        useDaylightTime="0"
                        value="-1"
                      >
                        (GMT-01:00) Cape Verde Is.
                      </option>
                      <option
                        timeZoneId="28"
                        gmtAdjustment="GMT-01:00"
                        useDaylightTime="1"
                        value="-1"
                      >
                        (GMT-01:00) Azores
                      </option>
                      <option
                        timeZoneId="29"
                        gmtAdjustment="GMT+00:00"
                        useDaylightTime="0"
                        value="0"
                      >
                        (GMT+00:00) Casablanca, Monrovia, Reykjavik
                      </option>
                      <option
                        timeZoneId="30"
                        gmtAdjustment="GMT+00:00"
                        useDaylightTime="1"
                        value="0"
                      >
                        (GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh,
                        Lisbon, London
                      </option>
                      <option
                        timeZoneId="31"
                        gmtAdjustment="GMT+01:00"
                        useDaylightTime="1"
                        value="1"
                      >
                        (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm,
                        Vienna
                      </option>
                      <option
                        timeZoneId="32"
                        gmtAdjustment="GMT+01:00"
                        useDaylightTime="1"
                        value="1"
                      >
                        (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana,
                        Prague
                      </option>
                      <option
                        timeZoneId="33"
                        gmtAdjustment="GMT+01:00"
                        useDaylightTime="1"
                        value="1"
                      >
                        (GMT+01:00) Brussels, Copenhagen, Madrid, Paris
                      </option>
                      <option
                        timeZoneId="34"
                        gmtAdjustment="GMT+01:00"
                        useDaylightTime="1"
                        value="1"
                      >
                        (GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb
                      </option>
                      <option
                        timeZoneId="35"
                        gmtAdjustment="GMT+01:00"
                        useDaylightTime="1"
                        value="1"
                      >
                        (GMT+01:00) West Central Africa
                      </option>
                      <option
                        timeZoneId="36"
                        gmtAdjustment="GMT+02:00"
                        useDaylightTime="1"
                        value="2"
                      >
                        (GMT+02:00) Amman
                      </option>
                      <option
                        timeZoneId="37"
                        gmtAdjustment="GMT+02:00"
                        useDaylightTime="1"
                        value="2"
                      >
                        (GMT+02:00) Athens, Bucharest, Istanbul
                      </option>
                      <option
                        timeZoneId="38"
                        gmtAdjustment="GMT+02:00"
                        useDaylightTime="1"
                        value="2"
                      >
                        (GMT+02:00) Beirut
                      </option>
                      <option
                        timeZoneId="39"
                        gmtAdjustment="GMT+02:00"
                        useDaylightTime="1"
                        value="2"
                      >
                        (GMT+02:00) Cairo
                      </option>
                      <option
                        timeZoneId="40"
                        gmtAdjustment="GMT+02:00"
                        useDaylightTime="0"
                        value="2"
                      >
                        (GMT+02:00) Harare, Pretoria
                      </option>
                      <option
                        timeZoneId="41"
                        gmtAdjustment="GMT+02:00"
                        useDaylightTime="1"
                        value="2"
                      >
                        (GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn,
                        Vilnius
                      </option>
                      <option
                        timeZoneId="42"
                        gmtAdjustment="GMT+02:00"
                        useDaylightTime="1"
                        value="2"
                      >
                        (GMT+02:00) Jerusalem
                      </option>
                      <option
                        timeZoneId="43"
                        gmtAdjustment="GMT+02:00"
                        useDaylightTime="1"
                        value="2"
                      >
                        (GMT+02:00) Minsk
                      </option>
                      <option
                        timeZoneId="44"
                        gmtAdjustment="GMT+02:00"
                        useDaylightTime="1"
                        value="2"
                      >
                        (GMT+02:00) Windhoek
                      </option>
                      <option
                        timeZoneId="45"
                        gmtAdjustment="GMT+03:00"
                        useDaylightTime="0"
                        value="3"
                      >
                        (GMT+03:00) Kuwait, Riyadh, Baghdad
                      </option>
                      <option
                        timeZoneId="46"
                        gmtAdjustment="GMT+03:00"
                        useDaylightTime="1"
                        value="3"
                      >
                        (GMT+03:00) Moscow, St. Petersburg, Volgograd
                      </option>
                      <option
                        timeZoneId="47"
                        gmtAdjustment="GMT+03:00"
                        useDaylightTime="0"
                        value="3"
                      >
                        (GMT+03:00) Nairobi
                      </option>
                      <option
                        timeZoneId="48"
                        gmtAdjustment="GMT+03:00"
                        useDaylightTime="0"
                        value="3"
                      >
                        (GMT+03:00) Tbilisi
                      </option>
                      <option
                        timeZoneId="49"
                        gmtAdjustment="GMT+03:30"
                        useDaylightTime="1"
                        value="3.5"
                      >
                        (GMT+03:30) Tehran
                      </option>
                      <option
                        timeZoneId="50"
                        gmtAdjustment="GMT+04:00"
                        useDaylightTime="0"
                        value="4"
                      >
                        (GMT+04:00) Abu Dhabi, Muscat
                      </option>
                      <option
                        timeZoneId="51"
                        gmtAdjustment="GMT+04:00"
                        useDaylightTime="1"
                        value="4"
                      >
                        (GMT+04:00) Baku
                      </option>
                      <option
                        timeZoneId="52"
                        gmtAdjustment="GMT+04:00"
                        useDaylightTime="1"
                        value="4"
                      >
                        (GMT+04:00) Yerevan
                      </option>
                      <option
                        timeZoneId="53"
                        gmtAdjustment="GMT+04:30"
                        useDaylightTime="0"
                        value="4.5"
                      >
                        (GMT+04:30) Kabul
                      </option>
                      <option
                        timeZoneId="54"
                        gmtAdjustment="GMT+05:00"
                        useDaylightTime="1"
                        value="5"
                      >
                        (GMT+05:00) Yekaterinburg
                      </option>
                      <option
                        timeZoneId="55"
                        gmtAdjustment="GMT+05:00"
                        useDaylightTime="0"
                        value="5"
                      >
                        (GMT+05:00) Islamabad, Karachi, Tashkent
                      </option>
                      <option
                        timeZoneId="56"
                        gmtAdjustment="GMT+05:30"
                        useDaylightTime="0"
                        value="5.5"
                      >
                        (GMT+05:30) Sri Jayawardenapura
                      </option>
                      <option
                        timeZoneId="57"
                        gmtAdjustment="GMT+05:30"
                        useDaylightTime="0"
                        value="5.5"
                      >
                        (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi
                      </option>
                      <option
                        timeZoneId="58"
                        gmtAdjustment="GMT+05:45"
                        useDaylightTime="0"
                        value="5.75"
                      >
                        (GMT+05:45) Kathmandu
                      </option>
                      <option
                        timeZoneId="59"
                        gmtAdjustment="GMT+06:00"
                        useDaylightTime="1"
                        value="6"
                      >
                        (GMT+06:00) Almaty, Novosibirsk
                      </option>
                      <option
                        timeZoneId="60"
                        gmtAdjustment="GMT+06:00"
                        useDaylightTime="0"
                        value="6"
                      >
                        (GMT+06:00) Astana, Dhaka
                      </option>
                      <option
                        timeZoneId="61"
                        gmtAdjustment="GMT+06:30"
                        useDaylightTime="0"
                        value="6.5"
                      >
                        (GMT+06:30) Yangon (Rangoon)
                      </option>
                      <option
                        timeZoneId="62"
                        gmtAdjustment="GMT+07:00"
                        useDaylightTime="0"
                        value="7"
                      >
                        (GMT+07:00) Bangkok, Hanoi, Jakarta
                      </option>
                      <option
                        timeZoneId="63"
                        gmtAdjustment="GMT+07:00"
                        useDaylightTime="1"
                        value="7"
                      >
                        (GMT+07:00) Krasnoyarsk
                      </option>
                      <option
                        timeZoneId="64"
                        gmtAdjustment="GMT+08:00"
                        useDaylightTime="0"
                        value="8"
                      >
                        (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi
                      </option>
                      <option
                        timeZoneId="65"
                        gmtAdjustment="GMT+08:00"
                        useDaylightTime="0"
                        value="8"
                      >
                        (GMT+08:00) Kuala Lumpur, Singapore
                      </option>
                      <option
                        timeZoneId="66"
                        gmtAdjustment="GMT+08:00"
                        useDaylightTime="0"
                        value="8"
                      >
                        (GMT+08:00) Irkutsk, Ulaan Bataar
                      </option>
                      <option
                        timeZoneId="67"
                        gmtAdjustment="GMT+08:00"
                        useDaylightTime="0"
                        value="8"
                      >
                        (GMT+08:00) Perth
                      </option>
                      <option
                        timeZoneId="68"
                        gmtAdjustment="GMT+08:00"
                        useDaylightTime="0"
                        value="8"
                      >
                        (GMT+08:00) Taipei
                      </option>
                      <option
                        timeZoneId="69"
                        gmtAdjustment="GMT+09:00"
                        useDaylightTime="0"
                        value="9"
                      >
                        (GMT+09:00) Osaka, Sapporo, Tokyo
                      </option>
                      <option
                        timeZoneId="70"
                        gmtAdjustment="GMT+09:00"
                        useDaylightTime="0"
                        value="9"
                      >
                        (GMT+09:00) Seoul
                      </option>
                      <option
                        timeZoneId="71"
                        gmtAdjustment="GMT+09:00"
                        useDaylightTime="1"
                        value="9"
                      >
                        (GMT+09:00) Yakutsk
                      </option>
                      <option
                        timeZoneId="72"
                        gmtAdjustment="GMT+09:30"
                        useDaylightTime="0"
                        value="9.5"
                      >
                        (GMT+09:30) Adelaide
                      </option>
                      <option
                        timeZoneId="73"
                        gmtAdjustment="GMT+09:30"
                        useDaylightTime="0"
                        value="9.5"
                      >
                        (GMT+09:30) Darwin
                      </option>
                      <option
                        timeZoneId="74"
                        gmtAdjustment="GMT+10:00"
                        useDaylightTime="0"
                        value="10"
                      >
                        (GMT+10:00) Brisbane
                      </option>
                      <option
                        timeZoneId="75"
                        gmtAdjustment="GMT+10:00"
                        useDaylightTime="1"
                        value="10"
                      >
                        (GMT+10:00) Canberra, Melbourne, Sydney
                      </option>
                      <option
                        timeZoneId="76"
                        gmtAdjustment="GMT+10:00"
                        useDaylightTime="1"
                        value="10"
                      >
                        (GMT+10:00) Hobart
                      </option>
                      <option
                        timeZoneId="77"
                        gmtAdjustment="GMT+10:00"
                        useDaylightTime="0"
                        value="10"
                      >
                        (GMT+10:00) Guam, Port Moresby
                      </option>
                      <option
                        timeZoneId="78"
                        gmtAdjustment="GMT+10:00"
                        useDaylightTime="1"
                        value="10"
                      >
                        (GMT+10:00) Vladivostok
                      </option>
                      <option
                        timeZoneId="79"
                        gmtAdjustment="GMT+11:00"
                        useDaylightTime="1"
                        value="11"
                      >
                        (GMT+11:00) Magadan, Solomon Is., New Caledonia
                      </option>
                      <option
                        timeZoneId="80"
                        gmtAdjustment="GMT+12:00"
                        useDaylightTime="1"
                        value="12"
                      >
                        (GMT+12:00) Auckland, Wellington
                      </option>
                      <option
                        timeZoneId="81"
                        gmtAdjustment="GMT+12:00"
                        useDaylightTime="0"
                        value="12"
                      >
                        (GMT+12:00) Fiji, Kamchatka, Marshall Is.
                      </option>
                      <option
                        timeZoneId="82"
                        gmtAdjustment="GMT+13:00"
                        useDaylightTime="0"
                        value="13"
                      >
                        (GMT+13:00) Nuku'alofa
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-right-container">
              <div className="form-g">
                <label>Foto de perfil</label>
                <br />
                <img className="large-foto-perfil" src={milos} alt="" />
                <div className="buttonInside"></div>
              </div>
              <div className="form-g">
                <div className="buttonInside">
                  <div className="file-submit-wrapper">
                    <input
                      className="fileInput"
                      type="file"
                      id="enviarFoto"
                      // value={""}
                      onChange={(e) => setName(e.target.value)}
                    />
                    Enviar uma foto
                  </div>
                </div>
              </div>
              <button className="removerFoto-btn" id="removerFoto-btn">
                Remover foto
              </button>
            </div>
          </section>
          <section className="bottom-section-container">
            <div className="form-g">
              <label>Endereço:</label>
              <br />
              <div className="buttonInside">
                <input
                  type="text"
                  id="endereco"
                  disabled={disable}
                  // value={""}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Avenida Brasil, 123"
                />
                <button
                  id="editEndereco"
                  className="buttonInput-form-g"
                  type="button"
                  onClick={enableEditing}
                >
                  {" "}
                  <img src={lapiz} alt="" />{" "}
                </button>
              </div>
            </div>
          </section>
          <section className="buttons-section">
            <div className="perfil-btn-container">
              <button
                className="perfil-btn"
                id="cancelar-btn"
                onClick={onClose}
              >
                Cancelar
              </button>
              <button className="perfil-btn" id="salvar-btn">
                Salvar
              </button>
            </div>
          </section>
        </form>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Perfil;
