import Footer from "./components/Footer";
import Header from "./components/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden relative flex flex-col font-light">
      <Header />
      <div className="w-large m-auto flex-1 max-desktop:w-[95%] max-tablet:w-[85%] max-mobile:w-[90%]">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
