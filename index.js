const button = document.getElementById("toggleBtn");
const mainBox = document.getElementById("mainBox");
const headerBox = document.getElementById("headerBox");
const headerOne = document.querySelector("h1");
let messages = JSON.parse(localStorage.getItem("messages")) || [];


button.addEventListener("click", ()=>{
    // the message box's color
    mainBox.classList.toggle("bg-black");
    mainBox.classList.toggle("bg-white");

    // changing of the header's color
    headerBox.classList.toggle("bg-black");
    headerBox.classList.toggle("bg-white");

    // the h1 color
    headerOne.classList.toggle("text-white");
})

const chatForm = document.getElementById("chatForm");
const chatBox = document.getElementById("chat-box");
const chatSpace = document.getElementById("chatSpace");

chatForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const message = chatBox.value.trim();
    if (message === ""){
        alert("you can't send an empty message");
     return; 
    //  only return when message is empty
}
   const bubble = document.createElement("div");
    bubble.className = "bg-gradient-to-r from-[#ac1ed6] to-[#c26e73] text-white py-3 px-5 w-fit ml-auto text-base max-w-lg rounded-lg";
    bubble.textContent = message; 

    chatSpace.appendChild(bubble);
    chatSpace.scrollTop = chatSpace.scrollHeight;
    chatBox.value ="";

    const userObj = { sender: "user", text: message };
    messages.push(userObj);
    localStorage.setItem("messages", JSON.stringify(messages));


    setTimeout(() => botReply(message), 2000);

});

function displayMessage(messageObj){
    const bubble = document.createElement("div");
    
    if (messageObj.sender === "user") {
        bubble.className = "bg-gradient-to-r from-[#ac1ed6] to-[#c26e73] text-white ml-auto py-3 px-5 text-base max-w-lg rounded-lg w-fit";
    } else {
        bubble.className = "bg-[#221f20] text-white mr-auto const baseClasses py-3 px-5 text-base max-w-lg rounded-lg w-fit" ;
    }

    bubble.textContent = messageObj.text;
    chatSpace.appendChild(bubble);
    chatSpace.scrollTop = chatSpace.scrollHeight;

}
    window.addEventListener("DOMContentLoaded", () => {
    messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.forEach(displayMessage);
    });


