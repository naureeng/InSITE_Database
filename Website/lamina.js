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
      "name": "0185",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
			"name": "0187",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0221",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0273",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0355",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0356",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0500",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0539",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0564",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0579",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0606",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0622",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0641",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0642",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0652",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0680",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0682",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0707",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0742",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0768",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0822",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0883",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0987",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},

  ];


});
