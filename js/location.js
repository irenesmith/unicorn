export class Location {
  constructor(id, title, description, exits) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.exits = exits;
  }

  GetId() {
    return this.id;
  }

  GetTitle() {
    return this.title;
  }

  GetDescription() {
    return this.description;
  }
}
