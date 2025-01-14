import Filme1 from '@img/filme-1.png'
import Filme2 from '@img/filme-2.png'
import Filme3 from '@img/filme-3.png'
import Filme4 from '@img/filme-4.png'
import Filme5 from '@img/filme-5.png'

import s from './main.module.scss';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

export const Main = () => {

  const filmes = [
    { id: 1, img: Filme1, title: 'Filme 1' },
    { id: 2, img: Filme2, title: 'Filme 2' },
    { id: 3, img: Filme3, title: 'Filme 3' },
    { id: 4, img: Filme4, title: 'Filme 4' },
    { id: 5, img: Filme5, title: 'Filme 5' },
  ]

  return (
    <main className={s.main}>
      <section className={s.assistir}>
        <p>Continuar Assistindo</p>
        <div className={s.buttonsControls}>
          <FaArrowCircleLeft />
          <FaArrowCircleRight />
        </div>
      </section>

      <section className={s.filmes}>
        {filmes.map((filme) => (
          <section key={filme.id}>
            <img
              src={filme.img}
              alt={filme.title}
            />
          </section>
        ))}
      </section>
    </main>
  )
}