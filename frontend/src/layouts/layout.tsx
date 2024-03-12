import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

type Props = {
    children: React.ReactNode;
} 
 
 const Layout = ({ children }: Props) => {
   return(
    <div className="flex flex-col min-h-screen">
        <Header />
        <Hero />
        <div className="container mx-auto flex-1 py-10">{ children }</div>
        <Footer />
    </div>
   )
 }
 
 export default Layout;