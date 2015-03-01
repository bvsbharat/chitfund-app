$(function(){$(".Data").hide();})

function Cal() {

	var amount= parseInt($("#day").val()||0);
	var goneFor=parseInt($("#goneFor").val()||0);

	if (amount==100000)
	{
		
		var discount=(goneFor-3000)/20;
		var result=parseInt(5000-((goneFor-3000)/20));
		

		$(".Data").slideDown(1000);
		$(".Data").html("<table><tr><td><h3>Result:<span style='color:rgb(239, 95, 6);'> 1,00,000 </span></h3></td><td></td><td> <h4>Bid: <span style='color:rgb(239, 95, 6);'>"+goneFor +"</span></h4></td></tr></table> <center><p>"+"5,000"+"</p><p>-"+discount +"</p>------------------<br/><p>Rs: "+result+"</p></center><br/>");
		
	}
	 if (amount==50000)
	{
		

		var discount=(goneFor-1500)/20;
		var result=parseInt(2500-((goneFor-1500)/20));
		$(".Data").slideDown(1000);
		$(".Data").html("<table><tr><td><h3>Result:<span style='color:rgb(239, 95, 6);'> 50,000 </span></h3></td><td></td><td> <h4>Bid: <span style='color:rgb(239, 95, 6);'>"+goneFor +"</span></h4></td></tr></table> <center><p>"+"2,500"+"</p><p>-"+discount +"</p>------------------<br/><p>Rs: "+result+"</p></center><br/>");
		

	}

}

function Clear() {

$("#goneFor").val('');

$(".Data").slideUp(1000);
}
 function onLoad()
            {
                  document.addEventListener("deviceready", onDeviceReady, true);
            }

function exitFromApp()
  {

    window.navigator.app.exitApp();
  }
