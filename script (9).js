function askName() {
    let name = prompt("Enter your name:");
    if (name) {
        name = name.trim().toLowerCase();
        if (["kashmira", "sumali", "kawshika", "කශ්මිරා", "සුමාලි", "කව්ශිකා"].includes(name)) {
            let img = document.getElementById("matchImage");
            img.src = "https://raw.githubusercontent.com/jsu622jejej/image-cloud-/refs/heads/main/Dark%20Brown%20Aesthetic%20Romantic%20Photo%20Collage.gif";
            img.style.display = "block";
            setTimeout(() => img.style.display = "none", 9000);
        }
    }
}

function calculateLove() {
    let name1 = document.getElementById("name1").value.trim().toLowerCase();
    let name2 = document.getElementById("name2").value.trim().toLowerCase();
    if (!name1 || !name2) return alert("Enter both names!");

    let loveScore = (name1 === "kashmira" && name2 === "sithum") || (name1 === "කශ්මිරා" && name2 === "සිතුම්") ? 
                    75 + Math.random() * 25 : 70 + Math.random() * 20;

    document.getElementById("loveResult").innerText = `Your Love Score: ${Math.floor(loveScore)}% ❤️`;
}
