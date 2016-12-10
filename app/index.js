var arDrone = require('ar-drone');
var drone = arDrone.createClient();
drone.takeoff();

drone
  .after(1000, function() {
    drone.clockwise(1.0);
  })
  .after(1000, function() {
    drone.stop();
    drone.front(0.5);
  })
  .after(1000, function() {
    drone.stop();
    drone.land();
  })
