import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../containers/Layout";
import {  } from '../lib/firebase';
import '../styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {

    return (
        <>
            <Head>
                <title>DnD</title>
            </Head>
            
            <Layout>
                <Component {...pageProps} />    
            </Layout>
            
        </>
    );
};