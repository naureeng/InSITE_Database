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
      "name": "0018",
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
      "name": "0058",
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
      "name": "0100",
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
      "name": "0126",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0128",
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
      "name": "0134",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0135",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0142",
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
      "name": "0161",
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
      "name": "0177",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0188",
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
      "name": "0232",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0237",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0244",
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
      "name": "0250",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0259",
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
      "name": "0270",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0272",
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
      "name": "0306",
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
      "name": "0315",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0328",
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
      "name": "0339",
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
      "name": "0352",
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
      "name": "0369",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0372",
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
      "name": "0382",
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
      "name": "0441",
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
      "name": "0450",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0464",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0467",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0470",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0487",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0492",
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
      "name": "0517",
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
      "name": "0530",
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
      "name": "0537",
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
      "name": "0543",
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
      "name": "0551",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0556",
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
      "name": "0588",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0590",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0605",
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
      "name": "0608",
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
      "name": "0616",
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
      "name": "0634",
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
      "name": "0673",
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
      "name": "0680",
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
      "name": "0686",
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
      "name": "0698",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0716",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0721",
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
      "name": "0738",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0744",
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
      "name": "0750",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0754",
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
      "name": "0762",
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
      "name": "0781",
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
      "name": "0788",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0792",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0811",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0816",
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
      "name": "0823",
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
      "name": "0826",
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
      "name": "0843",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0853",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0856",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0866",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0876",
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
      "name": "0886",
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
      "name": "0898",
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
      "name": "0903",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0906",
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
      "name": "0920",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0937",
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
      "name": "0988",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0998",
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
      "name": "1019",
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
      "name": "1027",
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
      "name": "1033",
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
      "name": "1039",
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
      "name": "1045",
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
