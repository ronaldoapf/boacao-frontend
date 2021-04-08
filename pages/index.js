import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

import styles from '../styles/pages/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.containerPrincipal}>
      <Head>
        <title>Boação | Login</title>
        <link rel="icon" href="favicon.svg" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <main className={styles.containerMainContent}>
        <section className={styles.containerAboutUs}>
          <h2>Conectando você com quem precisa</h2>
          <p>
            Cada boa ação que você pratica, é uma luz que você acende em torno
            dos próprios passos. Lugar onde você poderá ajudar a quem precise e
            também ser ajudado
          </p>
          <div className={styles.containerButton}>
            <button>Quero ajudar</button>

            <button>Preciso de ajuda</button>
          </div>
        </section>
        <section className={styles.containerImage}>
          <Image
            src="/assets/BOACAO_preto_em_rede.svg"
            width={200}
            height={200}
            alt="Logo"
          />
        </section>
      </main>

      <hr className={styles.divider} />

      <aside className={styles.containerAside}>
        <section>
          <h2>Nossa Equipe</h2>
          <hr />
        </section>

        <section className={styles.containerDevelopers}>
          <div className={styles.roundedDevelopers}>
            <figure>
              <Image
                src="/assets/ronaldo.jpeg"
                width={200}
                height={200}
                alt="Logo"
                objectFit="cover"
              />
            </figure>

            <span>Ronaldo Alves</span>
          </div>

          <div className={styles.roundedDevelopers}>
            <figure>
              <Image
                src="/assets/franciele.png"
                width={200}
                height={200}
                alt="Logo"
                objectFit="cover"
              />
            </figure>

            <span>Franciele Cristina</span>
          </div>
        </section>
      </aside>
    </div>
  )
}
