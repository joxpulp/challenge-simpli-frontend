import Image from 'next/image';
import styles from './Navbar.module.css';
import { LuUser2 } from 'react-icons/lu';
import { LiaShoppingBasketSolid } from 'react-icons/lia';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import Link from 'next/link';
import { useState } from 'react';
import navbarLinks from './texts';
import { useRouter } from 'next/router';

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setOpenMenu(true);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogoMenu}>
        {openMenu ? <MdClose onClick={handleClose} size={22} className={styles.navbarMobileMenuIcon} /> : <HiOutlineMenu onClick={handleOpen} size={22} className={styles.navbarMobileMenuIcon} />}
        <div className={styles.navbarLogo} onClick={() => router.push('/')}>
          <Image unoptimized src="/simplimuv-logo.png" fill style={{ objectFit: 'cover', position: 'absolute' }} alt="simpli logo" />
        </div>
      </div>
      <ul className={`${styles.navbarOptions} ${openMenu && styles.open}`}>
        {navbarLinks.map((navbarLink, index) => (
          <li key={index} className={styles.list}>
            <Link onClick={handleClose} href={navbarLink.route} className={`${styles.navbarHover} ${styles.links}`}>
              {navbarLink.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.navbarIcons}>
        <LiaShoppingBasketSolid className={styles.navbarHover} size={23} />
        <LuUser2 className={styles.navbarHover} size={20} />
      </div>
    </nav>
  );
}

export default Navbar;
