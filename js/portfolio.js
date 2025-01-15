document.addEventListener('DOMContentLoaded', function() {
    // Get the item parameter from the URL
    let urlParams = new URLSearchParams(window.location.search);
    let selectedItem = urlParams.get('item');

    // Debugging: Log the selected item
    console.log('Selected item:', selectedItem);

    // Set the selected item in the form
    if (selectedItem) {
      let itemDropdown = document.getElementById('item');
      if (itemDropdown) {
        for (let i = 0; i < itemDropdown.options.length; i++) {
          if (itemDropdown.options[i].value === selectedItem) {
            itemDropdown.options[i].selected = true;
            // Debugging: Log successful selection
            console.log('Item selected successfully.');
            break;
          }
        }
      } else {
        // Debugging: Log if dropdown element is not found
        console.log('Dropdown element not found.');
      }
    }
  });

  // calling video to auto play 
  document.addEventListener('DOMContentLoaded', function() {
  let video = document.getElementById('myvideo');
    video.play();
  });

 // Select the submit button
 const submitButton = document.getElementById('submitButton');

 // Add event listener for submit event
 submitButton.addEventListener('click', function(event) {
     // Prevent the default form submission behavior
     event.preventDefault();
     
     // Display an alert
     alert('Form submitted!');

     // Log to the console
     console.log('Form submitted!');
 });