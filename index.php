<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Loading</title>
    <style>
        body {
            display: flex;
        }
    </style>
</head>
<body>
<img class="ldsc" style="width:150px;height:150px;position:absolute" src="logo.png">
<div id="loadingText">0%</div>
<script>
    // JavaScript function to animate the percentage text
    let percentage = 0;
    const loadingText = document.getElementById("loadingText");

    // Increase the percentage every 30 milliseconds
    const interval = setInterval(() => {
        // Update the text content to show the current percentage
        loadingText.textContent = `${percentage}%`;

        // Stop the interval when it reaches 100%
        if (percentage >= 100) {
            clearInterval(interval);
            window.location.href="home";
        }

        // Increment percentage
        percentage++;
    }, 30); // Adjust the speed by changing the interval time
</script>
</body>
</html>