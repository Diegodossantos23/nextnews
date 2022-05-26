import { SigninButton } from '../SigninButton/index';
import styles from './styles.module.scss';

export const Header: React.FC = () => {
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ing.news"/>
                <nav>
                    <a className={styles.active} href="http://">Home</a>
                    <a href="http://">Posts</a>
                </nav>

                <SigninButton/>
            </div>
        </header>
    )
}