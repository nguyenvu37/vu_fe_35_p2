import React from "react";

const FormError = (props) => {
  return (
    <div className="text-left text-danger font-italic">
      {props.errorMessage}
    </div>
  );
};

export default FormError;
