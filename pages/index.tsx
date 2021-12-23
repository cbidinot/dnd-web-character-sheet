import Link from 'next/link';
import Head from 'next/head';
import { auth } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import styles from '../styles/util.module.scss';
import PageHeader from '../components/PageHeader';
import UserSectionHeader from '../containers/UserSectionHeader';

//TEMPORARY 
import SignOut from '../components/SignOut';

export default function Home() {

    const [user] = useAuthState(auth);

    return (
        <>
            <Head>
                <title>DND</title>
            </Head>

            <PageHeader type='home'>
                <h1 className={styles.whiteH1}>D&D Web Sheet</h1>
                <UserSectionHeader/>
            </PageHeader>
            
            <h1>Home</h1>
            <SignOut/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestiae quisquam similique commodi maxime adipisci sed ab minus porro consequuntur totam ipsam molestias illum, incidunt cumque fuga tempora exercitationem distinctio!</p>
            {user ? <Link href='./test'>
                        <a>meh</a>
                    </Link> : null
            }
                
                    

        </>
    );
};