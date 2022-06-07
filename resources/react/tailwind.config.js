module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                'c-first': '6px 6px 0px 0px #FFB319',
                'c-second': '6px 6px 0px 0px #FFE194',
                'c-third': '6px 6px 0px 0px #E8F6EF',
                'c-fourth': '6px 6px 0px 0px #B8DFD8',
                'c-fifth': '6px 6px 0px 0px #1B262C',
            },
            colors: {
                'first' : '#FFB319',
                'second' : '#FFE194',
                'third' : '#E8F6EF',
                'fourth' : '#B8DFD8',
                'fifth': '1B262C'
            }
        },
    },
    plugins: [],
}  