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

## Authentication

Firebase auth uses a JSON webtoken to authenticate users who might sign in, sign up and logout of our applications. When a user signs in, this web token is sent to firebase server on every request so that firebase can authenticate the request.

### Inititalize Firebase Auth

```jsx
const auth = getAuth();
```

### Sign up

```jsx
createUserWithEmailAndPassword(auth, email, password);
```

### Sign in

```jsx
signInWithEmailAndPassword(auth, email, password);
```

### Sign out

```jsx
signOut(auth);
```

### Auth state change

```jsx
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User logged in:", user);
  } else {
    console.log("User logged out");
  }
});
```

### Get current user

```jsx
const user = auth.currentUser;
```

### Update user profile

```jsx
updateProfile(user, {
  displayName: "John Doe",
  photoURL: "https://example.com/johndoe.jpg",
});
```

### Unsubscribe from auth & db changes

```jsx
const unsub = onSnapshot(collectionRef, (snapshot) => {
  // Do something
});

// Unsubscribe
unsub();
```
