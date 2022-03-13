import "./App.css";
import CardLayout from "./components/CardLayout";
import { useFetch } from "./useFetch";
function App() {
  const jobs = useFetch(
    "https://61435a41c5b553001717cf2f.mockapi.io/api/challenge/jobs"
  );
  const { data, loading } = jobs;
  console.log("jobs", loading);
  return (
    <div>
      {loading ? (
        <div></div>
      ) : (
        <div className="container-fluid d-flex justify-content-center row">
          {data.map((data) => (
            <CardLayout data={data} key={data.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
