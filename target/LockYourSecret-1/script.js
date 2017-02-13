/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
    $("#mydiv1").effect("bounce", { times:1 }, 300);
});


function myFunction() {
	    	
        //window.location.href = "test.html";
	    var data = document.getElementById("txt").value;
	    //console.log(data);
	    if(validateInput(data))
	    {	
	    	document.getElementById('demo0').style.display='initial';
	    	document.getElementById('demo').style.display='initial';
	      document.getElementById('demo1').style.display='initial';
	      document.getElementById('demo2').style.display='initial';
	      document.getElementById('demo3').style.display='initial';
	      document.getElementById('demo4').style.display='initial';
    		departmentName = departmentName.toUpperCase();
    		semester = semester.toUpperCase();
    		document.getElementById("demo").innerHTML = "Are you looking for below criteria?";	
	    	document.getElementById("demo1").innerHTML = "Department Name - " + departmentName;
	    	document.getElementById("demo2").innerHTML = "Course Number - " + courseNumber;
	    	document.getElementById("demo3").innerHTML = "Year - " + yearFinal;
	    	document.getElementById("demo4").innerHTML = "Semester - " + semester;
		         
 		}
		else document.getElementById("demo").innerHTML = "Please enter correct text!";
	};

	function validate(e){
		var data = e;
		if(e === "a"){
			return true;
			
		}else return false;
	};

$(".progress-bar").loading();
			
         $('input').on('click', function () {
            $(".progress-bar").loading();
         });


function hide(){
		  document.getElementById('demo0').style.display='none';
	      document.getElementById('demo').style.display='none';
	      // document.getElementById('demo1').style.display='none';
	      // document.getElementById('demo2').style.display='none';
	      // document.getElementById('demo3').style.display='none';
	      // document.getElementById('demo4').style.display='none';
	  };


     /*
      @author Mayuresh Gupta
      @project Course Hero
    */

      /*
        input validation using JS

        test cases:

        1.) combination of a Department+Course Number followed by Semester+Year...auto complete if below test cases are passes....passed
              CS111 2017 Fall  
              CS-111 Fall 2017  
              MATH 123 2017 Spring 

        2.) A department is always one or more alphabetic characters,....completed...passed
              111 2017 Fall
              -111 Fall 2017
              123 2017 Spring

        3.) a course number is always one or more numeric characters....completed...passed
              CS 2017 Fall
              CS Fall 2017
              MATH 1 2017 Spring

        4.) Semester is either an abbreviation or a word, and a ...completed.......passed
              CS111 2017 F
              CS-111 F 2017
              MATH 123 2017 S

        5.) Year is either two digits or four digits. (Lets consider to validate if the year is current year)..........completed...............passed.
              CS111 17 Fall
              CS-111 Fall 17
              MATH 123 17 Spring
              MATH 123 217 Spring

        6.) Semester and Year can be swapped in position......completed....passed
              CS111 Fall 2017
              CS-111 2017 Fall 
              MATH 123 Spring 2017

        7.) There is always a space between Department+Course Number and Semester+Year.........completed.......passed.
                MATH 123 2017 Spring
                MATH123 2017Spring
                MATH1232017Spring

        8.) trim the input data....completed...."    CS111 2017 Fall  " passed
        9.) make the input data to lower case....completed

        10.) boundary values validations......completed
          a.) dept and course - starts with alphabet and end with number
          b.) .............................................F (Fall), W (Winter), S (Spring), Su (Summer)
            fall 2017
            fall 17
            f2017
            2017f
            17fall
            2017fall
            17f
            2017f

            case1: starts with f,w,s and ends with 7      
            case2: starts with 1 and ends with l,r,g,r      
            case3: starts with 1 and ends with f,w,s
            case4: starts with 2 and ends with l,r,g,r
            case5: starts with 2 and ends with f,w,s
            
        11.) more than 4 words - MATH 123 2017 Spring Spring......passed
        
        extra test cases; 2017Spring - passed(should fail)
                          MATH123 2017 Spring - passed
                          MATH 123 2017Spring - passed
                          MATH:123 2017Spring - passed

      */


        /*failed test cases: @resolved later
           
              MATH 123 2017 Spring - resolved
              
              @resolved
              CS111 17 Fall
              MATH 123 17 Spring
              
              @resolved
              MATH123 2017Spring
              CS111 2017Fall
              CS111 17Fall
              
              @resolved
              CS111 Fall
              CS2017 Fall
                        
        */



  //input search String
  var searchString = "MATH 123 2017 Spring";
  var departmentName, courseNumber, semester, yearFinal;
  //invocate main function
  //validateInput(searchString);

  if(validateInput(searchString))
  {
    departmentName = departmentName.toUpperCase();
    semester = semester.toUpperCase();
    console.log();
    console.log(" ########################");
    console.log(" Input Validation PASSED!");
    console.log(" ########################");
    console.log();
    console.log();
    console.log(" ##########################");
    console.log(" Department      -   " + departmentName); 
    console.log(" Course Number   -   " + courseNumber);
    console.log(" Year            -   " + yearFinal);
    console.log(" Semester        -   " + semester);
    console.log(" ##########################");
    console.log();
  }
  else
  {
    console.log();
    console.log(" ########################");
    console.log(" Input Validation FAILED!");
    console.log(" ########################");
    console.log();
  }



  //main function
    function validateInput(e)
    {
        var inputValue = e;
        var data = inputValue.toLowerCase().trim();

        //check if its null or emplty or undefined
        if(data == null || data == "")
        {
          console.log("Please enter Search Value!");
        }

        else
        {
            if((inputNoSpace(data)) || (checkInputWords(data)))
            {
              return false;
            }

            else
            {
                //fetch the value of deptAndCourse and semAndYear from the string if or not string have special char
                var inputDataSpecialCharCheck = removeSpecialCharFromInputString(data);

                if(inputDataSpecialCharCheck != null)
                {
                  var deptAndCourse = returnDeptAndCourse(inputDataSpecialCharCheck);
                  var semAndYear = returnSemAndYear(inputDataSpecialCharCheck);
                }
                else
                {
                  var deptAndCourse = returnDeptAndCourse(data);
                  var semAndYear = returnSemAndYear(data);
                }

            }
          
             //console.log(deptAndCourse);
            //console.log(semAndYear);
            //console.log(semAndYearCheck(semAndYear));

          if((semAndYearCheck(semAndYear)) && (deptAndCourseCheck(deptAndCourse)) && (validateYear(yearFinal)))
            {
              return true;
            }
          
          else
            {
              return false;
            }
          
        } 
          
      
    }





  /*
    generic validation
  */

  //to check if there is space in the input
    function checkInputWords(e)
    {
      var data = e;
      var splitInput = data.split(" ");
        var len = splitInput.length;
          if(len > 4)
            return true;
      else return false;
    }


  //since output doesn't need special char, remove special character in the input string
    function removeSpecialCharFromInputString(e)
    {
      var data = e;

      for(var i=0; i<data.length;i++)
      {
        var code = data.charCodeAt(i);
        if( (code >= 33 && code <= 47) || (code >= 58 && code <= 64) ||
           (code >= 91 && code <= 96) || (code >= 123) )
          var newData = data.replace(data.charAt(i), "");
      }
      return newData;
    }


    //return false if input has no space
    function inputNoSpace(e)
    {
      var data = e;
      var splitArray = data.split(" ");

      if((splitArray.length) == 1)
        return true;
      else return false;
    }


    //composed validations      
    //check boundary for sem+year, check if sem is abb and year is two/four depeding upon if sem+year starts with year or sem
      function semAndYearCheck(e)
      {
        var semAndYear = e;
        
        //console.log("from bon: " + (testingBoundaryValuesForSemAndYear(semAndYear)));
        
        // if(testingBoundaryValuesForSemAndYear(semAndYear))
        //     {
              if(checkSemPlusYearStartWithYear(semAndYear))
                {
                  var splitedYearAndSem = splittingYearAndSem(semAndYear);
                    
                    if(((checkSemIsAbbOrWord(splitedYearAndSem)) || (checkSemIsAbbOrWord1(splitedYearAndSem))))
                      return true;
                      else return false;
                  
                }
                //sem+year starts with sem
                else
                {
                 var splittedSemAndYear = splittingSemAndYear(semAndYear);
                    
                    if(checkSemIsAbbOrWord2(splittedSemAndYear)) 
                      return true;
                      else return false; 
                }
//           }
        
//           else return false;
      }
      
      
      
      //checking if dept+course boundary values. then checking if dept >=1 and course>=1
      function deptAndCourseCheck(e)
      {
        var deptAndCourse = e;
        
        if(testingBoundaryValuesForDeptAndCourse(deptAndCourse))
          {
            var splitedDeptAndCourse = splittingDeptAndCourse(deptAndCourse);
            
            var dept = fetchingDept(splitedDeptAndCourse);
            
              if(checkDeptGreaterOrEqualToOne(dept))
                return true;
              else return false;
            
            var courseNo = fetchingCourseNo(splitedDeptAndCourse);
            var courseNo1 = fetchingCourseNo1(splitedDeptAndCourse);
              
              if(checkCourseNoGreaterOrEqualToOne(courseNo))
                return true;
              else if(checkCourseNoGreaterOrEqualToOne(courseNo1))
                return true;
              else return false;
            
          } 
        
          else return false;
      }
      
      
      
      
      
      
      

  /*
    input validation for Sem and Year
  */

  //testing bourdary conditions for Sem and Year
//     function testingBoundaryValuesForSemAndYear(e)
//     {

//         var data = e;
//         var dataLen = data.length;
        
//         var firstValue = data.charAt(0);
//         var lastValue = data.charAt(dataLen-1);

//         //using regex for matching the first and last digits to set of chars
//         var regexFWS = /[fws]/g;
//         var regexLRGR = /[lrgr]/g;

//         //fetching current year and splitting according to first or last digit //2017
//         var currentYear = new Date().getFullYear();
//         var yrToString = currentYear.toString();
//         var yrSplit = yrToString.split("");

//         //fetching last value of the year
//         var yearSlice = yrSplit.slice(3);
//         var lastValueOfYear = yearSlice.join("");

//         //fetching first value of the year 
//         var yearSlice1 = yrSplit.slice(0,1);
//         var firstValueOfYear = yearSlice1.join("");

//         //fetching second last value of the year i.e. 1
//         var yearSlice2 = yrSplit.slice(2,3);
//         var secondLastValueOfYear = yearSlice2.join(""); 

//         if(
//             //case1: starts with f,w,s and ends with 7 
//             ((firstValue.match(regexFWS)) && (lastValue.match(lastValueOfYear))) ||

//             //case2: starts with 1 and ends with l,r,g,r 
//               ((firstValue.match(secondLastValueOfYear)) && (lastValue.match(regexLRGR))) ||

//             //case3: starts with 1 and ends with f,w,s 
//               ((firstValue.match(secondLastValueOfYear)) && (lastValue.match(regexFWS))) ||

//             //case4: starts with 2 and ends with l,r,g,r 
//               ((firstValue.match(firstValueOfYear)) && (lastValue.match(regexLRGR))) ||

//             //case5: starts with 2 and ends with f,w,s 
//               ((firstValue.match(firstValueOfYear)) && (lastValue.match(regexFWS))) 

//           )
//             return true;   
            
//         else return false;       
//     }



    //splitting format sem+year to sem year
    function splittingSemAndYear(e)
    {
      var data = e;
      var splitData = data.split("");
      var len = splitData.length;

      //check if the element is number and then splice the array and join to return the sem and year
      for(var i=0; i<len;i++)
      {
        if(!isNaN(splitData[i]))
        {
          splitData.splice(i,0,"  ");
          var newData = splitData.join("");
          returnSemAndYearFinal(newData);
          return newData;
          break; 
        }
      }
    }


    //splitting format year+sem to year sem
    function splittingYearAndSem(e)
    {
      var data = e;
      var splitData = data.split("");
      var len = splitData.length;

      //check if the element is number and then splice the array and join to return the sem and year
      for(var i=0; i<len;i++)
      {
        if(isNaN(splitData[i]))
        {
          splitData.splice(i,0,"  ");
          var newData = splitData.join("");
          returnYearAndSemFinal(newData);
          return newData;
          break; 
        }
      }
    }


  

    //check sem is Abb or a word for 2017 f
    function checkSemIsAbbOrWord(e)
    {
      var data = e;
      var splitData = data.split(" ");
      var checkValue = splitData[3];
      if(  
        (checkValue == "fall") || (checkValue == "f") ||
        (checkValue == "winter") || (checkValue == "w") ||
        (checkValue == "spring") || (checkValue == "s") ||
        (checkValue == "summer") || (checkValue == "su") 
        )
        return true;
        else return false;
    }

    //for 2017f
    function checkSemIsAbbOrWord1(e)
    {
      var data = e;
      var splitData = data.split(" ");
      var checkValue = splitData[2];
      if(  
        (checkValue == "fall") || (checkValue == "f") ||
        (checkValue == "winter") || (checkValue == "w") ||
        (checkValue == "spring") || (checkValue == "s") ||
        (checkValue == "summer") || (checkValue == "su") 
        )
        return true;
        else return false;
    }

    //for f17 or f2017 fall2017 fall17
    function checkSemIsAbbOrWord2(e)
    {
      var data = e;
      var splitData = data.split(" ");
      var checkValue = splitData[0];
      if(  
        (checkValue == "fall") || (checkValue == "f") ||
        (checkValue == "winter") || (checkValue == "w") ||
        (checkValue == "spring") || (checkValue == "s") ||
        (checkValue == "summer") || (checkValue == "su") 
        )
        return true;
        else return false;
    }



    //check if current year is in two or four digit
    function currentYearInFourDigit()
    {
      var currentYear = new Date().getFullYear();
      var yearToString = currentYear.toString();
      return yearToString;
    }

    function currentYearInTwoDigit()
    {
      var currentYear = currentYearInFourDigit();
      var splittedYear = currentYear.split("");
      var slicedYear = splittedYear.slice(2,4);
      var yearTwoDigit = slicedYear.join("");
      return yearTwoDigit;
    }




    //format checking f 2017, f  2017
//     function checkYearForSemPlusYear(e)
//     {
//       //console.log("into sem plus year");
//       var data = e;
//       var splitAgain = data.split(" ");
//       var year = splitAgain[2];
//       var year1 = splitAgain[3];
//       var currentYear = currentYearInFourDigit();
//       var yearTwoDigit = currentYearInTwoDigit();

//       if(year == currentYear || year == yearTwoDigit || year1 == currentYear || year1 == yearTwoDigit)
//          return true;
//         else return false;
//     }

    //format 2017f, 17f, ....
//     function checkYearForYearPlusSem(e)
//     {
//       var data = e;
//       var splitAgain = data.split(" ");
//       var year = splitAgain[0];
//       var currentYear = currentYearInFourDigit();
//       var yearTwoDigit = currentYearInTwoDigit();

//       if(year == currentYear || year == yearTwoDigit)
//          return true;
//         else return false;
//     }



    //check if sem+year or year+sem starts with year or sem
    function checkSemPlusYearStartWithYear(e)
    {
      var data = e;
      var firstValue = data[0];
      if(!firstValue.match("[a-zA-Z]+"))
         return true;
        else return false;
    }

    //check if sem+year or year+sem starts with year or sem
    function checkSemPlusYearStartWithSem(e)
    {
      var data = e;
      var firstValue = data[0];
      if(firstValue.match("[a-zA-Z]+"))
         return true;
        else return false;
    }


    //return sem+year for cs111 f 2017    CS2017 Fall   cs 111 f 2017
    //  cs 111  f 2017     cs 111  f2017      cs111  f 2017
    function returnSemAndYear(e)
    {
      var data = e;
      var splitArray = data.split(" ");

        if(splitArray.length == 3)
        {
          if((splitArray[2].match("[a-zA-Z]+")) && (splitArray[2].match("[0-9]+")))
          {
            var semAndYear = splitArray[2];
            return semAndYear;
          }
          else
          {
            var second = splitArray[1];
            var third = splitArray[2];
            var semAndYear  = second + third;
            return semAndYear;
          }
          
        }
        
        //for cs111  f 2017
        else if(splitArray.length > 3)
        {
          var third = splitArray[2];
          var fourth = splitArray[3];
          var semAndYear  = third + fourth;
          return semAndYear;
        }
        
        else 
        {
          var semAndYear = splitArray[1];
          return semAndYear;
        }
      
    }




    /*
      input validation for dept and course number
    */

    //testing boundary values for dept and course no
    function testingBoundaryValuesForDeptAndCourse(e)
    {
      var data = e;
      var dataLen = data.length;
      var firstValue = data.charAt(0);
      var lastValue = data.charAt(dataLen-1);

      if( (firstValue.match("[a-zA-Z]+")) && (lastValue.match("[0-9]+")) )
         return true;
        else return false;
    }

    //splitting dept and course number to check if dept is alphabet and course number is numeric
    function splittingDeptAndCourse(e)
    {
          var data = e;
          var splitData = data.split("");
          var len = splitData.length;

          //check if the element is number and then splice the array and join to return dept and course number
          for(var i=0; i<len;i++)
          {
            if(!isNaN(splitData[i]))
            {
              splitData.splice(i,0,"  ");
              var newData = splitData.join("");
              returnDeptAndCourseNoFinal(newData);
              return newData;
              break; 
            }
          } 
    }


    //check if dept is one or more characters,
    function checkDeptGreaterOrEqualToOne(e)
    {
      var dept = e;
      var deptLength = dept.length;

      if(deptLength>=1)
        return true;
      else return false;
    }


    //check if course number is one or more characters.
    function checkCourseNoGreaterOrEqualToOne(e)
    {
      var courseNo = e;
      var courseNoLength = courseNo.length;

      if(courseNoLength>=1)
        return true;
      else return false;
    }
 
    //return dept+course   for cs 111  f 2017     cs 111  f2017      cs111  f 2017
    function returnDeptAndCourse(e)
    {
      var data = e;
          var splitArray = data.split(" ");

            if(splitArray.length == 3)
            {
              if((splitArray[0].match("[a-zA-Z]+")) && (splitArray[0].match("[0-9]+")))
              {
                var deptAndCourse = splitArray[0];          
                return deptAndCourse;  
              }
              
              else 
              {
                var first = splitArray[0]; 
                var second = splitArray[1];
                var deptAndCourse = first + second;
                return deptAndCourse;
              }
            }
                          
            
            else if((splitArray.length) > 3)
            {
              var first = splitArray[0];
              var second = splitArray[1];
              var deptAndCourse  = first + second;
              return deptAndCourse;
            }
            
            else
            {
              var deptAndCourse = splitArray[0];
              return deptAndCourse;
            }
      
    }
        
    
    //function to fetch dept from splitted deptAndCourse
    function fetchingDept(e)
    {
      var data = e;
      var splitData = data.split(" ");
      var dept = splitData[0];
      return dept;
    }

        
    //function to fetch courseNo from splitted deptAndCourse //cs  111
    function fetchingCourseNo(e)
    {
      var data = e;
      var splitData = data.split(" ");
      var courseNo = splitData[2];
      return courseNo;
    }
        
    
    function fetchingCourseNo1(e)
    {
      var data = e;
      var splitData = data.split(" ");
      var courseNo = splitData[3];
      return courseNo;
    }



    /*
      functions to return value of Department, Course Number, Semester and Year if the input validation is Success!
    
    */


    function returnDeptAndCourseNoFinal(e)
    {
      var data = e;
      var splitDataAgain = data.split("  ");
      departmentName = splitDataAgain[0];
      courseNumber = splitDataAgain[1];
      //console.log(departmentName);
      //console.log(courseNumber);
    }

    function returnSemAndYearFinal(e)
    {
      var data = e;
      var splitDataAgain = data.split("  ");
      semester = splitDataAgain[0];
      yearFinal = splitDataAgain[1];
      //console.log(semester);
      //console.log(yearFinal);
    }

    function returnYearAndSemFinal(e)
    {
      var data = e;
      var splitDataAgain = data.split("  ");
      semester = splitDataAgain[1];
      yearFinal = splitDataAgain[0];
      //console.log(semester);
      //console.log(yearFinal);
    }


    //function to validate year
    function validateYear(e)
    {
      var year = e;
      if(year == null || year == "" || year === undefined)
        return false;
      else
        {
          var yearLen = year.toString().length;
            if(yearLen == 4)
              {
                if(isNaN(year))
                  return false;
                else
                  {
                    var currentYear = new Date().getFullYear();
                      if((year >= 1776) && (year <= currentYear))
                        return true;
                      else return false;
                  }
              }

            else if(yearLen == 2)
              {
                if(isNaN(year))
                  return false;
                else
                  {
                      if((year >= 10) && (year <= 99))
                        return true;
                      else return false;
                  }
              }

            else return false;
        }
    }








