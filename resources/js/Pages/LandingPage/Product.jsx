const products = [
    {
        id: 1,
        name: "Leather Long Wallet",
        color: "Natural",
        price: "$75",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
        imageAlt: "Hand stitched, orange leather long wallet.",
    },
    {
        id: 2,
        name: "Leather Long Wallet",
        color: "Natural",
        price: "$75",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
        imageAlt: "Hand stitched, orange leather long wallet.",
    },
    {
        id: 3,
        name: "Leather Long Wallet",
        color: "Natural",
        price: "$75",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
        imageAlt: "Hand stitched, orange leather long wallet.",
    },
    {
        id: 4,
        name: "Leather Long Wallet",
        color: "Natural",
        price: "$75",
        href: "#",
        imageSrc:
            "https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg",
        imageAlt: "Hand stitched, orange leather long wallet.",
    },
    // More products...
];

export default function Product() {
    return (
        <section id="product" className="bg-white mt-8 mb-4">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex justify-center mb-12 md:mb-16">
                    <h2 className="text-3xl font-bold tracking-normal text-gray-900 lg:text-4xl">
                        Produk Unggulan Kami
                    </h2>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative">
                            <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">
                                <a href={product.href}>
                                    <span className="absolute inset-0" />
                                    {product.name}
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                                {product.color}
                            </p>
                            <p className="mt-1 text-sm font-medium text-gray-900">
                                {product.price}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-sm md:text-lg lg:text-xl md:mt-14">
                    <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Telusuri Katalog Kami
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
