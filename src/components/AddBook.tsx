import { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { deleteUser, getAuth } from "firebase/auth";
import {  db } from "../firebase";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [books, setBooks] = useState<any>([]);
  const [loading, setLoading] = useState(false);
const navigate=useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (title) {
      setLoading(true);
      const ref = await addDoc(collection(db, "library"), {
        title,
      });
      setBooks([...books, { id: ref.id, title }]);
      setLoading(false);
      setTitle("");
    }
  };

  useEffect(() => {
    async function getData() {
      let bookArr: any = [];
      const snap = await getDocs(collection(db, "library"));
      snap.forEach((doc) => {
        bookArr.push({ id: doc.id, ...doc.data() });
      });
      setBooks(bookArr);
    }
    getData();
  }, []);

  const logOut = () => {
    const auth = getAuth();
    const user:any = auth.currentUser;
    deleteUser(user)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.log(error)
      );
  };

  return (
    <div>
      <h1>Add Book</h1>
      <button onClick={logOut} className="btn">
        Sign out
      </button>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="enter book name"
        />
        <button disabled={loading} className="border-2">
          {loading ? "Loading..." : "Add"}
        </button>
      </form>

      <ul>
        {books.map((book: any) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddBook;
