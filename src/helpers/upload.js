const multer = require("multer");
const path = require("path");

const multerStorage = multer.diskStorage({
    destination: "./public/img",
    filename: function (req, file, cb) {
        const nameFormat = `${Date.now()}-${file.fieldname}${path.extname(
            file.originalname
        )}`;
        cb(null, nameFormat);
    },
})

const upload = multer({
    storage: multerStorage,
    limits: 2 * 1000 * 1000,
})

const singleUpload = (req, res, next) =>{
    const uploadSingle = upload.single("img");
    uploadSingle(req, res, (err) => {
        if(err){
            res.status(500).send({
                msg : "Multer Error",
                err,
            });
        }else{
            next();
        }
    })
}

module.exports = singleUpload