function isLogged() {
    let token = localStorage.getItem("token");
    if (token) {
        return ((/^ey.*/).test(token))
    }
    return false;
}

export default isLogged;
