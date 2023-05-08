import React from "react";
import classes from "./CheckBox.module.scss";

type Props = {
  value: boolean;
  id: number;
  isDisabled: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
  handleSelectedProductIds: any;
};

const CheckBox = ({
  value,
  id,
  isDisabled,
  handleSelectedProductIds,
  onChange,
}: Props) => {
  const handleCheckbox = () => {
    handleSelectedProductIds(id, !value);
    onChange(!value);
  };
  
  return (
    <input
      className={classes.Checkbox}
      type="checkbox"
      checked={value}
      disabled={isDisabled}
      onChange={handleCheckbox}
    />
  );
};

export default CheckBox;
