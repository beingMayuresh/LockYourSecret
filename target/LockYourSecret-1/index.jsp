<%-- 
    Document   : index
    Created on : Feb 12, 2017, 3:28:00 AM
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
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="fullscreen-bg">
      <video loop muted autoplay poster="img/videoframe.jpg" class="fullscreen-bg__video">
          <source src="images/video.mp4" type="video/mp4">
      </video>
  </div>

  <div class="container-fluid">
    <div class="jumbotron text-center" style="color: white; background-color: transparent; height: 300px;">
        <br><br>
          <div class="container">
          <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
          <button type="button" class="btn btn-danger btn-lg" onclick="location.href = 'WebPages/page2.jsp'">Enter!</button>
          </div>
    </div>
  </div>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <!--<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>-->
   <script src="https://code.jquery.com/jquery-3.1.1.js"></script>  
  <script src="script.js"></script>

</body>
</html>