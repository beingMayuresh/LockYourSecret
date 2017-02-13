<%-- 
    Document   : page2
    Created on : Feb 12, 2017, 2:15:35 AM
    Author     : Mayuresh
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset = "utf-8">
  <title>Lock Down Secret</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="../style.css">
</head>
<body>

  <div class="fullscreen-bg">
      <img src="../images/secret1.jpg" class="img-responsive" alt="Cinque Terre" width="1350" height="700">
  </div>

  <div class="container-fluid">
    <div class="jumbotron text-center" style="color: white; background-color: transparent; height: 300px;">
        <h1>Welcome! Lock down yourSelf!</h1>
        <br>
        <br>
          <div class="container">
          <br><br><br><br><br>
          <button type="button" class="btn btn-default btn-lg" onclick="location.href = 'signin.jsp'">Lock your Secret!</button>
          <button type="button" class="btn btn-default btn-lg" onclick="location.href = 'signup.jsp'">New? SignUp</button>
          </div>
    </div>
  </div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <!--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>-->
   <script src="https://code.jquery.com/jquery-3.1.1.js"></script>  
  <script src="../script.js"></script>
</body>
</html>
