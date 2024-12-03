



const contentList = document.getElementById("content-list");



function addContentToList(contentData) {
    const contentDiv = document.createElement("div");
    contentDiv.innerHTML = `<div id="minecraft-content"><img src="${contentData.icon}" /></div>`;
    contentList.append(contentDiv);
}



addContentToList({ icon: "./assets/dbe-broly.png" });
addContentToList({ icon: "./assets/dbe-dinosaur.png" });
addContentToList({ icon: "./assets/dbe-icon.png" });
addContentToList({ icon: "./assets/dbe-ki-blast.png" });
addContentToList({ icon: "./assets/dbe-namekian.png" });
addContentToList({ icon: "./assets/dbe-saiyan.png" });
addContentToList({ icon: "./assets/dbe-vegeta.png" });