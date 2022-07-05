import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";
import { menu } from "../data/menu";

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={`row`}>
          <div className={`col-auto`}>
            <div className={styles.logo}>
              <Image
                src="/vectors/Logo.svg"
                width={42}
                height={42}
                alt="Logo"
              />
            </div>
          </div>

          <div className={`col`}>
            <div className={styles.menu}>
              {menu.items.map((item, index) => (
                <Link href={item.path} key={`menu-item-${index}`}>
                  <a className={`${styles.link} ${ pathname == item.path ? styles.active : null}`}>
                    <div className={styles.item}>{item.title}</div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
