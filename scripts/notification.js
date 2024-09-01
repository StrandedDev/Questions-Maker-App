
const toasts = document.getElementById('toasts')
const toastTypes = ["notif", "info", "success", "error"]

function createNotification(type = null, msg) {
    const toast = document.createElement("div")
    toast.className = "toast"
    toast.classList.add(type ? type : "notif")

    let icon = "", title = "";
    switch (type) {
        case "success":
            icon = `<i class="fas fa-circle-check"></i>`
            title = "Success"
            toast.style.setProperty("--theme", "var(--success-color)")
            break;

        case "error":
            icon = `<i class="fas fa-circle-xmark"></i>`
            title = "Error"
            toast.style.setProperty("--theme", "var(--error-color)")
            break;
        case "info":
            icon = `<i class="fas fa-circle-info"></i>`
            title = "Info"
            toast.style.setProperty("--theme", "var(--primary-color)")
            break;
        default:
            icon = `<i class="fas fa-circle-dot"></i>`
            title = "Default"
            toast.style.setProperty("--theme", "#929292")
            break;
    }

    toast.innerHTML = `${icon} <p><span>${title}</span>${msg}</p>`;
    toasts.appendChild(toast)

    setTimeout(() => toast.remove(), 5000)
}


// Example
// createNotification('error', 'you broke something')
