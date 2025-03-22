document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("pivotForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Mencegah reload halaman
        
        let open = parseFloat(document.getElementById("open").value);
        let high = parseFloat(document.getElementById("high").value);
        let low = parseFloat(document.getElementById("low").value);
        let close = parseFloat(document.getElementById("close").value);

        if (isNaN(open) || isNaN(high) || isNaN(low) || isNaN(close)) {
            alert("Harap masukkan semua nilai dengan benar.");
            return;
        }

        let pivot = (high + low + close) / 3;
        let r1 = (2 * pivot) - low;
        let r2 = pivot + (high - low);
        let r3 = high + 2 * (pivot - low);
        let s1 = (2 * pivot) - high;
        let s2 = pivot - (high - low);
        let s3 = low - 2 * (high - pivot);

        document.getElementById("pivot").textContent = pivot.toFixed(2);
        document.getElementById("r1").textContent = r1.toFixed(2);
        document.getElementById("r2").textContent = r2.toFixed(2);
        document.getElementById("r3").textContent = r3.toFixed(2);
        document.getElementById("s1").textContent = s1.toFixed(2);
        document.getElementById("s2").textContent = s2.toFixed(2);
        document.getElementById("s3").textContent = s3.toFixed(2);
    });
});
