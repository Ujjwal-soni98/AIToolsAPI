import express from 'express';
const app = express();

// app.use(express.static('dist'))  /// this will serve the static assets in backend but
// this was a wrong practice

app.get('/',(req,res)=> {
    res.send("server is running");
})

const port = process.env.PORT || 3000;

const nameOfPopularAiTools = [
    {
        id: 1,
        title: "ChatGPT",
        famousFor: "first major OpenAi Project famous mainly for the day to day tasks."
    },
    {
        id:2,
        title: "Perplexity",
        famousFor: "showing the sources of its answers to clearly tell the user where the answer came from"
    },
    {
        id:3,
        title: "Gemini AI",
        famousFor: "Gemini 2.5 models are capable of reasoning through their thoughts before responding"
    },
    {
        id:4, 
        title: "Napkin AI",
        famousFor: "For intuitive notetakings"
    },
    {
        id:5,
        title: "Blackbox AI",
        famousFor: "It is known for its coding potentials particularly in solving DSA problems"
    }
]

app.get('/api/aiTools',(req,res)=> {
    res.json(nameOfPopularAiTools);
})

app.listen(port, ()=>{
    console.log(`Server is started at http://localhost:${port}`);
})

