/*
   MILESTONE 0
*/
// creo un array di oggetti per rappresentare i membri del team
const members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: './assets/img/wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: './assets/img/angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: './assets/img/walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: './assets/img/angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: './assets/img/scott-estrada-developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        role: 'Grafic designer',
        image: './assets/img/barbara-ramos-graphic-designer.jpg',
    },
]
console.log(members);

/* 
   /MILESTONE 0
*/

/* 
   MILESTONE 1
*/

// stampo in console le informazioni di nome, ruolo e stringa della foto
for (let i = 0; i < members.length; i++) {
    const thisMember = members[i];

    for(let key in thisMember) {
        let membersDetails = thisMember[key];
        console.log(`${key}: ${membersDetails}`)
    };
    /* 
       /MILESTONE 1
    */

   /* 
      MILESTONE 2
   */
   
   // stampo nella DOM le informazioni sottoforma di stringhe
    const memberCard =
        `<div class="col-4">
            <img class="img-fluid" src="${thisMember.image}" alt="">
            <h5>${thisMember.name}</h5>
            <span>${thisMember.role}</h5>
        </div>`;

    const row = document.querySelector('.row');
    row.insertAdjacentHTML('beforeend', memberCard)
};