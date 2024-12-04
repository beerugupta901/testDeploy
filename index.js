const express = require('express')
const app = express()
const port = 3000
require('dotenv').config()  //.env file ko import karna

const details={
    "login": "BeeruGupta",
    "id": 103180625,
    "node_id": "U_kgDOBiZpUQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/103180625?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/BeeruGupta",
    "html_url": "https://github.com/BeeruGupta",
    "followers_url": "https://api.github.com/users/BeeruGupta/followers",
    "following_url": "https://api.github.com/users/BeeruGupta/following{/other_user}",
    "gists_url": "https://api.github.com/users/BeeruGupta/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/BeeruGupta/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/BeeruGupta/subscriptions",
    "organizations_url": "https://api.github.com/users/BeeruGupta/orgs",
    "repos_url": "https://api.github.com/users/BeeruGupta/repos",
    "events_url": "https://api.github.com/users/BeeruGupta/events{/privacy}",
    "received_events_url": "https://api.github.com/users/BeeruGupta/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 0,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-04-07T09:10:45Z",
    "updated_at": "2023-07-31T05:08:29Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/moj',(req,res)=>{
    res.send("<h1>moj karo!!</h1>")
})

app.get('/beeru',(req,res)=>{
    res.json(details)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})