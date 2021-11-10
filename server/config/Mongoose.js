const mongoose = require ('mongoose');
require ('dotenv').config();

module.exports = () => {
    function connect() {
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // mongoose의 connection 메소드를 변수 db에 할당
        const handleOpen = () => {
            console.log(`✅ Connected to DB`);
        }
        const handleError = (error) => {
            console.log(`❌ Error on DB connection: ${error}`);
        };

        let db = mongoose.connection;

        db.once("open", handleOpen);
        // db 연결 성공 시 handleOpen 함수 실행.

        db.on("error", handleError);
        // db 연결 실패 시 handleError 함수 실행.
    }
    connect();
    mongoose.connection.on('disconnected', connect);
    //require('./user.js'); // user.js는 나중에 만듭니다.
};



// // configure mongoose(MongoDB)
// mongoose.connect(process.env.MONGODB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     autoIndex: false
// });


// // '하나' 이상의 데이터베이스 연결 시 mongoose.createConnection() 메소드를 사용.
// const connect1 = mongoose.createConnection("mongodb://localhost:27017:mydb1");
// const connect2 = mongoose.createConnection("mongodb://localhost:27017:mydb2");
// const db = mongoose.connection;

// // mongoose의 connection 메소드를 변수 db에 할당
// const handleOpen = () => {
//     console.log(`✅ Connected to DB`);
// }
// const handleError = (error) => {
//     console.log(`❌ Error on DB connection: ${error}`);
// };

// db.once("open", handleOpen);
// // db 연결 성공 시 handleOpen 함수 실행.

// db.on("error", handleError);
// // db 연결 실패 시 handleError 함수 실행.