camera = document.getElementById("Webcam");
Webcam.set({
    width:350,
    height:300,
    image_format:'jpeg',
    jpeg_quality:90
})
Webcam.attach(camera);

function Capture()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("Snapshot").innerHTML = '<img id ="selfie_image" src="'+data_uri+'"/>';
    });
}
var classifier =ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1nDXK7oEj/model.json',model_loaded);
function model_loaded()
{
    console.log("Model has been loaded");
}
function Identify()
{
    var image = document.getElementById("selfie_image");
    classifier.classify(image , Gotresult );
}
function Gotresult(error,results)
    {
        if(error)
        {
            console.error(error);
        }
        else{
            console.log(results);
            document.getElementById("objectname").innerHTML= results[0].label;
            document.getElementById("Accuracyno").innerHTML= results[0].confidence.toFixed(3)*100;
        }
       
        }
