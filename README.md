# MTM6302-Interactive-Gallery-Mallika-Kapoor-041130241
Student Name: Mallika Kapoor; Student ID: 041130241
# Interactive Gallery - Assignment Report

## Description of Work Completed:

For the **Interactive Gallery** assignment, I successfully designed and developed an interactive image gallery as specified in the guidelines. The gallery features a dynamic and visually appealing design that captures the essence of artistic expression in Toronto city. I leveraged my creativity to select a unique color palette that reflects the vibrant yet sophisticated energy of the city, ensuring that the gallery would not only function smoothly but also visually engage users.

### Key Features Implemented:
- **Dynamic Image Loading**: I used JavaScript to dynamically load images from the `images/` folder, which allows for easy updates to the gallery content. By including a variety of images related to artistic and creative themes in Toronto, I was able to showcase the city's culture in an engaging way.
- **Interactive Elements**: Users can click on an image to view a larger version and additional details, providing an immersive and interactive experience. This feature enhances the gallery by allowing users to engage with the images beyond simple static views.
- **Styling and Visual Appeal**: I incorporated a **unique color palette** consisting of **burgundy**, **yellow**, **orange**, and **teak wood smokey color**, creating a warm, inviting atmosphere that highlights the artistic nature of the gallery. The **black or dark background** provides a dramatic contrast, allowing the images and content to stand out. The choice of these colors reflects both creativity and professionalism, making the gallery feel sophisticated yet accessible.
- **Responsive Design**: The gallery adjusts seamlessly to different screen sizes, ensuring that users have an optimal experience on both desktop and mobile devices. I used media queries and **flexbox** to create a flexible and responsive layout.
- **JavaScript Interactivity**: I implemented JavaScript to handle user interactions, such as clicking an image to reveal additional information like the image's title, description, and a larger version. This added layer of interactivity ensures the gallery is not just visually appealing, but also engaging.

Overall, I was able to create a functional, visually dynamic, and engaging image gallery that successfully integrates the **artistic and creative side of Toronto city** with a modern web development approach.

## Challenges Faced:

While working on the assignment, I encountered several challenges that tested both my technical and creative problem-solving skills. Here's an overview of the challenges I faced and how I overcame them:

1. **Image Sizing and Consistency**:
   - **Challenge**: Some of the images I used had different dimensions, making the gallery look inconsistent and misaligned.
   - **Solution**: I used CSS properties like `object-fit: cover;` and set fixed width and height for all images, ensuring they were uniformly sized and aligned. This created a polished and professional look for the gallery.

2. **Dynamic Image Loading**:
   - **Challenge**: Dynamically loading images from the `images/` folder was tricky at first, particularly with file paths and making sure that the gallery updated without breaking.
   - **Solution**: I organized all the images in the `images/` folder and used JavaScript to iterate over an array of image file paths, dynamically adding them to the gallery. This approach ensured easy management of the images and provided flexibility for future updates.

3. **Interactivity Issues**:
   - **Challenge**: Initially, I struggled with getting the modal (larger image view) to function properly when an image was clicked.
   - **Solution**: I added a click event listener to each image element that would toggle the visibility of a modal containing the larger image and description. I also ensured that the modal could be closed by clicking outside the modal or pressing a "Close" button.

4. **Cross-Browser Compatibility**:
   - **Challenge**: Ensuring the gallery looked the same across different browsers presented some difficulties, particularly with CSS properties like `flexbox`.
   - **Solution**: I tested the gallery in various browsers and adjusted the code where necessary. I used browser prefixes for specific properties and added fallback styles for unsupported features to maintain a consistent appearance.

5. **Responsive Layout**:
   - **Challenge**: Making the gallery responsive to various screen sizes was challenging, as the grid layout and image sizing needed to adapt to different devices.
   - **Solution**: I used **media queries** to adjust the number of columns and image size depending on the viewport size, ensuring the gallery looked great on all screen sizes.

6. **Debugging JavaScript**:
   - **Challenge**: Some of the images were not triggering the event listeners correctly, causing issues with opening and closing the modal.
   - **Solution**: I used `console.log()` to debug and found that the issue was related to event listener binding. I refined the way the event listeners were attached to ensure that the images were properly handled.


## Creative Aspect and Unique Color Palette:

As a creative person, I wanted to make sure that the gallery not only functioned well but also embodied my artistic vision. I chose the theme of **Toronto’s artistic and creative side** to align with the city’s diverse culture, vibrant arts scene, and modern sophistication. The **color palette** I used — **burgundy**, **yellow**, **orange**, and **teak wood smokey color** — was carefully selected to evoke warmth, creativity, and a sense of connection to Toronto’s diverse cultural backdrop. The **dark background** enhances the visibility of the images, creating a dramatic effect that makes the vibrant colors pop.

This gallery design reflects my passion for both web development and the arts, and I aimed to present a user-friendly, interactive experience that connects users to the rich artistic culture of Toronto city.

## Conclusion:

Despite facing several challenges throughout the development process, I successfully completed the **Interactive Gallery** project. By combining dynamic image loading with a creative color palette and modern web development techniques, I created an engaging and visually appealing gallery. I am proud of the outcome and look forward to receiving feedback on the project, which will help me further refine my skills in web development and creative design.

