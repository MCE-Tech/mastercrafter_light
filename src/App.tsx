import React from "react";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatedBackground } from "./components/animated-background";
import Footer from "./components/footer";
import { Header } from "./components/header";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
    return (
        <HelmetProvider>
            <div className="min-h-screen flex flex-col">
                <div className="flex-grow">
                    <AnimatedBackground />
                    <Header />
                    <main className="">
                        <ScrollToTop />
                        <Outlet />
                    </main>
                </div>
                <Footer />
            </div>
        </HelmetProvider>
    );
};

export default App;
