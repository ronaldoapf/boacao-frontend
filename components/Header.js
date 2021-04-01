import React from 'react'
import Link from 'next/link'
import styles from '../styles/components/Header.module.scss'

const Header = () => {
  return (
    <header className={styles.containerHeader}>
      <h1>BOAÇÃO</h1>

      <section className={styles.containerLogin}>
        <ul>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/cadastro">Cadastrar</Link>
          </li>
        </ul>
      </section>
    </header>
  )
}

export default Header
