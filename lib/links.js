const links = [
    'home',
    'about',
    'intentional',
]

// 'exports' allows use outside of module -EM
exports.getLink = () => {
    const idx = Math.floor(Math.random()*links.length);
    return links[idx];
}