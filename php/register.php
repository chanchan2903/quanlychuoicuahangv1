<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>ĐĂNG KÝ THÀNH VIÊN</title>
</head>
<body>
    <h3>Đăng ký thành viên</h3>
    <form action="register_submit.php" method="POST" accept-charset="utf-8">
        <table>
            <tr>
                <td>Tên đăng nhập: </td>
                <td><input type="text" name="username"></td>
            </tr>
            <tr>
                <td>Mật khẩu: </td>
                <td><input type="password" name="password"></td>
            </tr>
            <tr>
                <td>Nhập lại mật khẩu</td>
                <td><input type="password" name="repassword"></td>
            </tr>
            <tr>
                <td colspan="2">
                    <button type="submit" name="submit">Đăng ký</button>
                    <button type="reset">Làm Mới</button>
                </td>
            </tr>
        </table>
    </form>
</body>
</html>
