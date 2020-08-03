import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => (
  <article className="teacher-item">
    <header>
      <img src="https://avatars3.githubusercontent.com/u/49597325?s=460&u=ee5859a47b8789203df4bf4e88f6a4ff8083c767&v=4" alt="Wallisson Rony" />

      <div>
        <strong>Wallisson Rony</strong>
        <span>Química</span>
      </div>
    </header>
    
    <p>
      Texto de exemplo pq n consegui entrar no figma pq tem mt gente lá ;-;.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 60,00</strong>
      </p>
      <button>
        <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
    </footer>
  </article>
);

export default TeacherItem;