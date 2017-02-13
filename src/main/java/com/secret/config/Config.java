/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.secret.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

/**
 *
 * @author Mayuresh
 */
@Configuration
@ComponentScan({ "com.secret.config" , "com.secret.controller.secret" , "com.secret.controller.user", "com.secret.service.user","com.secret.service.secret" })
public class Config {
    
    @Bean
    public InternalResourceViewResolver viewResolver(){
        
        InternalResourceViewResolver vr = new InternalResourceViewResolver();
        vr.setPrefix("/WebPages/");
        vr.setSuffix(".jsp");
        return vr;
    
    }   
}
