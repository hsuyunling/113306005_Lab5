var num = 0;
var totalMathScore = 0;
var totalEngScore = 0;
var totalScore = 0;
var avg;

button.addEventListener("click", function(){
	num++;
	var mathScore = document.getElementById("mathInput");
	var engScore = document.getElementById("engInput");
	let button = document.getElementById("button");

	mathScore = mathScore.value;
	engScore = engScore.value;
	avg = ((parseFloat(mathScore)+parseFloat(engScore))/2).toFixed(2);

	totalMathScore += parseFloat(mathScore);
	totalEngScore += parseFloat(engScore);
	totalScore += parseFloat(avg);

	document.querySelector("#avg").innerHTML = `
	<tr>
		<th>Average</th>
		<td>${(totalMathScore/num).toFixed(2)}</td>
		<td>${(totalEngScore/num).toFixed(2)}</td>
		<td>${(totalScore/num).toFixed(2)}</td>
	</tr>`;

	add_div(mathScore, engScore);


})

function add_div(mathScore, engScore){
	var newDiv = document.createElement("tr");
	newDiv.innerHTML = `
			<td>${num}</td>
			<td>${mathScore}</td>
			<td>${engScore}</td>
			<td>${avg}</td>`

	document.querySelector("tbody").appendChild(newDiv);


}

