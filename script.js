//your JS code here. If required.
// const num1=document.getElementById("n1").value;
// const num2=document.getElementById("n2").value;
// const sum=document.querySelector("#sum");
// const btn=document.querySelector("#sum_btn");

// function calculateSum(num1,num2){
// 	// console.log(typeof num1);
// 	console.log(num1);
// 	let sumValue=num1.value+num2.value;
// 	sum.innerHTML=sumValue;
// }

// btn.addEventListener("click",calculateSum);

function get(){
	const n1=document.getElementById("n1").value;
	const n2=document.getElementById("n2").value;
	const a=parseInt(n1);
	const b=parseInt(n2);
		document.getElementById("Sum").innerText=a+b;
		//document.getElementById("sum").innerText="";
}
const sum=document.getElementById("sum_btn");
sum.addEventListener("click",get);