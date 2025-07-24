import { useEffect, useState } from "react";
import Loading from "./Loading";
import Error from "./Error";
import Tours from "./Tours";

const App = () => {
  const url = "https://www.course-api.com/react-tours-project";
  const [tours, setTour] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const removeTour = (id) => {
    setLoading(true);
    setTimeout(() => {
      const newTours = tours.filter((tour) => tour.id !== id);
      setTour(newTours);
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    const getTours = async () => {
      try {
        setLoading(true);
        setIsError(false);
        const res = await fetch(url);
        if (!res.ok) {
          setIsError(true);
          setLoading(false);
          throw new Error("There was an error fetching data!");
        }
        const data = await res.json();
        setTour(data);
      } catch (error) {
        setIsError(true);
        console.log("Fetching error:", error);
      } finally {
        setLoading(false);
      }
    };
    getTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (isError) {
    return (
      <main>
        <Error />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <h1 style={{ textAlign: "center" }}>There is no Tours left</h1>
      </main>
    );
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};
export default App;
