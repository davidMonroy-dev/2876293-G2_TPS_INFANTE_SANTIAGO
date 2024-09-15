document.addEventListener('DOMContentLoaded', () => {

    const userForm = document.getElementById('userForm');
    
    const userList = document.getElementById('userList'); 

    fetch('http://localhost:3000/api/users')
    .then(response => response.json())
    .then(users => {
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);  
        });
    })
    .catch(error => console.error('Error fetching users:', error));
});

  // Agregar nuevo usuario

useForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    })
    .then(response => response.json())
    .then(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name} - ${user.email}`;
        userList.appendChild(li);
        useForm.reset(); // Asegúrate de que esta es la referencia correcta al formulario
    });
});

        

    
        





  
  