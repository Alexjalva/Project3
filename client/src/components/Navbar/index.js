import React from "react";
import "./style.css"

function Navbar() {
  return (
    <div class="topnav" id="myTopnav">
  <a href="/">BET ON IT!</a>
  <a href="/Events">MY STUFF!</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>
  );
}

export default Navbar;