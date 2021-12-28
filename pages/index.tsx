import Link from 'next/link';
import Head from 'next/head';
import { auth } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import PageHeader from '../containers/PageHeader';

export default function Home() {

    const [user] = useAuthState(auth);

    return (
        <>
            <Head>
                <title>DnD Web Sheet | Home</title>
            </Head>

            <PageHeader type='home'/>
            
            <h1>Home</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestiae quisquam similique commodi maxime adipisci sed ab minus porro consequuntur totam ipsam molestias illum, incidunt cumque fuga tempora exercitationem distinctio!</p>
            {user ? <Link href='./test'>
                        <a>meh</a>
                    </Link> : null
            }
                
                    

        </>
    );
};