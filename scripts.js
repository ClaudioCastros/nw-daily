document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(checkbox => {
    const saved = localStorage.getItem(checkbox.id);
    if (saved === "true") checkbox.checked = true;
    });
    checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
        localStorage.setItem(checkbox.id, checkbox.checked);
    });
    });
    const resetBtn = document.getElementById("resetChecklist");
    if (resetBtn) {
    resetBtn.addEventListener("click", () => {
        if (confirm("Deseja realmente resetar toda a checklist?")) {
        checkboxes.forEach(cb => {
            cb.checked = false;
            localStorage.removeItem(cb.id);
        });
        }
    });
    }
});