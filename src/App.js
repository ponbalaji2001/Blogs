import './App.css';
import Header from './Header.js';
import BlogList from './BlogList.js';
import { useState } from 'react';
import { Route, Redirect, useHistory  } from 'react-router-dom';
import BlogSingle from './BlogSingle';
import ManageBlog from './manageBlog.js';

function App() {
  const blogLists = [
    {
        "id": "1",
        "imgurl": "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f8ce9de833d_photo-1433854304641-67729357fe18.jpg",
        "title": "Sunny Side Up",
        "description": "No place is ever as bad as they tell you it’s going to be. Often, our fears and anxieties paint a picture far worse than reality. When we confront these fears, we discover that the world is not as daunting as it seems. Every new place we visit and every new experience we have teaches us something valuable. Travel broadens our perspectives and helps us see the beauty in diversity. It reminds us that despite the differences, we share a common humanity. The journey is as important as the destination, and each moment is an opportunity to learn and grow. When you travel, you immerse yourself in different cultures, traditions, and ways of life. This exposure to diversity enriches your understanding of the world and helps you develop a more inclusive and empathetic mindset. You learn to appreciate the nuances that make each culture unique, and this appreciation fosters a sense of respect and tolerance. As you navigate through unfamiliar territories, you develop problem-solving skills and adaptability. You learn to think on your feet, make quick decisions, and find solutions in challenging situations. Travel also has a profound impact on personal growth. It pushes you out of your comfort zone and challenges you to overcome obstacles. Each journey presents an opportunity to confront your fears and insecurities, helping you build resilience and confidence. The experiences you gain while traveling contribute to your personal narrative, shaping you into a more rounded individual. The memories created during your travels become cherished stories that you carry with you for a lifetime. Moreover, travel provides a break from the routine and monotony of daily life. It offers a chance to unwind, relax, and recharge. Stepping away from your usual environment allows you to gain a fresh perspective on life. It helps you appreciate the simple joys and find beauty in the ordinary. The change of scenery and pace can be rejuvenating, providing a renewed sense of energy and enthusiasm. Traveling also fosters a sense of adventure and curiosity. It ignites a passion for exploration and discovery. The thrill of uncovering new places, tasting exotic cuisines, and meeting interesting people adds excitement to life. Each journey becomes a quest for knowledge and new experiences. The world is vast and full of wonders waiting to be explored, and traveling is the key to unlocking these treasures."
                      +"Furthermore, travel enhances your social skills and helps you build meaningful connections. Interacting with people from different backgrounds broadens your social network and introduces you to diverse perspectives. The friendships formed during your travels often transcend geographical boundaries and become lifelong bonds. Sharing experiences and stories with fellow travelers creates a sense of camaraderie and community. In conclusion, travel is a transformative experience that goes beyond mere sightseeing. It is an opportunity for personal growth, cultural enrichment, and adventure. It teaches valuable life lessons and helps you become a more adaptable, empathetic, and resilient individual. The world is a vast classroom, and travel is the most effective way to learn. So, embrace the journey with an open heart and mind, and let the adventures unfold. No place is ever as bad as they tell you it’s going to be; often, it is far more beautiful and enriching than you could have imagined.",
        "author": {
            "authorid": 2,
            "name": "Mat Vogels",
            "date": "03/12/2014"
        }
    },
    {
      "id": "2",
      "imgurl": "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f7caade8338_photo-1431329842981-433c8635c2b9.jpg",
      "title": "Still Standing Tall",
      "description": "Life begins at the end of your comfort zone. It is when you step out into the unknown, into the realm of possibilities, that you truly begin to live. The comfort zone is a beautiful place, but nothing ever grows there. It is the adversities and challenges that shape us, mold us, and bring out the best in us. The journey of life is not about avoiding these challenges, but embracing them with courage and resilience. It is about standing tall in the face of difficulties and knowing that you have the strength to overcome them. Each step you take outside your comfort zone brings new opportunities for growth and self-discovery. As you push your boundaries, you discover strengths you never knew you had and capabilities you never realized you possessed. Stepping outside your comfort zone also brings a fresh perspective on life, allowing you to see the world in a new light. Taking risks and embracing uncertainties can be daunting, but they are essential for personal development. When you challenge yourself, you gain confidence and resilience, learning to navigate through life's ups and downs with grace. The journey of stepping outside your comfort zone is a continuous one, filled with moments of doubt and fear. However, it is in these moments that you grow the most. Each obstacle you overcome adds to your strength, making you more prepared for the next challenge. The beauty of life lies in its unpredictability, and by stepping outside your comfort zone, you embrace this unpredictability with open arms. Moreover, venturing into the unknown fosters creativity and innovation. It forces you to think differently and come up with solutions that you might not have considered before. This creative problem-solving is not just beneficial in personal life but also in professional settings. The ability to adapt and innovate is highly valued in today's fast-paced world. By continuously challenging yourself, you keep your mind sharp and your skills relevant. The process of stepping outside your comfort zone is a transformative one. It changes you fundamentally, helping you become a more well-rounded individual. "
                    +"In addition, stepping outside your comfort zone helps you build stronger relationships. When you take risks and face challenges together, you form deeper connections with others. Shared experiences, especially those that involve overcoming obstacles, create lasting bonds. These relationships become a source of support and encouragement, helping you stay motivated on your journey of personal growth. The comfort zone may feel safe and familiar, but true fulfillment lies beyond it. Embracing the unknown, taking risks, and facing challenges head-on lead to a richer, more rewarding life. So, step outside your comfort zone and embrace the journey of self-discovery and growth. Life begins at the end of your comfort zone, and the possibilities are endless.",
      "author": {
          "authorid": 1,
          "name": "William Wong",
          "date": "05/19/2015"
      }
    },
    {
      "id": "3",
      "imgurl": "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f1017de8349_photo-1433155327100-12aac6a14ff1.jpg",
      "title": "Awaken Early",
      "description": "Not all those who wander are lost. This famous quote by J.R.R. Tolkien encapsulates the spirit of adventure and exploration. It suggests that wandering, far from being aimless, can be a purposeful pursuit of discovery and self-awareness. Those who wander often seek to understand the world and their place in it. They are driven by curiosity and a desire to experience life in its fullest. To awaken early is to seize the opportunities that each day brings, to greet the world with a sense of wonder and anticipation. Traveling early in the morning offers a unique perspective on the world. The serenity of dawn, with its gentle light and calm atmosphere, provides a perfect backdrop for reflection and contemplation. It’s a time when the world is still waking up, and you have the chance to witness its beauty in solitude. The early hours are often the best time to explore new places, free from the hustle and bustle of crowds. The quiet streets, the empty landscapes, and the peaceful ambiance allow you to connect with your surroundings on a deeper level. Moreover, waking up early and embarking on a journey can set a positive tone for the rest of the day. It instills a sense of accomplishment and motivation, knowing that you are making the most of your time. The early bird catches the worm, as the saying goes, and by starting your day early, you position yourself to take advantage of opportunities that others might miss. Whether it’s catching a breathtaking sunrise, exploring a new trail, or simply enjoying a quiet moment of reflection, the early hours hold a special kind of magic. Traveling also provides a unique opportunity to disconnect from the digital world and reconnect with the natural one. In a society that is increasingly reliant on technology, taking a break from screens and immersing yourself in nature can be incredibly refreshing. The sights, sounds, and smells of the natural world can have a grounding effect, helping you to feel more present and mindful. This connection with nature is not only beneficial for your mental health but also fosters a greater appreciation for the environment and the need to protect it. "
                    +"Furthermore, the act of wandering and exploring new places can lead to unexpected discoveries and serendipitous encounters. It’s often in the unplanned moments that we find the most joy and wonder. A hidden café, a picturesque viewpoint, a chance meeting with a local – these are the experiences that make travel so enriching and memorable. By embracing the spirit of wandering, you open yourself up to a world of possibilities and adventures. In addition, travel teaches us valuable life lessons. It shows us that there is more to life than the routine and the familiar. It encourages us to be adaptable, to embrace change, and to see challenges as opportunities for growth. The skills and insights gained from traveling can be applied to all areas of life, making us more resilient, resourceful, and open-minded. The journey itself becomes a metaphor for life, with all its twists, turns, and unexpected detours. In conclusion, to awaken early and wander is to embrace life’s adventures with an open heart and a curious mind. It’s a reminder that the world is full of wonders waiting to be discovered. Not all those who wander are lost; some are simply on a path of exploration and self-discovery. By seizing the opportunities that each day brings, and by embracing the spirit of wandering, we can live more fulfilling and enriched lives. So, wake up early, step outside, and let the journey begin. There is a whole world out there waiting to be explored, and the adventures are endless.",
      "author": {
          "authorid": 2,
          "name": "Mat Vogels",
          "date": "09/08/2016"
      }
    },
    {
      "id": "4",
      "imgurl": "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f5e3ede8340_photo-1441906363162-903afd0d3d52.jpg",
      "title": "Water Falls",
      "description": "We travel not to escape life, but for life not to escape us. This statement captures the essence of why many of us feel a deep-seated need to explore the world. Travel is not just about seeing new places; it’s about immersing ourselves in different cultures, experiencing the diversity of life, and enriching our souls. It’s a way to break free from the monotony of daily routines and rediscover the joy of living. Each journey we undertake is a step towards understanding the world and ourselves better. The experiences we gain while traveling become an integral part of who we are. Traveling allows us to step outside our comfort zones and embrace the unknown. It’s an opportunity to challenge ourselves, to face our fears, and to grow stronger. The memories we create while traveling become treasured stories that we carry with us for a lifetime. Each adventure brings new lessons, new friends, and new perspectives. It’s through these experiences that we learn to appreciate the beauty of diversity and the richness of different cultures. Moreover, travel has a transformative power. It changes us in ways we never thought possible. It opens our eyes to the world’s wonders and the myriad of ways people live their lives. It teaches us to be more adaptable, patient, and open-minded. We learn to navigate through unfamiliar territories, communicate across language barriers, and adapt to new environments. These skills are invaluable and help us become more resilient and resourceful. Travel also provides a much-needed break from the hustle and bustle of everyday life. It’s a chance to unwind, relax, and rejuvenate. The change of scenery and pace can do wonders for our mental and physical well-being. Whether it’s a serene beach, a bustling city, or a tranquil mountain retreat, each destination offers its unique form of therapy. The time spent in these places allows us to reflect, recharge, and return to our daily lives with a renewed sense of purpose and energy. Furthermore, travel fosters a sense of curiosity and adventure. It ignites a passion for exploration and discovery. Each new place we visit, each new culture we experience, adds a layer of richness to our lives. The thrill of uncovering hidden gems, tasting new cuisines, and meeting new people makes every journey an exciting adventure. It’s this sense of wonder that keeps our spirits alive and makes life more fulfilling."
                    +"Traveling also helps us build meaningful connections with others. The friendships we form while traveling are often deep and lasting. Sharing experiences, overcoming challenges, and exploring new places together creates strong bonds. These relationships enrich our lives and provide a network of friends around the world. They remind us that despite our differences, we all share a common humanity. In conclusion, travel is not just a physical journey but a journey of the soul. It’s a way to escape the mundane and embrace the extraordinary. It’s a means to grow, learn, and connect with the world and its people. Each trip we take adds to the tapestry of our lives, making it more vibrant and colorful. So, let us travel not to escape life, but for life not to escape us. Let us embrace the adventures, the challenges, and the beauty that travel brings, and let it enrich our lives in ways we never imagined.",
      "author": {
          "authorid": 2,
          "name": "Mat Vogels",
          "date": "09/21/2017"
      }
    },
    {
        "id": "5",
        "imgurl": "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f9857de8342_photo-1442347504183-965bd14449ac.jpg",
        "title": "Through the Mist",
        "description": "Travel makes you see what a tiny place you occupy in the world. This realization can be both humbling and enlightening. As you journey through different lands, you begin to understand the vastness of the world and the diversity of its inhabitants. Each new place you visit offers a glimpse into a different way of life, a different set of beliefs, and a different perspective on what it means to live. The more you travel, the more you appreciate the richness of human experience and the beauty of our planet. Traveling through the mist, metaphorically speaking, is about navigating the uncertainties and unknowns that come with exploring new territories. It’s about embracing the journey, even when the path is unclear. The mist represents the challenges and obstacles that can obscure our vision and make the journey seem daunting. But it also adds an element of mystery and adventure. Each step forward, though shrouded in uncertainty, brings with it the promise of discovery and growth. Moreover, travel teaches us to be more adaptable and resilient. When we find ourselves in unfamiliar environments, we learn to navigate through them, often with little prior knowledge or preparation. This ability to adapt is a valuable life skill that extends beyond travel. It helps us cope with the unexpected twists and turns that life inevitably throws our way. We learn to embrace change, to be flexible in our thinking, and to find solutions in the face of adversity. Traveling also fosters a deeper connection with nature. As we traverse through mountains, forests, and oceans, we develop a greater appreciation for the natural world. We become more aware of our impact on the environment and the importance of preserving it. The beauty of nature, often seen through the mist, reminds us of the delicate balance that sustains life on Earth. This awareness can inspire us to live more sustainably and to take actions that protect our planet. In addition, travel encourages personal growth and self-discovery. Each journey is an opportunity to learn more about ourselves, our strengths, and our limitations. We are challenged to step out of our comfort zones, to confront our fears, and to push our boundaries. The experiences we gain while traveling contribute to our personal development, making us more confident and self-assured. The journey through the mist is a journey inward as much as it is outward."
                      +"Furthermore, travel brings people together. It bridges cultural gaps and fosters understanding and empathy. When we interact with people from different backgrounds, we learn to appreciate their perspectives and experiences. These interactions can challenge our preconceived notions and broaden our horizons. They remind us that despite our differences, we share common values and aspirations. The connections we make while traveling enrich our lives and create a sense of global community. In conclusion, travel is a powerful catalyst for change and growth. It helps us see the world from new perspectives, to understand our place in it, and to appreciate the diversity of human experience. The journey through the mist, though filled with uncertainties, is a journey worth taking. It challenges us, teaches us, and ultimately transforms us. So, embrace the mist, step into the unknown, and let the journey of travel enrich your life in ways you never imagined. Travel makes you see what a tiny place you occupy in the world, and this realization can lead to a deeper appreciation for the vast and beautiful tapestry of life.",
        "author": {
            "authorid": 1,
            "name": "William Wong",
            "date": "04/18/2021"
        }
    }
  ]

const history = useHistory();

const [blogs, setBlogs]= useState(blogLists)

function onAddBlog(blogData){
  setBlogs((previousBlogs)=>{
    return [...previousBlogs, blogData]
  });
}

function onEditBlog(updatedBlog) {
  setBlogs((previousBlogs) => {
    return previousBlogs.map((blog) => blog.id === updatedBlog.id ? updatedBlog : blog);
  });
}

function onDeleteBlog(blogId) {
  setBlogs((previousBlogs) => {
    return previousBlogs.filter((blog) => blog.id !== blogId);
  });
  history.push('/blogs');
}

  return (
    <div className="App">
      <Header></Header>
      <Route path={`/manageblog/:option/:blogId`}>
         <ManageBlog blogData={blogs} onAddBlog={onAddBlog} onEditBlog={onEditBlog}></ManageBlog>
      </Route>
      <Route path="/blogs">
         <BlogList blogData={blogs}></BlogList>
      </Route>
      <Route exact path="/">
          <Redirect to="/blogs" />
      </Route>
      <Route path="/blog/:blogId">
         <BlogSingle blogData={blogs} onDeleteBlog={onDeleteBlog}></BlogSingle>
      </Route>
    </div>
  );
}

export default App;
