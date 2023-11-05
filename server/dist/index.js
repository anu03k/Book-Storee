"use strict";
var __importDefault = (this && this.__importDefault) || function(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const BookData = [
        [{
                "name": "To Kill a Mockingbird",
                "author": "Harper Lee",
                "price": "400",
                "text": "A classic novel that explores the irrationality of adult attitudes towards race and class in the Deep South of the 1930s.",
                "image": "/images/to-kill-a-mockingbird.jpg",
                "genre": "Classic"
            },
            {
                "name": "Crime and Punishment",
                "author": "Fyodor Dostoevsky",
                "price": "450",
                "text": "This psychological thriller delves into the mental anguish and moral dilemmas of Raskolnikov, a destitute and desperate former student in Saint Petersburg.",
                "image": "/images/crime-and-punishment.jpg",
                "genre": "Psychological Fiction"
            },
            {
                "name": "Charlie and the Chocolate Factory",
                "author": "Roald Dahl",
                "price": "300",
                "text": "Follow Charlie Bucket as he tours the eccentric and magical chocolate factory of Willy Wonka in this delightful children's book.",
                "image": "/images/charlie-and-the-chocolate-factory.jpg",
                "genre": "Children"
            },
            {
                "name": "Dracula",
                "author": "Bram Stoker",
                "price": "600",
                "text": "This Gothic horror novel introduces the infamous vampire Count Dracula and the group of characters who seek to thwart his evil plans.",
                "image": "/images/dracula.jpg",
                "genre": "Gothic"
            },
            {
                "name": "I Fell in Love with Hope",
                "author": "Ellie Cahill",
                "price": "550",
                "text": "A heartwarming story about love, friendship, and second chances that will leave you believing in the power of hope.",
                "image": "/images/i-fell-in-love-with-hope.jpg",
                "genre": "Romance"
            },
            {
                "name": "The Wimpy Kid Series",
                "author": "Jeff Kinney",
                "price": "700",
                "text": "The hilarious and relatable misadventures of Greg Heffley as he navigates the perils of middle school.",
                "image": "/images/the-wimpy-kid.jpg",
                "genre": "Children"
            },
            {
                "name": "Pride and Prejudice",
                "author": "Jane Austen",
                "price": "340",
                "text": "A classic romantic novel that explores the societal norms and expectations of the 19th century, focusing on the passionate relationship between Elizabeth Bennet and Mr. Darcy.",
                "image": "/images/pride-and-prejudice.jpg",
                "genre": "Romance"
            },
            {
                "name": "101 Essays That Will Change the Way You Think",
                "author": "Brianna Wiest",
                "price": "450",
                "text": "A collection of thought-provoking essays that offer new perspectives on various aspects of life, encouraging readers to reconsider their beliefs and viewpoints.",
                "image": "/images/101-essays.jpg",
                "genre": "Self-Help"
            }
        ]
    ];
    res.json(BookData);

});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map


//# sourceMappingURL=index.js.map