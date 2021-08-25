const company= {
    name: 'gp',
    ceo: {id: 1, name:'jack ma', salary: 2000},
    web :{
        id: 2,
         employee: 22, 
         averageSalary: 30000, 
        framework:'react',
        tech:{
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
    location: 'bd'
};
const {employee} = company.web;
console.log(employee);