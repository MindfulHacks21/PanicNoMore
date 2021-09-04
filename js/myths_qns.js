const list = {"questions" : [
    {
        "question" : "Children don't experience mental health problems.",
        "answer": "myth", 
        "explanation" : "Even very young children may show early warning signs of mental health concerns. These mental health problems are often clinically diagnosable, and can be a product of the interaction of biological, psychological, and social factors.<br>Half of all mental health disorders show first signs before a person turns 14 years old, and three quarters of mental health disorders begin before age 24.<br>Unfortunately, less than 20% of children and adolescents with diagnosable mental health problems receive the treatment they need. Early mental health support can help a child before problems interfere with other developmental needs.",
        "count": '0'
    }, 
    {
        "question" : "People with mental health problems are violent and unpredictable.",
        "answer": "myth" , 
        "explanation" : "The vast majority of people with mental health problems are no more likely to be violent than anyone else. Most people with mental illness are not violent and only 3%–5% of violent acts can be attributed to individuals living with a serious mental illness. In fact, people with severe mental illnesses are over 10 times more likely to be victims of violent crime than the general population. You probably know someone with a mental health problem and don't even realize it, because many people with mental health problems are highly active and productive members of our communities.",
        "count": '0'
    }, 
    {
        "question" : "Personality weakness or character flaws cause mental health problems. People with mental health problems can snap out of it if they try hard enough.",
        "answer": "myth",
        "explanation": "Mental health problems have nothing to do with being lazy or weak and many people need help to get better. Many factors contribute to mental health problems, including:<br><br>1) Biological factors, such as genes, physical illness, injury, or brain chemistry<br>2) Life experiences, such as trauma or a history of abuse<br>3) Family history of mental health problems",
        "count": '0'
    },
    {
        "question" : "Children don't experience mental health problems.",
        "answer": "myth", 
        "explanation" : "Even very young children may show early warning signs of mental health concerns. These mental health problems are often clinically diagnosable, and can be a product of the interaction of biological, psychological, and social factors.<br>Half of all mental health disorders show first signs before a person turns 14 years old, and three quarters of mental health disorders begin before age 24.<br>Unfortunately, less than 20% of children and adolescents with diagnosable mental health problems receive the treatment they need. Early mental health support can help a child before problems interfere with other developmental needs.",
        "count": '0'
    }, 
    {
        "question" : "Therapy and self-help are a waste of time. Why bother when you can just take a pill?",
        "answer": "myth", 
        "explanation" : "Treatment for mental health problems varies depending on the individual and could include medication, therapy, or both. Many individuals work with a support system during the healing and recovery process.",
        "count": '0'
    }, 
    {
        "question" : "I can't do anything for a person with a mental health problem.",
        "answer": "myth", 
        "explanation" : "Friends and loved ones can make a big difference. Only 44% of adults with diagnosable mental health problems and less than 20% of children and adolescents receive needed treatment. Friends and family can be important influences to help someone get the treatment and services they need by:<br><br>1) Reaching out and letting them know you are available to help<br>2) Helping them access mental health services<br>3) Learning and sharing the facts about mental health, especially if you hear something that isn't true<br>4) Treating them with respect, just as you would anyone else<br>5)Refusing to define them by their diagnosis or using labels such as \"crazy\"",
        "count": '0'
    }, 
    {
        "question" : "Prevention works. It is possible to prevent mental illnesses.",
        "answer": "fact", 
        "explanation" : "Prevention of mental, emotional, and behavioral disorders focuses on addressing known risk factors such as exposure to trauma that can affect the chances that children, youth, and young adults will develop mental health problems. Promoting the social-emotional well-being of children and youth leads to:<br><br>1) Higher overall productivity<br>2) Better educational outcomes<br>3) Lower crime rates<br>4) Stronger economies<br>5) Lower health care costs<br>6) Improved quality of life<br>7) Increased lifespan<br>8) Improved family life",
        "count": '0'
    }
]}





// function checkAnswer(id, correct){
//     if(correct==='1'){
//         document.getElementById(id + ".1").style.backgroundColor = "green";
//         document.getElementById(id+ ".2").style.backgroundColor = "red"

//     }else{
//         document.getElementById(id+ ".1").style.backgroundColor = "red"
//         document.getElementById(id+ ".2").style.backgroundColor = "green"

//     }
// }

function check(id, correct_ans, ans) {
    if (ans == 'fact') {
        other_ans = 'myth'
    } else {
        other_ans = 'fact'
    }
    
    if(ans===correct_ans){
        document.getElementById(ans + "_" + id).style.backgroundColor = "#78BE3B";
        document.getElementById(other_ans + "_" + id).style.backgroundColor = "#C32312";
    }else{
        document.getElementById(ans + "_" + id).style.backgroundColor = "#C32312";
        document.getElementById(other_ans + "_" + id).style.backgroundColor = "#78BE3B";
    }
    displayAns(id);
}

function displayAns(id) {
    var count = list.questions[id]['count'];
    if (count == 1) {
        return;
    }
    var exp = document.getElementById('exp_' + id);
    exp.style.display = "block";

    list.questions[id]['count'] += 1;
    $(exp).append(
        '<p>' + list.questions[id].explanation + '</p>'
    );

}

$(document).ready(function(){
    var quiz = document.getElementById('game-quiz-container');

    $(list.questions).each(function(index) {
        var correct_ans = list.questions[index].answer;
        $(quiz).append(
            '<div class="modal-content-container" id="qna_' + index + '"><h2>' + list.questions[index].question + '</h2></div>'
            + '<p>Fact or Myth?</p>'
            + '<div class="container"><div class="row">'
            + '<div class="col-6 button" id="fact_' + index + '" onclick="check(\'' + index + '\', \'' + correct_ans + '\', \'fact\')">Fact</div>'
            + '<div class="col-6 button" id="myth_' + index + '" onclick="check(\'' + index + '\', \'' + correct_ans + '\', \'myth\')">Myth</div>'
            + '</div></div>'
            + '<div id="exp_' + index + '" class="my_container" style="display:none;"></div>'
        )
    })
});