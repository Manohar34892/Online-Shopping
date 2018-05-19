<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

	<div class="container">
		<div class="row ">
			<!-- Would to diplay the side bar -->
			<div class="col-md-3">

				<%@include file="./shared/sidebar.jsp"%>

			</div>

			<!-- To display all the products  -->
			<div class="row ">

				<div class="col-md-15">

					<!-- Add a breadcrumb -->


					<div class="col-lg-12">

						<c:if test="${userClickAllProduct== true}">


							<script type="text/javascript">
								window.categoryID = '';
							</script>

							<ol class="breadcrumb">

								<li><a href="${contextRoot}/home">Home</a></li>
								<li class="active">All Product</li>

							</ol>
						</c:if>

						<c:if test="${userClickCategoryProduct== true}">


							<script type="text/javascript">
								window.categoryID = '${category.id}';
							</script>

							<ol class="breadcrumb">

								<li><a href="${contextRoot}/home">Home</a></li>
								<li class="active">Category</li>
								<li class="active">${category.name}</li>
							</ol>
						</c:if>
					</div>
				</div>
			
				<div class="row">

					<div class="col-xs-12">

						<table id="productListTable">
							<thead>
								<tr>
									<th>Name</th>
									<th>Brand</th>
									<th>Price</th>
									<th>Quantity</th>

								</tr>
							</thead>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>

</body>
</html>