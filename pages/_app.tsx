import { AppProps } from "next/app";
import Head from "next/head";
import {  } from '../lib/firebase';
import '../styles/global.scss';

export default function App({ Component, pageProps }: AppProps) {

    return (
        <>
            <Head>
                <title>DnD</title>
            </Head>
           <Component {...pageProps} /> 
        </>
    );
};