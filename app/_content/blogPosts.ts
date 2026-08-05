export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  description: string;
  intro: string;
  readTime: string;
  publishedDate: string;
  dateDisplay: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-birmingham-businesses-should-post-on-tiktok",
    category: "Local growth",
    title: "What should a Birmingham business post on TikTok?",
    description: "A practical guide to creating TikTok content that helps Birmingham restaurants, retailers and local services get remembered.",
    intro: "The best local content is not about copying every trend. It makes a real person stop, understand why your business matters, and gives them a reason to visit, buy or message you.",
    readTime: "5 min read",
    publishedDate: "2026-08-05",
    dateDisplay: "5 August 2026",
    sections: [
      {
        heading: "Start with the reason people should care",
        paragraphs: [
          "Before picking a song, transition or camera angle, get clear on the one thing a customer should remember. Restaurants might have a dish people travel for. A shop might have a product range people do not realise is nearby. A service business might solve a problem customers have been putting off for months.",
          "That reason is your hook. It is more useful than trying to sound viral, because it gives the video an actual job. Your content should make the viewer think: I need to try that, I did not know they did that, or I know exactly who needs this.",
        ],
      },
      {
        heading: "Use three simple content pillars",
        paragraphs: [
          "You do not need to reinvent your social media every week. Most local businesses can build a strong feed using a small set of repeatable video types. The trick is changing the subject, product, person or offer — not the whole format.",
        ],
        bullets: [
          "Proof: show the food, product, process, result or quality people will get.",
          "People: let the owner, chef, staff member or customer bring warmth and personality.",
          "Prompt: give a direct reason to visit, enquire, book or save the post.",
        ],
      },
      {
        heading: "Make the first second clear",
        paragraphs: [
          "A local business does not need a huge production to earn attention. It needs a clear first moment. Put the best visual, strongest statement or most useful question at the very start. A sizzling dish, a striking before-and-after, a founder saying something people actually want to know — these all work because they make the subject obvious instantly.",
          "Avoid slow intros, logos before the content, or trying to explain everything at once. Let the video earn attention first, then give the detail.",
        ],
      },
      {
        heading: "Keep it local without making it small",
        paragraphs: [
          "Mentioning Birmingham, your area or the type of customer you serve can make the right people feel like the video is for them. A great local post still looks good to anyone, but it speaks directly to the people who can walk through your door or recommend you to a friend.",
          "Use your actual location, real team and real customers. That is an advantage — it is difficult for bigger, generic brands to copy the feeling of a business that genuinely belongs in its community.",
        ],
      },
      {
        heading: "A good first month",
        paragraphs: [
          "If you are just starting, do not aim to post every day. Aim for six strong videos you can spread across a month. One hero video, two product or food videos, one people-led clip, one useful answer and one direct offer gives you a balanced start.",
          "Watch what gets saves, shares, comments and real enquiries. Those signals tell you what customers want more of. Then make the next content day easier by repeating what worked with a sharper angle.",
        ],
      },
    ],
  },
  {
    slug: "how-many-videos-from-one-content-shoot",
    category: "Shoot planning",
    title: "How many videos should one content shoot create?",
    description: "How local businesses can turn one well-planned content day into a useful bank of short-form videos.",
    intro: "One content shoot should not leave you with one post. With a focused plan, a few hours of filming can give you a useful bank of videos that lasts weeks — without getting in the way of the business.",
    readTime: "6 min read",
    publishedDate: "2026-08-05",
    dateDisplay: "5 August 2026",
    sections: [
      {
        heading: "Think in content bank, not one video",
        paragraphs: [
          "The biggest mistake is treating a shoot like a single advert. A stronger approach is to capture several short stories at once: the hero piece, the close-up, the customer question, the team moment, the offer and the behind-the-scenes clip.",
          "Each video can do a different job. One brings new people in, another builds trust, another makes an offer easy to understand. That variety stops your feed from feeling repetitive while keeping the filming efficient.",
        ],
      },
      {
        heading: "Six videos is a strong content-day target",
        paragraphs: [
          "For most restaurants, shops and local services, six polished short videos from one content day is a practical target. It gives you enough to post once or twice a week for a month, and enough variety to learn what your audience responds to.",
        ],
        bullets: [
          "One hero reel that shows the overall experience or strongest reason to choose you.",
          "Two detailed product, food or service clips that focus on a specific reason to buy.",
          "One people-led video where someone explains, recommends or reacts.",
          "One useful answer to a customer question.",
          "One direct offer, launch or call-to-action video.",
        ],
      },
      {
        heading: "Plan the hooks before the camera arrives",
        paragraphs: [
          "The videos feel stronger when you agree the hook first. It can be as simple as: Birmingham’s hidden gem for grilled chicken, three things you get when you book with us, or the one product customers keep coming back for.",
          "This avoids spending a whole shoot collecting random clips with no clear use. The best shoots still leave room for spontaneous moments, but everyone knows the useful videos that need to be captured before the day ends.",
        ],
      },
      {
        heading: "Make space for real people",
        paragraphs: [
          "A content bank becomes much more useful when it includes people as well as close-ups. A chef finishing a dish, an owner explaining a product, a team member answering a question or a customer reaction can become the most trusted piece of the batch.",
          "Nobody needs to memorise a script. A few natural prompts and a clear reason for the video is normally enough. People respond to confidence and clarity, not perfection.",
        ],
      },
      {
        heading: "Post, learn, then repeat",
        paragraphs: [
          "A good shoot is only the start. Space the videos out, give each one a useful caption and look at what actually brings comments, saves, shares and messages. The next shoot should build on those winners instead of starting from scratch.",
          "That is why monthly content works well for growing businesses. The first month helps you find the strongest angles; the next months help you turn them into a recognisable content rhythm.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
