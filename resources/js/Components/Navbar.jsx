import {
    Popover,
    PopoverButton,
    PopoverPanel,
    Transition,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, Head } from "@inertiajs/react";

function Navbar({ auth }) {
    return (
        <Popover className="relative bg-white shadow" as="nav">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href="/">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className="-my-2 -mr-2 md:hidden">
                        <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </PopoverButton>
                    </div>
                    <div className="hidden space-x-10 md:flex">
                        <a
                            href="#"
                            className="text-base font-medium text-gray-500 hover:text-gray-900"
                        >
                            Produk
                        </a>
                        <a
                            href="#"
                            className="text-base font-medium text-gray-500 hover:text-gray-900"
                        >
                            Tentang Kami
                        </a>
                        <a
                            href="#"
                            className="text-base font-medium text-gray-500 hover:text-gray-900"
                        >
                            Kontak
                        </a>
                    </div>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="hitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="hitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                                >
                                    Log in
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <Transition
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <PopoverPanel
                    focus
                    className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                >
                    <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="px-5 pb-6 pt-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src="/src/mark.jpg"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XMarkIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </PopoverButton>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    <a
                                        href="#"
                                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                    >
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            Pricing
                                        </span>
                                    </a>
                                    <a
                                        href="#"
                                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                                    >
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                            Docs
                                        </span>
                                    </a>
                                </nav>
                            </div>
                        </div>
                        <div className="space-y-6 px-5 py-6">
                            <div>
                                <a
                                    href="#"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium text-gray-900 shadow-sm hover:bg-slate-200"
                                >
                                    Sign In
                                </a>
                            </div>
                        </div>
                    </div>
                </PopoverPanel>
            </Transition>
        </Popover>
    );
}

export default Navbar;
