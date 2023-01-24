const arrows = document.querySelectorAll('.question-container img');
const answers = document.querySelectorAll('.answer');
const questions = document.querySelectorAll('.question');
arrows.forEach((arrow,idx)=>{
    
    arrow.addEventListener('click',()=>{  
       arrows.forEach((arrow,idx)=>{
        arrow.classList.remove('arrow-up');
        answers[idx].classList.add('vanish');
        questions[idx].classList.remove('clicked');
       });
        arrow.classList.add('arrow-up');
        answers[idx].classList.remove('vanish');
        questions[idx].classList.add('clicked');
    })
})


questions.forEach((question,idx)=>{
    question.addEventListener('click',()=>{
        questions.forEach((question,idx)=>{
            question.classList.remove('clicked');
            answers[idx].classList.add('vanish');
            arrows[idx].classList.remove('arrow-up')
        });
        question.classList.add('clicked');
        answers[idx].classList.remove('vanish');
        arrows[idx].classList.add('arrow-up');
    })
})