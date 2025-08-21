import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const url =
  "https://api.unsplash.com/search/photos?client_id=M-NkwnXK-0kYd_L80B5R-MLHS6i2HCgXoeTYX9YGWIw&query=shakeAndBake";
const Gallery = () => {
  const data = useQuery({
    queryKey: ["gallery"],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
  });
  if (data.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading....</h4>
      </section>
    );
  }

  if (data.isError) {
    return (
      <section className="image-container">
        <h4>There was an error....</h4>
      </section>
    );
  }
  const results = data.data.results;
  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }
  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <img
            src={url}
            alt={item.alt_description}
            key={item.id}
            className="img"
          />
        );
      })}
    </section>
  );
};
export default Gallery;
