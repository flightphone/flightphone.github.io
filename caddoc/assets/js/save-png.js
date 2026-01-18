document.head.innerHTML = document.head.innerHTML +
    `
<style>
        .menubut {
            position: fixed;
            left: 20px;
            top: 20px;
            z-index: 1000;
            border-radius: 25px;
            cursor: pointer;
            background-color: #505050;
        }
    </style>
`
const img = document.createElement("div")
document.body.appendChild(img);
img.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-260q75 0 127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75 0-127.5 52.5T300-440q0 75 52.5 127.5T480-260Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z"/></svg>`
img.className = "menubut";
img.onclick = async (e) => {
    const modelViewer = document.querySelector('model-viewer');
    const options = {
        mimeType: 'image/png', // Format: image/webp, image/jpeg, image/png
        qualityArgument: 0.99,  // Quality: от 0.0 до 1.0
        // Aspect { idealAspect: true }
    };
    const blob = await modelViewer.toBlob(options); //
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'model-viewer.png'; // Имя файла
    a.click();
    URL.revokeObjectURL(url);
}