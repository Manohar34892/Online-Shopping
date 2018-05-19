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
	var products = [

	[ '1', '2', '3', '4' ], [ '1', '2', '3', '4' ], [ '1', '2', '3', '4' ],

	[ '1', '2', '3', '4' ] ];

	var $table = $('#productListTable');

	// execute the below code only where we have this table
	if ($table.length) {
		// console.log('Inside the table!');

		var jsonUrl = '';
		if (window.categoryId == '') {
			jsonUrl = window.contextRoot + '/json/data/all/products';
		} else {
			jsonUrl = window.contextRoot + '/json/data/category/'
					+ window.categoryId + '/products';
		}

		$table.DataTable({

			lengthMenu : [ [ 3, 5, 10, -1 ],
					[ '3 Records', '5 Records', '10 Records', 'ALL' ] ],
			pageLength : 5,
			ajax : {
				url : jsonUrl,
				dataSrc : ''
			},
			columns : [

			{
				data : 'name'
			}, {
				data : 'brand'
			}, {
				data : 'unitprice'
			}, {
				data : 'quantity'
			}

			]
		});
	}
});

// jQuery dataTable

