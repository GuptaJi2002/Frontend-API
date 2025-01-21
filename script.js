document.getElementById("fetchDataButton").addEventListener("click", fetchData);

function fetchData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1'; 
    fetch(url, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json', 
           
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); 
    })
    .then(data => {
        displayData(data); 
    })
    .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById("dataContainer").innerText = 'Error fetching data.';
    });
}

function displayData(data) {
    const dataContainer = document.getElementById("dataContainer");
    dataContainer.innerHTML = ''; 

    
    const formattedData = JSON.stringify(data, null, 2); 
    dataContainer.innerText = formattedData; 
}
