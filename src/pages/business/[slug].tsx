import type { NextPage } from 'next'

import BusinessInfo from "@Features/business/BusinessInfo";

import styles from './Business.module.scss'

const IndexPage: NextPage = () => {

  return (
    <div className={styles.container}>
      <BusinessInfo />
      <img src={"/plugin.png"} alt="plugin"/>
      <div className={styles.comments}>
        <img alt="comments" src={"/comments.png"} />
        <img alt="reviews" src={"/reviews.png"} />
      </div>
    </div>
  )
}

export default IndexPage
