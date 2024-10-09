const allPhotos = [
    { location: 'thamarassery', src: 'images/njnj.avif', details: 'Details about Thamarassery Photo 1', year: 1861 },
    { location: 'thamarassery', src: 'images/hthh.avif', details: 'Details about Thamarassery Photo 2', year: 1875 },
    { location: 'mukkam', src: 'images/htht.avif', details: 'Details about Mukkam Photo 1', year: 1880 },
    { location: 'ponoor', src: 'images/jiji.avif', details: 'Details about Ponoor Photo 2', year: 1900 },
    { location: 'kannur', src: 'images/kiki.avif', details: 'Details about Kannur Photo 1', year: 1861 },
    { location: 'kannur', src: 'images/hthh.avif', details: 'Details about Kannur Photo 2', year: 1910 },
    { location: 'kozhikode', src: 'images/kk.jpg', details: 'Details about Kozhikode Photo 1', year: 1930 },
    { location: 'kozhikode', src: 'images/mk.jpg', details: 'Details about Kozhikode Photo 2', year: 1950 },
    { location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 1', year: 1861 },
    { location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 2', year: 2000 },
    { location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 1', year: 1990 },
    { location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 2', year: 2024 }
];


// Function to toggle the dropdown
function toggleDropdown() {
    document.getElementById("dropdownContent").classList.toggle("show");
}

// Function to display all photos on page load
function showAllPhotos() {
    const gallery = document.getElementById("photoGallery");
    gallery.innerHTML = ''; // Clear previous photos

    // Display all photos
    allPhotos.forEach(photo => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.onclick = function() { showDetails(this); };
        card.innerHTML = `
            <img src="${photo.src}" alt="Photo">
            <div class="photo-details">
                <button onclick="openSharePopup(event, '${photo.location}', '${photo.src}')">SHARE</button>
                <p>${photo.location.toUpperCase()}</p>
            </div>
            <div class="photo-info" style="display: none;">
                <p>${photo.details}</p>
            </div>
        `;
        gallery.appendChild(card);
    });
}

// Function to filter photos by location
function filterPhotos(location) {
    const gallery = document.getElementById("photoGallery");
    gallery.innerHTML = ''; // Clear previous photos

    const filteredPhotos = allPhotos.filter(photo => photo.location === location);
    filteredPhotos.forEach(photo => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.onclick = function() { showDetails(this); };
        card.innerHTML = `
            <img src="${photo.src}" alt="Photo">
            <div class="photo-details">
                <button onclick="openSharePopup(event, '${photo.location}', '${photo.src}')">SHARE</button>
                <p>${location.toUpperCase()}</p>
            </div>
            <div class="photo-info" style="display: none;">
                <p>${photo.details}</p>
            </div>
        `;
        gallery.appendChild(card);
    });
}

// Function to toggle details of a photo card
function showDetails(card) {
    card.classList.toggle("active");
    const photoInfo = card.querySelector('.photo-info');

    // Toggle display of the photo info
    if (card.classList.contains("active")) {
        photoInfo.style.display = 'block'; // Show details
    } else {
        photoInfo.style.display = 'none'; // Hide details
    }
}

// Function to open the share popup
function openSharePopup(event, location, src) {
    event.stopPropagation(); // Prevent the click from triggering card details toggle
    
    // Set photo information in the popup
    const popup = document.getElementById("sharePopup");
    popup.querySelector(".popup-title").textContent = `Share Photo from ${location}`;
    popup.querySelector(".popup-image").src = src;

    // Show the popup
    popup.style.display = "block";
}

// Function to close the share popup
function closeSharePopup() {
    document.getElementById("sharePopup").style.display = "none";
}

// Function to share on social media
function shareOnSocialMedia(platform) {
    const popup = document.getElementById("sharePopup");
    const imgSrc = popup.querySelector(".popup-image").src;
    
    // Handle sharing logic for each platform
    let shareUrl;
    if (platform === 'facebook') {
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imgSrc)}`;
    } else if (platform === 'whatsapp') {
        // WhatsApp sharing link, sharing text with image URL
        const message = `Check out this photo: ${imgSrc}`;
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    } else if (platform === 'twitter') {
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(imgSrc)}`;
    } else if (platform === 'print') {
        window.print(); // Keep this to maintain print functionality
        return; // Exit to avoid opening a share URL for print
    } else {
        // If an unsupported platform is selected, return early
        return;
    }

    // Open the share URL in a new window/tab
    window.open(shareUrl, '_blank');
    closeSharePopup();
}

// Load all photos on page load
document.addEventListener("DOMContentLoaded", showAllPhotos);

// Function to search for photos
function searchPhotos() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const gallery = document.getElementById("photoGallery");
    gallery.innerHTML = ''; // Clear previous photos

    const filteredPhotos = allPhotos.filter(photo => 
        photo.location.toLowerCase().includes(filter) || 
        photo.details.toLowerCase().includes(filter)
    );

    filteredPhotos.forEach(photo => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.onclick = function() { showDetails(this); };
        card.innerHTML = `
            <img src="${photo.src}" alt="Photo">
            <div class="photo-details">
                <button onclick="openSharePopup(event, '${photo.location}', '${photo.src}')">SHARE</button>
                <p>${photo.location.toUpperCase()}</p>
            </div>
            <div class="photo-info" style="display: none;">
                <p>${photo.details}</p>
            </div>
        `;
        gallery.appendChild(card);
    });

    if (filteredPhotos.length === 0) {
        gallery.innerHTML = `<p>No results found for "${input.value}"</p>`;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const timelineArrow = document.getElementById('timeline-arrow');
    const timeline = document.querySelector('.timeline-progress');

    timeline.addEventListener('mousemove', (e) => {
        const timelineRect = timeline.getBoundingClientRect();
        const offsetX = e.clientX - timelineRect.left;
        const percentage = (offsetX / timelineRect.width) * 100;

        // Update the arrow position
        timelineArrow.style.left = `${percentage}%`;

        // Dynamically calculate the year
        const year = Math.floor(1800 + ((2050 - 1800) * (percentage / 100)));
        timelineArrow.textContent = year;

        // Filter photos by the selected year
        const filteredPhotos = allPhotos.filter(photo => photo.year === year);
        displayPhotos(filteredPhotos); // Call a new function to display filtered photos
    });
});

// Show all photos when the page loads
window.onload = showAllPhotos;



function displayPhotos(photos) {
    const gallery = document.getElementById("photoGallery");
    gallery.innerHTML = ''; // Clear previous photos

    photos.forEach(photo => {
        const card = document.createElement('div');
        card.className = 'photo-card';
        card.onclick = function() { showDetails(this); };
        card.innerHTML = `
            <img src="${photo.src}" alt="Photo">
            <div class="photo-details">
                <button onclick="openSharePopup(event, '${photo.location}', '${photo.src}')">SHARE</button>
                <p>${photo.location.toUpperCase()}</p>
            </div>
            <div class="photo-info" style="display: none;">
                <p>${photo.details}</p>
            </div>
        `;
        gallery.appendChild(card);
    });

    if (photos.length === 0) {
        gallery.innerHTML = `<p>No photos available for the selected year ${year}.</p>`;
    }
}
