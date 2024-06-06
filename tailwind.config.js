import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import aspectratio from "@tailwindcss/aspect-ratio";
import aspectratio from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "ijo-tokopedia": "#01AA5B",
                "oren-shopee": "#EE4D2D",
            },
            backgroundImage: {
                "texture-1": "url('/public/src/pattern-randomized.svg')",
            },
            boxShadow: {
                "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
            },
        },
    },

    plugins: [forms, aspectratio],
};
