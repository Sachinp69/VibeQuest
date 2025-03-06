// import tailwindcss from "tailwindcss";
// import autoprefixer from "autoprefixer";
// import nesting from "@tailwindcss/nesting";

// export default {
//   plugins: [nesting, tailwindcss, autoprefixer],
// };

//2nd
// export default {
//   plugins: {
//     '@tailwindcss/postcss': {},
//     autoprefixer: {},
//   }
// };

export default {
  plugins: {
    "postcss-nesting": {},
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};