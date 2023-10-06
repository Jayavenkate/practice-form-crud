import { useState } from "react";
import Switch from "@mui/material/Switch";
export function Toggle() {
  const [toggle, setToggle] = useState(false);
  const togglerSwitch = () => {
    setToggle(!toggle);
  };
  return (
    <>
      {toggle ? <span>Active</span> : <span>Inactive</span>}
      <Switch checked={toggle} onChange={togglerSwitch} />
    </>
  );
}
