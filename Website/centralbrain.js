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
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0002",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0005",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0006",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0007",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0009",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0010",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0012",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0013",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0014",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0015",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0017",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0018",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0021",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0022",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0026",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0027",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0028",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0030",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0031",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0033",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0034",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0035",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0036",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0037",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0038",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0041",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0042",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0045",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0046",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0047",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0048",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0049",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0052",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0053",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0054",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0056",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0057",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0058",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0059",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0060",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0063",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0064",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0065",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0066",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0067",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0068",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0069",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0072",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0075",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0076",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0077",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0078",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0080",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0081",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0083",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0086",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0087",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0089",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0091",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },


  ];


});
