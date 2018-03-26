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
      "name": "0029",
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
      "name": "0053",
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
      "name": "0083",
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
      "name": "0119",
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
      "name": "0172",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0176",
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
      "name": "0198",
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
      "name": "0238",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0239",
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
      "name": "0264",
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
      "name": "0275",
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
		{
      "name": "0287",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0291",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0300",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0302",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0305",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0308",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0330",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0335",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0340",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0342",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0343",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0345",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0350",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0352",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0359",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0364",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0365",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0376",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0377",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0384",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0398",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0410",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0428",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0434",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0437",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0439",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0443",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0444",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0446",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0449",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0450",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0497",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0505",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0506",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0511",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0513",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0519",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0522",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0524",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0526",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0531",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0535",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0538",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0540",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0549",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0573",
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
      "name": "0585",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0597",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0600",
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
      "name": "0607",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0610",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0613",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0618",
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
      "name": "0623",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0628",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0633",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0636",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0637",
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
      "name": "0643",
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
      "name": "0659",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0660",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0663",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0665",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0666",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0671",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0675",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0678",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0681",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0684",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0685",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0686",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0690",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0691",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0694",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0695",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0697",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0698",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0723",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0732",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0738",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0745",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0746",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0750",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0755",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0756",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0766",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0776",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0783",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0784",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0787",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0788",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0798",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0817",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0824",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0828",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0829",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0835",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0843",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0851",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0875",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0886",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0893",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0896",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0899",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0900",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0903",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0909",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0918",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },{
      "name": "0935",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0946",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0949",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0952",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0955",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0962",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0965",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0967",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0968",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0969",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0970",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0972",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "974",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0980",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0982",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0985",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0993",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0994",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "1005",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "1007",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "1010",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "1012",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "1013",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "1016",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "1017",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "1018",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "1020",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "1021",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "1024",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "1025",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "1026",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "1031",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "1032",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "1034",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "1038",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "1041",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "1042",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "1043",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "1046",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },



























































  ];



	});
