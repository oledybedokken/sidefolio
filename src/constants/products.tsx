import norskinsPreview from "public/images/norskins-preview.png";
import norskinsSecond from "public/images/norskins-second.png";
import skinswapPreview from "public/images/skinswap-preview.png";
import skinswapSecond from "public/images/skinswap-second.png";
import chatbotPreview from "public/images/chatbot-preview.jpeg";
import chatbotSecond from "public/images/chatbotwithanswer.png"
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "https://norskins.no",
    title: "Norskins",
    description:"CEO and founder of Norskins, the leading Norwegian trading platform for CS2 skins. I made the site from scratch by myself and maintained it.",
    thumbnail: norskinsPreview,
    images: [norskinsPreview, norskinsSecond],
    stack: ["Nextjs", "Tailwindcss", "MUI", "AWS","Nodejs","PostgreSQL"],
    slug: "norskins",
    content: (
      <div>
       <p>
        <strong>Norskins</strong> is a premier Norwegian trading platform where users can buy and sell CS2 skins for real money. Our platform is designed with a focus on security, ease of use, and speed, ensuring that transactions are safe and seamless for all users. Whether you&apos;re looking to purchase a rare skin or sell one of your own, Norskins offers a reliable marketplace with competitive pricing.
      </p>
      <p>
        Our tech stack includes <strong>Next.js</strong> for a robust and responsive user interface, <strong>TailwindCSS</strong> for modern and flexible design, and <strong>MUI</strong> for advanced UI components. On the backend, we utilize <strong>AWS</strong> for scalable cloud infrastructure, <strong>Node.js</strong> for efficient server-side processing, and <strong>PostgreSQL</strong> for secure and reliable database management.
      </p>
      <p>
       I started Norskins in the end of 2023, and as of now we have over 2367 registered users and 1000+ transactions with a total revenue of <strong>10 Million Kroner</strong>.
      </p>
      </div>
    ),
  },
  {
    href: "https://skinswap.com",
    title: "Skinswap",
    description:
      "Full-stack development of a trading platform for CS2 skins. One of the worlds leading platforms for trading CS2 skins.",
    thumbnail: skinswapPreview,
    images: [skinswapPreview,skinswapSecond],
    stack: ["Nextjs", "Tailwindcss","nodejs","express","mongodb","PostgreSQL","Stripe API"],
    slug: "skinswap",
    content: (
      <div>
         <p>
    SkinSwap.com is an innovative platform that enables users to trade and exchange their CS:GO skins in a fast, secure, and user-friendly environment. As a full stack developer on this project, I was responsible for both front-end and back-end development, ensuring the platform delivers a seamless experience for our users.
  </p>
  <p>
    On the front end, I utilized <strong>React.js</strong> for a dynamic and responsive user interface, combined with <strong>TailwindCSS</strong> to create a modern and visually appealing design. The back end was built using <strong>Node.js</strong> and <strong>Express</strong>, providing a robust and scalable server-side framework. Additionally, we used <strong>MongoDB</strong> for a flexible and performant database solution, and <strong>AWS</strong> for cloud hosting and deployment, ensuring high availability and security.
  </p>
  <p>
    My role involved developing core features such as frontend development, secure payment integration, and user authentication. I also worked closely with the design and product teams to continuously improve the platform&apos;s functionality and user experience. Through these efforts, SkinSwap.com has become a trusted platform for CS:GO skin trading, offering a reliable marketplace for gamers worldwide.
  </p>
      </div>
    ),
  },
  {
    title: "Laerdal Chatbot",
    description:
      "AI chatbot for Laerdal Medical, a high quality Agent Based Chatbot master thesis project.",
    thumbnail: chatbotPreview,
    images: [chatbotPreview, chatbotSecond],
    stack: ["Python", "Streamlit", "Langchain"],
    slug: "chatbot",
    content: (
      <div>
        <p>
        This self-reflective solution handles advanced user prompts and can significantly boost efficiency at Laerdal by performing tasks rapidly and cost-effectively. Features include fast retrieval of employee information, updated daily, to facilitate global internal communication and collaboration. Additionally, it can understand and generate images with live data from the internet using various tools in combination.
        </p>
        <p>
          The project got graded an A, and was a my master thesis at UIS. It is now being used by Laerdal Medical as the project delivered high quality results.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://tailwindmasterkit.com",
    title: "Tailwind Master Kit",
    description:
      "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "tailwindmasterkit",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
];
