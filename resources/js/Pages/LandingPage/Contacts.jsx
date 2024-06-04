function Contacts() {
    return (
        <section id="contacts" className="mt-8 mb-4">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className="flex justify-center mb-20">
                    <h2 className="text-3xl font-bold tracking-normal text-gray-900 lg:text-4xl">
                        Hubungi Kami
                    </h2>
                </div>
                <div className="flex justify-center flex-wrap gap-9 mb-12">
                    <div className="flex-1 flex flex-col items-center justify-center sm:w-[350px] min-w-[300px] w-full rounded-[20px] shadow-3xl px-10 py-10">
                        <div className="flex justify-center items-center rounded-full ">
                            <img
                                src="/src/tokopedia.svg"
                                alt=""
                                width={50}
                                height={50}
                            />
                        </div>
                        <h3 className="my-5 font-palanquin text-2xl leading-normal font-bold">
                            Tokopedia
                        </h3>
                        {/* <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
                            oke banget
                        </p> */}
                        <div className="rounded-md shadow">
                            <a
                                href="#"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:px-10 md:py-4 md:text-lg"
                            >
                                Kunjungi Toko Kami
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center sm:w-[350px] min-w-[300px] w-full rounded-[20px] shadow-3xl px-10 py-10">
                        <div className="flex justify-center items-center rounded-full ">
                            <img
                                src="/src/shopee.svg"
                                alt=""
                                width={50}
                                height={50}
                            />
                        </div>
                        <h3 className="my-5 font-palanquin text-2xl leading-normal font-bold">
                            Shopee
                        </h3>
                        {/* <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
                            oke banget
                        </p> */}
                        <div className="rounded-md shadow">
                            <a
                                href="#"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:px-10 md:py-4 md:text-lg"
                            >
                                Kunjungi Toko Kami
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center sm:w-[350px] min-w-[300px] w-full rounded-[20px] shadow-3xl px-10 py-10">
                        <div className="flex justify-center items-center rounded-full ">
                            <img
                                src="/src/whatsapp.svg"
                                alt=""
                                width={50}
                                height={50}
                            />
                        </div>
                        <h3 className="my-5 font-palanquin text-2xl leading-normal font-bold">
                            WhatsApp
                        </h3>
                        {/* <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
                            oke banget
                        </p> */}
                        <div className="rounded-md shadow">
                            <a
                                href="#"
                                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:px-10 md:py-4 md:text-lg"
                            >
                                Kunjungi Toko Kami
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
                <iframe
                    className="rounded-2xl h-[300px] md:h-[350px] lg:h-[500px]"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.6350344606312!2d110.43275441088552!3d-7.052100592920788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708c0396ceec97%3A0x10b388f0c8411e72!2sSemarang%20State%20Polytechnic!5e0!3m2!1sen!2sid!4v1717512045559!5m2!1sen!2sid"
                    width="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
}

export default Contacts;
