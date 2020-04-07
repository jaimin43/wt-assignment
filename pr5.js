function validateForm() {
    var f = document.forms["myForm"]["fname"].value;
    var l = document.forms["myForm"]["lname"].value;
    var p = document.forms["myForm"]["pass"].value;
    var cp = document.forms["myForm"]["cpass"].value;
    if (f == "") {
      alert("First Name must be filled out");
      return false;
    }else if (l == "") {
        alert("Last Name must be filled out");
      return false;
    }else if (p.length<=5){
        alert("Password must be 6 character Long");
      return false;
    }else if (p != cp){
        alert("Password does not match");
      return false;
    }
  }