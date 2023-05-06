import "./customInput.Style.css";

const CustomInput = (props) => {
  return (
    <>
      <label className={`${props.size}`}>
        {props.labelText}
        <input
          placeHolder={props.placeHolder}
          lenght={props.lenght}
          type={props.type}
        ></input>
      </label>
    </>
  );
};
export default CustomInput;
