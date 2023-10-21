function changeText(name,quote){
    let names = document.getElementById('text-name');
    let quotes = document.getElementById('text-quotes');
    names.innerHTML = "";
    names.innerHTML = name;
    quotes.innerHTML = "";
    quotes.innerHTML = `"${quote}"`;
}
function changeback(){
    let names = document.getElementById('text-name');
    let quotes = document.getElementById('text-quotes');
    names.innerHTML = "";
    names.innerHTML = "Characters";
    quotes.innerHTML = "";
    quotes.innerHTML = `These are the five emotions who lives in Riley’s head. They are the emotions!`;
}

const validateEmail = (email) => {
    return email.match(
     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
   };
   const validateInput = (input) => {
    return input!=""?true:false;
   }

   const validate = () => {
    const $result = $("#resultEmail");
    const email = $("#email").val();
    $result.text("");

    if (validateEmail(email)) {
     $result.text("Valid input");
     $result.css("color", "green");
    } else {
     $result.text("Invalid input");
     $result.css("color", "red");
    }
    return false;
   };
   const validateName = () => {
    const $result = $("#resultName");
    const name = $("#name").val();
    $result.text("");

    if (validateInput(name)) {
     $result.text("Valid input");
     $result.css("color", "green");
    } else {
     $result.text("Invalid input");
     $result.css("color", "red");
    }
    return false;
   };
   const validateTopic = () => {
    const $result = $("#resultTopic");
    const name = $("#topic").val();
    $result.text("");

    if (validateInput(name)) {
     $result.text("Valid input");
     $result.css("color", "green");
    } else {
     $result.text("Invalid input");
     $result.css("color", "red");
    }
    return false;
   };
   const validateForm = () => {
    const $result = $("#resultForm");
    const name = $("#form").val();
    $result.text("");

    if (validateInput(name)) {
     $result.text("Valid input");
     $result.css("color", "green");
    } else {
     $result.text("Invalid input");
     $result.css("color", "red");
    }
    return false;
   };

   $("#email").on("input", validate);
   $("#name").on("input", validateName);
   $("#topic").on("input", validateTopic);
   $("#form").on("input", validateForm);