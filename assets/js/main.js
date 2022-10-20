/*
   MILESTONE 0
*/
// creo un array di oggetti per rappresentare i membri del team
const members = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },

    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },

    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },

    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },

    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },

    {
        name: 'Barbara Ramos',
        role: 'Grafic designer',
        image: 'barbara-ramos-graphic-designer.jpg',
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
    console.log(`Member ${i} Name : ` + thisMember.name);
    console.log(`Member ${i} Role: ` + thisMember.role);
    console.log(`Member ${i} Image: ` + thisMember.image);
}

/* 
   /MILESTONE 1
*/

/* 
   MILESTONE 2
*/

// stampo nella DOM le informazioni sottoforma di stringhe