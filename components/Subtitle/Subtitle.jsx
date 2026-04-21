import React from 'react'
import styles from './subtitle.module.css'

export default function Subtitle({title}) {
  return (
    <h2 className={styles.h2}>
        {title}
    </h2>
  )
}