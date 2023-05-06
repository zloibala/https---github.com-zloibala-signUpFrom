import "./app.Style.css";
import CustomInput from "./components/custon.Input/CustomInput";

function App() {
  return (
    <div className="Sign-Up">
      <h1> Sign up Form</h1>
      <div className="Form">
        <CustomInput
          labelText="First Name"
          placeHolder="First Name"
          lenght="10"
          type=" text"
          size="small"
        />
        <CustomInput
          labelText="Middle Name (optional)"
          placeHolder="Middle Name"
          lenght="10"
          type=" text"
          size="small"
        />
        <CustomInput
          labelText="Last Name:"
          placeHolder="Last Name"
          lenght="10"
          type=" text"
          size="small"
        />
        <CustomInput
          labelText="Email:"
          placeHolder="yourEmail@gmail.com"
          lenght="10"
          type=" text"
          size="small"
        />
      </div>
    </div>
  );
}

export default App;
