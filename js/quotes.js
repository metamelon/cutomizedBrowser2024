const quotes = [
    {
        quote:"하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author:" - 사무엘존슨",
    },
    {
        quote:"진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해.",
        author:" - 찰리 채플린",
    },
    {
        quote:"직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
        author:" - 엘버트 허버드",
    },
    {
        quote:"먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에.",
        author:" - 엘사 맥스웰",
    },
    {
        quote:"당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",
        author:" - 헨리 포드",
    },
    {
        quote:"마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
        author:" - 이소룡",
    },
    {
        quote:"세상은 고통으로 가득하지만 그것을 극복하는 사람들로도 가득하다.",
        author:" - 헬렌켈러",
    },
    {
        quote:"인생에 뜻을 세우는데 있어 늦은 때라곤 없다.",
        author:" - 볼드윈",
    },
    {
        quote:"실패는 잊어라 그러나 그것이 준 교훈은 절대 잊으면 안된다.",
        author:" - 하버트 개서",
    },
    {
        quote:"삶을 사는 데는 단 두가지 방법이 있다. 하나는 기적이 전혀 없다고 여기는 것이고 또 다른 하나는 모든 것이 기적이라고 여기는방식이다.",
        author:" - 알베르트 아인슈타인",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

const quoteElement = document.getElementById('quote');
quoteElement.style.position = 'absolute';
quoteElement.style.top = '27%';
quoteElement.style.left = '50%';
quoteElement.style.color = 'beige';
quoteElement.style.fontSize = '2.0rem';
quoteElement.style.transform = 'translate(-50%, -50%)';
quoteElement.style.textAlign = 'center';
quoteElement.style.width = '80%'; 
quoteElement.style.zIndex = '1'; 

