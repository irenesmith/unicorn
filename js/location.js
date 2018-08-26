class Location {
  constructor(title, description, exits) {
    this.title = title;
    this.description = description;
    this.exits = exits;
  }

  GetTitle() {
    return this.title;
  }

  GetDescription() {
    return this.description;
  }
}
