function createTable() {
    //Write your code here
  const rn = prompt("Input number of rows");
	const cn = prompt("Input number of columns");

	const rows = Number(rn);
	const columns = Number(cn);

	if(isNaN(rows) || isNaN(columns)){
		return;
	}
	if(rows<=0 || columns<=0){
		alert("Please enter a valid rows and column number");
		return;
	}
	
	const table = document.getElementById("myTable");
	table.innerHTML = "";

	for(let i = 0;i<rows;i++){
		 const text = document.createElement("tr");
	for(let j = 0;j<columns;j++){
		const content = document.createElement("td");

		content.textContent = `Row-${i} Column-${j}`;
		
		text.appendChild(content);
	}
	table.appendChild(text);
	}
}