window.onload = () => {

    let matrixSize = 0;

    while (matrixSize == 0) {
        let input = window.prompt(`What size is your square matrix?`);
        let inputAsNumber = Number.parseInt(input, 10);

        // Added validation for ensuring numbers aren't greater than 40 because 
        // I don't want website overload.
        if (!Number.isInteger(inputAsNumber)) {
            alert(`Invalid input. Please try again...`);
        } else if (inputAsNumber < 2) {
            alert(`Integers less than 2 are not allowed. Please try again.`);
        } else if (inputAsNumber > 40) {
            alert(`Integers greater than 40 are not allowed. Please try again.`);
        } else {
            matrixSize = inputAsNumber;
        }
    }

    let originalMatrix = document.getElementById(`original-matrix`);

    let table = document.createElement(`table`);
    originalMatrix.appendChild(table);

    let tableBody = document.createElement(`tbody`);
    table.appendChild(tableBody);

    for (let i = 0; i < matrixSize; i++) {
    
        let row = document.createElement(`tr`);
    
        for (let j = 0; j < matrixSize; j++) {

            let value = (i * matrixSize) + (j + 1);
            let cell = document.createElement(`td`);

            // This means it's on the secondary diagonal.
            if ((i + j) == (matrixSize - 1)) {
                cell.classList.add(`highlighted`);
            }
      
            let cellText = document.createTextNode(value);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    }

    let reverseMatrix = document.getElementById(`flipped-matrix`);

    let reverseTable = document.createElement(`table`);
    reverseMatrix.appendChild(reverseTable);

    let reverseTableBody = document.createElement(`tbody`);
    reverseTable.appendChild(reverseTableBody);

    for (let i = 0; i < matrixSize; i++) {
    
        let row = document.createElement(`tr`);
    
        for (let j = 0; j < matrixSize; j++) {

            let value = (i * matrixSize) + (j + 1);
            let reverseValue = (matrixSize * matrixSize) - value + 1;

            let cell = document.createElement(`td`);

            // This means it's on the secondary diagonal.
            if ((i + j) == (matrixSize - 1)) {
                cell.classList.add(`highlighted`);
                let cellText = document.createTextNode(value);
                cell.appendChild(cellText);
            } else {
                let cellText = document.createTextNode(reverseValue);
                cell.appendChild(cellText);
            }
      
            row.appendChild(cell);
        }

        reverseTableBody.appendChild(row);
    }

};

