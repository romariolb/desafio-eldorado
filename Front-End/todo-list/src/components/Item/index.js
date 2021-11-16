/**
 * Instancia de objeto para Item
 */
class Item {
    constructor(task) {
      this.id = task.id;
      this.title = task.title;
      this.status = task.status;
    }
}

export default Item;