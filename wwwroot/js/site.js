// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function OpenShop(){
    document.getElementById("xclose").style.display="block";
    document.getElementById("shopContent").style.height="100px";
    document.getElementById("inshop").style.display="block";
      closeSearch(); 
  }

  function closeShop(){
    document.getElementById("shopContent").style.height="0";
    document.getElementById("xclose").style.display="none";
    document.getElementById("xSearch").style.display="block";
    document.getElementById("inshop").style.display="none";

  }

  function OpenSearch(){
      document.getElementById("searchvalue").style.display="block";
      document.getElementById("search").style.width="100%";
      document.getElementById("xSearch").style.display="block";
      document.getElementById("Open").style.display="block";
  }
  function closeSearch(){
    document.getElementById("Open").style.display="none";
    document.getElementById("searchvalue").style.display="none";
    document.getElementById("search").style.width="0px";
    document.getElementById("xSearch").style.display="none";

  }

