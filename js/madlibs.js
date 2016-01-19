window.onload = function() {
    
    //check that js is working
    console.log("reading js");
    
    //capture submit event
    document.f.onsubmit = processForm;
    //capture reset event
    document.f.onreset = resetPage;
    
    //define processForm function
    function processForm() {
        //change background image with class
        backgroundChange.className = "backgroundChange";
        
        //store value variables userName, Number, Bag, etc
        var userName = document.f.userName.value;
        var userNumber = document.f.userNumber.value;
        var userBag = document.f.userBag.value;
        var streetOne = document.f.streetOne.value;
        var streetTwo = document.f.streetTwo.value;
       
    if (userName == "" || 
        userNumber == "" ||
       userBag == "" ||
       streetOne == "" ||
       streetTwo == "") {
        
        alert("Information Needed");
    } else {
        // capture ransomNote id to change its text and html
        var ransomNote = document.getElementById("ransomNote");
        
        ransomNote.innerHTML = "If you ever want<br> to see <em>" + userName + "</em> again<br> put " + userNumber + " dollars<br> in a " + userBag + " and<br> drop it in the mailbox<br> on the corner of<br> <em>" + streetOne + "</em> and <em>" + streetTwo + "</em> <br>you have 48 hours";
        ransomNote.className = "show";
    }
        return false;
    }
    
    //check js
    console.log("reading js");
    
    function resetPage() {
        //remove text from ransomNote
        ransomNote.innerHTML = "";
        //reset value fields
        userName.value = "";
        userNumber.value = "";
        userBag.value = "";
        streetOne.value = "";
        streetTwo.value = "";
        //change class name to
        ransomNote.className = "hide";
        //***backgroundChange
        backgroundChange.className = "backgroundChangeHide";
    }
    
} //end onload