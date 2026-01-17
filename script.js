function createTable() {
    //Write your code here
  const rn = prompt("Enter number of rows ");
	const cn = prompt("Enter number of columns");

	const rows = Number(rn);
	const column = Number(cn);

	if(isNaN(rows) || isNaN(column) || rows<=0 || column<=0){
		alert("Please enter a valid rows and column number");
		return;
	}

	const table = document.getElementById("myTable");
	table.innerHTML = " ";

	for(let i =0;i<rn;i++){
		 const tr = document.createElement("tr");
	for(let j=0;j<cn;j++){
		const td = document.createElement("td");

		td.textContent = `Row-${i} Column-${j}`;
		tr.appenChild(td);
	}
	table.appendChild(tr);
	}
	
}