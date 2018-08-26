var map = [];
var mapLocation = 1;
var playerInput = '';
var playerMoves = 0;
var playing;

$(document).ready(function() {
  initMap();
  showLocation(mapLocation);
  playerMoves++;
  playing = true;
});

$('#cmdEnterBtn').click(function() {
  playerInput = $('#cmdInput').val();
  let oldLocation = mapLocation;
  let msg = '';

  // Check the user input for commands.
  switch(playerInput.toLowerCase()) {
    case 'look':
      showLocation(mapLocation);
      break;
    case 'q':
    case 'quit':
      msg = "It took " + playerMoves.toString() + " to get this far.";
      msg = "<p>Thanks for playing! See you again sometime?</p>";
      playing = false;
      break;
    case 'n':
    case 'north':
      if(map[mapLocation].exits.n > 0) {
        // Go north
        mapLocation = map[mapLocation].exits.n;
        msg = "<p>You move <strong>North</strong>.</p>";
      } else {
        msg = "<p>You can't go that way!</p>";
      }
      break;
    case 's':
    case 'south':
      if(map[mapLocation].exits.s > 0) {
        mapLocation = map[mapLocation].exits.s;
        msg = "<p>You move <strong>South</strong>.</p>";
      } else {
        msg = "<p>You can't go that way!</p>";
      }
      break;
      case 'e':
      case 'east':
        if(map[mapLocation].exits.e > 0) {
          mapLocation = map[mapLocation].exits.e;
          msg = "<p>You move <strong>East</strong>.</p>";
        } else {
          msg = "<p>You can't go that way!</p>";
        }
        break;
        case 'w':
        case 'west':
          if(map[mapLocation].exits.w > 0) {
            mapLocation = map[mapLocation].exits.w;
            msg = "<p>You move <strong>West</strong>.</p>";
          } else {
            msg = "<p>You can't go that way!</p>";
          }
          break;
        default:
          msg = "<p>I don't understand that.</p>";
        }

  $('#output').append(msg);
  if(mapLocation != oldLocation) {
    showLocation(mapLocation);
  }
  $('#output').animate({scrollTop: $('#output').prop("scrollHeight")}, 500);
});

function initMap() {
  map[1] = new Location("Dusty Street",
    "<p>You stand ona dusty street in the center of a small town. To the <strong>West</strong> you see the Golden Unicorn Tavern. The the <strong>North</strong> is the Purple Dragon Inn, and to the <strong>East</strong> is the general store.</p>",
    {"n":3, "s":5, "e": 4, "w": 2});
  map[2] = new Location("Golden Unicorn Tavern",
    "<p>The Golden Unicorn Tavern is clearly the favorite gathering place for this town. The room is crowded.</p>",
    {"n":0, "s":0, "e": 1, "w": 0});
  map[3] = new Location("Purple Dragon Inn",
    "<p>The lobby of this small inn is decorated in a comfortable style. Overstuffed chairs in front of the fireplace invite you to sit down and take a rest. Opposite the entrance is a desk on which sites what is clearly the registration book.<p>",
    {"n":0, "s":1, "e":0, "w":0});
  map[4] = new Location("Monty's General Store",
    "<p>There is lots of 'stuff' here. It is the kind of place that every small town has. You can buy anything from traveling rations to cheap leather armor.</p>",
    {"n":0, "s":0, "e":0, "w":1});
  map[5] = new Location("Road out of town...",
    "<p>You are standing on a road that leads South into the mountain passes.</p>",
    {"n":1, "s":0, "e":0, "w":0});
}

function showLocation() {
  $('#locTitle').text(map[mapLocation].GetTitle());
  $('#output').append(map[mapLocation].GetDescription());
  $('#output').animate({scrollTop: $('#output').prop("scrollHeight")}, 500);
}