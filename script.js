// Rehefa kitihana ny bouton S'inscrire
function register() {
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;

    if (phone.trim() === "" || password.trim() === "") {
        alert("Azafady fenoina avokoa ny laharana finday sy ny teny miafina.");
        return;
    }

    // Afeno ny pejy fisoratana anarana
    document.getElementById('form-container').classList.add('hidden');
    // Asehoy ny pejy fandoavam-bola sy ampidirana reference
    document.getElementById('payment-container').classList.remove('hidden');
}

// Rehefa kitihana ny bouton Hanamarina ny fandoavana
function confirmPayment() {
    var reference = document.getElementById('transaction-id').value;

    if (reference.trim() === "") {
        alert("Azafady ampidiro ny laharana Référence / ID azonay amin'ny SMS rehefa avy nandefa ny 1 200 Ar ianao.");
        return;
    }

    alert("Misaotra! Voaray ny Référence-nao: " + reference + ". Eo am-panamarinana ny kaontinao ny ekipa.");
}
