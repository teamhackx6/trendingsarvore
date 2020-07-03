import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import './styles.css'

import search from '../../assets/search.svg'
import logo from '../../assets/logo_arvore.svg'
import avatarUser from '../../assets/avatar_user.png'
import arrowDown from '../../assets/icon_arrow_down.svg'

const Head = () => {
  return (
    <div className="container">
      <header>
        <img className="logo" src={logo} alt="Árvore de Livros" />
        <div className="content-search">
          <div className="content-search2">
            <div className="content-input">
              <input placeholder="Pesquise pelo título, autor, categoria e etc" value="" />
              <img className="icon-search" src={search} alt="icon-search" />
            </div>
          </div>
        </div>

        <div className="header-usuario">
          <div className="usuario" role="navigation" aria-labelledby="Configurações">
            <a href="/">
              <img className="img-avatar" src={avatarUser} alt="Avatar" />
              <span>Team</span>
              <img className="icon-arrow-down" src={arrowDown} alt="icon_arrow" />
            </a>
          </div>
        </div>
      </header>


      <nav>
        <Link className="botao-menu" to="/">Início</Link>
        <Link className="botao-menu" to="/categories">Banca</Link>
        <Link className="botao-menu" to="/offline">Indicados</Link>
        <Link className="botao-menu" to="/trending">Trending</Link>
        <Link className="botao-menu" to="/favorites">Favoritos</Link>
      </nav>
    </div>
  )
}

export default Head