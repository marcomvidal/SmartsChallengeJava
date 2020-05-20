import { Picture } from './Picture';
import { Name } from './Name';
import { Contact } from './Contact';

export class Customer {
    _id: string;
    budget: string;
    pictures: Picture[];
    age: number;
    name: Name;
    company: string;
    email: string;
    phone: string;
    address: string;
    about: string;
    registered: string;
    latitude: string;
    longitude: string;
    contactTimeline: Contact[];
    channel: string;

    constructor(
      _id: string,
      budget: string,
      pictures: Picture[],
      age: number,
      name: Name,
      company: string,
      email: string,
      phone: string,
      address: string,
      about: string,
      registered: string,
      latitude: string,
      longitude: string,
      contactTimeline: Contact[],
      channel: string) {
        this._id = _id;
        this.budget = budget;
        this.pictures = pictures;
        this.age = age;
        this.name = name;
        this.company = company;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.about = about;
        this.registered = registered;
        this.latitude = latitude;
        this.longitude = longitude;
        this.contactTimeline = contactTimeline;
        this.channel = channel;
      }
}