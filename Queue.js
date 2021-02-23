// Insertion + Removal + Size: O(1) time complexity

module.exports =
  class Queue {
    constructor(){
      this.storage = {};
      this.start = 0;
      this.end = 0;
    }

    enqueue(value) {
      this.storage[this.start] = value;
      this.start += 1;
      return this.size();
    }

    dequeue() {
      const [storage, end] = [this.storage, this.end]
      if (this.size() > 0) {
        const value = this.storage[end]

        delete this.storage[end];
        this.end += 1;

        return value;
      }
      return null;
    }

    size() {
      return (this.start - this.end);
    }
  }
