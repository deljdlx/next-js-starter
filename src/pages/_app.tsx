import "../assets/scss/main.scss";

import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Header } from "../components/Header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {


    return (
        <SessionProvider session={pageProps.session}>
            <QueryClientProvider client={queryClient}>
                <div className="App">
                    <Header/>

                    <div style={{ height: "100vh", width: "100vw" }}>
                        <Component {...pageProps} />
                    </div>
                </div>
            </QueryClientProvider>
        </SessionProvider>
    );
}