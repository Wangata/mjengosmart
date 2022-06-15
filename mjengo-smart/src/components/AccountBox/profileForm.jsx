import React, { useContext } from "react";
import {
  BoldLink,
  MutedLink,
 } from "./common";

import { AccountContext } from "./accountContext";
  const { switchToSignin } = useContext(AccountContext);
  return (
    {
      <MutedLink href="#">
        <BoldLink href="#" onClick={switchToSignin}>
          Logout
        </BoldLink>
      </MutedLink
}

export default App;
