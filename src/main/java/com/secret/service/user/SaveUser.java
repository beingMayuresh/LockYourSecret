/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.secret.service.user;

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
public class SaveUser {
    
    public Boolean register(String uName, String pass){
        
        String url = "jdbc:mysql://localhost/login";
        String user = "root";
        String password = "";
        
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection conn = (Connection) DriverManager.getConnection(url,user,password);
            String sql = "insert into user values(?,?)";  
            PreparedStatement pst = conn.prepareStatement(sql); 
            pst.setString(1, uName);
            pst.setString(2, pass);
            int i = pst.executeUpdate();
            if(i>0)
            {
                System.out.println(i);
                return true;
            }
            else return false;
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(SaveUser.class.getName()).log(Level.SEVERE, null, ex);
        }
        return false;
    }
    
}

