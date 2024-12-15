import "./App.css";
import React from "react";
import image from "./background.jpeg";
function AccordionItem({ item }) {
  let { id, question, answer } = item;
  let [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="accordion-item">
      <div className="accordion-item-header">
        <h2>
          {id}. {question}
        </h2>
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && <div className="accordion-item-body">{answer}</div>}
    </div>
  );
}
function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem key={index} item={item} />
      ))}
    </div>
  );
}
function App() {
  let data = [
    {
      id: 1,
      question: "What is the return policy?",
      answer:
        "You can return items within 30 days of purchase for a full refund, provided they are in original condition and packaging. Some exclusions apply.",
    },
    {
      id: 2,
      question: "How long does shipping take?",
      answer:
        "Standard shipping typically takes 5-7 business days. Expedited options are available at checkout for faster delivery.",
    },
    {
      id: 3,
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to many countries worldwide. Shipping times and costs vary depending on the destination.",
    },
    {
      id: 4,
      question: "How can I track my order?",
      answer:
        "Once your order ships, you’ll receive a tracking number via email. Use it to track your package on our website or the carrier's site.",
    },
    {
      id: 5,
      question: "What if my order arrives damaged?",
      answer:
        "If your order arrives damaged, please contact our customer service within 7 days with photos of the damage. We’ll arrange a replacement or refund.",
    },
    {
      id: 6,
      question: "Are there any shipping fees?",
      answer:
        "Shipping fees vary based on your location and the shipping method selected. Orders over a certain amount may qualify for free shipping.",
    },
  ];

  return (
    <div className="app-container">
      <div className="App">
        <h1>Frequently Asked Questions</h1>
        <Accordion data={data} />
      </div>
      <div className="img">
        <img src={image} alt="background" />
      </div>
    </div>
  );
}

export default App;
