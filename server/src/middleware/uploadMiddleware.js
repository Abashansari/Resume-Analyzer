import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const fileFilter = (req,file,cb)=>{
    const allowedTypes=[
                        'application/pdf',
                        'application/msword',
                        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                    ]
    
   if(allowedTypes.includes(file.mimeType)){
       cb(null,true)
   }else{
       cb(new Error("Only PDF or Word files allowed!"),false)
   }
}
const uploads = multer({storage, fileFilter})

export default uploads;
