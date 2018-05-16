package com.vision.onlineshopping.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.vision.shoppingbackend.dao.CategoryDAO;
import com.vision.shoppingbackend.dto.Category;

@Controller
public class PageController {

	@Autowired
	private CategoryDAO categoryDao;
	
	@RequestMapping(value= {"/","/index","/home"})
	public ModelAndView index() {
		ModelAndView mv= new ModelAndView("page");
		mv.addObject("title", "Home");
		
		// passing the list of categories
		mv.addObject("categories",categoryDao.listofitem());
		mv.addObject("userClickHome", "true");
		return mv;
	}
	
	
	@RequestMapping("/about")
	public ModelAndView about() {
		ModelAndView mv= new ModelAndView("page");
		mv.addObject("title", "About");
		mv.addObject("userClickAbout", "true");
		return mv;
	}
	
	@RequestMapping("/contact")
	public ModelAndView contact() {
		ModelAndView mv= new ModelAndView("page");
		mv.addObject("title", "Contact");
		mv.addObject("userClickContact", "true");
		return mv;
	}
	
	
	@RequestMapping(value= "show/all/products")
	public ModelAndView showAllProduts() {
		ModelAndView mv= new ModelAndView("page");
		mv.addObject("title", "Products");
		
		// passing the list of categories
		mv.addObject("categories",categoryDao.listofitem());
		mv.addObject("userClickAllProducts", "true");
		return mv;
	}
	
	@RequestMapping(value= "show/category/{id}/products")
	public ModelAndView showProdutsByCategory(@PathVariable int id) {
		ModelAndView mv= new ModelAndView("page");
		
		//Based category we can get
		Category category=null;
		category=categoryDao.get(id);
		
		mv.addObject("title", category.getName());
		
		// passing the list of categories
		mv.addObject("categories",categoryDao.listofitem());
		
		//passing single category
		mv.addObject("category", category);
		mv.addObject("userClickCategoryProducts", "true");
		return mv;
	}
}
