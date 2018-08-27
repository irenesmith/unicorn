import {Location} from './location.js';
import {parseCommand, showLocation} from './parser.js';
import {map, initMap} from './map.js';
import {introText} from './general.js';
import {Npc, people, initPeople} from './npc.js';

//var map = [];
var mapLocation;
var playerInput = '';
var playerMoves = 0;
var isPlaying = false;

$(document).ready(function() {
  initMap();
  initPeople();
  // Clear out any leftover text
  $('#cmdInput').val('');
  mapLocation = map[1];
  displayMessage(introText);
  showLocation(mapLocation);
  isPlaying = true;
});

$('#cmdEnterBtn').click(function() {
  playerInput = $('#cmdInput').val();

  // If the player just clicked the button
  // without entering anything, return.
  if(playerInput === '') {
    return;
  }

  playerMoves++;
  $('#moves').text(playerMoves.toString());

  let oldLocation = mapLocation;
  let msg = '';

  [msg, mapLocation] = parseCommand(playerInput, mapLocation);

  $('#output').append(msg);
  if((mapLocation.id > 0) && (mapLocation.id != oldLocation.id)) {
    showLocation(mapLocation);
  }
  $('#output').animate({scrollTop: $('#output').prop("scrollHeight")}, 500);
  if(mapLocation.id === 0) {
    mapLocation = oldLocation;
  }
});

function displayMessage(msg) {
  $('#output').append(msg);
  $('#output').animate({scrollTop: $('#output').prop("scrollHeight")}, 500);
}
