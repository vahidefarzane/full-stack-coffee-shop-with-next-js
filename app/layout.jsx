import "./globals.css";
import AOSInit from "@/utils/aos";
import ScrollToTop from "@/utils/scrollToTop";



export const metadata = {
  title: "صفحه اصلی - SET Coffee | فروشگاه اینترنتی قهوه ست",
  description: "Sabzlearn coffee project with next.js v13",

  icons: {
    icon: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/36190/coffee-logo-clipart-md.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>
        <AOSInit />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
