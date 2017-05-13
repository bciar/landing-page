<?php
if($_POST){
    $adminEmail = "info@maknetix.com";
    $name = $_POST['form_name'];
    $email = $_POST['form_email'];
    $message = $_POST['form_msg'];

//send email
    mail($adminEmail , "This is an email from:" .$name.", ".$email, $message);
    //Email response
    echo "success";
}else  { 
	//if "email" variable is not filled out, display the form
	echo "error"  
  }
?>
