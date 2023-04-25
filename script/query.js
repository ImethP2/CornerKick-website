

//checking user inputs in form fields 
function verify() {

    const fname = document.getElementById('fname-b').value;

    const lname = document.getElementById('lname-b').value;

    const email = document.getElementById('email-b').value;

    const query = document.getElementById('prob-b').value;

    var divbox = document.getElementById("query-box");
    var detailsbox = document.getElementById("details-box");
    // assigning values 
    document.getElementById('inputfName').innerHTML = fname;
    document.getElementById('inputlName').innerHTML = lname;
    document.getElementById('inputEmail').innerHTML = email;
    document.getElementById('inputQuery').innerHTML = query;
    
    //validating user name input fields
    if (!(fname == "" || fname == " ")) {
        if (!(lname == "" || lname == " ")) {
            if(!( email == "" )) {
                if (!(query == "")) {
                    divbox.style.display = "none";
                    detailsbox.style.display = "block";
                    return false;
                } else {
                    alert("Please fill in your query detail!");
                    return false;
                    }
            } else {
                alert( "Please provide your Email!" );
                return false;
            }
        } else {
            alert("Please enter your Last name!");
            return false;}
      } else {
          alert("Please enter your First name!");
          return false;
      }   
  }
  //edit button function 
function edit() {
	var divbox = document.getElementById("query-box");
  	var detailsbox = document.getElementById("details-box");

  	divbox.style.display = "grid";
	detailsbox.style.display = "none";

	return false;

}
