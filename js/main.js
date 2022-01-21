document.addEventListener("DOMContentLoaded", function() {

  const inputFile = document.getElementById("input");
  const imageElement = document.getElementById("image");
  const paragraphElement = document.getElementById("paragraph");

  inputFile.addEventListener("change", async function(e) {
    
    const file = e.target.files[0];
    const base64 = await convertBase64(file);

    console.log(base64);  
    imageElement.src = base64;
    paragraphElement.appendChild(document.createTextNode("Check the console for your base64 conversion! Use 'control' + 'shift' + 'i' to open the console."));

  });


  const convertBase64 = (file) => {

    return new Promise((resolve, reject) => {

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      }

      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

});
