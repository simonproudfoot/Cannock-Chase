var app = new Vue({
    el: '#app',
    data() {
        return {
            // Popups
            popups: {
                conservation: false,
                habitats: {
                    woodland: false,
                    fens: false,
                    lowlandHeath: false
                }
            },
            // Wildlifes
            selectedConservation: 0,
            conservation: [{
                    preTitle: 'Project One',
                    title: 'Heathland Restoration',
                    image: 'assets/img/cannock.jpg',
                    position: ['149', '914'],
                    content: 'We were awarded a grant of £192,221 under National Grid’s Landscape Enhancement Initiative for heathland restoration work at Gentleshaw Common. This is to be implemented over the next five years and will be delivered by our partners Staffordshire Wildlife Trust.'
                },
                {
                    preTitle: 'Project Four',
                    title: 'Protecting Nightjars',
                    image: 'assets/img/cannock.jpg',
                    position: ['414', '1243'],
                    content: 'West Midlands Ringing Group are working with us to carry out a survey of the Nightjar and an assessment of breeding success within Cannock Chase. As a nocturnal, ground-nesting bird it is often subject to unintentional disturbance. The results of this survey will help us formulate the best management plan to conserve this species.'
                },
                {
                    preTitle: 'Project Three',
                    title: 'Deer Managment',
                    image: 'assets/img/cannock.jpg',
                    position: ['660', '895'],
                    content: 'The deer population is monitored, and its numbers managed for the welfare of the animals. Management measures include the erection of deer fencing to reduce damage to farmland and installation of deer mirrors and warning signs to prevent road casualties. Please help us to look after these lovely animals by driving with care and keeping all dogs under proper control.'
                },
                {
                    preTitle: 'Project Five',
                    title: 'Historic Environment',
                    image: 'assets/img/cannock.jpg',
                    position: ['740', '1447'],
                    content: 'We work with community groups, societies, and local people to conserve Cannock Chase’s historic environment and connect communities to this history. Our reconstructed Great War Hut, originally situated at one of two vast training camps built here during the Great War, provides an educational experience for visitors keen to learn more about the area’s military history.'
                },
                {
                    preTitle: 'Project Two',
                    title: 'Crayfish Recovery',
                    image: 'assets/img/cannock.jpg',
                    position: ['872', '525'],
                    content: 'We are working with Staffordshire Wildlife Trust to survey for the presence/absence of the endangered native, white-clawed crayfish, and the non-native signal crayfish (which out-compete our native crayfish and carry a potentially lethal fungal pathogen). We plan to encourage native crayfish populations by improving their habitat and controlling the number of signal crayfish.'
                }
            ],
            habitats: {
                lowlandHeath: [{
                        title: 'Bilberry-hybrid',
                        content: 'This habitat boasts the main British population of the hybrid bilberry, a plant of restricted occurrence, known locally as the ‘Cannock Chase’ berry.',
                        image: 'assets/img/cannock.jpg'
                    },
                    {
                        title: 'Bog Bush Cricket',
                        content: 'The Bog Bush Cricket’s hind legs are large in proportion to its body, which allows it to jump long distances. It feeds on heather and cross-leaved heath.',
                        image: 'assets/img/cannock.jpg'
                    },
                    {
                        title: 'Adder',
                        content: 'The adder is a nationally protected species. They can usually be distinguished by dark zig-zag markings on their backs, although some are all black.',
                        image: 'assets/img/cannock.jpg'
                    },
                    {
                        title: 'Slow worm',
                        content: 'Did you know the slow worm is actually a legless lizard? They are a protected species in the UK and, like other reptiles, hibernate during the colder months.',
                        image: 'assets/img/cannock.jpg'
                    }
                ],
                fens: [{
                        title: 'Round-leaved sundews',
                        content: 'The round, green-red leaves of this carnivorous plant have sticky, hair-like tendrils with dewy droplets at the tips to tempt in unsuspecting insects.',
                        image: 'assets/img/cannock.jpg'
                    },
                    {
                        title: 'Sphagnum moss',
                        content: 'There are over 30 species of sphagnum moss in the UK with colours including red, pink, orange and green. They grow together, forming a spongy carpet that retains water.',
                        image: 'assets/img/cannock.jpg'
                    }
                ],
                anciantWoodland: [{
                        title: 'Saproxylic beetles',
                        content: 'Saproxylic species are associated with the decay of wood, so it’s no surprise these guys are also known as dead wood beetles.',
                        image: 'assets/img/cannock.jpg'
                    },
                    {
                        title: 'Small pearl-bordered fritillary butterfly',
                        content: 'Cannock Chase is one of few locations in Staffordshire to support this species of butterfly. Look closely: distinctive marks on the left forewing resemble the number 730.',
                        image: 'assets/img/cannock.jpg'
                    }
                ]
            },
            specieSelected: 0,
            species: [{
                    name: 'intro',
                    title: 'Species',
                    text: 'As you explore the park, keep an eye out for some of the many different species that live here. You are likely to come across our large population of fallow deer (there are around 800). But what else could you be looking out for?',
                    image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=670&q=80'
                },
                {
                    title: 'Nightjar',
                    name: 'Birds',
                    image: 'https://images.unsplash.com/photo-1619640377937-af6f864af44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
                    text: 'As well as having a cool-sounding name, the European Nightjar is a notable species. They are nocturnal, searching for moths and beetles to eat around dusk and dawn. Their pointed wings and long tails make them similar in silhouette to a kestrel or cuckoo. Their colouring includes brown, grey, cream, and white, giving them good camouflage in the daytime. This is especially important for the female as they’re a ground-nesting bird. The Nightjar’s preferred habitats are heathlands, moorlands, and woodlands with open clearings. Your best chance to see and hear them is between late April to August, as they spend their winters in Southern Africa. Keep your ears open for the male’s unique ‘churring’ call, which can contain up to 1900 notes a minute!'
                },
                {
                    title: 'Pipistrelles',
                    name: 'Bats',
                    image: 'https://images.unsplash.com/photo-1563293455-74cd8fc2cabe?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGJhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60',
                    text: 'New research has shown that Cannock Chase provides a home for 9 out of Staffordshire’s 12 species of bat, including the Common Pipistrelle and the Soprano Pipistrelle. Common Pipistrelles are among the smallest bats in the UK (although not as small as Soprano Pipistrelles). They have a medium dark brown colouration and a typically darker face. Their flight is usually low, rapid, and agile and they feed in a range of habitats, including woodland, hedgerows, grassland, and farmland, as well as suburban and urban areas. Soprano pipistrelles look very similar to the common pipistrelle, but the face and area around the eyes is typically pink in colour. They usually feed in wetland habitats over lakes and rivers, as well as on woodland edges, tree lines and hedgerows.'
                }, {
                    title: 'Great crested newt',
                    name: 'Amphibians',
                    image: 'https://images.unsplash.com/photo-1415857301893-713be90c0777?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
                    text: 'The valley mires and fens of Cannock Chase are home to the Great Crested Newt, which is an internationally important species. From above they look almost black, but the undersides of their bodies are bright orange or yellow with dark spots. The males have a jagged crest along their backs, while the females do not. <br/><br/>Great crested newts need bodies of water for breeding, with terrestrial features such as rough grassland, hedgerows, woodland, and scrub within 500 metres. Their population has declined over the years as these habitats have become less common.'
                }
            ]
        }
    },
    mounted() {},
    methods: {
        selectPopup(val) {
            this[val] = true
        },
        selectSpecie(i) {
            this.specieSelected = i
        }
    }
})