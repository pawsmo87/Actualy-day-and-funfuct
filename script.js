const currentDay = document.querySelector(".current-day")
const funFact = document.querySelector(".fun-fact")

const facts = [
    'Krokodyl nie potrafi wystawić języka.',
	'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
	'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
	'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
	'Goryle śpią nawet czternaście godzin dziennie.',
	'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
	'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
	'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.'
]

const day = new Date()
console.log(day.toLocaleString("default", {weekday: "long"}));

currentDay.textContent = day.toLocaleString("default", {weekday: "long"})

const funFuctFun = () => {
    let i = Math.floor(Math.random() * (facts.length -1))
    console.log(i) 
    funFact.textContent = facts[i]

}

funFuctFun()