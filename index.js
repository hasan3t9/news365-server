const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
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
    const news365Collection = db.collection("news365");
    const usersCollection = db.collection("users");
    const newsCategoriesCollection = db.collection("newsCategories");

    app.post("/all-news", async (req, res) => {
      try {
        const data = req.body;
        if (
          !data.id ||
          data.category_id === undefined ||
          !data.title ||
          !data.details ||
          !data.category_name
        ) {
          return res.status(400).json({ message: "Missing required fields" });
        }

        data.category_id = Number(data.category_id);
        data.total_view = Number(data.total_view) || 0;
        data.rating = {
          number: (data.rating && Number(data.rating.number)) || 0,
          badge: (data.rating && data.rating.badge) || "",
        };

        const result = await newsCollection.insertOne(data);

        // Send back the inserted data (maybe with insertedId)
        res.send(result);
      } catch (error) {
        console.error("Error creating news:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    });
    app.post("/all-news365", async (req, res) => {
      const data = req.body;
      const result = await news365Collection.insertOne({
        ...data,
        createdAt: new Date(),
      });
      res.send(result);
    });

    app.get("/all-news365", async (req, res) => {
      const categories = await news365Collection
        .find({})
        .sort({ _id: -1 })

        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h1c1", async (req, res) => {
      const categories = await news365Collection
        .find({
          categoryPosition: "1",
          homePosition: "1",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h1c2", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "1",
          categoryPosition: "2",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h1c3", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "1",
          categoryPosition: "3",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h1c4", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "1",
          categoryPosition: "4",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h2c1", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "2",
          categoryPosition: "1",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h2c2", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "2",
          categoryPosition: "2",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h2c3", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "2",
          categoryPosition: "3",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h2c4", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "2",
          categoryPosition: "4",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h2c5", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "2",
          categoryPosition: "5",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h2c6", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "2",
          categoryPosition: "6",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h3c1", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "3",
          categoryPosition: "1",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });

    app.get("/all-news365/h3c2", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "3",
          categoryPosition: "2",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h3c3", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "3",
          categoryPosition: "3",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h3c4", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "3",
          categoryPosition: "4",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h3c5", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "3",
          categoryPosition: "5",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });

    app.get("/all-news365/h3c6", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "3",
          categoryPosition: "6",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h4c1", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "4",
          categoryPosition: "1",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h4c2", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "4",
          categoryPosition: "2",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h4c3", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "4",
          categoryPosition: "3",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h4c4", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "4",
          categoryPosition: "4",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h4c5", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "4",
          categoryPosition: "5",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h4c6", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "4",
          categoryPosition: "6",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h5c1", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "5",
          categoryPosition: "1",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h5c2", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "5",
          categoryPosition: "2",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h5c3", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "5",
          categoryPosition: "3",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h5c4", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "5",
          categoryPosition: "4",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h5c5", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "5",
          categoryPosition: "5",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news365/h5c6", async (req, res) => {
      const categories = await news365Collection
        .find({
          homePosition: "5",
          categoryPosition: "6",
        })
        .sort({ _id: -1 })
        .limit(1)
        .toArray();
      res.send(categories);
    });
    app.get("/all-news", async (req, res) => {
      const categories = await newsCollection
        .find()
        .sort({ category_id: 1 })
        .toArray();
      res.send(categories);
    });

    app.get("/all-news/:id", async (req, res) => {
      const id = req.params.id;

      try {
        const result = await newsCollection.find({ id: id }).toArray();

        res.send(result);
      } catch (error) {
        console.error("Error fetching category news:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    app.delete("/news/:id", async (req, res) => {
      const id = req.params.id;

      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const result = await newsCollection.deleteOne({
        _id: new ObjectId(id),
      });

      if (result.deletedCount === 0) {
        return res.status(404).json({ message: "Post not found" });
      }

      res.json(result);
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

    app.put("/update-news/:id", async (req, res) => {
      const id = req.params.id;
      const updatedData = { ...req.body };

      if (!id) return res.status(400).send({ message: "Missing id parameter" });

      // Remove _id if present in updatedData to avoid MongoDB error
      if ("_id" in updatedData) {
        delete updatedData._id;
      }

      try {
        const filter = { id: id };

        const existingDoc = await newsCollection.findOne(filter);
        if (!existingDoc)
          return res.status(404).send({ message: "Post not found" });

        const result = await newsCollection.updateOne(filter, {
          $set: updatedData,
        });

        return res.status(200).send({
          message:
            result.modifiedCount > 0
              ? "Post updated successfully"
              : "No changes detected",
          modifiedCount: result.modifiedCount,
        });
      } catch (error) {
        console.error("Update Error:", error);
        return res.status(500).send({ message: error.message });
      }
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
          .limit(6)
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

    // ---------------------------------------------------------------users -------------------------------\

    app.post("/users", async (req, res) => {
      try {
        const user = req.body;
        if (!user.uid || !user.email || !user.name) {
          return res.status(400).json({ message: "Missing required fields" });
        }

        // Check if user already exists by Firebase UID or email
        const existingUser = await usersCollection.findOne({
          $or: [{ uid: user.uid }, { email: user.email }],
        });
        if (existingUser) {
          return res.status(409).json({ message: "User already exists" });
        }

        // Insert user document
        const result = await usersCollection.insertOne(user);

        res.send(result);
      } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });

    app.get("/users/:email/role", async (req, res) => {
      const email = req.params.email;

      const user = await usersCollection.findOne({ email });

      if (!user) {
        return res
          .status(404)
          .send({ message: "User not found", role: "user" });
      }

      res.send({ role: user.role || "user" });
    });

    // dashboard collection

    app.get("/dashboard-stats", async (req, res) => {
      try {
        const totalPosts = await newsCollection.countDocuments();

        // Example additional stats (replace with your actual logic)
        const totalTrending = await newsCollection.countDocuments({
          "others.is_trending": true,
        });
        const totalTodayPick = await newsCollection.countDocuments({
          "others.is_today_pick": true,
        });

        const viewsAggregation = await newsCollection
          .aggregate([
            {
              $group: {
                _id: null,
                totalViews: { $sum: "$total_view" },
              },
            },
          ])
          .toArray();

        const totalViews = viewsAggregation[0]?.totalViews || 0;
        const totalUsers = await usersCollection.countDocuments();

        res.status(200).json({
          totalPosts,
          totalTrending,
          totalTodayPick,
          totalViews,
          totalUsers,
        });
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    });

    // app.get("/dashboard-stats", async (req, res) => {
    //   try {
    //     const totalPosts = await newsCollection.countDocuments();
    //     const totalUsers = await usersCollection.countDocuments();
    //     const totalViewsAggregate = await newsCollection
    //       .aggregate([
    //         { $group: { _id: null, totalViews: { $sum: "$total_view" } } },
    //       ])
    //       .toArray();

    //     const totalViews = totalViewsAggregate[0]?.totalViews || 0;

    //     res.json({
    //       totalPosts,
    //       totalUsers,
    //       totalViews,
    //     });
    //   } catch (error) {
    //     console.error("Failed to fetch dashboard stats", error);
    //     res.status(500).json({ message: "Failed to fetch stats" });
    //   }
    // });

    app.get("/categories", async (req, res) => {
      const categories = await newsCategoriesCollection
        .find()
        .sort({ id: 1 })
        .toArray();
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
