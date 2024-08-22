// === To applied the style you have to import this === //
import styles from '../components/HeroBanner.module.css'
// === To applied the style you have to import this === //

import HeroBannerPhotos from '../components/HeroBannerPhotos.jsx';




export default function HeroBanner() {

  return (
  < div className={styles.parentContainerHero}> 
<div className={styles.detailsContainer}>
<h1 className={styles.textHero}>50 YEARS OF HELPING MARKETERS BE BRILLIANT</h1>

</div>

  <div className={styles.inputBtnContainer}>
        <input className={styles.searchHero} type="text" name="searchHero" id="searchHero" placeholder="SEARCH" /> 
        <button className={styles.searchHeroButton} >SEARCH</button>

</div>      
 <HeroBannerPhotos />
 
  </div>
   
  )
}
