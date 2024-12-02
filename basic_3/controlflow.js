// in a file there is no need to run the complete code we need to control the flow of code so for that some are

let userloggedin = true;
if(userloggedin){// check the condtion in this example its true then 
    console.log("user is logged in");// this will be printed 
    }else{
        console.log("user is not logged in");
        }
let user2loggedin = false;
if(user2loggedin){// check the condtion in this example its false then
    console.log("user is logged in");
    }else{
        console.log("user is not logged in");// this will be printed 

        }

        // sometime the condition can be multiple too foe that we can use chain like this
        let bankbalance= 8000;
        if (bankbalance > 10000){
            console.log("you have more than 10000");
        }
        else if(bankbalance < 10000){
            console.log("you have less than 10000");
            }
        else if(bankbalance = 1000){
            console.log("you have 8000");

        }
        else{
            console.log("you have 0");
        }
        
       // two many condition can create problem sometime so we have another method for this switch

       // use of and && or // and !=
       if (user2loggedin && userloggedin){
        console.log("both user are logged in");
       }else{
        console.log("one or both user are not logged in");
       }
        if(user2loggedin || userloggedin){
                console.log("one or both user are logged in");
            }
            // use of not !
            if(!user2loggedin){
                console.log("user is not logged in");
                }
                // use of == and !=
                let user1 = "user1";
                let user2 = "user1";
                if(user1 == user2){
                    console.log("both user are same");
                    }
                    // use of === and !==
                    if(user1 === user2){
                        console.log("both user are same");
                        }
// one word codition statement can be like this
(user1==user2)?console.log("ok"):console.log("not ok");
                
       