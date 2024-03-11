import StudentForm from "./components/StudentForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



export default function Home() {
  return (
    <main >
      <div>
        <Navbar/>
      </div>

    <div className="items-center p-8">
        <StudentForm/>
   </div>
   <div>
   <Footer/>
   </div>
 
    </main>
  );
}
