import "../assets/scss/main.scss";

import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Header } from "../components/Header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ApplicationContextProvider } from "../contexts/applicationContext";
import { useDemoStore } from "../stores/useDemoStore";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {

    const { debug } = useDemoStore();

    return (
        <SessionProvider session={pageProps.session}>
            <ApplicationContextProvider>
                <QueryClientProvider client={queryClient}>
                    <div className={
                        'App' + (debug ? ' debug' : '')
                    }>
                        <Header/>

                        <div style={{ height: "100vh", width: "100vw" }}>
                            <Component {...pageProps} />
                        </div>
                    </div>
                </QueryClientProvider>
            </ApplicationContextProvider>
        </SessionProvider>
    );
}