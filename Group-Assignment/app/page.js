<<<<<<< Updated upstream
import RegistrationForm from "./components/RegistrationForm";
import StudentList from "./components/StudentList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center p-8">
        <StudentList/>
        <RegistrationForm/>
=======
import Navbar from "./components/Navbar";
import StudentForm from "./components/StudentForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Navbar />
      <main className="mb-auto">
        <StudentForm />
>>>>>>> Stashed changes
      </main>
      <Footer />
    </div>
  );
}
