    // Sample video data (replace with your actual data)
    const videos = [
        {
            category: 'spring-core',
            title: 'Day 1',
            url: 'https://drive.google.com/file/d/1PssbmVHwMvGfM1lO1PmtZcpVBfEM6zxW/preview',
            summary: 'Summary for Day 1',
            imageUrl: 'https://example.com/day1-image.jpg',
            message: 'Welcome to Day 1! Explore the fundamentals of Spring Core.',
            timeout: 10000 // 10 seconds
        },
        {
            category: 'spring-core',
            title: 'Day 2',
            url: 'https://drive.google.com/file/d/1RXjXPim8XjistXpyZmhAUTLNQ_Se66mi/preview',
            summary: 'Summary for Day 2',
            imageUrl: 'https://example.com/day2-image.jpg',
            message: 'Welcome to Day 2! Dive deeper into Spring Core concepts.',
            timeout: 10000 // 10 seconds
        },
        // Add more videos as needed
    ];

    // Function to update video player with selected video
    function updateVideoPlayer(index) {
        const video = videos[index];
        document.getElementById('videoPlayer').src = video.url;
    }

    // Function to show image alert for 15 seconds
    function showImageAlert(imageUrl, message, timeout) {
        const alertContent = `<div class="alert-content">
                                <img src="${imageUrl}" class="img-fluid" alt="Image Alert">
                                <p class="mt-2">${message}</p>
                              </div>`;
        
        const alert = `<div class="alert alert-primary" role="alert">${alertContent}</div>`;
        
        // Append the alert directly to the body element
        document.body.innerHTML += alert;

        // Set a timeout to remove the alert after the specified duration
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, timeout);
    }

    // Function to show alert for opening site in Google Chrome
    function showChromeAlert() {
        alert('Open this site with Google Chrome!');
    }

    // Function to show alert when playlist video is clicked
    function showPlaylistAlert(videoTitle) {
        alert(`Now playing: ${videoTitle}`);
    }

    // Function to show initial alert on page load
    window.addEventListener('load', () => {
        // Customize the initial alert for page load
        const imageUrl = 'https://example.com/welcome-image.jpg';
        const message = 'Welcome to Coder Video Player! Enjoy your coding journey.';
        const timeout = 15000; // 15 seconds

        showImageAlert(imageUrl, message, timeout);
    });

    // Populate video list based on selected category
    function populateVideoList(category) {
        const videoList = document.getElementById('videoList');
        videoList.innerHTML = '';

        videos.filter(video => video.category === category).forEach((video, index) => {
            const listItem = document.createElement('a');
            listItem.href = '#';
            listItem.classList.add('list-group-item', 'list-group-item-action');
            listItem.innerHTML = `<strong>${video.title}</strong><br>${video.summary}`;

            // Click event to update video player on selection and show alerts
            listItem.addEventListener('click', () => {
                updateVideoPlayer(index);
                // Display the image alert
                showImageAlert(video.imageUrl, video.message, video.timeout);
                // Show the Chrome alert
                showChromeAlert();
                // Show playlist alert
                showPlaylistAlert(video.title);
            });

            videoList.appendChild(listItem);
        });

        // Display the first video by default
        if (videos.length > 0) {
            updateVideoPlayer(0);
        }
    }

    // Event listener for category dropdown change
    document.getElementById('categoryDropdown').addEventListener('change', function () {
        const selectedCategory = this.value;
        populateVideoList(selectedCategory);
    });

    // Initialize the video list with the default category
    populateVideoList(document.getElementById('categoryDropdown').value);