<%-- 
    Document   : welcome
    Created on : Feb 12, 2017, 2:16:17 AM
    Author     : Mayuresh
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset = "utf-8">
  <title>Welcome!</title>
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
        <form class="form-inline" action="createPost" method="GET">
            <div class="form-group">
              <label for="text">Secret Label</label>
              <input type="text" class="form-control" id="email" name="postTitle">
            </div>
            <div class="form-group">
              <label for="pwd">Your Secret Here</label>
              <textarea class="form-control" rows="6" id="comment" name="postContent"></textarea>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
          </form>
    </div>
  </div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <!--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>-->
   <script src="https://code.jquery.com/jquery-3.1.1.js"></script>  
  <script src="../script.js"></script>
</body>
</html>
