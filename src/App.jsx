import LoginForm from "./components/basic/LoginForm";
import MyFormWithRef from "./components/basic/MyFormRef";
import MyForm from "./components/basic/MyFormState";

function App() {
  return (
    <>
      <h1 className="text-5xl text-red-700 text-center font-bold mt-10">
        React-Hook-Form
      </h1>
      {/* <MyForm /> */}
      {/* <MyFormWithRef/> */}
      <LoginForm/>
    </>
  );
}

export default App;
