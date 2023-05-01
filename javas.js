const toggleContainers = document.querySelectorAll('.toggle-container');
const toggleButtons = document.querySelectorAll('.toggle-button');
let expandedContainer = null;

toggleButtons.forEach((toggleButton, index) => {
  toggleButton.addEventListener('click', () => {
    const toggleContainer = toggleContainers[index];
    if (toggleContainer !== expandedContainer) {
      if (expandedContainer) {
        expandedContainer.classList.remove('expanded');
      }
      toggleContainer.classList.add('expanded');
      expandedContainer = toggleContainer;
    } else {
      toggleContainer.classList.toggle('expanded');
    }
  });
});



