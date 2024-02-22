export const getMode = () => {
    return localStorage.getItem("mode") || "user";
}