class StorageService {

    #listOfObjects;

    constructor() {
        this.#listOfObjects = [];
    }

    add(object) {
        if (this.#listOfObjects.findIndex((item) => item.id === object.id) === -1) {
            this.#listOfObjects.push(object);
        }
    }

    getById(id) {
        let item = null;

        if (this.#listOfObjects.findIndex((item) => item.id === id) != -1) {
            for (let object of this.#listOfObjects) {
                if (object.id === id) {
                    item = object;
                    break;
                }
            }
        }

        return item;
    }

    getAll() {
        return this.#listOfObjects;
    }

    deleteById(id) {
        if (this.#listOfObjects.findIndex((item) => item.id === id) != -1) {
            let itemId = this.#listOfObjects.findIndex((item) => item.id === id);
            this.#listOfObjects.splice(itemId, 1);
        }
    }

    updateById(id, object) {
        if (this.#listOfObjects.findIndex((item) => item.id === id) != -1) {
            for (let i = 0; i < this.#listOfObjects.length; i++) {
                if (this.#listOfObjects[i].id === "first") {
                    for (let key in this.#listOfObjects[i]) {
                        if (Object.hasOwnProperty.call(this.#listOfObjects[i], key) && key != "id") {
                            this.#listOfObjects[i][key] = object[key];
                        }
                    }
                    break;
                }
            }
        }
    }

    replaceById(id, object) {
        if (this.#listOfObjects.findIndex((item) => item.id === id) != -1) {
            for (let i = 0; i < this.#listOfObjects.length; i++) {
                if (this.#listOfObjects[i].id === "second") {
                    this.#listOfObjects[i] = object;
                    break;
                }
            }
        }
    }
}

let storage = new StorageService();

storage.add(object = {
    "id" : "first",
    "name": "Alex",
    "surname": "Ustalkov",
    "age": 21
});
storage.add(object = {
    "id" : "second",
    "name": "Dima",
    "surname": "Lapushkin",
    "age": 21
});
storage.add(object = {
    "id" : "second",
    "name": "Dima",
    "surname": "Lapushkin",
    "age": 21
});

console.log(storage.getAll());
console.log("\n");

console.log(storage.getById("first"));
console.log(storage.getById("third"));
console.log("\n");

storage.deleteById("first");
console.log(storage.getAll());
storage.deleteById("first");
console.log("\n");

storage.replaceById("second", object = {
    "id" : "first",
    "name": "Alex",
    "surname": "Ustalkov",
    "age": 21
});
console.log(storage.getAll());
storage.replaceById("sixth", object = {
    "id" : "first",
    "name": "Alex",
    "surname": "Ustalkov",
    "age": 21
});
console.log(storage.getAll());
console.log("\n");

storage.updateById("first", object = {
    "id" : "second",
    "name": "Dima",
    "surname": "Lapushkin",
    "age": 21
});
console.log(storage.getAll());
storage.updateById("third", object = {
    "id" : "second",
    "name": "Dima",
    "surname": "Lapushkin",
    "age": 21
});
storage.updateById("first", object = {
    "id" : "second",
    "name": "Dima",
    "surname": "Lapushkin",
    "age": 21,
    "job" : true
});
console.log(storage.getAll());