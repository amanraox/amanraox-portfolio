"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import getCommits from "../lib/getCommits";

const Stats = () => {
  const [commitCount, setCommitCount] = useState(null);
  const [coffeeCount, setCoffeeCount] = useState(674);

  useEffect(() => {
    const fetchCommitCount = async () => {
      const commits = await getCommits();
      setCommitCount(commits);
    };

    fetchCommitCount();
    const storedCoffeeCount = localStorage.getItem('coffeeCount');
    const storedCoffeeDate = localStorage.getItem('coffeeDate');
    const today = new Date().toISOString().split('T')[0];

    if (storedCoffeeCount && storedCoffeeDate === today) {
      setCoffeeCount(parseInt(storedCoffeeCount, 10));
    } else {
      const increment = Math.floor(Math.random() * 2) + 1;
      const newCoffeeCount = storedCoffeeCount ? parseInt(storedCoffeeCount, 10) + increment : 674 + increment;
      setCoffeeCount(newCoffeeCount);
      localStorage.setItem('coffeeCount', newCoffeeCount.toString());
      localStorage.setItem('coffeeDate', today);
    }
  }, []);

  const stats = [
    {
      num: 9,
      text: "Projects Completed",
    },
    {
      num: 12,
      text: "Technologies Mastered",
    },
    {
      num: coffeeCount,
      text: "Cups of Coffee",
    },
    {
      num: commitCount !== null ? commitCount : 2793,
      text: "Code Commits",
    },
  ];

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              key={index}
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
