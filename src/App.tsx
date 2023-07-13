import { useEffect, useState } from "react";
import "./App.css";

function PdfForm() {
  const [rollNo, setRollNo] = useState("");
  const [link, setLink] = useState("");

  const getLink = () => {
    return `https://makaut1.ucanapply.com/smartexam/public/results-details/eyJpdiI6IkhlRGJqZEZJdXZ0Y3lITmc0Snlsc3c9PSIsInZhbHVlIjoiQlVmRStrTjZwQVl4YTNva1dNUHZcL0E9PSIsIm1hYyI6IjRiN2U1ZjcyNGQyYmNkZmUzMzNiYTFhNjE5MWI2Zjc4M2IzMjVhNzA1N2IzMWIxYWIzNjI5ZjgzMWJhMzFkNmIifQ==/1?rollno=${rollNo}`;
  };

  useEffect(() => {
    setLink(getLink());
  }, [getLink, rollNo]);

  return (
    <div>
      <h1>Makaut Result Getter</h1>
      <ul>
        <li>Enter your Makaut roll no.</li>
        <li>Click on submit button</li>
        <li>See your Result</li>
      </ul>
      <label>Enter Roll No:</label>
      <br />
      <br />
      <input
        type="text"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
      />
      <br />
      <br />
      <a href={link}>
        <button>Submit</button>
      </a>
    </div>
  );
}

function App() {
  return <PdfForm />;
}

export default App;
