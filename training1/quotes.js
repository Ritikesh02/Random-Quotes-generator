function getTimeOfDay() {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
    return 'morning';
    } else if (currentHour >= 12 && currentHour < 18) {
    return 'afternoon';
    } else {
    return 'night';
    }
    }
    function showGreeting() {
    const timeOfDay = getTimeOfDay();
    const greeting = `Let's start our ${timeOfDay} with a new quote`;
    document.getElementById('greeting').textContent = greeting;
    }
    showGreeting();
    function Quote() {
    const timeOfDay = getTimeOfDay();
    const morningQuotes = [
    "\"Write it on your heart that every day is the best day in the year.” - Ralph Waldo Emerson\" :----UNKNOWN",
    "\"I get up every morning and it’s going to be a great day. You never know when it’s going to be over, so I refuse to have a bad day.” Paul Henderson",
    "Today’s goals: Coffee and kindness. Maybe two coffees, and then kindness.” – Nanea Hoffman",
    "An early-morning walk is a blessing for the whole day.” – Henry David Thoreau",
    "\"Don't be afraid to fail;it's proof you'll soon be successful\" :--BARBARA CORCORAN",
    " I wake up every morning at nine and grab for the morning paper. Then I look at the obituary page. If my name is not on it, I get up. – Benjamin Franklin",
    "Every morning, I wake up saying, 'I’m still alive, a miracle.' And so I keep on pushing. — Jim Carrey",
    "If you’re changing the world, you’re working on important things. You’re excited to get up in the morning. – Larry Page",
    "When you arise in the morning, think of what a precious privilege it is to be alive, to breathe, to think, to enjoy, to love.” – Marcus Aurelius",
    "I like freedom. I wake up in the morning and say, ‘I don’t know, should I have a popsicle or a donut?’ You know, who knows? – Oscar Nunez"
    ];
    const afternoonQuotes =
    [
    "Crown your day with happiness, smile as the beautiful sunshine blossoms.Life will always be good in your heart.Good afternoon. – Anonymous",
    "May the sweet peace be part of your heart today and always, and there is life shining through your sigh.May you have much light and peace.Good afternoon! – Anonymous",
    "Good, better, best.Never let it rest. ‘Til your good is better, and your better is best.Good afternoon. – Saint Jerom",
    "An idea that is developed and put into action is more important than an idea that exists only as an idea.Good afternoon! – Anonymous",
    "Life is an open book.If anyone needs to get some motivation, it is the best source to get it.Remain favored and attempt to be receptive.Good afternoon! – Anonymous",
    "A great attitude becomes a great mood, which becomes a great day, which becomes a great year, which becomes a great life.Good afternoon! –Anonymous",
    "Be bright like the afternoon sun and let everyone who sees you feel inspired by all the great things you do.You have one life here on earth.Make it count in whatever way you can.Good afternoon! – Anonymous",
    "Learning history is so easy but making history is so difficult.Make a  history of yourself and make others learn it! Good afternoon! – Vrishab",
    "If we grow with the hard blows of life, we can also grow with the soft touches of the soul.Good afternoon! – Anonymous",
    "Don’t let little things get you down.You’ve got many big reasons to look up to God and say thanks.It’s going to be a great day.Good afternoon. –Anonymous"
    ];
    const NightQuotes = [
    "\"The night is the hardest time to be alive and 4am knows all my secrets.\"",
    "\"This is night, Diddykins. That's what we call it when it goes all dark like this. \"",
    "\"Melancholy were the sounds on a winter's night.\"",
    "\"The longest way must have its close - the gloomiest night will wear on to a morning.\"",
    "\"What may not bless my waking eyes.\"",
    "\"I often think that the night is more alive and more richly colored than the day.\"",
    "\"There was never a night or a problem that could defeat sunrise or hope.\"",
    "\"Music is moonlight in the gloomy night of life.\"",
    "\"Night is the mother of thoughts.\"",
    "\"Sometimes in my tent, late at night, I think I can hear the stars scraping against the sky.\"",
    "\"The dawn of beauty always comes after night.\"",
    ];
    let quotes;
    if (timeOfDay === 'morning') {
    quotes = morningQuotes;
    }
    else if (timeOfDay === 'afternoon') {
    quotes = afternoonQuotes;
    }
    else {
    quotes = NightQuotes;
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote').innerHTML = quote;
    }
    function getRandomColor() {
    const colors = [
    "#800000",
    "#FF0000",
    "#FFA500",
    "#FFFF00",
    "#808000",
    "#008080",
    "#FF6347",
    "#FF00FF",
    "#800080",
    "#FF4500",
    "#000000"
    ];
    const randomIndex1 = Math.floor(Math.random() * colors.length);
    return colors[randomIndex1];
    }
    function updatecolor() {
    const randomColor = getRandomColor();
    box.style.backgroundColor = randomColor;
    quote.style.color = randomColor;
    button.style.backgroundColor = randomColor;
    }
    button.addEventListener('click', updatecolor);
    button.addEventListener('click', Quote);
    updatecolor();
    