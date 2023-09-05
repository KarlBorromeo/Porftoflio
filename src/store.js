import {createStore} from 'vuex'

const store = createStore({
    state(){
        return{
            agencyName: 'Iron-Dev',
            image: '../../assets/portrait.jpg',
            projectGallery: [
                {
                    id: 'A',
                    title: 'SAMPLE TITLE',
                    description: 'lorem lores aaw dfa lorem lores aaw lorem lores aaw dfdflorem loresaaw dflorem lores aaw dflorem lores aaw dflorem lores aaw dfa lorem lores aaw lorem lores aaw dfdflorem loresaaw dflorem lores aaw dflorem lores aaw df',
                    dateFinished: 'June 25 2000',
                    outputImages: "../../assets/landscape.jpg",
                },
                {
                    id: 'B',
                    title: 'SAMPLE TITLE SECOND',
                    description: 'lorem lores aaw dfa lorem lores aaw lorem lores aaw dfdflorem loresaaw dflorem lores aaw dflorem lores aaw dflorem lores aaw dfa lorem lores aaw lorem lores aaw dfdflorem loresaaw dflorem lores aaw dflorem lores aaw df',
                    dateFinished: 'July 24 2023',
                    outputImages: '../../assets/portrait.jpg',
                },
            ],
            profileGallery: [
                {
                    name: 'Jhaerix Borromeo',
                    expertise: 'Circuit Design',
                    degree: 'Bachelor of Science in ECE',
                    description: 'aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsdaaji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda',
                    image: 'aw'
                },
                {
                    name: 'Karl Borromeo',
                    expertise: 'Frontend Developer',
                    degree: 'Bachelor of Science in Computer Science',
                    description: 'aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda',
                    image: 'portrait'
                },
                {
                    name: 'Reynard Torculas',
                    expertise: 'Backend Developer',
                    degree: 'Bachelor of Science in Computer Science',
                    description: 'aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda',
                    image: 'landscape'
                },
            ],
            services:[
                {
                    serviceName: 'Web Development',
                    serviceIcon: 'portrait',
                    description: `aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda aji fdsa ew  fdsa wer wreq
                                  fdasf wqrewq rweqrweqr werfsdaaji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsdaaji
                                   fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda aji fdsa ew  fdsa wer wreq  fdasf
                                    wqrewq rweqrweqr werfsdaaji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda`,
                    tools: ['VueJS', 'ExpressJS', 'Firebase'],
                },
                {
                    serviceName: 'Mobile App Development',
                    serviceIcon: 'aw',
                    description: `aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda aji fdsa ew  fdsa wer wreq
                                fdasf wqrewq rweqrweqr werfsdaaji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsdaaji fdsa ew  fdsa wer wreq 
                                fdasf wqrewq rweqrweqr werfsda aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsdaaji fdsa ew  fdsa wer wreq  
                                fdasf wqrewq rweqrweqr werfsda`,
                    tools: ['Flutter', 'Android Studio']
                },
                {
                    serviceName: 'Electronics Engineering Services',
                    serviceIcon: 'landscape',
                    description: `aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda aji fdsa ew  fdsa wer wreq  
                                    fdasf wqrewq rweqrweqr werfsdaaji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsdaaji 
                                    fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda aji fdsa ew  fdsa wer wreq  fdasf wqrewq 
                                    rweqrweqr werfsdaaji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsdaaji fdsa ew  fdsa wer wreq  
                                    fdasf wqrewq rweqrweqr werfsda aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsdaaji fdsa ew  
                                    fdsa wer wreq  fdasf wqrewq rweqrweqr werfsdaaji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda 
                                    aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsdaaji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda`,
                    tools: ['Circuit Design']
                },
                {
                    serviceName: 'Machine Learning & Deep Learning',
                    serviceIcon: 'aw',
                    description: `aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsdaaji fdsa ew  fdsa wer wreq  
                                    fdasf wqrewq rweqrweqr werfsda aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsdaaji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda`,
                    tools: ['Keras', 'Tensorflow', 'Pytorch']
                }
            ]
        }
    },
    getters: {
        returnTitle(state){
            return state.agencyName
        },
        project(state){
            return state.projectGallery
        },
        profile(state){
            return state.profileGallery  
        },
        service(state){
            return state.services
        },
        img(state){
            return state.image
        }
    }
})

export default store;