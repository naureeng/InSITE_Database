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
      "name": "0009",
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
      "name": "0033",
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
      "name": "0061",
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
      "name": "0077",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0082",
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
      "name": "0116",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0120",
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
      "name": "0134",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0136",
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
      "name": "0161",
      "position": "",
			"office": "",
      "salary": "",
      "start_date": "",
      "extn": ""
    },
		{
      "name": "0168",
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
      "name": "0209",
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
			"name": "0230",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0231",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0236",
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
			"name": "0275",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0279",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0286",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0293",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0309",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0313",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0327",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0329",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0334",
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
			"name": "0351",
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
			"name": "0368",
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
			"name": "0378",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0383",
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
			"name": "0391",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0416",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0417",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0430",
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
			"name": "0454",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0455",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0463",
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
			"name": "0472",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0474",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0477",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0480",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0482",
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
			"name": "0501",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0502",
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
			"name": "0518",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0521",
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
			"name": "0526",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0529",
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
			"name": "0556",
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
			"name": "0563",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0567",
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
			"name": "0589",
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
			"name": "0597",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0604",
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
			"name": "0611",
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
			"name": "0629",
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
			"name": "0634",
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
			"name": "0655",
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
			"name": "0671",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0672",
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
			"name": "0674",
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
			"name": "0689",
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
			"name": "0692",
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
			"name": "0700",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0706",
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
			"name": "0723",
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
			"name": "0732",
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
			"name": "0753",
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
			"name": "0767",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0769",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0770",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0775",
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
			"name": "0791",
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
			"name": "0800",
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
			"name": "0834",
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
			"name": "0837",
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
			"name": "0874",
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
			"name": "0906",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0912",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0914",
			"position": "",
			"office": "",
			"salary": "",
			"start_date": "",
			"extn": ""
		},
		{
			"name": "0940",
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
			"name": "0962",
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
			"name": "0985",
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
			"name": "1030",
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

  ];



	});
