import {Location} from './location.js';
import {map} from './map.js';
import {Npc, people} from './npc.js';

const directionWords = ['n', 'north', 's', 'south', 'e', 'east', 'w', 'west'];

export function parseCommand(cmd, curLoc) {
  let msg = '';
  let newLoc = curLoc;

  // Check for movement commands
  // First split the command into separate words
  let words = cmd.toLowerCase().split(/[_\W]+/);
  if(directionWords.includes(words[0])) {
    [msg, newLoc] = move(words[0], curLoc);
  }

  // Check for one-word commands.
  switch(cmd.split(/[_\W]+/)[0].toLowerCase()) {
    case 'go':
      [msg, newLoc] = move(words[1], curLoc);
      break;
    case 'look':
      showLocation(curLoc);
      break;
    case 'examine':
      msg = examine(words);
      break;
    case 'q':
    case 'quit':
      msg = "<p>It took " + playerMoves.toString() + " to get this far.</p>";
      msg += "<p>Thanks for playing! See you again sometime?</p>";
      playing = false;
      break;
  }

  return [msg, newLoc];
}

function move(direction, curLoc) {
  let msg = '';
  let newLoc = curLoc;
  switch(direction) {
    case 'n':
    case 'north':
      if(curLoc.exits.n > 0) {
        // Go north
        newLoc = map[curLoc.exits.n];
        msg = "<p>You move <strong>North</strong>.</p>";
      } else {
        msg = "<p>You can't go that way!</p>";
      }
      break;
    case 's':
    case 'south':
      if(curLoc.exits.s > 0) {
        newLoc = map[curLoc.exits.s];
        msg = "<p>You move <strong>South</strong>.</p>";
      } else {
        msg = "<p>You can't go that way!</p>";
      }
      break;
    case 'e':
    case 'east':
      if(curLoc.exits.e > 0) {
        newLoc = map[curLoc.exits.e];
        msg = "<p>You move <strong>East</strong>.</p>";
      } else {
        msg = "<p>You can't go that way!</p>";
      }
      break;
    case 'w':
    case 'west':
      if(curLoc.exits.w > 0) {
        newLoc = map[curLoc.exits.w];
        msg = "<p>You move <strong>West</strong>.</p>";
      } else {
        msg = "<p>You can't go that way!</p>";
      }
      break;
  }
  return [msg, newLoc];
}

export function showLocation(mapLocation) {
  $('#locTitle').text(mapLocation.GetTitle());
  $('#output').append(mapLocation.GetDescription());
  whoIsHere(mapLocation);
  $('#output').animate({scrollTop: $('#output').prop("scrollHeight")}, 500);
}

function examine(words) {
  return 'I\'m not sure what to make of this.';
}

function whoIsHere(mapLocation) {
  for(let i = 0; i < people.length; i++) {
    if(people[i].location === mapLocation.id) {
      $('#output').append('<p>' + people[i].name + ' is here.</p>');
      if(!people[i].met) {
        $('#output').append(people[i].GetDescription());
        people[i].met = true;
      }
      $('#output').animate({scrollTop: $('#output').prop("scrollHeight")}, 500);
    }
  }
}
