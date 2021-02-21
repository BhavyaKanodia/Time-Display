
const abc = () => {
    document.getElementById('para').innerHTML = new Date().toLocaleTimeString();
}
const f = setInterval(abc, 1000);
//For my second commit