import {Location} from './location.js';

export const map = [];

export function initMap() {
  map[1] = new Location(1, "Dusty Street",
    "<p>You stand on a dusty street in the center of a small town. To the <strong>West</strong> you see the <em>Golden Unicorn Tavern</em>. To the <strong>North</strong> is the <em>Purple Dragon Inn</em>, and to the <strong>East</strong> is <em>Monty's General Store.</em></p>",
    {"n":3, "s":5, "e": 4, "w": 2, "u": 0, "d":0});
  map[2] = new Location(2, "Golden Unicorn Tavern",
    "<p>The Golden Unicorn Tavern is clearly the favorite gathering place for this town. The room is crowded.</p>",
    {"n":0, "s":0, "e": 1, "w": 0, "u": 0, "d":0});
  map[3] = new Location(3, "Purple Dragon Inn",
    "<p>The lobby of this small inn is decorated in a comfortable style. Overstuffed chairs in front of the fireplace invite you to sit down and take a rest. Opposite the entrance is a desk on which sites what is clearly the registration book.<p>",
    {"n":0, "s":1, "e":0, "w":0, "u": 0, "d":0});
  map[4] = new Location(4, "Monty's General Store",
    "<p>There is lots of \"stuff\" here. It is the kind of place that every small town has. You can buy anything from traveling rations to cheap leather armor.</p>",
    {"n":0, "s":0, "e":0, "w":1, "u": 0, "d":0});
  map[5] = new Location(5, "Road out of town...",
    "<p>You are standing on a road that leads South into the mountain passes.</p>",
    {"n":1, "s":0, "e":0, "w":0, "u": 0, "d":0});
  map[6] = new Location(6, "Mountain Pass",
    "<p>This is a narrow mountain pass. I would be very quiet, if I were you. You never know who might be hanging around.</p>",
    {"n":5, "s":0, "e":0, "w":0, "u": 0, "d":0});
}

/* [
  {
    "id":1,
    "title": "Dusty Street",
    "description": "<p>You stand ona dusty street in the center of a small town. To the <strong>West</strong> you see the Golden Unicorn Tavern. The the <strong>North</strong> is the Purple Dragon Inn, and to the <strong>East</strong> is Monty'g General Store.</p>",
    "exits": { "n":3, "s":5, "e": 4, "w": 2 }
  },
  {
    "id":2,
    "title": "Golden Unicorn Tavern",
    "description": "<p>The Golden Unicorn Tavern is clearly the favorite gathering place for this town. The room is crowded.</p>",
    "exits": {"n":0, "s":0, "e": 1, "w": 0}
  },
  { 
    "id":3,
    "title": "Purple Dragon Inn",
    "description": "<p>The lobby of this small inn is decorated in a comfortable style. Overstuffed chairs in front of the fireplace invite you to sit down and take a rest. Opposite the entrance is a desk on which sites what is clearly the registration book.<p>",
    "exits": {"n":0, "s":1, "e":0, "w":0}
  },
  {
    "id":4,
    "title": "Monty's General Store",
    "description": "<p>There is lots of 'stuff' here. It is the kind of place that every small town has. You can buy anything from traveling rations to cheap leather armor.</p>",
    "exits": {"n":0, "s":0, "e":0, "w":1}
  },
  {
    "id":5,
    "title": "Road out of town...",
    "description": "<p>You are standing on a road that leads South into the mountain passes.</p>",
    "exits": {"n":1, "s":0, "e":0, "w":0}
  }
];
 */