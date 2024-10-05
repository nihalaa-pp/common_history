const allPhotos = [
    { location: 'thamarassery', src: 'images/njnj.avif', details: 'Details about Thamarassery Photo 1' },
    { location: 'thamarassery', src: 'images/hthh.avif', details: 'Details about Thamarassery Photo 2' },
    { location: 'mukkam', src: 'images/htht.avif', details: 'Details about Mukkam Photo 1' },
    { location: 'ponoor', src: 'images/jiji.avif', details: 'Details about Ponoor Photo 2' },
    { location: 'kannur', src: 'images/kiki.avif', details: 'Details about Kannur Photo 1' },
    { location: 'kannur', src: 'images/hthh.avif', details: 'Details about Kannur Photo 2' },
    { location: 'kozhikode', src: 'images/kk.jpg', details: 'Details about Kozhikode Photo 1' },
    { location: 'kozhikode', src: 'images/mk.jpg', details: 'Details about Kozhikode Photo 2' },
    { location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 1' },
    { location: 'wayanad', src: 'images/thamarassery.jpg', details: 'Details about Wayanad Photo 2' },
    { location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 1' },
    { location: 'malappuram', src: 'images/thamarassery.jpg', details: 'Details about Malappuram Photo 2' }
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
                <button>SHARE</button>
                <button>GRAB</button>
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
                <button>SHARE</button>
                <button>GRAB</button>
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

// Event listener to close the dropdown when clicking outside of it
window.onclick = function(event) {
    if (!event.target.matches('#timelineBtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        Array.from(dropdowns).forEach(openDropdown => {
            openDropdown.classList.remove('show');
        });
    }
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
                <button>SHARE</button>
                <button>GRAB</button>
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





// Event listener for the timeline arrow movement and dynamic year update
document.addEventListener('DOMContentLoaded', function () {
const timelineArrow = document.getElementById('timeline-arrow');
const timeline = document.querySelector('.timeline-progress');

timeline.addEventListener('mousemove', (e) => {
const timelineRect = timeline.getBoundingClientRect();
const offsetX = e.clientX - timelineRect.left;
const percentage = (offsetX / timelineRect.width) * 100;

// Update the arrow position
timelineArrow.style.left = `${percentage}%`;

// Dynamically update the year value
const year = Math.floor(2007 + ((2024 - 2007) * (percentage / 100)));
timelineArrow.textContent = year;
});
});

// Show all photos when the page loads
window.onload = showAllPhotos;



