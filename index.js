/**
 * Node {
 *      next: Node | null,
 *      prev: Node | null,
 *      value : value
 * }
 */


class LRUCache {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.cache = new Map(); // store data [ <key> : <address> ] 
        this.head = null;
        this.tail = null;
        this.len = 0;
    }

    #removeNode(node, key) {
        if (node === null) return;

        // remove node key from map 
        this.cache.delete(key);

        // if prev is not empty then set previous next node to next node 
        if (node.prev) {
            node.prev.next = node.next;
        }

        // if next is not empty the set next previous node to previous
        if (node.next) {
            node.next.prev = node.prev;
        }

        if (node === this.head) {
            this.head = node.next;
        }

        if (node === this.tail) {
            this.tail = node.prev;
        }

        // Decrement length when actually removing
        this.len -= 1;
    }

    #moveToHead(node, key) {
        if (node === this.head) return;

        this.#removeNode(node);
        this.len += 1;
        node.next = this.head;
        node.prev = null;

        if (this.head) {
            this.head.prev = node;
        }

        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }

        this.cache.set(key, node);
    }

    get(key) {
        if (!this.cache.get(key)) return -1;
        const node = this.cache.get(key);

        // set To node in head and arrange it.
        this.#moveToHead(node, key);

        return node.value;
    }

    put(key, value) {

        // if key is avaiable in map and so remove and set to head and arrange it 
        if (this.cache.get(key)) {
            const node = this.cache.get(key);
            node.value = value;
            this.#moveToHead(node, key)
            return;
        }

        // if capacity is full
        if (this.len === this.capacity) {
            this.#removeNode(this.tail, this.tail.key);
        }

        // create new node
        const newNode = {
            value,
            prev: null,
            next: this.head,
            key,
        }

        
        // if head is not null then set head previos to new node
        if (this.head) {
            this.head.prev = newNode;
        }
        
        // set head to new node; 
        this.head = newNode;
        
        // if list is empty then set to tail 
        if (!this.tail) {
            this.tail = newNode;
        }
        
        // set key with node address to map  
        this.cache.set(key, newNode);

        //increment length of list
        this.len += 1;
    }

    debug() {
        let current = this.head;
        let arr = [];

        while (current !== null) {
            arr.push(`-->[ [${current.key}] : [${current.value}] ]-->`);
            current = current.next;
        }

        return arr.join('');
    }

};

const lru = new LRUCache(2);
lru.put(1, 10);
lru.put(2, 20);
console.log("Key 1 value of :", lru.get(1));
lru.put(3, 30);
console.log("Key 1 value of :", lru.get(1));
lru.put(4, 40);

// lru.put(1, 100);
// lru.put(2, 200);
// console.log(lru.get(1)); // 100 (1 is recently used)
// lru.put(3, 300); // Removes key 2 (least recently used)
// console.log(lru.get(2)); // -1 (key 2 was removed)
// lru.put(4, 400); // Removes key 1
// console.log(lru.get(1)); // -1
// console.log(lru.get(3)); // 300
// console.log(lru.get(4)); // 400


console.log(lru.debug());