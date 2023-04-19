function toast({ title = "", message = "", type = "", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");
        toast.classList.add("toast", `toast--${type}`);
        const delay = (duration / 1000).toFixed(2);
        toast.style.animation = `slideInLeft ease 0.5s, fadeOut linear 1s ${delay}s  forwards`;
        const icons = {
            success: "fas fa-check-circle",
            info: "fas fa-info-circle",
            warning: "fas fa-exclamation-circle",
            error: "fas fa-exclamation-circle",
        };
        toast.onclick = function (e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                clearTimeout(removeToastAuto);
            }
        };
        const removeToastAuto = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);
        const icon = icons[type];
        toast.innerHTML = `
        <div class="toast__icon"> 
        <i class="${icon}"></i>
        </div>
        <div class="toast__title">
        <h3 class="toast__title" >
                ${title}!</h3>
            <p class="toast__msg" >${message}.</p>
        </div>
        <div class="toast__close">
        <i class="fas fa-times"></i>    
        </div>`;
        main.appendChild(toast);
    }
}

function showSuccessToast() {
    toast({
        title: "Success",
        message: "A success Toast ",
        type: "success",
        duration: 3000,
    });
}
function showErrorToast() {
    toast({
        title: "Error",
        message: "A error toast.",
        type: "error",
        duration: 3000,
    });
}
