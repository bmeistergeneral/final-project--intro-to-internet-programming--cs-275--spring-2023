window.onload = () => {

  let matrixSize = 0;

  while (matrixSize == 0) {
    let input = window.prompt("What size is your square matrix?");
    let inputAsNumber = Number.parseInt(input, 10);

    // Added validation for ensuring numbers aren't greater than 40 because I don't want website overload.
    if (!Number.isInteger(inputAsNumber)) {
      alert("Invalid input. Please try again...");
    } else if (inputAsNumber < 2) {
      alert("Integers less than 2 are not allowed. Please try again.");
    } else if (inputAsNumber > 40) {
      alert("Integers greater than 40 are not allowed. Please try again.");
    } else {
      matrixSize = inputAsNumber;
    }
  }

  alert(matrixSize);
};

