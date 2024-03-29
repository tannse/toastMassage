function toast({ title = "", message = "", type = "info", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");
        const icons = {
            success: "fa-solid fa-circle-check",
            error: "fa-solid fa-circle-exclamation",
        };
        const icon = icons[type];
        toast.classList.add("toast", `toast__${type}`);
        toast.onclick = function (e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(removeToastAuto);
            }
        };
        const delay = (duration / 1000).toFixed(2);
        toast.style.animation = `moveleft ease 0.3s linear, fadeOut linear 0.7s ${delay} forwards`;
        const removeToastAuto = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);
        toast.innerHTML = `
        <i class="${icon} toast__icon"></i>
        <div class="toast__body">
        <h3 class="toast__title"> ${title}</h3>
        <p class="toast_message"> ${message}</p>
        </div>
        <i class="fas fa-times toast__close"></i>  
        </div>
        </div>`;
        main.appendChild(toast);
    }
}
function showSuccessToast() {
    toast({
        title: "Success",
        message: "You can access all the files in this folder",
        type: "success",
        duration: 5000,
    });
}
function showErrorToast() {
    toast({
        title: "Error",
        message: "You can't access all the files ",
        type: "error",
        duration: 3000,
    });
}
