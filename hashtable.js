class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    // o(1)
    const index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = [];
    }
    this.data[index].push({
      key,
      value,
    });
  }

  get(key) {
    // most of time o(1), if collision, o(n) for bad case, e.g. very small hash table, collision all over the place
    const index = this._hash(key);
    // console.log(key, index);
    let result = null;
    this.data[index].forEach((item) => {
      //   console.log(item, item.key);
      if (item.key === key) {
        result = item.value;
        // return result;
        // return item.value;
      }
    });

    return result;
  }

  keys() {
    const result = [];

    this.data.forEach((element) => {
      if (element) {
        element.forEach((item) => {
          result.push(item.key);
        });
      }
    });

    return result;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 100);
myHashTable.set('bananas', 10);

console.log(myHashTable.get('grapes'));
console.log(myHashTable.data);

console.log(myHashTable.keys());
