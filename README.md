
# LRU Cache Implementation

A brief description of what this project does and who it's for

## 📌 Overview  
This project implements a **Least Recently Used (LRU) Cache** using a **Doubly Linked List** and a **HashMap** (`Map` object in JavaScript). The cache supports **O(1) time complexity** for `get()` and `put()` operations.


## 🚀 Features  
- Efficient **O(1) get and put operations** using **HashMap + Doubly Linked List**.
- Automatically removes the **Least Recently Used (LRU) entry** when full.
- **Debugging function** to visualize the cache state.

## 📊 Complexity Analysis

```bash
Operation                             | Time Complexity | Space Complexity | Explanation
--------------------------------------|---------------|-----------------|--------------------------------------------------
get(key)                              | O(1)          | O(n)            | Uses Map lookup and moves node to head in O(1).
put(key, value)                       | O(1)          | O(n)            | Uses Map lookup, insertion, and LRU eviction in O(1).
Doubly Linked List Insertion/Removal  | O(1)          | O(n)            | Insert and delete operations at head/tail are O(1).


```

## Usage/Examples

#### 1️⃣ Create an LRU Cache

```bash
const cache = new LRUCache(2); // Capacity = 2
```

---

#### 2️⃣ Store values using put()

```bash
cache.put(1, 100);
cache.put(2, 200);

```

---

#### 3️⃣ Retrieve values using get()

```bash
console.log(cache.get(1)); // 100 ✅ (1 is most recently used)
console.log(cache.get(3)); // -1 ❌ (Not found)

```

---

#### 4️⃣ Eviction when cache is full

```bash
cache.put(3, 300); // Evicts key 2 (LRU)
console.log(cache.get(2)); // -1 ❌
console.log(cache.get(3)); // 300 ✅

```

---

#### 5️⃣ Debug the cache

```bash
console.log(cache.debug()); 
// Example Output: -->[ [3] : [300] ]-->[ [1] : [100] ]-->

```


## Installation

### Clone the repository:

```bash
git clone https://github.com/iakash22/LRU_cache.git

```

### Navigate to the project directory:

```bash
cd LRU_cache

```

### Run

```bash
node index.js

```
    

## 📌 Conclusion
This LRU Cache efficiently manages frequently used items while discarding least used ones in O(1) time complexity. The combination of HashMap and Doubly Linked List ensures an optimized performance.


## License

### **💡 Why This `README.md` is Useful?**
✅ **Well-Structured**: Step-by-step explanation of the implementation.  
✅ **Beginner-Friendly**: Code snippets and usage examples.  
✅ **Advanced Concepts**: LRU eviction, O(1) operations, debugging tips.  
✅ **Future Enhancements**: Ideas for improving the cache.  

This should be a **solid README** for your project. 🚀 Want any modifications? 😃
