import SignupFormWithValidation from "./components/basic/LoginForm";
import MyFormWithRef from "./components/basic/MyFormRef";
import MyForm from "./components/basic/MyFormState";
import BasicReactHook from "./components/react-hook-form/Basic";
import Register from "./components/react-hook-form/Register";

function App() {
  return (
    <>
      <h1 className="text-5xl text-red-700 text-center font-bold mt-10">
        React-Hook-Form
      </h1>
      {/* <MyForm /> */}
      {/* <MyFormWithRef/> */}
      {/* <SignupFormWithValidation /> */}
      {/* <BasicReactHook/> */}
      <Register/>
    </>
  );
}

export default App;
