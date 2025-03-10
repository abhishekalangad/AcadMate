async function uploadFile() {
    let file = document.getElementById("fileInput").files[0];

    if (!file) {
        alert("Please select a file!");
        return;
    }

    let formData = new FormData();
    formData.append("file", file);

    document.getElementById("status").innerText = "Uploading...";

    try {
        let response = await fetch("/upload", {
            method: "POST",
            body: formData,
        });

        let result = await response.json();
        document.getElementById("status").innerText = result.message;
    } catch (error) {
        document.getElementById("status").innerText = "Upload failed!";
    }
}
