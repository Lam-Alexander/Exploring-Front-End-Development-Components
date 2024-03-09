import RegistrationForm from "./components/RegistrationForm";
import StudentList from "./components/StudentList";
import CombinedComponent from "./components/CombindedComponent";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
    <h1 className="text-4xl font-bold">Welcome to my App</h1>
   <CombinedComponent/>
    </main>
  );
}
