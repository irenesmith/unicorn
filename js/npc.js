export class Npc {
  constructor(name, level, description, location) {
    this.name = name;
    this.level = level;
    this.description = description;
    this.location = location;
    this.met = false;
  }

  GetName() {
    return this.name;
  }

  GetDescription() {
    return this.description;
  }
}

export var people = [];

export function initPeople() {
  people.push(new Npc('Monty', 10, '<p>Monty is a huge human who is taller than most humans but not quite as tall as a giant. He has a jovial expression and twinkling brown eyes. If this is the Monty your father wrote about, it shouldn\'t be too hard to get your money.</p>', 4));
}