export default class Pony {
    private name: string

    setName(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}