# online-banking
An Online Banking Website

Good evening. So the name i gave it is Bondex Online Banking. From the files i uploaded, click on the index.html. this is the landing page of the website. On this landing page, there's a short Introduction. On the navigation bar, you will see the sign in botton. When you click on it, you are taken to a login page where you login using your username and password. In the login form, you will see a link to create account which is for new users. When you click this link, you are taken tk a create account form. The form is divided into stages, which are personal information, Additional Information, Contact Information, Account Information and login information. Going back to the login page, after you login, you will be taken to a dashboard page. This contains a side bar and some content. In the content, you see a card, which contains some information such as card balance, expiry date, etc. you also see services which include transfer, airtime, etc. Only the transfer is functional. Lastly, on this main content, you see latest transactions. When you click the transfer in the services, you will be taken to a transfer page, which contains a form to input beneficiary details and all. Back to the dashboard, at the side bar, you see dashboard, edit account, transactions, settings, etc. Only the dashboard, edit account, transactions and log out are functional. Clicking on the edit account, you will be taken to a page which contains two buttons for updating and deleting account. When you click on the transactions in the side bar, you see all transactions made. and finally, clicking log out redirects you to the login page. 

* Due to time constraint (short period of time) and the Power outage in school, i wasn't able to make the website responsive and create designs for the success messages instead of using alert box.

ENVIRONMENT VARIABLES USED IN MY JAVASCRIPT CODE

Variables used for create account function: 
var full_name for the full name of the user,
var dob for the date of birth of the user,
var gender for the gender of the user,
var nationality for the user counter,
var nok for the user next of kin,
var nok_relationship for next of kin relationship,
var nok_address for the next of kin address,
var nok_gender for the next of kin gender,
var email for the next of kin email,
var number : user phone number,
var address : user address,
var account_type: desired account type,
var ownership : type of ownership of account, either individual, joint or business,
var card : if user wants card request,
var username for the user username,
var password for the user password,
var confirm_pass: confirm password,
var form for the create account form,

I also used Functions
next() : To implement the next functionality in the create account form
prev() : To implement the previous functionality in the create account form

var form_stage : stages for the create account form,
var form_group : stages for the transfer form,
var delete_stage : stages for the delete account form,

// for money transfer
var bank_name : beneficiary bank name,
var acct_number : beneficiary account number,
var acct_name : beneficiary account name,
var amount : amount,
var remark : transaction remark,
var pin : transaction pin,
var transfer_form : to represent the transfer form itself.

Functions used for money Transfer 
Next() to implement the next functionality in the transfer form
Prev() to implement the previous functionality in the transfer form
showTransfer() to redirect to the transfer page
hideTransfer() to redirect to back to the dashboard page

For the edit Account Functionality, my variabkes include
var account_buttons : to represent the two buttons (update account button and delete account button)
var update : to represent the update pop-up
var delete : to represent the delete pop-up
var close : to represent the close icon (x)
var update_form : to represent the update form inside the update pop-up
var delete_form : to represent the delete_button in the delete pop-up
update_button : button to submit the update form
delete_button : button to submit the delete form
pin_delete : to store the pin in the delete form

I created a function to redirect to the transaction page. transactionPage()

* The way i wrote these environment Variable are not totally in this order which ive listed. 
