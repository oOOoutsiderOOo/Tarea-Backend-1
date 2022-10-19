import express from "express";
import { initialData } from "./initialData";
import { routes } from "./routes";

const app = express();
const port = 5000;
export const db = initialData;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_, res) => {
    res.status(200).send();
});

app.listen(port, () => console.log(`Stones rolling on port ${port}`));

routes(app);
