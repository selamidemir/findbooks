import React from "react";
import SeachForm from "./SeachForm";
// import TopMenu from "./TopMenu";

function Header() {
  return (
    <div className="header-cover">
      <div className="header">
        {/* <TopMenu /> */}
        <SeachForm />
      </div>
    </div>
  );
}

export default Header;
