import { createClient } from "contentful";

const client = createClient({
  space: "6so8qkv7xcup",
  environment: "master",
  accessToken: "BHlJbltqhL49RerKJRvwH-UnNrTJ1nd__dRx1bqKNJU",
});

client
  .getEntries({
    content_type: "projects",
  })
  .then((response) => console.log(response));
