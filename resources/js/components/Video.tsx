import * as React from 'react';

export default function Video({titulo, id, poster, user}) {
    return (
        <div className = "rounded-xl w-60 h-60 inline-block hover:bg-card" id = {"video-" + id}>
            <div className = "rounded-xl ml-4 mt-4 w-51 h-30 bg-background bg-contain bg-center bg-no-repeat" id = {"thumb-" + id} style = {{
                backgroundImage: `url(${"/storage/uploads/thumbs/" + id + ".jpg"})`,
            }}>
            </div>
            <p className = "ml-5 mt-1 text-xl font-bold">{titulo}</p>
            <p className = "ml-5 mt-1">{poster.username}</p>
            <button className = "relative left-50 hover:bg-black dark:hover:bg-white dark:hover:text-black pl-2 pr-2 pb-2 rounded-xl" onClick = {
                (event) => {
                    let possivelPopUp = document.getElementById("popUp-" + id);
                    if (possivelPopUp != null) {
                        possivelPopUp.remove();
                    }
                    let x = event.clientX;
                    let y = event.clientY;

                    let div = document.getElementById("video-" + id);
                    let popUp = document.createElement("div");

                    popUp.classList.add("bg-card");
                    popUp.classList.add("absolute");
                    popUp.classList.add("bg-card");
                    popUp.classList.add("w-50");
                    popUp.classList.add("h-fit");
                    popUp.classList.add("popUp");
                    popUp.classList.add("p-3");
                    popUp.classList.add("rounded-xl");
                    popUp.setAttribute('id', "popUp-" + id);
                    popUp.style.left = x + "px";
                    popUp.style.top = y + "px";

                    let linkBlank = document.createElement("a");
                    linkBlank.setAttribute('target', "_blank");
                    linkBlank.innerHTML = "Abrir em nova página";
                    linkBlank.setAttribute('href', "/video/" + id);

                    popUp.appendChild(linkBlank);

                    if (user != null) {
                        console.log(user);
                        if (user == poster.id) {

                            let deleteLink = document.createElement("a");
                            deleteLink.innerHTML = "Deletar";
                            deleteLink.setAttribute('href', "/video/" + id + "/delete");

                            let editLink = document.createElement("a");
                            editLink.innerHTML = "Edit";
                            editLink.setAttribute('href', "/video/" + id + "/edit");

                            popUp.appendChild(document.createElement("br"));
                            popUp.appendChild(deleteLink);
                            popUp.appendChild(document.createElement("br"));
                            popUp.appendChild(editLink);
                        }
                    }

                    div.appendChild(popUp);

                    console.log("b");
                }
            } onMouseLeave = {
                () => {
                    let popUp = document.getElementById("popUp-" + id);

                    popUp.classList.add("removable");
                }
            }>...</button>
        </div>
    );
}
