const links = [
    '/home',
    '/about',
    '/secret',
    '/intentional',
]

// 'exports' allows use outside of module -EM
function getLink() {
    const idx = Math.floor(Math.random()*links.length);
    document.getElementById("link").href = links[idx];
}