// use setTimeout() to remove maintenance notice after displaying for 5sec
const maintenanceEl = document.getElementById('maintenance-notice');
setTimeout(() => {maintenanceEl.remove()}, 5000);
