import * as React from 'react';

export default function VideosForm() {


    return (
        <div>
            <form>
                <div id = "videoDiv" className = "grid absolute border-3 border-foreground top-35 left-50 w-100 h-100 rounded-xl">
                    <div id = "thumbDiv" className = "place-self-center grid border-2 rounded-xl border-foreground w-76 h-45 bg-contain">

                        <input type = "file" name = "thumb" id = "thumb" accept = "image/*" className = "hidden" onChange = {(e) => {
                            const div = document.getElementById("thumbDiv");
                            const file = e.target.files[0];

                            console.log(URL.createObjectURL(file));

                            div.style.backgroundImage = "url('" + URL.createObjectURL(file) + "')";
                        }}/>

                        <label for = "thumb" className = "place-self-center font-mono border-0 font-semibold outline-foreground outline-2 p-2 w-40 rounded-xl text-lg text-foreground hover:bg-foreground hover:outline-foreground hover:text-background transition delay-40 furation-300 text-center">Enviar thumb </label>
                    </div>

                    <br/>
                    <br/>

                    <input type = "file" name = "video" id = "video" accept="video/*" className = "hidden" onChange = {(e) => {
                        const file = event.target.files[0]; // Get the first selected file
                        if (file) {
                            const video = document.createElement('video');
                            video.autoplay = true; // Autoplay is useful for loading the first frame immediately
                            video.muted = true; // Mute the video to avoid sound playing
                            video.src = URL.createObjectURL(file);

                            video.onloadeddata = () => {
                                const canvas = document.createElement('canvas');
                                canvas.width = video.videoWidth;
                                canvas.height = video.videoHeight;
                                const ctx = canvas.getContext('2d');
                                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

                                const videoDiv = document.getElementById("videoDiv");

                                videoDiv.style.backgroundImage = "url('" + canvas.toDataURL('image/png') + "')";
                            };
                        }
                    }}/>
                    <label for = "video" className = "place-self-center font-mono border-0 font-semibold outline-foreground outline-2 p-2 w-40 rounded-xl text-lg text-foreground hover:bg-foreground hover:outline-foreground hover:text-background transition delay-40 furation-300 text-center"> Enviar Vídeo </label>
                </div>

                <div className = "absolute border-3 border-foreground top-35 left-160 w-150 h-100 p-10 rounded-xl">
                    <label for = "title" className = "font-mono text-2xl">Título</label>
                    <br/>
                    <br/>
                    <input type = "text" name = "title" className = "font-mono font-medium rounded-2xl border-foreground border-3 border-solid p-2 w-125 focus:border-gray-400 focus:outline-0 transition delay-40 duration-300" />
                    <br/>
                    <br/>
                    <label for = "descricao" className = "font-mono text-2xl">Descrição</label>
                    <br/>
                    <br/>
                    <textarea name = "descricao" className = "font-mono font-medium rounded-2xl border-foreground border-3 border-solid p-2 w-125 focus:border-gray-400 focus:outline-0 transition delay-40 duration-300"/>
                    <br/>
                    <br/>
                    <div className = "text-center">
                        <input type = "submit" className = "font-mono border-0 font-semibold outline-foreground outline-4 p-2 w-60 rounded-3xl text-xl text-foreground hover:bg-foreground hover:outline-foreground hover:text-background transition delay-40 furation-300"/>
                    </div>
                </div>
            </form>
        </div>
    );
}
