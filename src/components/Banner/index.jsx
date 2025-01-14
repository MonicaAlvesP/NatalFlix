import TitleDestaque from '@img/titulo-destaque.png'
import FilmeDestaque from '@img/filme-destaque.png'

import { FaPlay, FaStar } from 'react-icons/fa'

import s from './banner.module.scss';

export const Banner = () => {

  return (
    <article className={s.container}>
      <section className={s.info}>
        <img src={TitleDestaque} alt="A Origem dos Guardiões" />
        <span>1h 37min | Aventura, Animação, Família</span>
        <p>Jack Frost, um garoto que controla o inverno, se junta ao seleto time dos Guardiões Imortais para impedir Breu, o bicho-papão, de transformar todos os sonhos das crianças em pesadelo e usar seus poderes maquiavélicos para governar o mundo.</p>

        <div className={s.buttons}>
          <button className={s.play}>
            <FaPlay />
            Assistir
          </button>

          <button className={s.favorite}>
            <FaStar />
            Adicionar aos favoritos
          </button>
        </div>
      </section>

      <section className={s.hero}>
        <img src={FilmeDestaque} alt="" />
      </section>
    </article>
  )
}