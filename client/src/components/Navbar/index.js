import React from "react";
import "./style.css"
import AUTH from "../../utils/AUTH";

function Navbar() {
  return (
    <div class="topnav" id="myTopnav">
  <a href="/">BET ON IT!</a>
  <a href="/Events">MY STUFF!</a>
  <a href="/Login" onClick={AUTH.logout}>Log out!</a>
</div>
  );
}

export default Navbar;