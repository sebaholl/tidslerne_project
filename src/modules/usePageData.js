import event1 from '@/images/event1.jpg'
import event2 from '@/images/event2.jpg'
import event3 from '@/images/event3.jpg'
import event4 from '@/images/event4.jpg'
import event5 from '@/images/event5.jpg'
import event6 from '@/images/event6.jpg'
import event7 from '@/images/event7.jpg'
import event8 from '@/images/event8.jpg'
import event9 from '@/images/event9.jpg'
import event10 from '@/images/event10.jpg'

import article1 from '/image/article1.jpg'
import article2 from '@/images/article2.jpg'
import article3 from '@/images/article3.jpg'
import article4 from '@/images/article4.jpg'
import article5 from '@/images/article5.jpg'
import article6 from '@/images/article6.jpg'
import article7 from '@/images/article7.jpg'
import article8 from '@/images/article8.jpg'
import article9 from '@/images/article9.jpg'
import article10 from '@/images/article10.jpg'
import article11 from '@/images/article11.jpg'
import article12 from '@/images/articles12.jpg'

export const events = [
  {
    id: 1,
    title: "Nutrition and Cancer – Online Talk",
    type: "Webinar",
    date: "2025-05-15",
    time: "17:00",
    image: event1,
    description: "Join us for a live session discussing the role of nutrition during and after cancer treatment.",
    author: "Tidslerne Team"
  },
  {
    id: 2,
    title: "Annual Summer Gathering",
    type: "Event",
    date: "2025-06-10",
    time: "13:00",
    image: event2,
    description: "A warm day full of community spirit, food, and sharing experiences with fellow members.",
    author: "Tidslerne Team"
  },
  {
    id: 3,
    title: "Complementary Treatments Abroad",
    type: "Workshop",
    date: "2025-07-01",
    time: "15:30",
    image: event3,
    description: "Learn more about alternative options outside Denmark with experienced patients and professionals.",
    author: "Tidslerne Team"
  },
  {
    id: 4,
    title: "Healing Through Movement",
    type: "Workshop",
    date: "2025-07-20",
    time: "10:00",
    image:  event4,
    description: "A gentle movement class designed to support healing and reduce stress.",
    author: "Tidslerne Team"
  },
  {
    id: 5,
    title: "Coping with Treatment: Shared Experiences",
    type: "Webinar",
    date: "2025-06-08",
    time: "17:00",
    image: event5,
    description: "A live talk with two survivors sharing how they handled side effects, fear, and recovery.",
    author: "Tidslerne Team"
  },
  {
    id: 6,
    title: "Creative Writing for Recovery",
    type: "Workshop",
    date: "2025-08-05",
    time: "14:00",
    image: event6,
    description: "Explore self-expression and healing through guided creative writing sessions.",
    author: "Tidslerne Team"
  },
  {
    id: 7,
    title: "Meet the Oncology Experts",
    type: "Webinar",
    date: "2025-09-12",
    time: "18:00",
    image: event7,
    description: "Join an open Q&A session with leading oncologists and support specialists.",
    author: "Tidslerne Team"
  },
  {
    id: 8,
    title: "Mindfulness and Relaxation",
    type: "Workshop",
    date: "2025-05-28",
    time: "09:00",
    image: event8,
    description: "Experience guided meditation and relaxation techniques to ease anxiety and pain.",
    author: "Tidslerne Team"
  },
  {
    id: 9,
    title: "Nutrition Q&A – Live with a Dietitian",
    type: "Webinar",
    date: "2025-06-18",
    time: "16:00",
    image: event9,
    description: "Get answers to your nutrition questions from an experienced clinical dietitian.",
    author: "Tidslerne Team"
  },
  {
    id: 10,
    title: "Art and Expression Therapy",
    type: "Workshop",
    date: "2025-07-15",
    time: "11:00",
    image: event10,
    description: "Unleash creativity and explore emotional healing through art-based exercises.",
    author: "Tidslerne Team"
  }
];


// usePageData.js

