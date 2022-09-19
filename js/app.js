// VOLUNTARY QUESTIONNAIRE

// PROFILE PICTURE 
const profilePicEl = document.getElementById("about_me_pic");

profilePicEl.addEventListener("mousemove", () => {
    displayRealPic();

})
profilePicEl.addEventListener("mouseleave", () => {
    displayBitmojiPic();

})
function displayRealPic() {
    profilePicEl.innerHTML = '<img class="profilePic" src="/images2/tay4.png" alt="Picture of Taylour Harris">';
}
function displayBitmojiPic() {
    profilePicEl.innerHTML = '<img class="profilePic" src="/images2/bittaylaptop.png" alt="Picture of Taylour Harris">';
}

// FUN FACTS
const factBoxEl = document.querySelector(".fact_box");
const funFactBtn = document.querySelector(".factBtn");

funFactBtn.addEventListener("click", () => {
    generateFunFact();
    document.querySelector(".random_fact").style.display = "block";
})

let myFunFacts = new Array(15);
myFunFacts[0] = "I love live theatre!";
myFunFacts[1] = "One half of a set of twins.";
myFunFacts[2] = "Cleveland sports fan since birth.";
myFunFacts[3] = "Bobcat since 2010!";
myFunFacts[4] = "Proud dog mom!";
myFunFacts[5] = "Favorite Dr. Seuss Book --- The Butter Battle Book";
myFunFacts[6] = "If something breaks, I figure out how to fix it!";
myFunFacts[7] = "Dragon since 2006!";
myFunFacts[8] = "Love playing word and logic games everyday!";
myFunFacts[9] = "An actual morning person!";
myFunFacts[10] = "Western Astrological Sign: Pisces";
myFunFacts[11] = "Chinese Zodiac: Monkey";
myFunFacts[12] = "90's kid for life!";
myFunFacts[13] = "Favorite watersport: Jet Skiing!";
myFunFacts[14] = "Disney trivia champion!";
myFunFacts[15] = "Lottery winner ($11)!";

function generateFunFact() {
    let newFact = myFunFacts[Math.floor(Math.random() * myFunFacts.length)]
    factBoxEl.innerHTML = newFact;
}

// SKILL BOXES
let skillBoxMainEl = document.querySelectorAll(".skill_group");

skillBoxMainEl.forEach(box => {
    const skillBox1El = box.querySelector(".skillBox1");
    const skillBox2El = box.querySelector(".skillBox2");

    const skillBoxOpenBtnEl = box.querySelector(".open");
    const skillBoxCloseBtnEl = box.querySelector(".close");

    skillBoxOpenBtnEl.addEventListener("click", () => {
        displaySkillsBtn();
    })

    skillBoxCloseBtnEl.addEventListener("click", () => {
        hideSkillsBtn();
    })

    function displaySkillsBtn() {
        box.querySelector(".open").style.display = "none";
        box.querySelector(".close").style.display = "inline";
        box.querySelector(".skillBox2").style.display = "block";
    }

    function hideSkillsBtn() {
        box.querySelector(".open").style.display = "inline";
        box.querySelector(".close").style.display = "none";
        box.querySelector(".skillBox2").style.display = "none";
    }
})

// PROJECT BOXES