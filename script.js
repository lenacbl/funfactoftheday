fetch('facts.json')
  .then(res => res.json())
  .then(data => {
    const today = new Date().toISOString().split('T')[0];

    let fact = data.find(f => f.date === today);

    if (!fact) {
      fact = data[data.length - 1];
    }

    document.getElementById('fact').innerHTML = `
      <h2>${fact.title}</h2>
      <p>${fact.fact}</p>
      <p>✨ ${fact.bonus}</p>
      <p>❓ ${fact.question}</p>
    `;
  });
