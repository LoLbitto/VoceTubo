export function getCookie(name) {
    const cookieData = document.cookie.split("; ").find((dados) => dados.startsWith(name + "="))?.split("=")[1];

    return cookieData;
}
