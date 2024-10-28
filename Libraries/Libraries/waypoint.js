let first = document.querySelector(".first");
let second = document.querySelector(".second");

// Waypoint pour la deuxième section
var waypointSecond = new Waypoint({
  element: second,
  handler: function(direction) {
    if (direction === 'up') {
      alert("I told you!");
    }else if (direction === 'down') {
      alert("Are you sure? Things are wild down there.");    }
  },
  offset: "50%"
});
