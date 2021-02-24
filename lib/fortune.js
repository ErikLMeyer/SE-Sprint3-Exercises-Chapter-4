const fortuneCookies = [
    "Conquer fears",
    "Rivers need springs",
    "Don't fear unknown",
    "Pleasant surprise!",
    "Keep it simple"
]

// 'exports' allows use outside of module -EM
exports.getFortune = () => {
    const idx = Math.floor(Math.random()*fortuneCookies.length);
    return fortuneCookies[idx];
}