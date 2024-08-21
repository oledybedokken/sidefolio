import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Ole</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that delivers a great user experience with the main goal of solving problems.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Master in Data Science from the University of Stavanger. I have a passion for data and technology, and I am always looking for new challenges and opportunities to learn and grow.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
      Over the past 5 years, I&apos;ve developed and launched multiple web apps, including an trading platform that now handles over 10,000 transactions monthly.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
