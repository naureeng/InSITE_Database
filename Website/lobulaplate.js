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
      "name": "0010",
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
      "name": "0045",
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
      "name": "0064",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
    {
      "name": "0111",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
    {
      "name": "0112",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
    {
      "name": "0118",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
    {
      "name": "0127",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
    {
      "name": "0131",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
    {
      "name": "0132",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
    {
      "name": "0137",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
    {
      "name": "0155",
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
      "name": "0190",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
    {
      "name": "0191",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
    {
      "name": "0194",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
    {
      "name": "0223",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
    {
      "name": "0224",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
    {
      "name": "0225",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
    {
      "name": "0227",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
    {
      "name": "0230",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
    {
      "name": "0232",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
    {
      "name": "0246",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
    {
      "name": "0254",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
    {
      "name": "0257",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
    {
      "name": "0266",
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
      "name": "0276",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
    {
      "name": "0282",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },

  ];


});
