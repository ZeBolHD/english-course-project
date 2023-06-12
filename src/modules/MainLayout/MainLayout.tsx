import Footer from "./components/Footer";
import Header from "./components/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[1160px] m-auto min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
