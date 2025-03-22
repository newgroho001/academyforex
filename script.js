document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const newsContainer = document.getElementById("news-container");

    // Toggle menu dropdown
    menuToggle.addEventListener("click", function() {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function(event) {
        if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });

    // Fetch berita dari Investing.com
    fetch("https://api.allorigins.win/get?url=https://www.investing.com/rss/news_25.rss")
    .then(response => response.json())
    .then(data => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(data.contents, "application/xml");
        let items = xml.querySelectorAll("item");

        let newsHTML = "";
        items.forEach((item, index) => {
            if (index < 5) { // Menampilkan 5 berita terbaru
                let title = item.querySelector("title").textContent;
                let link = item.querySelector("link").textContent;
                let description = item.querySelector("description").textContent;

                newsHTML += `
                    <div class="news-item">
                        <h3><a href="${link}" target="_blank">${title}</a></h3>
                        <p>${description}</p>
                    </div>
                    <hr>
                `;
            }
        });

        newsContainer.innerHTML = newsHTML;
    })
    .catch(error => {
        newsContainer.innerHTML = "<p>Gagal memuat berita.</p>";
        console.error("Error fetching news:", error);
    });
});
