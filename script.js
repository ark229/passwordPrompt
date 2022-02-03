let user = 'pinkbunny1';
let username = prompt('Please provide the username for this site:','');
if (username == user) {
    let pass = 'validuser1';
    password = prompt('Please provide the password for this site:','');
    if (password == pass) {
        alert('Password is correct. Access is granted!')
    } else {
        alert('Password is incorrect. Try Again!');
        window.location = 'index.html';
    }
}
else {
    window.location = 'index.html';
}