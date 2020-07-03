import React from 'react'

import Head from '../../components/Head'

import './styles.css'

import search from '../../assets/search.svg'
import logo from '../../assets/logo_arvore.svg'
import avatarUser from '../../assets/avatar_user.png'
import arrowDown from '../../assets/icon_arrow_down.svg'
import avatarCircle from '../../assets/avatar_user_circle.png'
import avatar2 from '../../assets/avatar_user2.png'
import avatar4 from '../../assets/avatar_user4.png'
import post from '../../assets/post-img.png'

const Trending = () => {
  return (
    <div className="trending">
    <Head />      

    <div>
      <div className="center">
        <div className="container-left">
          <section className="container-comentario">
            <div className="row">
              <div className="avatar">
                <img src={avatarCircle} alt="avatar_circle" />
              </div>
              <div className="comentario">
                <div className="form-textarea">
                  <textarea placeholder="Conte sobre seu livro..." id="message" name="message" rows={5} cols={33}>
                  </textarea>
                </div>
              </div>
            </div>

            <div className="interacao">
              <div className="row">
                <div className="icon-like iconi">
                  <i className="icon-picture"></i>
                </div>
                <div className="botao-postar">
                  <button type="submit">Contar</button>
                </div>
              </div>
            </div>   
          </section>
    
          <section className="container-comentario">
            <div className="row">
              <div className="avatar">
                <img src={avatar2} alt="avatar2" />
              </div>
              <div className="comentario">
                <p>
                  “Não sabemos quanto tempo nos resta, não podemos desperdiçá-lo 
                  lamentando coisas que não podemos mudar” - Stephen King
                </p>
              </div>
            </div>
              <div className="interacao">
                <div className="row"> 
                  <div className="form">
                    <input placeholder="Comentário..." value="" />
                  </div>

                  <div className="icons">
                    <div className="icon-like icon">
                      <i className="icon-heart"></i>
                    </div>
                    <div className="icon-comentario icon">
                      <i className="icon-comment"></i>
                    </div>
                  </div>
                </div>
              </div>    
          </section>   
        </div>
    
        <div className="container-right">
          <div className="content-input-trendings">
            <div className="input-trendings">
              <input placeholder="Busque um Trending" value="" />
              <img className="icon-search" src={search} alt="search" />
            </div>        
          </div>
    
          <div className="sidebar-trendings">
            <div className="titulo">
              Trending Topics
              <div className="subtitulo">
                Assuntos no Momento
              </div>
            </div>
            <div className="content-trending">  
              <div className="titulo-trending">
                <a># Stephen King</a>   
              </div>
            </div>
          </div>  
        </div>
      </div>   
    </div>
    <footer>

    </footer>
    </div>
  )
}

export default Trending