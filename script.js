//your JS code here. If required.
document.getElementById("voteForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from reloading

  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value.trim(), 10);

  // Input validation
  if (!name || isNaN(age)) {
    alert("Please enter valid details");
    return;
  }

  // Create a promise that resolves/rejects after 4 seconds
  const checkEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  checkEligibility
    .then(message => alert(message))
    .catch(errorMessage => alert(errorMessage));
});
