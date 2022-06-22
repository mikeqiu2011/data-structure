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
    const index = this._hash(key);
    // console.log(key, index);
    let result = null;
    this.data[index].forEach((item) => {
      //   console.log(item, item.key);
      if (item.key === 'grapes') {
        result = item.value;
      }
    });

    return result;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);

console.log(myHashTable.get('grapes'));

// console.log(myHashTable.data);
// console.log(myHashTable.data[23]);
