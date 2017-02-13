<%-- 
    Document   : signup
    Created on : Feb 12, 2017, 2:16:00 AM
    Author     : Mayuresh
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset = "utf-8">
  <title>Sign Up</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="../style.css">
</head>
<body>

  <div class="fullscreen-bg">
      <img src="../images/signup.jpg" class="img-responsive" alt="Cinque Terre" width="1350" height="700">
  </div>

  <div class="container-fluid">
    <div class="jumbotron text-center" style="color: white; background-color: transparent; height: 300px;">
        <br>
        <br>
        <form class="form-inline" action="signup" method="POST">
            <div class="form-group">
              <label for="text">Tag Name</label>
              <input type="text" class="form-control" id="email" name="uName">
            </div>
            <div class="form-group">
              <label for="pwd">Password</label>
              <input type="password" class="form-control" id="pwd" name="pass">
            </div>
            <div class="checkbox">
              <label><input type="checkbox"> Remember me</label>
            </div>
            <button type="submit" class="btn btn-default">Sign Up</button>
          </form>
    </div>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <!--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>-->
   <script src="https://code.jquery.com/jquery-3.1.1.js"></script>  
  <script src="../script.js"></script>
</body>
</html>
