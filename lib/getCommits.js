// lib/getCommits.js
import axios from 'axios';

const getCommits = async () => {
  try {
    const username = 'amanraox';
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

    const { data: repos } = await axios.get(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    let totalCommits = 0;

    for (const repo of repos) {
      const commits = await axios.get(
        `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`,
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );

      const linkHeader = commits.headers.link;
      if (linkHeader) {
        const lastPageMatch = linkHeader.match(/&page=(\d+)>; rel="last"/);
        if (lastPageMatch) {
          totalCommits += parseInt(lastPageMatch[1], 10);
        }
      } else {
        totalCommits += commits.data.length;
      }
    }

    return totalCommits;
  } catch (error) {
    console.error('Error fetching commits:', error);
    return 2793; // Fallback value
  }
};

export default getCommits;

