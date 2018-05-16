$(function() {

	switch (menu) {
	case 'About':
		$('#about').addClass('active');
		break;

	case 'Contact':
		$('#contact').addClass('active');
		break;
	case 'Products':
		$('#products').addClass('active');
		break;

	default:
		if (menu == 'Home')
			break;
		$('#listofproducts').addClass('active');
		$('#a_' + menu).addClass('active')
		break;
	}
	
	
	var $table = $('#listofproducts');
	var products =[
		
		['1','2','3','4'],
		['1','2','3','4'],
		['1','2','3','4'],
		['1','2','3','4']
	];

	if ($table.length) {
		/*console.log('Insisge the table');

		$table.DataTable({data:products});*/
		
		var jsonUrl = '';

		if (window.categoryID  == '') {
			jsonUrl = window.contextRoot+'/json/data/all/products' ;

		} else {
			jsonUrl = window.contextRoot+'/json/data/category/'+window.categoryID+'/products';
		}

		$table.DataTable({
			lengthMenu : [ [ 3, 5, 10, -1 ],
					[ '3 Records', '5 Records', '10 Records', 'ALL' ] ],
			pagelength : 5,
			
			ajax: {
				url : jsonUrl,
				dataSrc : ''
			},
			columns : [

			{
				data : 'name'
			}, {
				data : 'brand'
			}, 
			{
				data : 'unitprice'
			},
			{
				data : 'quantity'
			}

			]
		});
	}
});

// jQuery dataTable

