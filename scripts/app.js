$(function(){$(".Data").hide();})

function Cal() {

	var amount= parseInt($("#day").val());
	var goneFor=parseInt($("#goneFor").val());




	
	if (amount==100000)
	{
		
		var discount=(goneFor-3000)/20;
		var result=parseInt(5000-((goneFor-3000)/20));
		

		$(".Data").show();
		$(".Data").html("<h3>Result</h3><center><p>"+"1,00,000"+"</p><p>-"+discount +"</p>------------------<br/><p>Rs: "+result+"</p></center>");
		
	}
	 if (amount==50000)
	{
		

		var discount=(goneFor-1500)/20;
		var result=parseInt(2500-((goneFor-1500)/20));
		$(".Data").show();
		$(".Data").html("<h3>Result</h3><center><p>"+"50,000"+"</p><p>-"+discount +"</p>------------------<br/><p>Rs: "+result+"</p></center>");
		

	}

}

function Clear() {

$("#goneFor").val('');

$(".Data").hide();
}
 function onLoad()
            {
                  document.addEventListener("deviceready", onDeviceReady, true);
            }

            function exitFromApp()
             {
                navigator.app.exitApp();
             }
