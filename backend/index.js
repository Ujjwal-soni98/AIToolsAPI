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
        famousFor: "first major OpenAi Project famous mainly for the day to day tasks.",
        image: "https://thumbs.dreamstime.com/b/minsk-belarus-openai-chatgpt-logo-artifical-chatbot-system-chat-bot-button-web-app-phone-icon-symbol-editorial-vector-275376231.jpg?w=992"
    },
    {
        id:2,
        title: "Perplexity",
        famousFor: "showing the sources of its answers to clearly tell the user where the answer came from",
        image: "https://substackcdn.com/image/fetch/$s_!38jo!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F25175a25-0287-48d2-b577-ac6f3f00a522_400x400.jpeg"
    },
    {
        id:3,
        title: "Gemini AI",
        famousFor: "Gemini 2.5 models are capable of reasoning through their thoughts before responding",
        image: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/IO24_WhatsInAName_Hero_1.width-2200.format-webp.webp"
    },
    {
        id:4, 
        title: "Napkin AI",
        famousFor: "For intuitive notetakings",
        image: "https://cdn.prod.website-files.com/6513d4294e7a544d1c09b858/673364d216d30faffbc20f2f_napkin-ai-social-preview.png"
    },
    {
        id:5,
        title: "Blackbox AI",
        famousFor: "It is known for its coding potentials particularly in solving DSA problems",
        image: "data:image/png;base64,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"
    }
]

app.get('/api/aiTools',(req,res)=> {
    res.json(nameOfPopularAiTools);
})

app.listen(port, ()=>{
    console.log(`Server is started at http://localhost:${port}`);
})

