var quoteDisplay = document.getElementById("quoteDisplay");
var newQuote = document.getElementById("newQuote");
var previousRandomNumber = 0;
var quotes = [
				"The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.", 
				"There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature.", 
				"Angry people are not always wise.", 
				"You pierce my soul. I am half agony, half hope ... I have loved none but you.", 
				"I could easily forgive his pride, if he had not mortified mine.", 
				"Ah! There is nothing like staying at home, for real comfort.", 
				"The Very first moment I beheld him, my heart was irrevocably gone.", 
				"I must learn to be content with being happier than I deserve.", 
				"It isn't what we say or think that defines us, but what we do.",
				"I must learn to be content with being happier than I deserve.",
				"It isn't what we say or think that defines us, but what we do.",
				"Silly things do cease to be silly if they are done by sensible people in an impudent way.",
				"Friendship is certainly the finest balm for the pangs of disappointed love.",
				"Laugh as much as you choose, but you will not laugh me out of my opinion.",
				"I have not pleasure of understanding you.",
				"I may have lost my heart, but not my self-control.",
				"When I fall in love, it will be forever.",
				"To be fond of dancing was a certain step towards falling in love.",
				"If I loved you less, I might be able to talk about it more.",
				"I always deserve the best treatment because I never put up with any other.",
				"We are all fools in love.",
				"Life seems but a quick succession of busy nothings.",
				"He is a gentleman, and I am a gentleman's daughter. So far we are equal.",
				"But people themselves alter so much, that there is something new to be observed in them for ever.",
				"I cannot speak well enough to be unintelligble.",
				"Time will explain",
				"Men of sense, whatever you may choose to say, do not want silly wives.",
				"A large income is the best recipe for happiness I ever heard of.",
				"Have a little compassion on my nerves. You tear them to pieces.",
				"I was quiet, but I was not blind.", 
				"If a book is well written, I always find it too short.",
				"One word from you shall silence me forever.",
				"Men were put into the world to teach women the law of compromise.",
				"A person who can write a long letter with ease, cannot write ill.",
				"A fondness for reading, properly directed, must be an education in itself.",
				"Know your own happiness.",
				"Her own thoughts and reflections were habitually her best companions.",
				"Do not be in a hurry, the right man will come at last."
			];


newQuote.addEventListener("click", function(){
	var quote = quotes[Math.floor(Math.random() * quotes.length)];
	quoteDisplay.textContent = quote;
})

newQuote.click();