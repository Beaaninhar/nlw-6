import { useContext } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/useAuth';

import styles from './styles.module.scss';

export function LoginBox() {
    const { signInUrl } = useContext(AuthContext);

    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl} className={styles.signWithGithubButton}>
                <VscGithubInverted size={24} /> Entrar com Github
            </a>
        </div>
    );
}