import localFont from "next/font/local";
const monserratFont = localFont({
  src: [
    {
      path: "../assets/fonts/montserrat/Montserrat-Regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../assets/fonts/montserrat/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "semi-bold",
    },
    {
      path: "../assets/fonts/montserrat/Montserrat-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-monserrat",
});

export { monserratFont };
