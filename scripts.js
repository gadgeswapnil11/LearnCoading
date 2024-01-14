    // Sample video data (replace with your actual data)
    const videos = [
    {
            category: 'spring-core',
            title: 'Day -1 ',
            url: 'https://drive.google.com/file/d/1qP3ajTFI6psWwAWVPtFMf5R7sPqjZ3jR/preview',
            summary: 'Setup & Jar adding in project'
        },
        {
            category: 'spring-core',
            title: 'Day -2',
            url: 'https://drive.google.com/file/d/1R7FjvN6uNVHRsH8A0PZmJJ57YwaoblPM/preview',
            summary: 'Setter Injection'
        },
        {
            category: 'hibernate',
            title: 'Day 2',
            url: 'https://drive.google.com/file/d/1RXjXPim8XjistXpyZmhAUTLNQ_Se66mi/preview',
            summary: 'Hibernate HQL query'
        },
        {
            category: 'hibernate',
            title: 'Day 3',
            url: 'https://drive.google.com/file/d/1adw-zwUm3YX0fh_uF9MwmPa211JYghgn/preview',
            summary: 'Summary for Day 3'
        },
        {
            category: 'hibernate',
            title: 'Day 4',
            url: 'https://drive.google.com/file/d/1tKqKo49H-_jnZkGHK1jNZQsujQPRE5CV/preview',
            summary: 'Summary for Day 4'
        },
        {
            category: 'hibernate',
            title: 'Day 5',
            url: 'https://drive.google.com/file/d/1142Izapk7Wy-wW-SPeG-abK10BzAWZDH/preview',
            summary: 'Summary for Day 5'
        },
        {
            category: 'hibernate',
            title: 'Project Day 1',
            url: 'https://drive.google.com/file/d/1EpYzF3sFAtpl_vDp-TGodJF2HQv4a9uk/preview',
            summary: 'Summary for Project Day 1'
        },
        {
            category: 'hibernate',
            title: 'Project Day 2',
            url: 'https://drive.google.com/file/d/1sBynXh75BOSyrkKaFm5JJ4eKF-1-XrJO/preview',
            summary: 'Summary for Project Day 2'
        },
      
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

    // Function to show initial alert on page load
    window.addEventListener('load', () => {
        // Customize the initial alert for page load
        const imageUrl = '/Images/QRcode.jpg';
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

            // Click event to update video player on selection and show alert
            listItem.addEventListener('click', () => {
                updateVideoPlayer(index);
                // Display the image alert
                showImageAlert(video.imageUrl, video.message, video.timeout);
                // Show the Chrome alert
                showChromeAlert();
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


    function hideImageCard() {
        const imageCard = document.querySelector('.image-card');
        
        // Set a timeout to hide the card after 15 seconds
        setTimeout(() => {
            imageCard.style.display = 'none';
        }, 15000);
    }

    // Call the function to hide the image card on page load
    window.addEventListener('load', hideImageCard);

