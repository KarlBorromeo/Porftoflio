import {createStore} from 'vuex'
import emailjs from 'emailjs-com';

const store = createStore({
    state(){
        return{
            //loading screen
            isLoading: false,
            isRequestError: false,
            showSucces: false,
            isReset: false,


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
                    title: 'Classification of Cacao Pods Ripeness Using Convolutional Neural Network',
                    description: `This project is a mobile application that integrates detection and classification models 
                                    based on the SSD MobileNet and VGG16 architectures, respectively. The application employs 
                                    TensorFlow for object detection and incorporates image preprocessing techniques to improve accuracy. 
                                    The successful integration of the model into a mobile application demonstrates its practical potential in the cacao industry.
                                    The development tools that were used: TENSORFLOW, KERAS, ANDROID STUDIO AND PYTHON`,
                    outputImages: ['karlThesis1','karlThesis2'],
                },
                {
                    id: 'E',
                    title: 'Land Classification Plugin for QGIS Using U-Net',
                    description: 'This project presents the development of a Land Classification Plugin that automates image classification using a pre-trained Pix2Pix U-Net model. The plugin offers a user-friendly interface and demonstrates superior accuracy and efficiency in classifying land cover images compared to traditional methods.',
                    outputImages: ['reynardThesis1','reynardThesis2'],
                },
                {
                    id: 'B',
                    title: 'Automatic Notification System',
                    description: `Mobile application system that lets the user sets a schedule and mention names that are registered in the system. When the event is
                                    created the system will automatically notfiy via email about the event. This is realtime-based and can create, delete and update the event.
                                    `,
                    outputImages: ['karlojt1'],
                },
                {
                    id: 'C',
                    title: 'Automated Solar Panel Cleaning System',
                    description: 'lorem lores aaw dfa lorem lores aaw lorem lores aaw dfdflorem loresaaw dflorem lores aaw dflorem lores aaw dflorem lores aaw dfa lorem lores aaw lorem lores aaw dfdflorem loresaaw dflorem lores aaw dflorem lores aaw df',
                    outputImages: ['solarpanelCleaner1','solarpanelCleaner2'],
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
                    description: `I'm Jhaerix Borromeo, an electronics engineer with a strong foundation 
                                from Caraga State University. With a passion for innovation and a diverse skill set, 
                                I specialize in circuit design, PCB layout, microcontroller programming (including embedded C and C++), and 3D design.
                                My goal is to turn your ideas into reality by providing tailored electronic solutions that meet your specific needs. Whether you're a business looking to optimize your electronic systems or an individual with a unique project in mind, I'm here to bring expertise and creativity to the table. 
                                Let's collaborate to create cutting-edge electronic solutions that exceed your expectations.`,
                    image: 'jhaerix'
                },
                {
                    name: 'Karl Borromeo',
                    expertise: ['Frontend Developer','Mobile Application Developer','Machine Learning Engineer'],
                    degree: '(BSCS)-Bachelor of Science in Computer Science',
                    description: `Hi, nice to see you here. In order for you to know me a little bit, let me introduce myself. I am passionate and driven individual residing in Cabrera Street, Pasay, Metro Manila. 
                                    A graduate of Bachelor of Science degree in Computer Science at Caraga State University. I specialize in programming, designing and problem solving.
                                    I am dedicated to expanding and applying my knowledge and expertise in the field of programming and eager to earn more programming and leadership skills. With a keen interest in software 
                                    development and other stuff in a related field of programming, I had proven myself to be a proficient programmer with successfull tasks and projects.`,
                    image: 'karl'
                },
                {
                    name: 'Reynard Torculas',
                    expertise: ['Backend Developer','Mobile Application Developer','Machine Learning Engineer'],
                    degree: '(BSCS)-Bachelor of Science in Computer Science',
                    description: `I am a motivated graduate of Bachelor of Science in Computer 
                                    Science (BSCS) at Caraga State University. 
                                    With a strong passion for technology and a drive for 
                                    academic excellence, I am dedicated to expanding 
                                    my knowledge and skills in the field of computer science.
                                    I possesses a proactive and inquisitive mindset, constantly seeking 
                                    opportunities to apply my theoretical knowledge to practical projects. I enjoy 
                                    collaborating with peers and engaging in hands-on experiences to further enhance 
                                    my problem-solving and analytical skills.`,
                    image: 'reynard'
                },
            ],
            services:[
                {
                    serviceName: 'Web Development',
                    serviceIcon: 'webdev',
                    description: `We specialize in transforming your ideas into user-friendly and intuitive websites. 
                                    Our approach blends creativity and technical expertise to bring your vision to life. 
                                    Whether you're starting from scratch or looking to revamp your online presence, 
                                    we're here to guide you through every step of the process.Boost your online visibility 
                                    and engage your audience with our web development solutions. 
                                    From wireframing and prototyping to responsive design, we ensure your website 
                                    not only looks great but also delivers exceptional user experiences.`,
                    tools: ['Portfolios','E-Commerce Solutions'],
                },
                {
                    serviceName: 'Engineering Services',
                    serviceIcon: 'engineering',
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
                    serviceIcon: 'ai',
                    description: `We specialize in harnessing the power of machine learning to drive innovation and deliver
                                 transformative solutions for businesses across various industries. Our comprehensive Machine Learning Services Portfolio 
                                    is designed to meet your unique needs and propel your organization into the future of data-driven decision-making.`,
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
        }, 
        
        ///emailjs functions
        showSucces(state,bool){
            state.showSucces = bool;
        },
        isLoading(state,bool){
            state.isLoading = bool
        },
        isRequestError(state,bool){
            state.isRequestError = bool
        },
        isReset(state, bool){
            state.isReset = bool
        }
    },
    actions:{
        
        async submit(context,params){
            
            //in profile EMAILJS
            const publicKey= 'W4AFbyvKTJ6KVntiJ'  
            const serviceId= 'service_32p9jw8'
            const templateId=  'template_60n8j8j'
            emailjs.init(publicKey)


            context.commit('isLoading', true)
            const payload = {
              fullname: params.fullname,
              email: params.email,
              service: params.service,
              description: params.description
            }
            try{
              const response = await emailjs.send(serviceId,templateId, payload)
              if(response.text == 'OK'){
                console.log('SUCCESFULL SENDING')
                context.commit('showSucces',true)
                await new Promise(resolve => setTimeout(resolve, 3000));
                context.commit('showSucces',false)
                context.commit('isReset',true)
              }else{
                throw new Error("Something wrong")
              }
            }catch(error){
                console.log(error)
                context.commit('isReset',false)
                context.commit('isRequestError',true)
            }
            context.commit('isLoading', false)
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
        },

        //loading screens
        isLoading(state){
            return state.isLoading
        },
        isRequestError(state){
            return state.isRequestError
        },
        showSucces(state){
            return state.showSucces
        },
        isReset(state){
            return state.isReset
        }

    }
})

export default store;