export const articles = [
  {
    id: 1,
    title: "Understanding Late Effects of Treatment",
    category: "Recovery",
    date: "2025-05-09",
    image: article1,
    description: "Explore what long-term effects cancer treatment can have and how to manage them effectively.",
    content: [
      "Cancer treatment saves lives, but it can also leave behind long-term effects on the body and mind.",
      "One of the most common issues is fatigue, which can persist for months or even years. Other side effects include cognitive changes, often referred to as 'chemo brain', nerve damage (neuropathy), and emotional challenges such as anxiety or depression.",
      "It's important for survivors to track their symptoms and communicate openly with their healthcare providers.",
      "Regular exercise, a balanced diet, and mental health support can help ease many of these lingering effects.",
      "Support groups and counseling can also play a vital role in emotional recovery.",
      "By understanding what to expect and building a proactive care plan, survivors can navigate the post-treatment phase with confidence and support."
    ]
  },
  {
    id: 2,
    title: "Nutrition Tips During Chemotherapy",
    category: "Nutrition",
    date: "2025-04-22",
    image: article2,
    description: "Discover which foods can help maintain strength and reduce nausea during treatment.",
    content: [
      "Nutrition plays a critical role during cancer treatment.",
      "Eating well can help patients maintain strength, manage treatment side effects, and speed up recovery.",
      "Protein-rich foods like chicken, eggs, tofu, and legumes are especially important.",
      "Hydration is key. Drinking plenty of water and electrolyte-rich fluids supports organ function.",
      "When experiencing nausea, bland foods such as crackers, rice, and bananas can provide relief.",
      "Small, frequent meals and snacks often work better than large meals. Avoid strong smells and spicy or greasy foods if they cause discomfort.",
      "A registered dietitian can offer personalized guidance based on individual needs and side effects."
    ]
  },
  {
    id: 3,
    title: "Mindfulness Techniques for Anxiety",
    category: "Mental Health",
    date: "2025-03-15",
    image: article3,
    description: "Learn how mindfulness can help reduce stress and anxiety in cancer patients.",
    content: [
      "Mindfulness is a powerful tool that helps people stay grounded and reduce stress.",
      "Cancer patients often experience high levels of anxiety before, during, and after treatment.",
      "Practicing mindfulness through deep breathing, meditation, or body scans can promote calmness and clarity.",
      "Even 10 minutes a day can make a difference. Apps and online videos can be great resources.",
      "Mindfulness encourages acceptance and non-judgment, helping patients cope with uncertainty.",
      "Group sessions or yoga classes focused on mindfulness can offer community and emotional support."
    ]
  },
  {
    id: 4,
    title: "Complementary Therapies Worth Exploring",
    category: "Alternative",
    date: "2025-02-28",
    image: article4,
    description: "Explore acupuncture, massage, and herbal remedies used alongside traditional treatment.",
    content: [
      "Complementary therapies can help manage side effects of cancer treatment.",
      "Acupuncture has shown promise in reducing nausea and managing chronic pain.",
      "Massage therapy can improve sleep and lower stress hormone levels.",
      "Herbal supplements should always be discussed with a doctor to avoid interaction with medications.",
      "These therapies are not a replacement for medical treatment but can support holistic care.",
      "Always seek certified professionals when exploring alternative care."
    ]
  },
  {
    id: 5,
    title: "Staying Active During Treatment",
    category: "Recovery",
    date: "2025-01-10",
    image: article5,
    description: "Physical activity can help reduce fatigue and improve quality of life.",
    content: [
      "Exercise has proven benefits for cancer patients and survivors.",
      "Activities like walking, yoga, and light strength training can combat fatigue and improve mood.",
      "Always consult your doctor before beginning a new fitness routine.",
      "Start slow, listen to your body, and find something you enjoy.",
      "Even short 10-minute walks can boost energy and lower stress levels.",
      "Consistency is key — small steps add up to big changes."
    ]
  },
  {
    id: 6,
    title: "Foods That Fight Cancer",
    category: "Nutrition",
    date: "2025-01-05",
    image: article6,
    description: "Discover cancer-fighting foods you can add to your diet today.",
    content: [
      "Certain foods are rich in compounds that help fight cancer at the cellular level.",
      "Cruciferous vegetables like broccoli, cauliflower, and kale contain sulforaphane, which supports detoxification.",
      "Berries are loaded with antioxidants that protect cells from damage.",
      "Garlic and onions contain sulfur compounds that may slow tumor growth.",
      "Green tea, turmeric, and tomatoes are also excellent additions to an anti-cancer diet.",
      "Incorporating these foods regularly promotes overall wellness and supports the immune system."
    ]
  },
  {
    id: 7,
    title: "How to Talk to Children About Cancer",
    category: "Mental Health",
    date: "2024-12-18",
    image: article7,
    description: "Honest conversations can help children cope and feel safe during a parent’s illness.",
    content: [
      "Children sense when something is wrong. Avoiding the topic may increase their anxiety.",
      "Use simple, age-appropriate language to explain the situation.",
      "Encourage questions and answer them honestly without overwhelming them.",
      "Let them know it’s okay to feel sad, angry, or confused.",
      "Maintain routines when possible and provide reassurance of love and care.",
      "Books and support groups for children of cancer patients can also help."
    ]
  },
  {
    id: 8,
    title: "Natural Remedies for Nausea",
    category: "Alternative",
    date: "2024-12-01",
    image: article8,
    description: "Ginger, peppermint, and other natural options that may relieve nausea.",
    content: [
      "Nausea is a common side effect of chemotherapy.",
      "Ginger, taken as tea or in capsule form, is widely known for its anti-nausea properties.",
      "Peppermint oil and chamomile tea may also provide relief.",
      "Aromatherapy and acupressure wristbands are additional non-drug options.",
      "Keep a symptom diary to identify triggers and patterns.",
      "Always consult your care team before starting herbal remedies."
    ]
  },
  {
    id: 9,
    title: "Managing Chemobrain: Tips for Clarity",
    category: "Mental Health",
    date: "2024-11-10",
    image: article9,
    description: "Strategies for dealing with memory and focus issues after treatment.",
    content: [
      "'Chemobrain' affects concentration, memory, and multitasking.",
      "Create structured routines and use planners or phone reminders.",
      "Break tasks into smaller steps and avoid distractions.",
      "Brain games and puzzles may improve cognitive flexibility.",
      "Sleep, hydration, and exercise also boost mental performance.",
      "If symptoms persist, consult a specialist for cognitive rehabilitation options."
    ]
  },
  {
    id: 10,
    title: "Meal Planning During Radiation",
    category: "Nutrition",
    date: "2024-10-25",
    image: article10,
    description: "Plan meals that are gentle on the digestive system and rich in nutrients.",
    content: [
      "Radiation can cause appetite loss, mouth sores, and difficulty swallowing.",
      "Choose soft foods like soups, smoothies, mashed vegetables, and scrambled eggs.",
      "Nutrient-dense snacks such as Greek yogurt or nut butters provide calories without volume.",
      "Try eating small amounts throughout the day.",
      "Avoid very hot, spicy, or acidic foods that may irritate tissues.",
      "Stay hydrated with herbal teas, broth, and water.",
      "A dietitian can tailor a plan to meet your energy needs and ease digestion."
    ]
  },
  {
    id: 11,
    title: "Herbal Supplements and Cancer: What You Should Know",
    category: "Alternative",
    date: "2024-10-10",
    image:  article11,
    description: "An honest look at the risks and benefits of popular herbal remedies.",
    content: [
      "Herbal remedies are often marketed as natural and safe, but they can interact with medications.",
      "Common supplements include turmeric, echinacea, and ginseng.",
      "While some may offer symptom relief, others may hinder treatment or cause side effects.",
      "Talk to your oncologist before starting any supplement regimen.",
      "Ensure products are from reputable sources and properly labeled.",
      "Natural doesn’t always mean harmless — be cautious and well-informed."
    ]
  },
  {
    id: 12,
    title: "Building a Support Network",
    category: "Recovery",
    date: "2024-09-25",
    image: article12,
    description: "Support from others can improve outcomes and reduce isolation.",
    content: [
      "No one should face cancer alone. A strong support network is essential.",
      "Family, friends, support groups, and counselors each play a role.",
      "Ask for help when needed — whether it’s with transportation, meals, or emotional support.",
      "Online communities and local organizations offer valuable connections.",
      "Surrounding yourself with positivity and understanding boosts resilience.",
      "It’s okay to lean on others. Connection can be one of the most healing forces."
    ]
  }
];

