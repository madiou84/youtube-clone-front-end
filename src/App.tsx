import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import ErrorPage from "./pages/errors/ErrorPage";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Watch from "./pages/Watch";

export default function App() {
    return (
        <div>
            <div className="fixed top-0 h-20 w-full mb-12 z-10">
                <Navigation />
            </div>


            <main className="lg:flex w-full lg:content-start lg:items-start lg:gap-x-2">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path=":id" element={<Watch />} />

                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                </Routes>
            </main>
        </div>
    )
}
