import StudentForm from "./components/StudentForm";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
    <h1 className="text-4xl font-bold">Change to School name</h1>
   <StudentForm/>
    </main>
  );
}
