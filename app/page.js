
import Banner from '@/components//Banner/Banner';
import Introduction from '@/components/Introduction/Introduction';
import Formation from '@/components/Formation/Formation'

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>       
        <Banner /> 
        <Introduction />  
        <Formation />
      </main>
    </div>
  );
}