const simpleBotReplies = [
  {
    keywords: ["hello", "hi", "hey"],
    response: "Hi there 🌿 I'm truly glad you decided to reach out today. Just showing up here is a sign of strength.",
    followUp: "How has your heart been feeling lately?"
    },
    {
    keywords: ["sad", "cry", "unhappy", "hurt"],
    response: "I'm really sorry you're feeling this way. Sadness can feel like a heavy cloud, but even now, you’re not alone.",
    followUp: "Would you like to share what’s been weighing you down? I'm here for you, fully."
    },
    {
    keywords: ["stress", "tired", "overwhelmed", "pressure", "burnout"],
    response: "It sounds like you've been carrying so much, maybe for too long. Burnout isn't failure — it's your body and mind asking for care.",
    followUp: "What’s been asking the most of you lately? You don’t have to carry it alone."
    },
    {
    keywords: ["anxious", "panic", "worried", "fear", "scared"],
    response: "Anxiety can feel like a storm inside. If you're feeling shaken, please know it’s okay to pause and breathe here.",
    followUp: "Would it help to share what’s been causing the tension lately? We can slow it down together."
    },
    {
    keywords: ["lonely", "alone", "isolated"],
    response: "Loneliness can be loud — like the world is moving without you. But I see you. And you’re not invisible here.",
    followUp: "Has this feeling been with you for a while? I’m here, truly present, if you’d like to talk."
    },
    {
    keywords: ["inferior", "less than", "not as good", "beneath", "inferiority complex"],
    response: "Feeling inferior often comes from harsh comparisons and unrealistic standards. But your value isn’t measured by how you stack up — it’s something you already carry within you.",
    followUp: "Have you noticed where these feelings of being 'less than' show up the most? I’m here to explore that with you, without judgment."
    },
    {
    keywords: ["thanks", "thank you", "grateful"],
    response: "You’re so welcome 💛 Just being here is brave. I’m honored to hold this space with you.",
    followUp: "Is there anything else on your mind or in your heart you’d like to explore together?"
    },
    {
    keywords: ["worthless", "not enough", "useless", "no value"],
    response: "I want you to know you are *not* defined by the hard days or the heavy thoughts. You have inherent worth — even when your mind tells you otherwise.",
    followUp: "What’s been making you feel this way? You don’t need to filter yourself here."
    },
    {
    keywords: ["shame", "ashamed", "guilty", "regret"],
    response: "Shame often grows in silence — but it loses power when spoken. Whatever happened, you are still worthy of compassion.",
    followUp: "Would you feel okay telling me what’s behind the shame? No judgment here — just presence."
    },
    {
    keywords: ["grief", "loss", "miss", "gone", "passed"],
    response: "Grief changes us — it doesn't ask for permission. It’s not something to 'get over,' but something to carry gently with love.",
    followUp: "What have you been grieving lately? I’m here to honor that space with you."
    },
    {
    keywords: ["triggered", "flashback", "trauma", "past"],
    response: "When something reopens an old wound, it can feel as if the past is happening all over again. Your response makes sense — it’s your body trying to protect you.",
    followUp: "Would you like to name what’s been coming up? We can sit with it slowly and safely."
    },
    {
    keywords: ["boundary", "no", "saying no", "guilt"],
    response: "Setting boundaries is an act of self-respect, not rejection. Guilt often follows because you care — but protecting your peace is not wrong.",
    followUp: "Was there a recent moment where you had to choose yourself? I’m proud of you, even if it felt hard."
    },
    {
    keywords: ["intrusive thoughts", "dark thoughts", "can't stop thinking", "thoughts won't leave"],
    response: "Those thoughts aren’t who you are. They’re loud, but they’re not true. You’re more than your mind’s noise.",
    followUp: "Would it help to talk through them with no judgment? You’re safe here."
    },
    {
    keywords: ["not good enough", "impostor", "fake", "don’t belong"],
    response: "You belong, even if your thoughts tell you otherwise. Your presence and your story matter — especially now.",
    followUp: "Can you tell me what’s making you feel this way today? I’m listening."
    },
    {
    keywords: ["how are you", "how are you doing", "how are things", "how’s it going"],
    response: "Thank you for asking — and more importantly, how *you* are matters deeply here.",
    followUp: "Would you like to tell me how you've been holding up lately?"
    },
    {
    keywords: ["i'm fine", "i'm okay", "i'm good"],
    response: "I'm glad to hear that, but I also want you to know it's okay if 'fine' is covering more complicated feelings.",
    followUp: "Do you feel safe to be fully honest here? I'm here for all of it — even the quiet struggles."
    },
    {
    keywords: ["not okay", "i'm not okay", "i'm struggling", "not good"],
    response: "Thank you for being honest. Saying you’re not okay is an act of courage — not weakness.",
    followUp: "Would you like to share what’s been making things hard lately? I'm here to listen gently."
    },
    {
    keywords: ["i'm surviving", "just managing", "barely coping"],
    response: "It takes strength to keep going, even when it's tough. Surviving is still a form of strength.",
    followUp: "What’s been helping you hold on lately? Or what’s been the heaviest part of it all?"
    },
    {
    keywords: ["over it", "done", "tired of it", "can’t anymore"],
    response: "It sounds like you’re completely exhausted — emotionally, mentally, maybe even spiritually.",
    followUp: "Would it help to put words to what’s been draining you? I’m holding this space for you fully."
    },
    {
    keywords: ["trying", "hanging on", "holding on"],
    response: "Trying is more than enough. Effort counts, even if it doesn’t feel like progress.",
    followUp: "What’s been helping you stay grounded? Or what’s making the trying so hard?"
    },
    {
    keywords: ["coping", "managing", "getting by"],
    response: "Coping takes quiet strength, and I see that in you. It’s okay if it still feels messy or uncertain.",
    followUp: "Do you want to talk about what’s helping or hurting your ability to cope lately?"
    },
   {
    keywords: ["numb", "empty", "depressed", "low mood", "no energy"],
    response: "Feeling numb can be just as painful as feeling everything. Sometimes our minds go quiet when they’re trying to protect us.",
    followUp: "You don’t have to pretend. I’m here to hold space for whatever you can share."
   }
];

function botReply(userInput) {
  userInput = userInput.toLowerCase();
  let found = false;

  for (const reply of simpleBotReplies) {
    if (reply.keywords.some(keyword => userInput.includes(keyword))) {
      const botObj = { sender: "bot", text: reply.response + "\n\n" + reply.followUp };
      messages.push(botObj);
      localStorage.setItem("messages", JSON.stringify(messages));
      displayMessage(botObj);
      found = true;
      break;
    }
  }

  if (!found) {
    const fallback = {
      sender: "bot",
      text: "Thank you for sharing that with me. Sometimes words don’t always fit neatly — but what you feel is valid, and I’m here to listen."
    };
    messages.push(fallback);
    localStorage.setItem("messages", JSON.stringify(messages));
    displayMessage(fallback);
  }
}

const clearChat = document.getElementById("clearChat");
clearChat.addEventListener("click", ()=>{
    localStorage.removeItem("messages");
    chatSpace.innerHTML="";
})

const toggleBtn = document.getElementById("menuToggle");
const mobileMenu= document.getElementById("mobileMenu");
toggleBtn.addEventListener("click", ()=>{
mobileMenu.classList.toggle("hidden");
mobileMenu.classList.add("flex");
})

