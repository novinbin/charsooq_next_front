import Footer from "@/components/landing-page/footer/Footer";
import Nav from "@/components/landing-page/nav/Nav";

const RootLayout = ({ children }) => {
  return (
    <main>
      <Nav />
      {children}
      <Footer />
    </main>
  );
};

export default RootLayout;
