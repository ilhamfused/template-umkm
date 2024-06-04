import { Link, Head } from "@inertiajs/react";
import Hero from "./Hero";
import Product from "./Product";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import Contacts from "./Contacts";
import Footer from "./Footer";

function LandingPage() {
    return (
        <>
            <Head title="Template UMKM" />
            <Navbar />
            <main className="relative overflow-hidden">
                <Hero />
                <Product />
                <AboutUs />
                <Contacts />
            </main>
            <Footer />
        </>
    );
}

export default LandingPage;
