import { Link, Head, usePage } from "@inertiajs/react";
import Hero from "./Hero";
import Product from "./Product";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import Contacts from "./Contacts";
import Footer from "./Footer";

function LandingPage() {
    const { auth } = usePage().props;
    return (
        <>
            <Head title="Template UMKM" />
            <Navbar auth={auth} />
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
