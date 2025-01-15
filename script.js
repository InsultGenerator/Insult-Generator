function getInsult() {
    const insults = [
        "Dude you're so ugly!",
        "You're so stupid",
        "Get a life",
        "You're doing so bad!",
        "Don't believe in yourself!",
        "You're a non-sigma",
        "You don't have rizz",
        "You're really really ugly",
    ];
    const randomInsult = insults[Math.floor(Math.random() * insults.length)];
    document.getElementById("insultDisplay").innerText = randomInsult;
}
