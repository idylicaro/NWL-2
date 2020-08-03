import React from 'react'


import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">

      <header>
        <img src="https://avatars3.githubusercontent.com/u/45442467?s=460&u=dab2b54b701c4d4b7d1b40904bf27fd79908f4c9&v=4" alt="Perfil Name" />
        <div>
          <strong>Idyl Icaro</strong>
          <span>Matematica</span>
        </div>
      </header>

      <p>
        Entusiasta em matematica computacional.
          <br />
          Expressoes numericas são legais, mas o melhor é logica matematica que é uma delicia.
          </p>

      <footer>
        <p>
          Preço/hora
            <strong>R$ 100,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem