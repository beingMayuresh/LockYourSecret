/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.secret.controller.user;

import com.secret.service.user.SaveUser;
import java.sql.SQLException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

/**
 *
 * @author Mayuresh
 */

@Controller
public class SignUp {
    
    @RequestMapping(value = "WebPages/signup", method = RequestMethod.POST)
    public ModelAndView registerUser(@RequestParam("uName") String uName, @RequestParam("pass") String pass, HttpServletRequest request, HttpServletResponse response) throws SQLException
    {
        
        
    ModelAndView mv1 = new ModelAndView();
   
    
    SaveUser rg = new SaveUser();
    
        if(rg.register(uName, pass))
        {
            mv1.setViewName("welcome");
            
        }

        else
        {
            mv1.setViewName("failure");
        }

        return mv1;
    }
        
        
    
              
    
}
