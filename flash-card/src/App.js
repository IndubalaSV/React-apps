import React from "react";

function App() {
  let cardData = [
    { id: 1, question: "Capital of India", answer: "Delhi" },
    { id: 2, question: "Capital of Russia", answer: "Moscow" },
    { id: 3, question: "Capital of USA", answer: "Washington DC" },
    { id: 4, question: "Capital of UK", answer: "London" },
    { id: 5, question: "Capital of France", answer: "Paris" },
    { id: 6, question: "Capital of Germany", answer: "Berlin" },
    { id: 7, question: "Capital of Canada", answer: "Ottawa" },
    { id: 8, question: "Capital of Australia", answer: "Canberra" },
    { id: 9, question: "Capital of Japan", answer: "Tokyo" },
    { id: 10, question: "Capital of China", answer: "Beijing" },
    { id: 11, question: "Capital of Italy", answer: "Rome" },
    { id: 12, question: "Capital of Spain", answer: "Madrid" },
    { id: 13, question: "Capital of Brazil", answer: "Brasilia" },
    { id: 14, question: "Capital of South Africa", answer: "Pretoria" },
    { id: 15, question: "Capital of Mexico", answer: "Mexico City" },
    { id: 16, question: "Capital of Argentina", answer: "Buenos Aires" },
    { id: 17, question: "Capital of Egypt", answer: "Cairo" },
    { id: 18, question: "Capital of Turkey", answer: "Ankara" },
    { id: 19, question: "Capital of Saudi Arabia", answer: "Riyadh" },
    { id: 20, question: "Capital of South Korea", answer: "Seoul" },
    { id: 21, question: "Capital of New Zealand", answer: "Wellington" },
    { id: 22, question: "Capital of Norway", answer: "Oslo" },
    { id: 23, question: "Capital of Sweden", answer: "Stockholm" },
    { id: 24, question: "Capital of Finland", answer: "Helsinki" },
    { id: 25, question: "Capital of Denmark", answer: "Copenhagen" },
    { id: 26, question: "Capital of Portugal", answer: "Lisbon" },
    { id: 27, question: "Capital of Greece", answer: "Athens" },
    { id: 28, question: "Capital of Ireland", answer: "Dublin" },
    { id: 29, question: "Capital of Switzerland", answer: "Bern" },
    { id: 30, question: "Capital of Netherlands", answer: "Amsterdam" },
    { id: 31, question: "Capital of Austria", answer: "Vienna" },
    { id: 32, question: "Capital of Belgium", answer: "Brussels" },
    { id: 33, question: "Capital of Poland", answer: "Warsaw" },
    { id: 34, question: "Capital of Hungary", answer: "Budapest" },
    { id: 35, question: "Capital of Czech Republic", answer: "Prague" },
    { id: 36, question: "Capital of Thailand", answer: "Bangkok" },
    { id: 37, question: "Capital of Indonesia", answer: "Jakarta" },
    { id: 38, question: "Capital of Malaysia", answer: "Kuala Lumpur" },
    { id: 39, question: "Capital of Philippines", answer: "Manila" },
    { id: 40, question: "Capital of Vietnam", answer: "Hanoi" },
    { id: 41, question: "Capital of Bangladesh", answer: "Dhaka" },
    { id: 42, question: "Capital of Pakistan", answer: "Islamabad" },
    {
      id: 43,
      question: "Capital of Sri Lanka",
      answer: "Sri Jayawardenepura Kotte",
    },
    { id: 44, question: "Capital of Afghanistan", answer: "Kabul" },
    { id: 45, question: "Capital of Iran", answer: "Tehran" },
    { id: 46, question: "Capital of Iraq", answer: "Baghdad" },
    { id: 47, question: "Capital of Israel", answer: "Jerusalem" },
    { id: 48, question: "Capital of Lebanon", answer: "Beirut" },
    { id: 49, question: "Capital of Jordan", answer: "Amman" },
    { id: 50, question: "Capital of UAE", answer: "Abu Dhabi" },
    { id: 51, question: "Capital of Qatar", answer: "Doha" },
    { id: 52, question: "Capital of Oman", answer: "Muscat" },
    { id: 53, question: "Capital of Kuwait", answer: "Kuwait City" },
    { id: 54, question: "Capital of Yemen", answer: "Sana'a" },
    { id: 55, question: "Capital of Chile", answer: "Santiago" },
    { id: 56, question: "Capital of Peru", answer: "Lima" },
    { id: 57, question: "Capital of Venezuela", answer: "Caracas" },
    { id: 58, question: "Capital of Colombia", answer: "Bogota" },
    { id: 59, question: "Capital of Ecuador", answer: "Quito" },
    { id: 60, question: "Capital of Paraguay", answer: "Asuncion" },
    { id: 61, question: "Capital of Uruguay", answer: "Montevideo" },
    { id: 62, question: "Capital of Bolivia", answer: "Sucre" },
    { id: 63, question: "Capital of Cuba", answer: "Havana" },
    { id: 64, question: "Capital of Jamaica", answer: "Kingston" },
    { id: 65, question: "Capital of Haiti", answer: "Port-au-Prince" },
    {
      id: 66,
      question: "Capital of Dominican Republic",
      answer: "Santo Domingo",
    },
    { id: 67, question: "Capital of Guatemala", answer: "Guatemala City" },
    { id: 68, question: "Capital of Honduras", answer: "Tegucigalpa" },
    { id: 69, question: "Capital of El Salvador", answer: "San Salvador" },
    { id: 70, question: "Capital of Nicaragua", answer: "Managua" },
    { id: 71, question: "Capital of Costa Rica", answer: "San Jose" },
    { id: 72, question: "Capital of Panama", answer: "Panama City" },
    { id: 73, question: "Capital of Iceland", answer: "Reykjavik" },
    { id: 74, question: "Capital of Luxembourg", answer: "Luxembourg City" },
    { id: 75, question: "Capital of Monaco", answer: "Monaco" },
    { id: 76, question: "Capital of Liechtenstein", answer: "Vaduz" },
    { id: 77, question: "Capital of Malta", answer: "Valletta" },
    { id: 78, question: "Capital of Cyprus", answer: "Nicosia" },
    { id: 79, question: "Capital of Estonia", answer: "Tallinn" },
    { id: 80, question: "Capital of Latvia", answer: "Riga" },
    { id: 81, question: "Capital of Lithuania", answer: "Vilnius" },
    { id: 82, question: "Capital of Slovakia", answer: "Bratislava" },
    { id: 83, question: "Capital of Slovenia", answer: "Ljubljana" },
    { id: 84, question: "Capital of Croatia", answer: "Zagreb" },
    {
      id: 85,
      question: "Capital of Bosnia and Herzegovina",
      answer: "Sarajevo",
    },
    { id: 86, question: "Capital of Serbia", answer: "Belgrade" },
    { id: 87, question: "Capital of Montenegro", answer: "Podgorica" },
    { id: 88, question: "Capital of Albania", answer: "Tirana" },
    { id: 89, question: "Capital of Kosovo", answer: "Pristina" },
    { id: 90, question: "Capital of North Macedonia", answer: "Skopje" },
    { id: 91, question: "Capital of Armenia", answer: "Yerevan" },
    { id: 92, question: "Capital of Azerbaijan", answer: "Baku" },
    { id: 93, question: "Capital of Georgia", answer: "Tbilisi" },
    { id: 94, question: "Capital of Belarus", answer: "Minsk" },
    { id: 95, question: "Capital of Ukraine", answer: "Kyiv" },
    { id: 96, question: "Capital of Moldova", answer: "Chisinau" },
    { id: 97, question: "Capital of Kazakhstan", answer: "Astana" },
    { id: 98, question: "Capital of Uzbekistan", answer: "Tashkent" },
    { id: 99, question: "Capital of Kyrgyzstan", answer: "Bishkek" },
    { id: 100, question: "Capital of Turkmenistan", answer: "Ashgabat" },
  ];

  let [selectedId, setSelectedId] = React.useState(0);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : 0);
  }

  return (
    <div className="App">
      {cardData.map((cardData) => (
        <div
          key={cardData.id}
          className={`card ${selectedId === cardData.id ? "active" : ""}`}
          onClick={() => handleClick(cardData.id)}
        >
          <p>
            {cardData.id === selectedId ? cardData.answer : cardData.question}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
