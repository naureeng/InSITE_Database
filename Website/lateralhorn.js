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
      "name": "0006",
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
      "name": "0022",
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
      "name": "0046",
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
      "name": "0080",
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
      "name": "0093",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0101",
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
      "name": "0121",
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
      "name": "0160",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0167",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0186",
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
      "name": "0201",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0203",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0204",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0205",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0211",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0214",
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
      "name": "0257",
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
      "name": "0290",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0292",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0303",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0320",
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
      "name": "0347",
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
      "name": "0366",
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
      "name": "0497",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0499",
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
      "name": "0512",
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
      "name": "0515",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
			"name": "0516",
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
			"name": "0535",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0536",
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
			"name": "0555",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0562",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0571",
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
			"name": "0580",
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
			"name": "0587",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0589",
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
			"name": "0607",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0609",
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
			"name": "0615",
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
			"name": "0617",
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
			"name": "0627",
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
			"name": "0629",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0630",
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
			"name": "0649",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0651",
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
			"name": "0655",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0656",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0658",
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
			"name": "0677",
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
			"name": "0685",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0688",
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
			"name": "0710",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0712",
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
			"name": "0729",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0734",
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
			"name": "0750",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0751",
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
			"name": "0791",
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
			"name": "0828",
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
			"name": "0873",
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
			"name": "0889",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0892",
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
			"name": "0911",
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
			"name": "0922",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0925",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0927",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0930",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0935",
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
			"name": "0955",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0956",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0957",
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
			"name": "0966",
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
			"name": "0973",
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
			"name": "0981",
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
			"name": "1011",
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
			"name": "1014",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "1015",
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
			"name": "1029",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "1030",
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
			"name": "1036",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "1037",
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
