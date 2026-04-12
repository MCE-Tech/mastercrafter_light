import React from "react";
import { Outlet } from "react-router-dom";
import { AnimatedBackground } from "./components/animated-background";
import Footer from "./components/footer";
import { Header } from "./components/header";

const App: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow">
                <AnimatedBackground />
                <Header />
                <main className="">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default App;
