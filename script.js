


let results = [];

let participants = [
    { name: "Mara", group: 1 },
    { name: "Lohana", group: 1 },
    { name: "Carol", group: 1 },
    { name: "Antônio", group: 1 },
    { name: "Kaique", group: 1 },
    { name: "Marco Antônio", group: 2 },
    { name: "Luan", group: 2 },
    { name: "Yasmin", group: 2 },
    { name: "João", group: 3 },
    { name: "Simone", group: 3 },
    { name: "Pri", group: 4 },
    { name: "Lud", group: 4 },
    { name: "Marco Aurélio", group: 4 }
];

let seed = "merryChristmas"; 
Math.seedrandom(seed);

let availableParticipants = [...participants];



participants.forEach(participant => {
    let possibleMatches = availableParticipants.filter(p => p.group !== participant.group && p.name !== participant.name);

    if (possibleMatches.length === 0) {
        console.error("No match found for " + participant.name);
        return;
    }

    let matchIndex = Math.floor(Math.random() * possibleMatches.length);
    let match = possibleMatches[matchIndex];

    results.push({ giver: participant.name, receiver: match.name });

    availableParticipants = availableParticipants.filter(p => p.name !== match.name);
});


/* console.log(results);
 */


const params = new URLSearchParams(window.location.search);

const currentName = params.get('n');

let acesso = false
let assignedFriend = ''

results.forEach(pair => {
    if (pair.giver === currentName) {
        acesso = true;
        assignedFriend = pair.receiver;
    }
}); 

console.log(acesso)

let singleResult = document.getElementById('singleResult')
document.getElementById('currentName').innerHTML = currentName

function btnRun(){
    console.log('rover')
    document.getElementById('ask').innerHTML = "O seu amigo oculto é:"
    document.getElementById('btnRun').style.display = "none"
    singleResult.innerHTML = `${assignedFriend}`
    singleResult.style.filter = "none"
    
}
