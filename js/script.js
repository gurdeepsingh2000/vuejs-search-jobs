Vue.config.devtools = true;

new Vue(
    {
        el: '#job-page',
    data: {
            jobs: [
                {
                id: 1,
                company: 'Perferendis',
                position: 'Developer',
                description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                created_at: '5/22/2021',
                logo: 'logo.jpg',
                city: 'Roma',
                contract: 'Full Time'
                },

                {
                id: 2,
                company: 'DesignerZone',
                position: 'UI Designers',
                description: ' For those who write, this tool can be an excellent device to aid in the creative writing process',
                created_at: '10/13/2021',
                logo: 'logo.jpg',
                city: 'Treviso',
                contract: 'Part Time'
                },

                {
                id: 3,
                company: 'Kali Linux',
                position: 'Hacker',
                description: ' Once you have input all of your specifications, all you have to do is to press',
                created_at: '7/15/2021',
                logo: 'logo.jpg',
                city: 'Torino',
                contract: 'Full Time'
                },
                {
                id: 4,
                company: 'EtaByte',
                position: 'Web Designer',
                description: "Welcome to the website. If you're here",
                created_at: '7/21/2021',
                logo: 'logo.jpg',
                city: 'Napoli',
                contract: 'Full Time'
                }   
            ],
            
            starred: [1, 2, 3],
            applied: [4, 5]

        },
                methods: {
                    
            }
    }
);

// Milestone 1
// Mostriamo tutti gli annunci in una lista, con una grafica molto elementare.
