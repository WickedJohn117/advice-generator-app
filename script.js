const API_URL="https://api.adviceslip.com/advice";
const adviceId=document.getElementById("advice-id");
const adviceText=document.getElementById("advice-text");
const adviceBtn=document.getElementById("advice-btn");

async function getAdvice(){
        adviceBtn.disabled = true;
adviceText.textContent = "Loading...";
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`Status ${response.status}`);
        const data = await response.json();
        const advice = data.slip;
        adviceId.textContent = advice.id;
        adviceText.textContent = `"${advice.advice}"`;
    } catch (err) {
        adviceText.textContent = "Could not load advice. Try again.";
    }
    finally {
    adviceBtn.disabled = false;
}
}
getAdvice();

adviceBtn.addEventListener("click",getAdvice);

