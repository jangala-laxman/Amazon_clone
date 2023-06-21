/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        maxWidth:{
          container:"1440px"
        },
        screens:{
          xs:"320px",
          sm:"375px",
          sml:"500px",
          md:"667px",
          mdl:"768px",
          lg:"960px",
          lgl:"1024px",
          xl:"1280px"
        },
        colors:{
          amazonclone:{
            amazon_blue:'#131921',
            background:"#EAEDED",
            light_blue :'#232F3A',
            amazon_yellow:'#febd69',
            DEFAULT:"#131921"
          }
        },
        boxShadow:{
          testShadow:"0px 0px 32px 1px rgba(199, 199, 199, 1)",
          amazonInput:"0 0 3px 2px rgba(228 121 17 / 50%)"
        },
        fontFamily:{
          titleFont:"Roboto",
          bodyFont:"Poppins"
        }
      },
    },
    plugins: [],
  }