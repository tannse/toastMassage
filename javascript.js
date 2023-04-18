function toast({ title = "", message = "", type = "", duration = 3000 }) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");
        toast.classList.add("toast", `toast--${type}`);
        const icons = {
            success: "fas fa-check-circle",
            info: "fas fa-info-circle",
            warning: "fas fa-exclamation-circle",
            error: "fas fa-exclamation-circle",
        };
        const removeToastAuto = setTimeout(function () {
            main.removeChild(toast);
            clearTimeout(removeToastAuto);
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
toast({
    title: "Thành công",
    message: "Bạn đã đăng ký thành công tài khoản tại F8.",
    type: "error",
    duration: 3000,
});
