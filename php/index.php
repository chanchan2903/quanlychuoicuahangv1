<?php
    session_start();
    if(!isset($_SESSION["user"]) ){
        header("location:login.php");
    }
?>
<h1>Bạn cần phải đăng nhập</h1>
