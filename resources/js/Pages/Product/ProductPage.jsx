import { useState } from "react";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Radio,
    RadioGroup,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
} from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Navbar from "@/Components/Navbar";
import { Link, usePage } from "@inertiajs/react";
import Footer from "@/Components/Footer";

const product = {
    name: "Zip Tote Basket",
    price: "$140",
    rating: 4,
    images: [
        {
            id: 1,
            name: "Angled view",
            src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
            alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
    ],
    colors: [
        {
            name: "Washed Black",
            bgColor: "bg-gray-700",
            selectedColor: "ring-gray-700",
        },
        { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
        {
            name: "Washed Gray",
            bgColor: "bg-gray-500",
            selectedColor: "ring-gray-500",
        },
    ],
    description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
    details: [
        {
            name: "Features",
            items: [
                "Multiple strap configurations",
                "Spacious interior with top zip",
                "Leather handle and tabs",
                "Interior dividers",
                "Stainless strap loops",
                "Double stitched construction",
                "Water-resistant",
            ],
        },
        // More sections...
    ],
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function ProductPage() {
    const { auth } = usePage().props;
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);

    return (
        <>
            <Navbar auth={auth} />
            <main className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/* Image gallery */}
                        <TabGroup className="flex flex-col-reverse">
                            {/* Image selector */}
                            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                                <TabList className="grid grid-cols-4 gap-6">
                                    {product.images.map((image) => (
                                        <Tab
                                            key={image.id}
                                            className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                        >
                                            {({ selected }) => (
                                                <>
                                                    <span className="sr-only">
                                                        {image.name}
                                                    </span>
                                                    <span className="absolute inset-0 overflow-hidden rounded-md">
                                                        <img
                                                            src={image.src}
                                                            alt=""
                                                            className="h-full w-full object-cover object-center"
                                                        />
                                                    </span>
                                                    <span
                                                        className={classNames(
                                                            selected
                                                                ? "ring-indigo-500"
                                                                : "ring-transparent",
                                                            "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                </>
                                            )}
                                        </Tab>
                                    ))}
                                </TabList>
                            </div>

                            <TabPanels className="aspect-h-1 aspect-w-1 w-full">
                                {product.images.map((image) => (
                                    <TabPanel key={image.id}>
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="h-full w-full object-cover object-center sm:rounded-lg"
                                        />
                                    </TabPanel>
                                ))}
                            </TabPanels>
                        </TabGroup>

                        {/* Product info */}
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                                {product.name}
                            </h1>

                            <div className="mt-3">
                                <h2 className="sr-only">Product information</h2>
                                <p className="text-3xl tracking-tight text-gray-900">
                                    {product.price}
                                </p>
                            </div>

                            {/* Reviews */}
                            <div className="mt-3">
                                <h3 className="sr-only">Reviews</h3>
                                <div className="flex items-center">
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                className={classNames(
                                                    product.rating > rating
                                                        ? "text-yellow-400"
                                                        : "text-gray-300",
                                                    "h-5 w-5 flex-shrink-0"
                                                )}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                    <p className="sr-only">
                                        {product.rating} out of 5 stars
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="sr-only">Description</h3>

                                <div
                                    className="space-y-6 text-base text-gray-700"
                                    dangerouslySetInnerHTML={{
                                        __html: product.description,
                                    }}
                                />
                            </div>

                            <form className="mt-8">
                                {/* Colors */}
                                <h3 className="text-sm font-medium text-gray-600">
                                    Tersedia di
                                </h3>

                                <div className="mt-2 flex flex-col gap-2 md:flex-row">
                                    <Link
                                        href=""
                                        className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-ijo-tokopedia px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                    >
                                        Tokopedia
                                    </Link>
                                    <Link
                                        href=""
                                        className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-oren-shopee px-8 py-3 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                    >
                                        Shopee
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
