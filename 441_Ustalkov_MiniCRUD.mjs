import {StorageService} from './StorageService.mjs';

let storage = new StorageService();

const Alex = {
    "id" : "first",
    "name": "Alex",
    "surname": "Ustalkov",
    "age": 21
};
const Dima = {
    "id" : "second",
    "name": "Dima",
    "surname": "Lapushkin",
    "age": 21
};

storage.add(Alex);
storage.add(Dima);
storage.add(Dima);
console.log(storage.getAll());
console.log("\n");

console.log(storage.getById("first"));
console.log(storage.getById("third"));
console.log("\n");

storage.deleteById("first");
console.log(storage.getAll());
storage.deleteById("first");
console.log("\n");

storage.replaceById("second", Alex);
console.log(storage.getAll());
storage.replaceById("sixth", Alex);
console.log(storage.getAll());
console.log("\n");

storage.updateById("first", Dima);
console.log(storage.getAll());
storage.updateById("third", Dima);
console.log(storage.getAll());