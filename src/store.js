import {createStore} from 'vuex'

const store = createStore({
    state(){
        return{
            //for gallery projects
            shadedProj: true,
            shadedProf: true,
            isProjectVisible: false,
            isProfileVisible: false,


            agencyName: 'Iron-Dev',
            image: '../../assets/portrait.jpg',
            projectGallery: [
                {
                    id: 'A',
                    title: 'Classification of Cacao Ripeness Using Convolutional Neural Network',
                    description: `lorem lores aaw dfa lorem lores aaw lorem lores aaw dfdflorem loresaaw dflorem lores aaw dflorem lores aaw dflorem lores aaw dfa lorem lores aaw lorem lores aaw dfdflorem loresaaw dflorem lores aaw dflorem lores aaw df
                                fa lorem lores aaw lorem lores aaw dfdflorem loresaaw dflorem lores aaw dflorem lores aaw df`,
                    outputImages: ['aw','portrait'],
                },
                {
                    id: 'B',
                    title: 'Automatic Notification System',
                    description: 'lorem lores aaw dfa lorem lores aaw lorem lores aaw dfdflorem loresaaw dflorem lores aaw dflorem lores aaw dflorem lores aaw dfa lorem lores aaw lorem lores aaw dfdflorem loresaaw dflorem lores aaw dflorem lores aaw df',
                    outputImages: ['landscape'],
                },
                {
                    id: 'C',
                    title: 'Automated Solar Panel Cleaning System',
                    description: 'lorem lores aaw dfa lorem lores aaw lorem lores aaw dfdflorem loresaaw dflorem lores aaw dflorem lores aaw dflorem lores aaw dfa lorem lores aaw lorem lores aaw dfdflorem loresaaw dflorem lores aaw dflorem lores aaw df',
                    outputImages: ['landscape','aw'],
                },
                {
                    id: 'D',
                    title: 'Automated Washing Machine Using DC Motor',
                    description: 'lorem lores aaw dfa lorem lores aaw lorem lores aaw dfdflorem loresaaw dflorem lores aaw dflorem lores aaw dflorem lores aaw dfa lorem lores aaw lorem lores aaw dfdflorem loresaaw dflorem lores aaw dflorem lores aaw df',
                    outputImages: ['aw','portrait','landscape'],
                },
            ],
            profileGallery: [
                {
                    name: 'Engr. Jhaerix Borromeo',
                    expertise: ['Circuit Design','Arduino Programming','PCB Design'],
                    degree: '(BSECE)-Bachelor of Science in Electronics and Communication Engineering',
                    description: 'aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsdaaji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda',
                    image: 'aw'
                },
                {
                    name: 'Karl Borromeo',
                    expertise: ['Frontend Developer','Mobile Application Developer','Machine Learning Engineer'],
                    degree: '(BSCS)-Bachelor of Science in Computer Science',
                    description: 'aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda aji fdsa ew  fdsa wer wreq  fdasf wqrewq rweqrweqr werfsda',
                    image: 'portrait'
                },
                {
                    name: 'Reynard Torculas',
                    expertise: ['Backend Developer','Mobile Application Developer','Machine Learning Engineer'],
                    degree: '(BSCS)-Bachelor of Science in Computer Science',
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
                    serviceName: 'Engineering Services',
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
    mutations:{
        toggleProjects(state){
            console.log('ClickedProject')
            state.isProjectVisible = !state.isProjectVisible
            state.shadedProj = !state.shadedProj
        },
        toggleProfile(state){
            console.log('ClickedProfile')
            state.isProfileVisible = !state.isProfileVisible
            state.shadedProf = !state.shadedProf
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
        },

        //for gallery
        shadedProj(state){
            return state.shadedProj 
        },
        isProjectVisible(state){
            return state.isProjectVisible
        },
        shadedProf(state){
            return state.shadedProf 
        },
        isProfileVisible(state){
            return state.isProfileVisible
        }
    }
})

export default store;