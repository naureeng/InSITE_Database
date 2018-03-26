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
      "name": "0003",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0004",
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
      "name": "0016",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0020",
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
      "name": "0039",
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
      "name": "0043",
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
      "name": "0051",
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
      "name": "0054",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0055",
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
      "name": "0061",
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


  ];



	});
