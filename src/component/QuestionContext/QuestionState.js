import { useState } from "react";
import React from "react";
import QuestionContext from "./QuestionContext";



const QuestionState = (props) => {
    const host = 'http://localhost:80';
    const [user_id,setUser]=useState("");
    
    const [question, setQuestion] = useState([]);
    const [comment, setComment] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [que_id,setQue]=useState("")
    const [particular,setParticular]=useState("")
    const setting=(user)=>{
        setUser(user)
    }
    

    


    // now we have to do api fetch to connnect our functionality wiht oiur database
    // i know how to fetch from an api 
    // i was having confusion how to give headers our jwt token or body when i was doing this manually during backend
    // samjh aa gya ki hum fetch function me endpoint ke sath sath use headers aur body bhi de sktw hai
    // let me show you this
    // create a fucntion fetchallnotes



    // question

    // add a question

    const addQuestion=async (username,user,title,body,tags)=>{
        try {
            console.log("dsfnodsv");

            const response = await fetch(`${host}/api/question`, {
                method: 'POST',
                headers: {

                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({username, user,title,body,tags})

            });
            console.log("addd note is running");
            const newQuestion = { username,title,body,tags,user };
            setQuestion(question.concat(newQuestion));
        }
        catch (err) {
            console.log(err);
        }




    }



    // get all question

    const fetchallQuestion=async ()=>{
        console.log("dsfnodsv");
        try {
            console.log("dsfnodsv");

            const response = await fetch(`${host}/api/question`, {
                method: 'GET',
                headers: {


                    'Content-Type': 'application/json',

                    

                },

            });


           




            const json = await response.json();
            setQuestion(json);
            console.log("feych note is runnign");
        }
        catch (err) {
            console.log(err);
        }
    }















    // getting question for particular id


    const fetchQuestion=async (id)=>{

        try {
           

            const response = await fetch(`${host}/api/question/${id}`, {
                method: 'GET',
                headers: {


                    'Content-Type': 'application/json',

                    

                },

            });


            // to do something
           

            const json = await response.json();
            // setQuestion(json);
            setParticular(json);
            // console.log("feych note is runnign");
        }
        catch (err) {
            console.log(err);
        }
    }













    // comment

     // post comment


    const addComment=async (user,question_id,comment,username)=>{
        try {
            console.log("dsfnodsv");

            const response = await fetch(`${host}/api/comment/${question_id}`, {
                method: 'POST',
                headers: {

                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({user,question_id,comment,username})

            });
            console.log("addd note is running");
            const newComment = {user,question_id,comment,username};
            setComment(comment.concat(newComment))
        }
        catch (err) {
            console.log(err);
        }




    }





   











    // answer

    // post answer
    
    const addAnswer=async (user,question_id,answer,username)=>{
        try {
            console.log("dsfnodsv");

            const response = await fetch(`${host}/api/answer`, {
                method: 'POST',
                headers: {

                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({user,question_id,answer,username})

            });
            console.log("addd note is running");
            const newAnswer = {user,question_id,comment,username};
            setAnswer(answer.concat(newAnswer));
        }
        catch (err) {
            console.log(err);
        }




    }







    // 




































    



    


    return (
        <QuestionContext.Provider value={{ question, setQuestion, comment, answer,addAnswer,addComment,fetchQuestion,fetchallQuestion,addQuestion,user_id,setUser,setting,que_id,setQue,particular}}>
            {props.children}


        </QuestionContext.Provider>
    )
}
export default QuestionState