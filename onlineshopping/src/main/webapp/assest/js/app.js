$(function(){
	
	switch (menu) {
	case 'About':
		$('#about').addClass('active');
		break;
		
	case 'Contact':
		$('#contact').addClass('active');
		break;
	case 'All Products':
		$('#listofproducts').addClass('active');
		break;

	default:
		if(menu=='Home')break;
		$('#listofproducts').addClass('active');
		$('#a_'+menu).addClass('active')
		break;
	}
});