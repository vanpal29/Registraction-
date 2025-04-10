const form = document.getElementById('registerForm');
const tableBody = document.querySelector('#usersTable tbody');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;

    await fetch('/api/registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, date_of_birth: dob })
    });

    loadUsers();
    form.reset();
});

async function loadUsers() {
    const res = await fetch('/api/registration');
    const users = await res.json();
    tableBody.innerHTML = '';
    users.forEach(user => {
        const row = `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.date_of_birth}</td>
                <td>
                    <button onclick="deleteUser(${user.id})">Delete</button>
                </td>
            </tr>`;
        tableBody.innerHTML += row;
    });
}

async function deleteUser(id) {
    await fetch(`/api/registration/${id}`, { method: 'DELETE' });
    loadUsers();
}

loadUsers();
