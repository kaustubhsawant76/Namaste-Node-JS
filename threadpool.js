const crypto=require("node:crypto");

//process.env.UV_THREADPOOL_SIZE = 2;
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("1 Key is Generated");});

 crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
        console.log("2 Key is Generated");});

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
            console.log("3 Key is Generated");});

    crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
                console.log("4 Key is Generated");});

     crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
                    console.log("5 Key is Generated");});             