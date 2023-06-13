import Footer from "./components/Footer";
import Header from "./components/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="w-large m-auto flex-1">{children}</div>
      {/* @ts-expect-error Server Component */}
      <Footer />
    </div>
  );
};

export default MainLayout;
