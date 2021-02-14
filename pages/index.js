import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Basic from '../01-basics/Basic'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ThreeJS Journey Course</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Basic />
    </div>
  )
}
