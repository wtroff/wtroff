<?php
class RegistrationForm
{
    private $email;
    private $username;
    private $password;
    private $passwordConfirm;

    function __construct(Array $data)
    {
        $this->email = isset($data['email'])? $data["email"]:null;
        $this->username = isset($data['username']) ? $data['username'] : null;
        $this->password = isset($data['password']) ? $data['password'] : null;
        $this->passwordConfirm = isset($data['passwordConfirm']) ? $data['passwordConfirm'] : null;
    }

    public function passwordsMatch(){

        return $this->password == $this->passwordConfirm;
    }

    public function validate(){

        return !empty($this->email)&&!empty($this->username)&& !empty($this->password) && !empty($this->passwordConfirm) && $this->passwordsMatch();
    }

    public function getEmal(){

        return $this->email;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }
    public function getPasswordConfirm()
    {
        return $this->passwordConfirm;
    }


    public function setPasswordConfirm($passwordConfirm)
    {
        $this->passwordConfirm = $passwordConfirm;
    }
    public function getPassword()
    {
        return $this->password;
    }
    public function setPassword($password)
    {
        $this->password = $password;
    }

    public function getUsername()
    {
        return $this->username;
    }

    public function setUsername($username)
    {
        $this->username = $username;
    }
}