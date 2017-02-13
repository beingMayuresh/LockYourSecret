/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.secret.service.user;

import com.mysql.jdbc.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Mayuresh
 */

public class VerifyUser {
    
    public boolean verfifyUser(String uName, String pass){
        
        String url = "jdbc:mysql://localhost/login";
        String user = "root";
        String password = "";
        
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection conn = (Connection) DriverManager.getConnection(url,user,password);
            String sql="select * from user where uname=? and password=?";  
            PreparedStatement pst = conn.prepareStatement(sql); 
            pst.setString(1, uName);
            pst.setString(2, pass);
            ResultSet rs = pst.executeQuery();
            if(rs.next()){
            return true;
            }      
        } catch (ClassNotFoundException | SQLException ex) {
            Logger.getLogger(VerifyUser.class.getName()).log(Level.SEVERE, null, ex);
            
        }
        return false;
    }
    
}
