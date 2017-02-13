/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.secret.controller.secret;

import com.secret.service.secret.SaveSecret;
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
public class CreateSecret {
    
    @RequestMapping(value = "WebPages/createPost", method = RequestMethod.GET)
    public ModelAndView registerUser(@RequestParam("postTitle") String postTitle, @RequestParam("postContent") String postContent, HttpServletRequest request, HttpServletResponse response) throws SQLException
    {
        
        
    ModelAndView mv1 = new ModelAndView();
   
    
    SaveSecret rg = new SaveSecret();
    
        if(rg.save(postTitle, postContent))
        {
            mv1.setViewName("finish");
        }

        else
        {
            mv1.setViewName("failure");
        }

        return mv1;
    }
        
        
    
              
    
}

