export class StorageService {

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