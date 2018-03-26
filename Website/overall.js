TestApp = angular.module('TestApp', ['TestApp.controllers','datatables']);

	angular.module('TestApp.controllers', []).controller('testController', function($scope,DTOptionsBuilder, DTColumnBuilder, $compile) {

		$scope.vm = {};
		$scope.vm.dtInstance = {};
		$scope.vm.dtOptions = DTOptionsBuilder.newOptions()
		  .withOption('order', [0, 'asc']);
		  $scope.customer = {
			name: 'Naomi',
			address: '1600 Amphitheatre'
		  };

		 $scope.childInfo = function(user, event){

		var scope = $scope.$new(true);
	      	scope.user  = user;

	    var link = angular.element(event.currentTarget),
          	icon = link.find('.glyphicon'),
          	tr = link.parent().parent(),
          	table = $scope.vm.dtInstance.DataTable,
          	row = table.row(tr);
		//
	      if (row.child.isShown()) {
	        icon.removeClass('glyphicon-minus-sign').addClass('glyphicon-plus-sign');
	        row.child.hide();
	        tr.removeClass('shown');
	      }
	      else {
	        icon.removeClass('glyphicon-plus-sign').addClass('glyphicon-minus-sign');
	        row.child($compile('<div tmpl class="clearfix"></div>')(scope)).show();
	        tr.addClass('shown');
	      }
	}

		$scope.userList = [

		{
			"name": "0001",
			"position": "",
			"office": "62569"
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		];

	});
