import {createStore} from 'vuex'

const store = createStore({
    state(){
        return{
            agencyName: 'Iron-Dev',
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
                    image: '../../assets/portrait.jpg'
                },
                {
                    name: 'Karl Borromeo',
                    expertise: 'Frontend Developer',
                    degree: 'Bachelor of Science in Computer Science',
                    description: 'aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda',
                    image: '../../assets/portrait.jpg'
                },
                {
                    name: 'Reynard Torculas',
                    expertise: 'Backend Developer',
                    degree: 'Bachelor of Science in Computer Science',
                    description: 'aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda',
                    image: '../../assets/portrait.jpg'
                },
            ],
            services:[
                {
                    serviceName: 'Web Development',
                    serviceIcon: 'ICON',
                    description: 'aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsdaaji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda',
                    imageTools: 'IMAGE'
                },
                {
                    serviceName: 'Mobile App Development',
                    serviceIcon: 'ICON',
                    description: 'aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsdaaji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda',
                    imageTools: 'IMAGE'
                },
                {
                    serviceName: 'Engineering Services',
                    serviceIcon: 'ICON',
                    description: 'aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsdaaji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda',
                    imageTools: 'IMAGE'
                },
                {
                    serviceName: 'Machine Learning & Deep Learning',
                    serviceIcon: 'ICON',
                    description: 'aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsdaaji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda',
                    imageTools: 'IMAGE'
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
        }
    }
})

export default store;