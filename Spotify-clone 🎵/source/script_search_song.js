function activateSearchPrediction() {
  const searchInput = document.getElementById("searchInput");
  const suggestionsBox = document.getElementById("suggestions");

  if (!searchInput || !suggestionsBox) return; // safety check

  const data = [
    "Why This Kolaveri Di - Dhanush",
    "Aaja Nachle - Madhuri Dixit",
    "Aye Mere Humsafar - Qayamat Se Qayamat Tak",
    "Blue Eyes - Yo Yo Honey Singh",
    "Crying - Bob Marley",
    "Chahun Main Ya Naa - Aashiqui 2",
    "Shape of You - Ed Sheeran",
    "Guzarish - Ghajini",
    "Janam Janam - Dilwale",
    "Saiyaara - Ahaan Panday",
    "Teri Meri - Bodyguard",
    "Tujhe Dekha To - DDLJ",
  ];

  searchInput.addEventListener("input", function () {
    const input = searchInput.value.toLowerCase();
    suggestionsBox.innerHTML = "";

    if (input === "") return;

    const filtered = data.filter((item) =>
      item.toLowerCase().startsWith(input)
    );

    filtered.forEach((match) => {
      const div = document.createElement("div");
      div.textContent = match;
      div.classList.add("suggestion-item"); // optional for styling
      div.addEventListener("click", () => {
        searchInput.value = match;
        suggestionsBox.innerHTML = "";
      });
      suggestionsBox.appendChild(div);
    });
  });
}
