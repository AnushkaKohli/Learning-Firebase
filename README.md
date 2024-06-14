# Firebase

## Create a reference to collection: `collection()`

```jsx
const collectionRef = collection(db, "books");
```

## Create a reference to document: `doc()`

```jsx
const docRef = doc(db, "books", "id");
```

## Get all books: `getDocs()`

```jsx
const querySnapshot = await getDocs(collectionRef);
querySnapshot.forEach((doc) => {
  console.log({ ...doc.data(), id: doc.id });
});
```

## Get single book: `getDoc()`
  
  ```jsx
  const docSnap = await getDoc(docRef);
  console.log({ ...docSnap.data(), id: docSnap.id });
  ```

## Get realtime data: `onSnapshot()`

This function listens for changes to the database and updates the UI in real time.

```jsx
// For all docs - pass collectionRef
onSnapshot(collectionRef, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
      console.log("New book!");
    } else if (change.type === "modified") {
      console.log("Modified book!");
    } else if (change.type === "removed") {
      console.log("Removed book!");
    }
  });
  snapshot.docs.forEach((doc) => {
    console.log({ ...doc.data(), id: doc.id });
  });
});

// For single doc - pass docRef
onSnapshot(docRef, (doc) => {
  console.log("Single doc:", doc.data(), doc.id);
});
```

## Add book: `addDoc()`

```jsx
await addDoc(collectionRef, {
  title: form.title.value,
  author: form.author.value,
  createdAt: serverTimestamp(),
});
```

## Update book: `updateDoc()`

```jsx
updateDoc(docRef, {
  title: e.target.title.value,
  author: e.target.author.value,
});
```

## Delete book: `deleteDoc()`

```jsx
await deleteDoc(docRef);
```

## Query data: `query()`

```jsx
const q = query(collectionRef, where("author", "==", "John Doe"), orderBy("title"));
```
