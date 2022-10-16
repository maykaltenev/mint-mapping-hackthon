<h1 align="center">MINTvernetzt Hackathon 2022</h1>
<p align="center">
A weekend long hackathon hosted for and by <a href="https://mint-vernetzt.de/" target="_blank">MINTvernetzt</a> with the topic of mapping and matching</p>

---

## Hackathon group #3

- Team members: [Ashley](https://github.com/heyitsashleyhere), [Maykal](https://github.com/maykaltenev), [Oliveira](https://github.com/OliveiraDCI)

- Goals:
  - Map users interests/needs with other members in the community based on similar criteria.
  - Somehow inspire more girls to be interested in STEM education

- Approach:
  - Minimal change, avoid re-branding and new design (visuals) 
  - Focus on features that can be added and scaled in the next 5 years

- Solution: 

https://user-images.githubusercontent.com/84905549/196029461-10e47a3d-23b2-4423-8298-606e54546d2e.mp4


  - Display matched results directly on a dashboard, once logged in.
    - The whole prototype should be inserted and replace filters in the current [community page](https://community.mint-vernetzt.de/explore).
    - Cards can be flipped to create more 'human' interaction

  - Create an algorithm to match by percentage
    - Using [n-gram](https://www.npmjs.com/package/n-gram) ( ← *currently using a different package but will like more time to switch to this package)
    - User's can directly edit their fields without going to their profile edit page

  - News board to increase `girl in STEM` awareness 
    - possible to apply other topics of interests depending on seasons/holidays/events, ie Pride Month, Black History Month)

---

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com). From your command line:

```bash
# Clone this repository
$ git clone git@github.com:heyitsashleyhere/MINTvernetzt-Hackathon.git

# Install dependencies
$ npm install

# Run the app
$ npm start
```

---

## Other connecting repositories

- [Oliveira's Algorithm](https://github.com/OliveiraDCI/mint-vernetzt-hackaton-project)
- [Maykal's Backend](https://github.com/maykaltenev/mint-mapping-hackthon)
- [2021 MINTvernetzt Hackathon](https://github.com/mint-vernetzt/community-platform)
