import USERS from "./users";

const POSTS = [
  {
    id: 1,
    user: USERS[2].user,
    profile_picture: USERS[2].image,
    likes: 1020,
    caption: `My cat doing it's things
Dancing like he is the only on left in this world
Or is he trying to intimidate the black cat?`,
    imageUrl:
      "https://filmdaily.co/wp-content/uploads/2021/04/cat-dancing-lede.jpg",
    comments: [
      {
        user: "perlpinkton",
        comment: "Wow! So cute!",
      },
      {
        user: "ben_gelsen",
        comment: "Definitely has you energy there 🤣",
      },
    ],
  },
  {
    id: 2,
    user: USERS[2].user,
    profile_picture: USERS[2].image,
    likes: 1543,
    caption: ".\n.\n.\n.\n.\nFinally out of gas",
    imageUrl: "https://wallpaperaccess.com/full/3359156.jpg",
    comments: [
      {
        user: "perlpinkton",
        comment: "So cute even when sleeping!",
      },
      {
        user: "ben_gelsen",
        comment: "Recharging for another round 🤣",
      },
      {
        user: "robertkim",
        comment: "Feels like getting a cat too",
      },
      {
        user: "alexander45",
        comment: "So peaceful",
      },
    ],
  },
  {
    id: 3,
    user: USERS[1].user,
    profile_picture: USERS[1].image,
    likes: 154,
    caption: "Finally some progress",
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/Hti3RQ9LNeBrnEfvtD3xH7-1200-80.jpg",
    comments: [
      {
        user: "stenacella",
        comment: "Thanks for the hard work!",
      },
      {
        user: "ben_gelsen",
        comment: "Can totally feel your pain 🤣",
      },
      {
        user: "robertkim",
        comment: "Much appreciated!",
      },
    ],
  },
  {
    id: 4,
    user: USERS[6].user,
    profile_picture: USERS[6].image,
    likes: 2001,
    caption:
      "Gorgeus view in Taroko Gorge, Taiwan #travel #asia #taiwan samplesamplesamplesamplesamplesamplesample",
    imageUrl:
      "https://assets.bucketlistly.blog/sites/5adf778b6eabcc00190b75b1/content_entry5adf77af6eabcc00190b75b6/5e29c5d54e4b61000cac3582/files/taroko-gorge-hualien-backpacking-itinerary-taiwan-main-image-op.jpg",
    comments: [
      {
        user: "ben_gelsen",
        comment: "That's breathtaking 😲",
      },
      {
        user: "rolandcos",
        comment: "Added to the my list",
      },
      {
        user: "robertkim",
        comment: "I've been there before, totally recommended!",
      },
    ],
  },
  {
    id: 5,
    user: USERS[0].user,
    profile_picture: USERS[0].image,
    likes: 7101,
    caption: "Our next project",
    imageUrl:
      "https://inlooxcdn.azureedge.net/var/corporate_site/storage/images/media/images/seo-page-project-management/hero-project-management-stockphoto-agile-standup-meeting-3840x979px/2157312-1-eng-GB/hero-project-management-stockphoto-agile-standup-meeting-3840x979px.jpg",
    comments: [
      {
        user: "ben_gelsen",
        comment: "Pumped!",
      },
    ],
  },
  {
    id: 6,
    user: USERS[5].user,
    profile_picture: USERS[5].image,
    likes: 101,
    caption: "Never tasted something like this before",
    imageUrl:
      "https://purewows3.imgix.net/images/articles/2021_12/traditional-chinese-food-FB.jpg?auto=format,compress&cs=strip",
    comments: [],
  },
];

export default POSTS;
