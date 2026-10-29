function login(){
    const un = document.querySelectorById("userName").value.trim();
    const ps = document.querySelectorById("password").value;

    console.log(un, ps);
}

const loginForm = document.querySelectorById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
});
