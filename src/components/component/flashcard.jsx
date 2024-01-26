import { useState, useEffect } from "react";

export function Flashcard({ language }) {

  const MAX_CARD = 4 // 57
  const [card, setCard] = useState({
    "id": 1,
    "title": "Bonjour",
    "opt_correct": "Como estas?",
    "opt_incorrect": "Esta muy feo",
    "difficulty": 1
  });
  const [data, setData] = useState();

  const handleClick = () => {
    setCard(data[0])
    if (card === data[0].length) {
      setCard(data[0])
    }
    setCard(data[0].cards[card.id + 1])
  }

  // useEffect(() => {
  //   fetch('https:///')
  //     .then(results => results.json())
  //     .then(data => {
  //       setData(data)
  //     }).catch(e => {
  //       setData([{
  //         "id": 1,
  //         "title": "Bonjour",
  //         "opt_correct": "Como estas?",
  //         "opt_incorrect": "Esta muy feo",
  //         "difficulty": 1
  //       }])
  //       setCard(data[0])
  //       console.log(card)

  //     }
  //     );

  // }, []);



  return (
    <div class="max-w-sm p-6 flex h-screen items-center rounded-lg shadow ">
      <div>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Select the correct translation</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{language}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.title}</p>
        <div className="flex justify-between">
          <button href="#" onClick={handleClick} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {card.opt_correct}
          </button>
          <button href="#" onClick={handleClick} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            {card.opt_incorrect}
          </button>
        </div>
        <button href="#" onClick={handleClick} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Next
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" ariahidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </button>
      </div>
    </div>
  )
}
