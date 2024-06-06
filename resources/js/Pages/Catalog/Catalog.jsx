import { Fragment, useState } from "react";
// import { DialogPanel } from "@headlessui/react";
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    UserIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import {
    ChevronDownIcon,
    FunnelIcon,
    StarIcon,
} from "@heroicons/react/20/solid";
import Footer from "@/Components/Footer";
import Pagination from "@/Components/Pagination";
import Navbar from "@/Components/Navbar";
import { Link, Head, usePage } from "@inertiajs/react";
const products = [
    {
        id: 1,
        name: "Organize Basic Set (Walnut)",
        price: "$149",
        rating: 5,
        reviewCount: 38,
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
        imageAlt: "TODO",
        href: "#",
    },
    {
        id: 2,
        name: "Organize Pen Holder",
        price: "$15",
        rating: 5,
        reviewCount: 18,
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg",
        imageAlt: "TODO",
        href: "#",
    },
    {
        id: 3,
        name: "Organize Sticky Note Holder",
        price: "$15",
        rating: 5,
        reviewCount: 14,
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg",
        imageAlt: "TODO",
        href: "#",
    },
    {
        id: 4,
        name: "Organize Phone Holder",
        price: "$15",
        rating: 4,
        reviewCount: 21,
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg",
        imageAlt: "TODO",
        href: "#",
    },
    // More products...
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Catalog() {
    const [open, setOpen] = useState(false);
    const { auth } = usePage().props;
    return (
        <>
            <header className="relative bg-white">
                <Navbar auth={auth} />
            </header>

            <main className="pb-24">
                <div className="px-4 py-16 text-center sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                        Katalog
                    </h1>
                </div>

                {/* Product grid */}
                <section
                    aria-labelledby="products-heading"
                    className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8"
                >
                    <h2 id="products-heading" className="sr-only">
                        Products
                    </h2>

                    <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="group relative border-b border-r border-gray-200 p-4 sm:p-6"
                            >
                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="pb-4 pt-10 text-center">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        <Link href={route("product")}>
                                            <span
                                                aria-hidden="true"
                                                className="absolute inset-0"
                                            />
                                            {product.name}
                                        </Link>
                                    </h3>
                                    <div className="mt-3 flex flex-col items-center">
                                        <p className="sr-only">
                                            {product.rating} out of 5 stars
                                        </p>
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <StarIcon
                                                    key={rating}
                                                    className={classNames(
                                                        product.rating > rating
                                                            ? "text-yellow-400"
                                                            : "text-gray-200",
                                                        "h-5 w-5 flex-shrink-0"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            ))}
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {product.reviewCount} reviews
                                        </p>
                                    </div>
                                    <p className="mt-4 text-base font-medium text-gray-900">
                                        {product.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pagination */}
                <Pagination />
            </main>

            <Footer />
        </>
    );
}
