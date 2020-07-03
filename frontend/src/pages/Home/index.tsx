import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Link, animateScroll } from 'react-scroll'

import Head from '../../components/Head'

import './styles.css'
import book from '../../assets/book.png'
import shirley from '../../assets/capa-livro-aassombracaocacasadacolina.png'

const Home = () => {
  return (
    <div className="home">
      <Head />

      <div className="content">
        <div className="barra-titulo">
           <span>Leituras parecidas com Stephen King</span>
        </div>

        <div id="slider">
          <input type="radio" name="slider" id="slide1" checked />
          <input type="radio" name="slider" id="slide2" />
          <input type="radio" name="slider" id="slide3" />
          <input type="radio" name="slider" id="slide4" />
          <div id="slides">
            <div id="overflow">
              <div className="inner">
                <div className="slide slide_1">
                  <div className="slide-content">
                    <img src={book} alt="bokk" />
                    <span>Caixa de Pássaros</span>
                    <p>
                      Quatro anos depois de as mortes terem começado,
                      há poucos sobreviventes em Michigan. Malorie e seus
                      dois filhos pequenos estão entre eles. O trio faz parte
                      do grupo que tenta resistir em um mundo no qual abrir os
                      olhos pode ser fatal.
                    </p>
                    <div className="tags">
                      <span>Terror</span>
                      <span>Fantasia</span>
                    </div> 
                  </div>
                </div>

                <div className="slide slide_2">
                  <div className="slide-content">
                    <img
                      src={shirley}
                      alt="livro"
                    />
                    <span>A Assombração da Casa da Colina</span>
                    <p>Sozinha no mundo, Eleanor fica encantada ao receber 
                      uma carta do dr. Montague convidando-a para passar um 
                      tempo na Casa da Colina, um local conhecido por suas 
                      manifestações fantasmagóricas.
                    </p>
                    <div className="tags">
                      <span>Terror</span>
                      <span>Fantasia</span>
                    </div> 
                  </div>
                </div>

                <div className="slide slide_3">
                  <div className="slide-content">
                    <img src={book} alt="bokk"/>
                    <span>Caixa de Pássaros</span>
                    <p>Quatro anos depois de as mortes terem começado, há poucos 
                      sobreviventes em Michigan. Malorie e seus dois filhos pequenos 
                      estão entre eles. O trio faz parte do grupo que tenta resistir em 
                      um mundo no qual abrir os olhos pode ser fatal.
                    </p>
                    <div className="tags">
                      <span>Terror</span>
                      <span>Fantasia</span>
                    </div> 
                  </div>
                </div>

                <div className="slide slide_4">
                  <div className="slide-content">
                    <img 
                      src={shirley}
                      alt="livro"
                    />
                    <span>A Assombração da Casa da Colina</span>
                    <p>Sozinha no mundo, Eleanor fica encantada ao receber uma carta 
                      do dr. Montague convidando-a para passar um tempo na Casa da Colina, 
                      um local conhecido por suas manifestações fantasmagóricas.
                    </p>
                    <div className="tags">
                      <span>Terror</span>
                      <span>Fantasia</span>
                    </div> 
                  </div>
                </div>

              </div>
            </div>
          </div>  

          <div id="controls">
            <label htmlFor="slide1" ></label>
            <label htmlFor="slide2"></label>
            <label htmlFor="slide3"></label>
            <label htmlFor="slide4"></label>
          </div>
          <div id="bullets">
            <label htmlFor="slide1"></label>
            <label htmlFor="slide2"></label>
            <label htmlFor="slide3"></label>
            <label htmlFor="slide4"></label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home