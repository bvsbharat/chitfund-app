function Cal() {

	var amount= parseInt($("#day").val());
	var goneFor=parseInt($("#goneFor").val());




	
	if (amount==100000)
	{
		
		var discount=(goneFor-3000)/20;
		var result=parseInt(5000-((goneFor-3000)/20));
		

		
		$(".Data").html("<h3>Result</h3><center><p>"+"1,00,000"+"</p><p>-"+discount +"</p>------------------<br/><p>Rs: "+result+"</p></center>");
		
	}
	else if (amount==50000)
	{
		

		var discount=(goneFor-1500)/20;
		var result=parseInt(2500-((goneFor-1500)/20));
		
		$(".Data").html("<h3>Result</h3><center><p>"+"50,000"+"</p><p>-"+discount +"</p>------------------<br/><p>Rs: "+result+"</p></center>");

	}

}

function Clear() {

$("#goneFor").val('');
$(".result").innerhtml("");
	
}
