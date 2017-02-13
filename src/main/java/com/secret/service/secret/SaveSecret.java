/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.secret.service.secret;

import com.mysql.jdbc.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Mayuresh
 */
public class SaveSecret {
    
    public Boolean save(String postTitle, String postContent){
        
        
        /*
        Please make note of these MySQL credentials again:
  Root User: adminWLGkHL9
  Root Password: pTHUNW3HKexe
URL: https://portfoliomg-mayureshgupta.rhcloud.com/phpmyadmin/
        */
        String url = "jdbc:mysql://localhost/login";
        String user = "root";
        String password = "";
        
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection conn = (Connection) DriverManager.getConnection(url,user,password);
            String sql = "insert into post values(?,?)";  
            PreparedStatement pst = conn.prepareStatement(sql); 
            pst.setString(1, postTitle);
            pst.setString(2, postContent);
            int i = pst.executeUpdate();
            if(i>0)
            {
                System.out.println(i);
                return true;
            }
            else return false;
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(SaveSecret.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
}


