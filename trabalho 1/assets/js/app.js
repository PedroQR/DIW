document.addEventListener("DOMContentLoaded", function() {
    fetch('data/db.json')
        .then(response => response.json())
        .then(data => populateCarousel(data))
        .catch(error => console.error('Error fetching JSON:', error));
    
    document.getElementById('prevBtn').addEventListener('click', function() {
        $('#profileCarousel').carousel('prev');
    });

    document.getElementById('nextBtn').addEventListener('click', function() {
        $('#profileCarousel').carousel('next');
    });
});

function populateCarousel(data) {
    const carouselInner = document.getElementById('carousel-inner');
    carouselInner.innerHTML = ''; // Clear any existing items
    data.forEach((profile, index) => {
        const isActive = index === 0 ? 'active' : '';
        const carouselItem = `
            <div class="carousel-item ${isActive}">
                <img src="${profile.avatar_url}" alt="${profile.login}'s avatar" width="150" height="150" />
                <div class="info"><strong>Username:</strong> ${profile.login}</div>
                <div class="info"><strong>Bio:</strong> ${profile.bio}</div>
                <div class="info"><strong>Followers:</strong> ${profile.followers}</div>
                <div class="info"><strong>Following:</strong> ${profile.following}</div>
            </div>
        `;
        carouselInner.innerHTML += carouselItem;
    });
}