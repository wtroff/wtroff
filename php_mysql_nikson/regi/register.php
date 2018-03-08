<?php
require_once('forms/registration.form.class.php');
require_once('db.class.php');
require_once('password.class.php');

$msg ="";
$form = new RegistrationForm($_POST);
$db = new DB($db_host, $db_user, $db_password, $db_name);

if ($_POST) {
    if($form->validate()){
       $email = $db->escape($form->getEmal());
        $username = $db->escape($form->getUsername());
        $password = new Password( $db->escape($form->getPassword()) );
        $res = $db->query("SELECT * FROM users WHERE username = '{$username}'");
        if ($res) {
            $msg = 'Such user already exists!';
        } else {
            $db->query("INSERT INTO users (email, username, password) VALUES ('{$email}','{$username}','{$password}')");
            header('location: index.php?msg=You have been registered');
        }
    } else {
        $msg = $form->passwordsMatch()?'Please fill in fields' : 'Passwords don\'t match';
    }
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
</head>
<body>
<h1>Register new user</h1>

<br/>
<form method="post">
    Email: <input type="email" name="<?=$form->getEmail()?>" /> <br/><br/>
    Username: <input type="text" name="<?=$form->getUsername()?>" /> <br/><br/>
    Password: <input type="password" name="password"/> <br/><br/>
    Confirm password: <input type="password" name="passwordConfirm"/> <br/><br/>
    <input type="submit"/>
</form>

</body>
</html>