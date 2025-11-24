import * as React from 'react';

export default function VideosForm() {


    return (
        <div>
            <form>
                <div className = "absolute border-3 border-foreground top-35 left-50 w-100 h-100 rounded-xl">
                    <div>
                        <input type = "file" accept = "image/*"/>
                    </div>

                    <input type = "file"/>
                </div>

                <div className = "absolute border-3 border-foreground top-35 left-160 w-150 h-100 rounded-xl">
                    <input type = "text"/>
                    <textarea/>
                    <input type = "submit"/>
                </div>
            </form>
        </div>
    );
}
