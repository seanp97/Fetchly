# Fetchly
JavaScript library to fetch JSON data easily

  const api = new Fetchly('https://jsonplaceholder.typicode.com');
  
  api.get('/todos')
      .then(data => console.log(data))
      .catch(error => console.error(error));
  
  api.post('/todos', {  })
      .then(data => console.log(data))
      .catch(error => console.error(error));

  Incldes GET, POST, DELETE, PUT, PATCH
