document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('searchForm');
  const queryInput = document.getElementById('query');
  const resultsDiv = document.getElementById('results');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = queryInput.value.trim();

    if (!query) return;

    const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Clear old results
      resultsDiv.innerHTML = '';

      // Loop through each show in the results
      data.forEach(tvShow => {
        const show = tvShow.show;

        // Create article container
        const article = document.createElement('article');

        // Name in <h2>
        const title = document.createElement('h2');
        title.textContent = show.name;
        article.appendChild(title);

        // Link in <a> with target="_blank"
        const link = document.createElement('a');
        link.href = show.url;
        link.textContent = "View Details";
        link.target = "_blank";
        article.appendChild(link);

        // Image with optional chaining
        if (show.image?.medium) {
          const image = document.createElement('img');
          image.src = show.image.medium;
          image.alt = show.name;
          article.appendChild(image);
        }

        // Summary in <div>
        const summary = document.createElement('div');
        summary.innerHTML = show.summary || "No summary available.";
        article.appendChild(summary);

        // Append article to results
        resultsDiv.appendChild(article);
      });

    } catch (error) {
      console.error('Error fetching data:', error);
      resultsDiv.innerHTML = '<p>Something went wrong. Try again later.</p>';
    }
  });
});
