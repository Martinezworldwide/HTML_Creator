document.getElementById("htmlCode").addEventListener("input", updatePreview);

function updatePreview() {
    let code = document.getElementById("htmlCode").value;
    let previewFrame = document.getElementById("preview").contentWindow.document;
    previewFrame.open();
    previewFrame.write(code);
    previewFrame.close();
}

function downloadHTMLFile() {
    let filename = document.getElementById("filename").value.trim();
    let code = document.getElementById("htmlCode").value;

    if (filename === "") {
        alert("Please enter a valid filename.");
        return;
    }

    let blob = new Blob([code], { type: "text/html" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename + ".html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
