fetch('facts.json')
  .then(res => res.json())
  .then(data => {
    const today = new Date().toISOString().split('T')[0];

    // fun fact du jour si présent, sinon le dernier (fallback)
    let fact = data.find(f => f.date === today) || data[data.length - 1];

    document.getElementById('dateBadge').textContent = fact.date || today;
    document.getElementById('title').textContent = fact.title || "Fun fact du jour";
    document.getElementById('factText').textContent = fact.fact || "";
    document.getElementById('bonusText').textContent = fact.bonus || "Bonus à venir ✨";
    document.getElementById('questionText').textContent = fact.question || "Question surprise demain 😄";

    // Petit footer sympa
    const n = data.length;
    document.getElementById('footerNote').textContent = `📌 ${n} fun fact${n>1?'s':''} dans l’historique`;
  })
  .catch(() => {
    document.getElementById('title').textContent = "Oups…";
    document.getElementById('factText').textContent = "Impossible de charger le fichier facts.json.";
  });
