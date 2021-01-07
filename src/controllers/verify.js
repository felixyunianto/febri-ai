const TeachableMachine = require("@sashido/teachablemachine-node");

module.exports = {
    getVerify: (req, res) => {
        res.render("index");
    },
    postVerify: (req, res) => {
        const urlImage = req.file.path;
        console.log(urlImage);
        const newUrl = urlImage.replace("public", "");
        const model = new TeachableMachine({
            modelUrl: "https://teachablemachine.withgoogle.com/models/zIUkEPUXZ/"
        });

        model.classify({
            imageUrl: `http://localhost:3000${newUrl}`,
        }).then((predictions) => {
            // console.log("Predictions:", predictions);
            let resultsPredictions = Math.max.apply(Math, predictions.map(function(data) { return data.score; }))
            
            
            function getResultPredictions(data){ 
                return data.score === resultsPredictions
            }

            let results = predictions.find(getResultPredictions);
            console.log(results);
            let lastResults = []

            if(results.class === '1'){
                lastResults.push({
                    msg: "Terimakasih telah memakai masker anda",
                    hexa: 'green'
                });
            }else{
                lastResults.push({
                    msg: "Harap pakailah masker anda",
                    hexa: 'red'
                });
            }
            res.send({
                ...lastResults
            })

        }).catch((e) => {
            console.log("ERROR", e);
        });
    }
}