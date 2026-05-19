fetch('facts.json')
  .then(res => res.json())
  .then(data => {
    const today = new Date().toISOString().split('T')[0];

    // Fun fact du jour si présent, sinon le dernier (fallback)
    const fact = data.find(f => f.date === today) || data[data.length - 1];

    document.getElementById('dateBadge').textContent = fact.date || today;
    document.getElementById('title').textContent = fact.title || "Fun fact du jour";
    document.getElementById('factText').textContent = fact.fact || "";
    document.getElementById('bonusText').textContent = fact.bonus || "Bonus à venir ✨";
    document.getElementById('questionText').textContent = fact.question || "Question surprise demain 😄";

    // Source cliquable si disponible
    const sourceBtn = document.getElementById('sourceBtn');
    if (fact.source) {
      sourceBtn.href = fact.source;
      sourceBtn.style.display = "inline-flex";
    }

    // Footer
    const n = data.length;
    document.getElementById('footerNote').textContent = `📌 ${n} fun fact${n>1?'s':''} dans l’historique`;
  })
  .catch(() => {
    document.getElementById('title').textContent = "Oups…";
    document.getElementById('factText').textContent = "Impossible de charger le fichier facts.json.";
  });
