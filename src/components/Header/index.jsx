import { useState } from 'react';
import Gorro from '@img/gorro.png';
import Perfil from '@img/Perfil.png';
import NatalFlix from '@img/natalflix.png';

import s from './header.module.scss';

import { FaHome, FaStar, FaTv } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { RiMovie2Line } from 'react-icons/ri';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <header>
      <section className={s.perfil} onClick={toggleMenu}>
        <img className={s.gorro} src={Gorro} alt="Gorro do papai noel" />
        <img className={s.fotoPerfil} src={Perfil} alt="Foto de perfil" />
        <div className={s.hamburger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <nav>
        <ul className={`${s.menu} ${menuOpen ? s.active : ''}`}>
          <li>
            <FaHome />
            Inicio
          </li>

          <li>
            <RiMovie2Line />
            Filmes
          </li>

          <li>
            <FaTv />
            Series
          </li>

          <li>
            <FaStar />
            Favoritos
          </li>

          <li>
            <FaGear />
            Configurações
          </li>
        </ul>
      </nav>

      <section className={s.natalFlix}>
        <img src={NatalFlix} alt="Guirlanda de Natal do natalflix" />
      </section>
    </header>
  );
};
