import { Link, Head, usePage } from "@inertiajs/react";
import Hero from "./Hero";
import Product from "./Product";
import Navbar from "../../Components/Navbar";
import AboutUs from "./AboutUs";
import Contacts from "./Contacts";
import Footer from "../../Components/Footer";
import Guest from "@/Layouts/GuestLayout";

function LandingPage() {
    const { auth } = usePage().props;
    return (
        <>
            <Head title="Template UMKM" />
            <header>
                <Navbar auth={auth} />
            </header>
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
