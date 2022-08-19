let close = document.querySelector('.close');
let rule = document.querySelector('#rule');
let score = document.querySelector('.score');
let main = document.querySelector('.main');
let play_btn = document.querySelector('.play-btn');
let user = document.querySelector('.paper1');
let computer = document.querySelector('.paper2');

let counter = 0;


play_btn.addEventListener('click',()=>{
    winner.classList.remove('display');
    main.classList.remove('remove');

})

 close.addEventListener('click',()=>{
    let block = document.querySelector('.block');
    let rules = document.querySelector('.rules');
    block.classList.add('rblock');
    rules.classList.add('rblock');
 });

 rule.addEventListener('click',()=>{
    let block = document.querySelector('.block');
    let rules = document.querySelector('.rules');
    block.classList.remove('rblock');
    rules.classList.remove('rblock');
 })



 let ispaper = document.querySelector('.v1');
 let isscissor = document.querySelector('.v2');
 let isrock = document.querySelector('.v3');


 const compu_play = [];
 compu_play[0] = ispaper.innerHTML;
 compu_play[1] = isscissor.innerHTML;
 compu_play[2] = isrock.innerHTML;

 let user_score = 0;
 user_score = Number(user_score);

if (!localStorage.getItem('user_score')) {

    localStorage.setItem('user_score',0);   
}

let winner = document.querySelector('.winner');
 let choice = document.querySelectorAll('.choice');
 score.innerHTML = user_score;
 choice.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{

        if (e.target.id == 'target') {
            
        
        user.innerHTML = e.target.innerHTML;
        let borderis = getComputedStyle(e.target).border;
      
        user.style.border = borderis;
        winner.classList.add('display');
        main.classList.add('remove');

        let random_choice  = Math.floor(Math.random() * 3);
        computer.innerHTML = compu_play[random_choice];

        if (computer.innerHTML == ispaper.innerHTML ) {
            let borderis = getComputedStyle(ispaper).border;
            computer.style.border = borderis;
        }

        if (computer.innerHTML == isscissor.innerHTML ) {
            let borderis = getComputedStyle(isscissor).border;
            computer.style.border = borderis;
        }

        if (computer.innerHTML == isrock.innerHTML ) {
            let borderis = getComputedStyle(isrock).border;
            computer.style.border = borderis;
        }

        winneris(user,computer,ispaper,isscissor,isrock);
        counter+=1;

    }
    });

 });



 function winneris(user,computer,paper, scissor,rock){


        if ((user.innerHTML == paper.innerHTML && computer.innerHTML == paper.innerHTML) ||
            (user.innerHTML == scissor.innerHTML && computer.innerHTML == scissor.innerHTML) ||
            (user.innerHTML == rock.innerHTML && computer.innerHTML == rock.innerHTML)) {
            
           
            localStorage.setItem('user_score',user_score);
            document.querySelector('.tell').textContent = 'Draw!';
            score.innerHTML = user_score;
            console.log(user_score)

    }


        else if ((user.innerHTML == paper.innerHTML && computer.innerHTML == rock.innerHTML) ||   
            (user.innerHTML == scissor.innerHTML && computer.innerHTML == paper.innerHTML) ||
            (user.innerHTML == rock.innerHTML && computer.innerHTML == scissor.innerHTML)) {


            user_score+=1;
            localStorage.setItem('user_score',user_score);
            score.innerHTML = user_score;
            document.querySelector('.tell').textContent = 'Win!';
            console.log(user_score)


    }   else{


            user_score=user_score-1;
            localStorage.setItem('user_score',user_score-1);
            document.querySelector('.tell').textContent = 'Lost!';
            score.innerHTML = user_score;;
            console.log(user_score)
    }
 }

