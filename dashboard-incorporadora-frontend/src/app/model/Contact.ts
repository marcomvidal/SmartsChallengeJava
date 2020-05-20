export class Contact {
  id: number;
  broker: string;
  date: string;

  constructor(id: number, broker: string, date: string) {
    this.id = id;
    this.broker = broker;
    this.date = date;
  }
}