const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

const uri =
  "mongodb+srv://news365-db:VvvYR1k1YEaYqwka@cluster0.qycon3j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const db = client.db("news365-db");
    const newsCollection = db.collection("news");
    const newsCategoriesCollection = db.collection("newsCategories");

    app.get("/all-news", async (req, res) => {
      const categories = await newsCollection.find().toArray();
      res.send(categories);
    });

    app.get("/all-news/:id", async (req, res) => {
      const id = req.params.id; 

      try {
        const result = await newsCollection.find({id: id }).toArray();

        res.send(result);
      } catch (error) {
        console.error("Error fetching category news:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });  

    app.get("/news-per-category", async (req, res) => {
      const categoryIds = [2, 3, 4, 5];
      const result = [];

      for (const categoryId of categoryIds) {
        const newsItem = await newsCollection.findOne({
          category_id: categoryId,
        });
        if (newsItem) {
          result.push(newsItem);
        }
      }

      res.send(result);
    });

    app.get("/entertainment", async (req, res) => {
      const categoryId = 6;
      try {
        const result = await newsCollection
          .find({ category_id: categoryId })
          .limit(6)
          .toArray();

        res.send(result);
      } catch (error) {
        console.error("Error fetching entertainment news:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });
    app.get("/politics", async (req, res) => {
      const categoryId = 8;
      try {
        const result = await newsCollection
          .find({ category_id: categoryId })
          .limit(6)
          .toArray();

        res.send(result);
      } catch (error) {
        console.error("Error fetching entertainment news:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });
    app.get("/business", async (req, res) => {
      const categoryId = 2;
      try {
        const result = await newsCollection
          .find({ category_id: categoryId })
          .limit(6)
          .toArray();

        res.send(result);
      } catch (error) {
        console.error("Error fetching entertainment news:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });
    app.get("/science", async (req, res) => {
      const categoryId = 7;
      try {
        const result = await newsCollection
          .find({ category_id: categoryId })
          .toArray();

        res.send(result);
      } catch (error) {
        console.error("Error fetching entertainment news:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    // category all news
    app.get("/breaking-news", async (req, res) => {
      try {
        const result = await newsCollection
          .find({
            "others.is_today_pick": true,
          })
          .toArray();

        res.send(result);
      } catch (error) {
        console.error("Error fetching entertainment news:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    app.get("/all-business-news", async (req, res) => {
      const categoryId = 2;
      try {
        const result = await newsCollection
          .find({ category_id: categoryId })
          .toArray();

        res.send(result);
      } catch (error) {
        console.error("Error fetching entertainment news:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });
    app.get("/all-tech-news", async (req, res) => {
      const categoryId = 3;
      try {
        const result = await newsCollection
          .find({ category_id: categoryId })
          .toArray();

        res.send(result);
      } catch (error) {
        console.error("Error fetching entertainment news:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });
    app.get("/all-health-news", async (req, res) => {
      const categoryId = 4;
      try {
        const result = await newsCollection
          .find({ category_id: categoryId })
          .toArray();

        res.send(result);
      } catch (error) {
        console.error("Error fetching entertainment news:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });
    app.get("/all-sport-news", async (req, res) => {
      const categoryId = 5;
      try {
        const result = await newsCollection
          .find({ category_id: categoryId })
          .toArray();

        res.send(result);
      } catch (error) {
        console.error("Error fetching entertainment news:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });
    app.get("/all-entertain-news", async (req, res) => {
      const categoryId = 6;
      try {
        const result = await newsCollection
          .find({ category_id: categoryId })
          .toArray();

        res.send(result);
      } catch (error) {
        console.error("Error fetching entertainment news:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });
    app.get("/all-science-news", async (req, res) => {
      const categoryId = 7;
      try {
        const result = await newsCollection
          .find({ category_id: categoryId })
          .toArray();

        res.send(result);
      } catch (error) {
        console.error("Error fetching entertainment news:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });
    app.get("/all-politics-news", async (req, res) => {
      const categoryId = 8;
      try {
        const result = await newsCollection
          .find({ category_id: categoryId })
          .toArray();

        res.send(result);
      } catch (error) {
        console.error("Error fetching entertainment news:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });
    app.get("/all-education-news", async (req, res) => {
      const categoryId = 9;
      try {
        const result = await newsCollection
          .find({ category_id: categoryId })
          .toArray();

        res.send(result);
      } catch (error) {
        console.error("Error fetching entertainment news:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });
    app.get("/all-lifestyle-news", async (req, res) => {
      const categoryId = 10;
      try {
        const result = await newsCollection
          .find({ category_id: categoryId })
          .toArray();

        res.send(result);
      } catch (error) {
        console.error("Error fetching entertainment news:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    app.get("/categories", async (req, res) => {
      const categories = await newsCategoriesCollection.find().toArray();
      res.send(categories);
    });

    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("news 365 server is running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
