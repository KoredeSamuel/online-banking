var full_name = document.getElementById("full-name");
var dob = document.getElementById("dob");
var gender = document.getElementById("gender");
var nationality = document.getElementById("nationality");
var nok = document.getElementById("nok");
var nok_relationship = document.getElementById("nok-relationship");
var nok_address = document.getElementById("nok-address");
var nok_gender = document.getElementById("nok-gender");
var email = document.getElementById("email");
var number = document.getElementById("number");
var address = document.getElementById("address");
var account_type = document.getElementById("account-type");
var ownership = document.getElementById("ownership");
var card = document.getElementById("card");
var username = document.getElementById("username");
var password = document.getElementById("password");
var confirm_pass = document.getElementById("confirm");
var form = document.getElementById("form");

var form_stage = document.getElementsByClassName("form-stage");
var form_group = document.getElementsByClassName("form-group");
var delete_stage = document.getElementsByClassName("delete-stage");

function next(position){
    if (position == 0){
        if (full_name.value.length == 0 || dob.value.length == 0 || gender.value.length == 0 || nationality.value.length == 0){
            alert("Please fill all fields in this section");
        } else {
            form_stage[position].style.display = "none";
            form_stage[position + 1].style.display = "block";
        }
    } else if (position == 1){
        if (nok.value.length == 0 || nok_relationship.value.length == 0 || nok_address.value.length == 0 || nok_gender.value.length == 0){
            alert("Please fill all fields in this section");
        } else {
            form_stage[position].style.display = "none";
            form_stage[position + 1].style.display = "block";
        }
    } else if (position == 2){
        if (email.value.length == 0 || number.value.length == 0 || address.value.length == 0){
            alert("Please fill all fields in this section");
        } else {
            form_stage[position].style.display = "none";
            form_stage[position + 1].style.display = "block";
        }
    }  else if (position == 3){
        if (account_type.value.length == 0 ||ownership.value.length == 0 || card.value.length == 0){
            alert("Please fill all fields in this section");
        } else {
            form_stage[position].style.display = "none";
            form_stage[position + 1].style.display = "block";
        }
    } else if (position == 4){
        if (username.value.length == 0 ||password.value.length == 0 || confirm_pass.value.length == 0){
            alert("Please fill all fields in this section");;
        } else {
            alert("Account Successfully Created");
            form.submit();
        }
    }

    
}

function prev(position){
    form_stage[position].style.display = "none";
    form_stage[position - 1].style.display = "block";
}
// --- transfer script ---
var bank_name = document.getElementById("bank-name");
var acct_number = document.getElementById("acct-number");
var acct_name = document.getElementById("acct-name");
var amount = document.getElementById("amount");
var remark = document.getElementById("remark");
var pin = document.getElementById("pin");
var transfer_form = document.getElementById("transfer-form");

// function Next(position){
//     form_group[position].style.display = "none";
//     form_group[position + 1].style.display = "block";
// }
function Next(position){
    if (position == 0){
        if (bank_name.value.length == 0 || acct_number.value.length == 0 || acct_name.value.length == 0){
            alert("Please Enter All Fields");
        }
        else {
            form_group[position].style.display = "none";
            form_group[position + 1].style.display = "block";
        }
    } else if (position == 1){
        if (amount.value.length == 0 || acct_number.value.length == 0 || pin.value.length == 0){
            alert("Please Enter All Necessary Fields")
        } else {
            alert("Transaction Successful");
            transfer_form.submit();
        }
    }
    
}

function Prev(position){
    form_group[position].style.display = "none";
    form_group[position - 1].style.display = "block";
}

function delete_prev(position){
    delete_stage[position].style.display = "none";
    delete_stage[position - 1].style.display = "block";
}

function delete_next(position){
    delete_stage[position].style.display = "none";
    delete_stage[position + 1].style.display = "block";
}

var dashboard = document.getElementById("dashboard");
var transfer = document.getElementById("transfer");
var account = document.getElementById("account");
var account_buttons = document.getElementById("account-buttons");
var Update = document.getElementById("update");
var Delete = document.getElementById("delete");
var close = document.getElementById("close");

function showTransfer(){
    window.location.href = "transfer.html";
}
function hideTransfer(){
    window.location.href = "dashboard.html";
}

function DisplayPopup(num){
    if (num == 1){
        Update.style.display = "block";
        Delete.style.display = "none";
        account_buttons.style.display = "none";
    } else if (num == 2){
        Update.style.display = "none";
        Delete.style.display = "block";
        account_buttons.style.display = "none";
    } else if (num == 3){
        Update.style.display = "none";
        Delete.style.display = "none";
        account_buttons.style.display = "block";
    }
}
close.addEventListener("click", function(){
        popup_page.style.display = "none";
        account_buttons.style.display = "block";
    });

    function transactionPage(){
        window.location.href = "transaction.html";
    }

var update_form = document.getElementById("update-form");
var delete_form = document.getElementById("delete-form");
var update_button = document.getElementById("update-button");
var delete_button = document.getElementById("delete-button");
var pin_delete = document.getElementById("pin-delete");

update_button.addEventListener("click", function(){
    alert("Account Successfully Updated");
    update_form.submit();
});

delete_button.addEventListener("click", function(){
    if (pin_delete.value.length == 0){
        alert("Please Enter pin")
    } else {
        alert("Account Successfully Deleted");
        delete_form.submit();
    }
    
})