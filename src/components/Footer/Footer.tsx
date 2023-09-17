import { RiFacebookBoxLine, RiTwitterFill, RiInstagramLine } from 'react-icons/ri';
import { SlSocialYoutube } from 'react-icons/sl';
import styles from './Footer.module.css';
import Image from 'next/image';

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerSubContainer}>
        <div className={styles.footerLogo}>
          <Image src="/simplimuv-white.png" fill style={{ objectFit: 'cover', position: 'absolute' }} alt="simpli logo" />
        </div>
        <div className={styles.footerSocials}>
          <RiFacebookBoxLine size={25} className={styles.footerSocialsLink} />
          <RiTwitterFill size={25} className={styles.footerSocialsLink} />
          <RiInstagramLine size={25} className={styles.footerSocialsLink} />
          <SlSocialYoutube size={25} className={styles.footerSocialsLink} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
