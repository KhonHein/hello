import {SiOpenaigym} from 'react-icons/si'

import IMG1 from './images/p1.jpg'
import IMG2 from './images/p2.jpg'
import IMG3 from './images/p3.jpg'
import IMG4 from './images/p4.jpg'
import IMG5 from './images/p5.jpg'
import IMG6 from './images/p6.jpg'
import IMG7 from './images/p7.jpg'
import IMG8 from './images/p8.jpg'
import IMG9 from './images/p10.jpg'

// Alphhatets

import { alphabetSources,asisLetterSources } from './Voice/audio'

//characters မေꧥႍကႃလႆၫးလေႃး
import { characterSoruces } from './Voice/characterAudio' 

// vowel 12 မေꧥႍကပ်ငဝ်ႍ 12
import { vowel12Sources } from './Voice/vowel12'
// voice 6 tone 
import { voice6ToneSources } from './Voice/voice6Tone'
// special one ꩬွꩫ်ꩼႍ ဢီ
import { specialOneSource } from './Voice/specialOne'
// special two ꩬွꩫ်ႍ  ဢူ
import { specialTwoSource } from './Voice/specialTwo'

// special three ꩬွꩫ်ႍ ဢိုဝ်
import { specialThreeSource } from './Voice/specialThree'

//swunt one 
import { swuntOneSource } from './Voice/swuntOne'
//swunt two
import { swuntTwoSource } from './Voice/swuntTwo'
//swunt three
import { swuntThreeSource } from './Voice/swuntThree'

//side bar key icons


//pattern
import { patternOneSources,oneSixSource } from './Voice/pattern/patternOne'
import { patternTwoSources,twoSixSource } from './Voice/pattern/patternTwo'
import { patternThreeSources,threeSixSource } from './Voice/pattern/patternThree'
import { patternFourSources,fourSixSource } from './Voice/pattern/patternFour'
import { patternFiveSources,fiveSixSource } from './Voice/pattern/patternFive'
import { patternSixSources,sixSixSource } from './Voice/pattern/patternSix'

import { numberSources } from './Voice/pattern/number'


import Alphabet from './components/learn/Alphabet'
import AsistanceAlphabet from './components/learn/AsistanceAlphabet'
import Characters from './components/learn/Characters'
import Vowel12 from './components/learn/Vowel12'
import Voice6 from './components/learn/Voice6'

import SpecialOne from './components/learn/SpecialOne'
import SpecialTwo from './components/learn/SpecialTwo'
import SpecialThree from './components/learn/SpecialThree'

import SwuntOne from './components/learn/SwuntOne'
import SwuntTwo from './components/learn/SwuntTwo'
import SwuntThree from './components/learn/SwuntThree'

export const sideBarKeys = [
    {
        name:"ONE",
        icon:'မေꧥႍကႃလိက့်',
        content:<Alphabet  className="learn-div alphabet-session" />,
    },
    {
        name:"TWO",
        icon:'မေꧥႍꩬဵင်ꩼကꧥမ်',
        content:<AsistanceAlphabet  className="learn-div asistance_alphabet-session"/>,
    },
    {
        name:"THREE",
        icon:"မေꧥႍကႃလႆၫးလေႃး",
        content:<Characters  className="learn-div characters-session" />,
    },
    {
        name:"FOUR",
        icon:'မေꧥႍကပ်ငဝ်ႍ',
        content:<Vowel12  className="learn-div vowel-12-session" />,
    },
    {
        name:"FIVE",
        icon:'꧶ꩬဵင်ꩼ',
        content:<Voice6  className="learn-div voice-6-tone" />,
    },
    {
        name:"SIX",
        icon:'ꩬွꩫ်ႍ ဢီ',
        content:<SpecialOne  className="learn-div special-one" />,
    },
    {
        name:"SEVEN",
        icon:'ꩬွꩫ်ႍ ဢူ',
        content:<SpecialTwo  className="learn-div special-two" />,
    },
    {
        name:"EIGHT",
        icon:'ꩬွꩫ်ႍ ဢိုဝ်',
        content:<SpecialThree  className="learn-div special-three" />,
    },
    {
        name:"NINE",
        icon:'ယ ꩬွꩫ်ႍ',
        content:<SwuntOne  className="learn-div swunt-one" />,
    },
    {
        name:"TEN",
        icon:'ꩺ ꩬွꩫ်ႍ',
        content:<SwuntTwo  className="learn-div swunt-two" />,
    },
    {
        name:"ELEVEN",
        icon:'ဝ ꩬွꩫ်ႍ',
        content:<SwuntThree  className="learn-div swunt-three" />,
    },
]

export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "Learn",
        path: '/learn'
    },
    {
        name: "Pattern",
        path: '/pattern'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Trainer",
        path: '/trainer'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]

export const aboutLines = [
    {
        ti:'Passionate Team:',
        li:'Welcome to our self-supporting website, a smartly designed platform that aims to provide a warm and engaging experience for language enthusiasts interested in Taileng, Tai Naing, and Tai Deng Letural languages.',
        ta:'ꩥူမ်ႍၸူမ်းꩥၫပ့်တွꩫ်ႍဢူၷႃႍ ။ကူꩫ်းပီႍꩫွင်ႍမꩬူꩼꩥဝ်းၷႃႍတင်းလူင်ꩼ ကူꩫ်းၷႂꧥးꩬွꩫ်ꩼလိက့်လႆၫးတႆးꩫꧥင်း ꩬင်ꩼလေꧥယင်းမႃးꩫေꧥႍ ꩥႂꧥႍပေႃးꩫႆႍꩬွꩫ်ꩼပေꧥႍꩬီꩼ ဢင်ႍလႃꩼယဝ်ႍ ဢင်းꩥဵတ်ꩬီꩬၫင်ကꩫ်းမႃးပဵꩫ်းၷႃႍၸဝ်ႍ။',
    },
    {
        ti:'Objectives',
        li:'Our passionate team is dedicated to promoting and preserving the rich cultural heritage of these unique languages, ensuring they thrive in the digital age.',
        ta:'လိက့်လႆၫးပႆၫးပေ ꧤႃꩬႃတႆးꩫꧥင်းꩥဝ်း ꩫေꧥꩼꩫင်ၸူဝ်ႍမိုဝ်းၸွမ်းꩬီꩼ ꩥႂꧥႍပေႃးၷိူꩫ်ႍꩬုင်ꩼမႃး ဢင်ႍလႃꩼတꧥမ်ႍၸႂꧥးဝေꧥႍၸဝ်ႍ။',
    },
        
    {
        ti:'Mission and Vision:',
        li:'At the heart of our mission and vision is a commitment to promoting language diversity, fostering cross-cultural communication, and providing accessible language resources to learners of all levels.',
        ta:'',
    },
    {
        ti:'Community Engagement:',
        li:'We aspire to build a vibrant language learning community, where users can interact, share experiences, and practice their language skills in an engaging and supportive environment.',
        ta:'',
    },
    {
        ti:'Future Expansion: ',
        li:'As we grow, we have exciting plans for expanding our language offerings, adding new features, and incorporating dynamic elements to enhance your learning journey.',
        ta:'',
    },
    {
        ti:'Acknowledgments',
        li:'We extend our heartfelt gratitude to our collaborators, contributors, and language experts who have played a vital role in developing our content and resources.',
        ta:'',
    },
    {
        ti:'Support and Feedback:',
        li:'Your support and feedback are essential to us, so please feel free to reach out with any inquiries or suggestions, as we strive to make this platform the best it can be for you. Thank you for joining us on this language learning adventure!',
        ta:'',
    },
]

export const faqs = [
    {
        id: 1,
        question: "What contents can we study ? ",
        answer: "We can learn and study how to pronunce , how to spell , and basic level of Shanni language."
    },
    {
        id: 2,
        question: "How can we study and learn in this website?",
        answer: "On this website, beginners can learn Tai Deng, Tai Naing, and Tai Laing dialects through beginner-friendly courses, step-by-step lessons, and supportive guidance from instructors."
    },
    {
        id: 3,
        question: "Why should we learn and study our Shan Ni Language ?",
        answer: "Learning and studying our Shan Ni language fosters cultural preservation, strengthens community bonds, and enables meaningful communication with our heritage."
    },
    {
        id: 4,
        question: "What should we prepare to learn Shanni language ? ",
        answer: "No need to have basic background. You can start with zero level ."
    },
    {
        id: 5,
        question: "ꩬင်ꩼၷႂ်းၸွႆႍထꧥမ်ꩼထꧥင်ႍꩬႂꧥ ? ꩥိုဝ်ꩼ  ၸွႆႍလူတၫꩫ်းပꩫ်ꩥꧥင်း ?",
        answer: "တီႍꧤိုꩫ်ꩼꩫႃႍလိက့်ဝၫပ့်ꩬꧥက့်ထႆႍ ꩬင်ꩼၷႂꧥးထꧥင်ႍထꧥမ်ꩼꩬႂꧥꩫေꧥႍ,ꩬင်ꩼၷႂꧥးၸွႆႍလူတၫꩫ်းပꩫ်ꩥꧥင်းꩫူꧧ်ႍကꩫ်းꩫေꧥႍ တီႍၸဝ်ႍမႆၫꩼꩫႃႍလိက့်ထႆႍ ꩬိုပ့်ကပ်မႃးꩬီꩼ ꩫႆႍၷႃႍဢေႃး"
    },
    {
        id: 6,
        question: "Support donate and how to ?",
        answer: "Our web is self-allience,Self-supporting ; You can support or donate to us"
    }
]

export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Step One",
        info: "Got to Learn-Page and Start Learning Shanni , Tai Laing, Alphabets and Consonants .",
        path: "/learn"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Step Two",
        info: "Go to Pattern-Page, learn how shanni pronunce and word pattern structure",
        path: "/pattern"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Step Three",
        info: "You can read more about our team and improve your shanni vocabulary ",
        path: "/about"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Step Four",
        info: "You can view ancient Shanni literature images and traditional general content images",
        path: "/gallery"
    }
]


export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "လိက့်လႆၫပႆၫးပေ",
        desc: "ꩫမ့်မယင်းပႃးမဢူ လိက့်လႆၫးမယင်းꩫေꧥႍ ၷိူဝ်းမကိုမ်း ။ "
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "ပီႍꩫွင်ႍ",
        desc: "ꩫေႃဢဝ်းမၷိူတ်ပဵꩫ်းမႆႍ , မုꩫ်ဢဝ်းမၷိူတ် ပဵꩫ်းဝႆၫꩼ ၊ ၷဝ်ႍꩬိင်းမၷိူတ် ပဵꩫ်းꩫိꩫ်း , ပီႍꩫွင်ႍၷႃꩼမၷိူတ် ပဵꩫ်းပိူꩫ်ႍ ။"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "လႆၫး",
        desc: "ꩫူက်ႍယုင်းတႆၫးꩫေေꧥႍ ကိုတ်ဝေꧥႍ ၷုꩫ်ꩼ , ꧤိင်ႍတႆၫး ကိုတ်ဝေꧥႍ ၷျီ , ꩬိူဝ်ꩼတႆၫးꩫေꧥႍ ကိုတ်ဝေꧥႍ လႆၫး "
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "ꩬဵင်ꩼ",
        desc: "လပ့်ꧤႃႍꩫေꧥႍꩥႂꧥႍဢိင်းꩬꩫ်ꩼ , တၫꩫ်ႍၷႂၫမ်းꩫေꧥႍ ဢိင်းပေႃႍဢိင်းမေꧥႍ ။ "
    }
]


export const  portfolios = [
    {
        id:1,
        image:IMG1,
        title:"Sai Aung Myo Lwin",
        github:"",
        demo:"",
    },
    {
        id:2,
        image:IMG2,
        title:"Kone Khur Leng",
        github:"",
        demo:"",
    },
    {
        id:3,
        image:IMG3,
        title:"Say Nyi Nyi",
        github:"",
        demo:"",
    },
    {
        id:4,
        image:IMG4,
        title:"Sai Htun Aung",
        github:"",
        demo:"",
    },
    {
        id:5,
        image:IMG5,
        title:"Nang Seing Lao",
        github:"",
        demo:"",
    },
    {
        id:6,
        image:IMG6,
        title:"Sai Seng Warmn",
        github:"",
        demo:"",
    },
    {
        id:7,
        image:IMG7,
        title:" 李国龙 .",
        github:"",
        demo:"",
    },
    {
        id:8,
        image:IMG8,
        title:"Sai Kyaw Lin",
        github:"",
        demo:"",
    },
    {
        id:9,
        image:IMG9,
        title:"Sai Si Kharm",
        github:"",
        demo:"",
    },
];


export const  alphabets = [
    {
        name:"က",
        source:alphabetSources.aA,
        id:"A-1"
    },
    {
        name:"ၷ",
        source:alphabetSources.bB,
        id:"B-1"
    },
    {
        name:"င",
        source:alphabetSources.cC,
        id:"C-1"
    },
    {
        name:"ၸ",
        source:alphabetSources.dD,
        id:"D-1"
    },
    {
        name:"ꩬ",
        source:alphabetSources.eE,
        id:"E-1"
    },
    {
        name:"ꧧ",
        source:alphabetSources.fF,
        id:"F-1"
    },
    {
        name:"တ",
        source:alphabetSources.gG,
        id:"G-1"
    },
    {
        name:"ထ",
        source:alphabetSources.hH,
        id:"H-1"
    },
    {
        name:"ꩫ",
        source:alphabetSources.iI,
        id:"I-1"
    },
    {
        name:"ပ",
        source:alphabetSources.jJ,
        id:"J-1"
    },
    {
        name:"ꧤ",
        source:alphabetSources.kK,
        id:"K-1"
    },
    {
        name:"မ",
        source:alphabetSources.lL,
        id:"L-1"
    },
    {
        name:"ယ",
        source:alphabetSources.mM,
        id:"O-1"
    },
    {
        name:"ꩺ",
        source:alphabetSources.nN,
        id:"P-1"
    },
    {
        name:"လ",
        source:alphabetSources.oO,
        id:"Q-1"
    },
    {
        name:"ဝ",
        source:alphabetSources.pP,
        id:"R-1"
    },
    {
        name:"ꩥ",
        source:alphabetSources.qQ,
        id:"S-1"
    },
    {
        name:"ဢ",
        source:alphabetSources.rR,
        id:"T-1"
    },
]

export const asistanceAlphabets = [
    {
        name:"ꩠ",
        source:asisLetterSources.aA,
        id:"Z-1"
    },
    {
        name:"ဒ",
        source:asisLetterSources.bB,
        id:"Y-1"
    },
    {
        name:"ဓ",
        source:asisLetterSources.cC,
        id:"X-1"
    },
    {
        name:"ꧨ",
        source:asisLetterSources.dD,
        id:"W-1"
    },
    {
        name:"ဗ",
        source:asisLetterSources.eE,
        id:"V-1"
    },
]

export const characters = [
    {
        name:"ႃ",
        source:characterSoruces.aA,
        desc:"ၷျႃး",
        id:"a-1"
    },
    {
        name:"ၫ",
        source:characterSoruces.bB,
        desc:"ၷျႃးပွတ်",
        id:"b-1"
    },
    {
        name:"ိ",
        source:characterSoruces.cC,
        desc:"တၫင်ꩫိူဝ်ꩼ ",
        id:"c-1"
    },
    {
        name:"ီ",
        source:characterSoruces.dD,
        desc:"တၫင်ၷတ်ကျꧥꩫ်း",
        id:"d-1"
    },
    {
        name:"ု",
        source:characterSoruces.eE,
        desc:"တိုတ်ꩫိုင်ႍ",
        id:"e-1"
    },
    {
        name:"ူ",
        source:characterSoruces.fF,
        desc:"တိုတ်ꩬွင်ꩼ",
        id:"a-1"
    },
    {
        name:"ို",
        source:characterSoruces.gG,
        desc:"တိုတ်တၫင်",
        id:"b-1"
    },
    {
        name:"ိူ",
        source:characterSoruces.hH,
        desc:"တိုတ်ꩬွင်ꩼတၫင်",
        id:"c-1"
    },
    {
        name:"ေ",
        source:characterSoruces.iI,
        desc:"ꩥိုပ်ႍ",
        id:"d-1"
    },
    {
        name:"ဵ",
        source:characterSoruces.jJ,
        desc:"ꩥိုပ့်တၫင်",
        id:"e-1"
    },
    {
        name:"ꧥ",
        source:characterSoruces.kK,
        desc:"ꧤၫက့်ꩫိူဝ်ꩼ",
        id:"d-1"
    },
    {
        name:"ႆ",
        source:characterSoruces.lL,
        desc:"ကႆၫၷိူꩫ်ႍ",
        id:"e-1"
    },
    {
        name:"ံ",
        source:characterSoruces.mM,
        desc:"ၸမ်ႍꩫိူဝ်ꩼ",
        id:"e-1"
    },
    {
        name:"ႂ",
        source:characterSoruces.nN,
        desc:"ကႂႆၫႍ",
        id:"e-1"
    },
    {
        name:"ွ",
        source:characterSoruces.oO,
        desc:"ꩥွႆႍ",
        id:"e-1"
    },
    {
        name:"ျ",
        source:characterSoruces.pP,
        desc:"ကျလ",
        id:"e-1"
    },
    {
        name:"ြ",
        source:characterSoruces.qQ,
        desc:"ꩥွပ်",
        id:"e-1"
    },
]
export const vowel12 = [
    {
        name:"ဢ",
        source:vowel12Sources.aA,
        id:"A-1"
    },
    {
        name:"ဢႃ",
        source:vowel12Sources.bB,
        id:"B-1"
    },
    {
        name:"ဢိ",
        source:vowel12Sources.cC,
        id:"C-1"
    },
    {
        name:"ဢီ",
        source:vowel12Sources.dD,
        id:"D-1"
    },
    {
        name:"ဢေ",
        source:vowel12Sources.eE,
        id:"E-1"
    },
    {
        name:"ဢေꧥ",
        source:vowel12Sources.fF,
        id:"F-1"
    },
    {
        name:"ဢု",
        source:vowel12Sources.gG,
        id:"G-1"
    },
    {
        name:"ဢူ",
        source:vowel12Sources.hH,
        id:"H-1"
    },
    {
        name:"ဢူဝ်",
        source:vowel12Sources.iI,
        id:"I-1"
    },
    {
        name:"ဢေႃ",
        source:vowel12Sources.jJ,
        id:"J-1"
    },
    {
        name:"ဢိုဝ်",
        source:vowel12Sources.kK,
        id:"J-1"
    },
    {
        name:"ဢိူဝ်",
        source:vowel12Sources.lL,
        id:"J-1"
    },
]

export const voice6Tone = [
    {
        name:"ဢႃ",
        source:voice6ToneSources.aA,
        desc:"ꩬဵင်ꩼကဝ်",
        id:"a-1"
    },
    {
        name:"ႍ",
        source:voice6ToneSources.bB,
        desc:"ꩬဵင်ꩼတႂꧥႍ",
        id:"b-1"
    },
    {
        name:"ꩼ",
        source:voice6ToneSources.cC,
        desc:"ꩬဵင်ꩼꩫိူဝ်ꩼ ",
        id:"c-1"
    },
    {
        name:"း",
        source:voice6ToneSources.dD,
        desc:"ၸမ်ႍꩫႃႍ",
        id:"d-1"
    },
    {
        name:"့",
        source:voice6ToneSources.eE,
        desc:"ၸမ်ႍတႂꧥꩼ",
        id:"d-1"
    },
    {
        name:"ꩽ",
        source:voice6ToneSources.fF,
        desc:"ꩬဵင်ꩼꩬိုဝ်",
        id:"d-1"
    },
]

export const specialOne = [
    {
        name:"ဢႆ",
        source:specialOneSource.aA,
        desc:"ဢ+ဢီ = ဢႆ",
        id:"a-1"
    },
    {
        name:"ဢႆၫ",
        source:specialOneSource.bB,
        desc:"ဢႃ+ဢီ = ဢႆၫ",
        id:"b-1"
    },
    {
        name:"ဢုꧧ်",
        source:specialOneSource.cC,
        desc:"ဢူ+ဢီ = ꧧုꧧ်",
        id:"c-1"
    },
    {
        name:"ဢူꧧ်",
        source:specialOneSource.dD,
        desc:"ဢူဝ်+ဢီ = ꧧူꧧ်",
        id:"d-1"
    },
    {
        name:"ဢွႆ",
        source:specialOneSource.eE,
        desc:"ဢေႃ+ဢီ =ဢွႆ",
        id:"d-1"
    },
    {
        name:"ဢိုꧧ်",
        source:specialOneSource.fF,
        desc:"ဢိုဝ်+ဢီ = ဢိုꧧ်",
        id:"d-1"
    },
    {
        name:"ဢိူꧧ်",
        source:specialOneSource.gG,
        desc:"ဢိူဝ်+ဢီ = ဢိူꧧ်",
        id:"d-1"
    },
]

export const specialTwo = [
    {
        name:"ဢဝ်",
        source:specialTwoSource.aA,
        desc:"ဢ+ဢူ = ဢဝ်",
        id:"a-1"
    },
    {
        name:"ဢၫဝ်",
        source:specialTwoSource.bB,
        desc:"ဢႃ+ဢူ = ဢၫဝ်",
        id:"b-1"
    },
    {
        name:"ဢိဝ်",
        source:specialTwoSource.cC,
        desc:"ဢီ+ဢူ = ဢိဝ်",
        id:"c-1"
    },
    {
        name:"ဢဵဝ်",
        source:specialTwoSource.dD,
        desc:"ဢေ+ဢူ = ဢဵဝ်",
        id:"d-1"
    },
    {
        name:"ဢꧥဝ်",
        source:specialTwoSource.eE,
        desc:"ဢေꧥ+ဢူ =ဢꧥဝ်",
        id:"d-1"
    },
    
]

export const specialThree = [
    {
        name:"ျ",
        source:specialThreeSource.aA,
        desc:"ယ ꩬွꩫ်ႍ",
        id:"a-1"
    },
    {
        name:"ြ",
        source:specialThreeSource.bB,
        desc:"ꩺ ꩬွꩫ်ႍ",
        id:"b-1"
    },
    {
        name:"ႂ",
        source:specialThreeSource.cC,
        desc:"ဝ ꩬွꩫ်ႍ",
        id:"c-1"
    },
]


export const swuntOne = [
    {
        name:"ကျ",
        source:swuntOneSource.aA,
        desc:"က+ယ = ကျ",
        id:"a-1"
    },
    {
        name:"ၷျ",
        source:swuntOneSource.bB,
        desc:"ၷ+ယ = ၷျ",
        id:"b-1"
    },
    {
        name:"ပျ",
        source:swuntOneSource.cC,
        desc:"ပ + ယ = ပျ",
        id:"c-1"
    },
    {
        name:"ꧤျ",
        source:swuntOneSource.dD,
        desc:"ꧤ + ယ = ꧤျ",
        id:"c-1"
    },
]

export const swuntTwo = [
    {
        name:"ꩬြ",
        source:swuntTwoSource.aA,
        desc:"ꩬ+ꩺ = ꩬြ",
        id:"a-1"
    },
    {
        name:"တြ",
        source:swuntTwoSource.bB,
        desc:"တ+ꩺ = တြ",
        id:"b-1"
    },
    {
        name:"ꧤြ",
        source:swuntTwoSource.cC,
        desc:"ꧤ + ꩺ = ꧤြ",
        id:"c-1"
    },
    
]


export const swuntThree = [
    {
        name:"ကႂ",
        source:swuntThreeSource.aA,
        desc:"က+ဝ = ကႂ",
        id:"a-1"
    },
    {
        name:"ၷႂ",
        source:swuntThreeSource.bB,
        desc:"ၷ+ဝ = ၷႂ",
        id:"b-1"
    },
    {
        name:"တႂ",
        source:swuntThreeSource.cC,
        desc:"တ + ဝ = တႂ",
        id:"c-1"
    },
    
]


export const pattenOne = [
    {
        name:"ဢမ်",
        source:patternOneSources.aA,
        id:"A-1"
    },
    {
        name:"ဢၫမ်",
        source:patternOneSources.bB,
        id:"B-1"
    },
    {
        name:"ဢိမ်",
        source:patternOneSources.cC,
        id:"C-1"
    },
    {
        name:"ဢဵမ်",
        source:patternOneSources.dD,
        id:"D-1"
    },
    {
        name:"ဢꧥမ်",
        source:patternOneSources.eE,
        id:"E-1"
    },
    {
        name:"ဢုမ်",
        source:patternOneSources.fF,
        id:"F-1"
    },
    {
        name:"ဢူမ်",
        source:patternOneSources.gG,
        id:"G-1"
    },
    {
        name:"ဢွမ်",
        source:patternOneSources.hH,
        id:"H-1"
    },
    {
        name:"ဢိုမ်",
        source:patternOneSources.iI,
        id:"H-1"
    },
    {
        name:"ဢိူမ်",
        source:patternOneSources.jJ,
        id:"H-1"
    },
]

export const pattenTwo = [
    {
        name:"ဢꩫ်",
        source:patternTwoSources.aA,
        id:"A-1"
    },
    {
        name:"ဢၫꩫ်",
        source:patternTwoSources.bB,
        id:"B-1"
    },
    {
        name:"ဢိꩫ်",
        source:patternTwoSources.cC,
        id:"C-1"
    },
    {
        name:"ဢဵꩫ်",
        source:patternTwoSources.dD,
        id:"D-1"
    },
    {
        name:"ဢꧥꩫ်",
        source:patternTwoSources.eE,
        id:"E-1"
    },
    {
        name:"ဢုꩫ်",
        source:patternTwoSources.fF,
        id:"F-1"
    },
    {
        name:"ဢူꩫ်",
        source:patternTwoSources.gG,
        id:"G-1"
    },
    {
        name:"ဢွꩫ်",
        source:patternTwoSources.hH,
        id:"H-1"
    },
    {
        name:"ဢိုꩫ်",
        source:patternTwoSources.iI,
        id:"H-1"
    },
    {
        name:"ဢိူꩫ်",
        source:patternTwoSources.jJ,
        id:"H-1"
    },
]

export const pattenThree = [
    {
        name:"ဢင်",
        source:patternThreeSources.aA,
        id:"A-1"
    },
    {
        name:"ဢၫင်",
        source:patternThreeSources.bB,
        id:"B-1"
    },
    {
        name:"ဢိင်",
        source:patternThreeSources.cC,
        id:"C-1"
    },
    {
        name:"ဢဵင်",
        source:patternThreeSources.dD,
        id:"D-1"
    },
    {
        name:"ဢꧥင်",
        source:patternThreeSources.eE,
        id:"E-1"
    },
    {
        name:"ဢုင်",
        source:patternThreeSources.fF,
        id:"F-1"
    },
    {
        name:"ဢူင်",
        source:patternThreeSources.gG,
        id:"G-1"
    },
    {
        name:"ဢွင်",
        source:patternThreeSources.hH,
        id:"H-1"
    },
    {
        name:"ဢိုင်",
        source:patternThreeSources.iI,
        id:"H-1"
    },
    {
        name:"ဢိူင်",
        source:patternThreeSources.jJ,
        id:"H-1"
    },
]

export const pattenFour = [
    {
        name:"ဢတ်",
        source:patternFourSources.aA,
        id:"A-1"
    },
    {
        name:"ဢၫတ်",
        source:patternFourSources.bB,
        id:"B-1"
    },
    {
        name:"ဢိတ်",
        source:patternFourSources.cC,
        id:"C-1"
    },
    {
        name:"ဢဵတ်",
        source:patternFourSources.dD,
        id:"D-1"
    },
    {
        name:"ဢꧥတ်",
        source:patternFourSources.eE,
        id:"E-1"
    },
    {
        name:"ဢုတ်",
        source:patternFourSources.fF,
        id:"F-1"
    },
    {
        name:"ဢူတ်",
        source:patternFourSources.gG,
        id:"G-1"
    },
    {
        name:"ဢွတ်",
        source:patternFourSources.hH,
        id:"H-1"
    },
    {
        name:"ဢိုတ်",
        source:patternFourSources.iI,
        id:"H-1"
    },
    {
        name:"ဢိူတ်",
        source:patternFourSources.jJ,
        id:"H-1"
    },
]

export const pattenFive = [
    {
        name:"ဢပ်",
        source:patternFiveSources.aA,
        id:"A-1"
    },
    {
        name:"ဢၫပ်",
        source:patternFiveSources.bB,
        id:"B-1"
    },
    {
        name:"ဢိပ်",
        source:patternFiveSources.cC,
        id:"C-1"
    },
    {
        name:"ဢဵပ်",
        source:patternFiveSources.dD,
        id:"D-1"
    },
    {
        name:"ဢꧥပ်",
        source:patternFiveSources.eE,
        id:"E-1"
    },
    {
        name:"ဢုပ်",
        source:patternFiveSources.fF,
        id:"F-1"
    },
    {
        name:"ဢူပ်",
        source:patternFiveSources.gG,
        id:"G-1"
    },
    {
        name:"ဢွပ်",
        source:patternFiveSources.hH,
        id:"H-1"
    },
    {
        name:"ဢိုပ်",
        source:patternFiveSources.iI,
        id:"H-1"
    },
    {
        name:"ဢိူပ်",
        source:patternFiveSources.jJ,
        id:"H-1"
    },
]

export const pattenSix = [
    {
        name:"ဢက်",
        source:patternSixSources.aA,
        id:"A-1"
    },
    {
        name:"ဢၫက်",
        source:patternSixSources.bB,
        id:"B-1"
    },
    {
        name:"ဢိက်",
        source:patternSixSources.cC,
        id:"C-1"
    },
    {
        name:"ဢဵက်",
        source:patternSixSources.dD,
        id:"D-1"
    },
    {
        name:"ဢꧥက်",
        source:patternSixSources.eE,
        id:"E-1"
    },
    {
        name:"ဢုက်",
        source:patternSixSources.fF,
        id:"F-1"
    },
    {
        name:"ဢူက်",
        source:patternSixSources.gG,
        id:"G-1"
    },
    {
        name:"ဢွက်",
        source:patternSixSources.hH,
        id:"H-1"
    },
    {
        name:"ဢိုက်",
        source:patternSixSources.iI,
        id:"H-1"
    },
    {
        name:"ဢိူက်",
        source:patternSixSources.jJ,
        id:"H-1"
    },
]

export const numbers = [
    {
        name:"꧱",
        source:numberSources.n1,
        desc:"ꩫိုင်ႍ",
        id:"a-1"
    },
    {
        name:"꧲",
        source:numberSources.n2,
        desc:"ꩬွင်ꩼ",
        id:"b-1"
    },
    {
        name:"꧳",
        source:numberSources.n3,
        desc:"ꩬၫမ်ꩼ ",
        id:"c-1"
    },
    {
        name:"꧴",
        source:numberSources.n4,
        desc:"ꩬီ",
        id:"d-1"
    },
    {
        name:"꧵",
        source:numberSources.n5,
        desc:"ꩥႃႍ",
        id:"d-1"
    },
    {
        name:"꧶",
        source:numberSources.n6,
        desc:"ꩥူက်",
        id:"d-1"
    },
    {
        name:"꧷",
        source:numberSources.n7,
        desc:"ၸဵတ်",
        id:"d-1"
    },
    {
        name:"꧸",
        source:numberSources.n8,
        desc:"ပꧥတ်",
        id:"d-1"
    },
    {
        name:"꧹",
        source:numberSources.n9,
        desc:"ကဝ်ႍ",
        id:"d-1"
    },
    {
        name:"꧱꧰",
        source:numberSources.n10,
        desc:"ꩬိပ်",
        id:"d-1"
    },
    {
        name:"꧰",
        source:numberSources.n0,
        desc:"ပဝ်",
        id:"d-1"
    },

    {
        name:"꧱꧱",
        source:numberSources.n11,
        desc:"ꩬိပ်ဢဵတ်",
        id:"d-1"
    },
    {
        name:"꧱꧲",
        source:numberSources.num12,
        desc:"ꩬိပ်ꩬွင်ꩼ ",
        id:"d-1"
    },
    {
        name:"꧲꧰",
        source:numberSources.n20,
        desc:"ꩬၫဝ်း/ꩬၫဝ်းꩫိူင်ႍ",
        id:"d-1"
    },
    {
        name:"꧲꧱",
        source:numberSources.n21,
        desc:"ꩬၫဝ်းဢဵတ်",
        id:"d-1"
    },
    {
        name:"꧲꧲",
        source:numberSources.n22,
        desc:"ꩬၫဝ်းꩬွင်ꩼ",
        id:"d-1"
    },
    {
        name:"꧳꧰",
        source:numberSources.n30,
        desc:"ꩬၫမ်ꩼꩬိပ်",
        id:"d-1"
    },
    {
        name:"꧸꧱",
        source:numberSources.n81,
        desc:"ပꧥတ်ꩬိပ်ဢဵတ်",
        id:"d-1"
    },
    {
        name:"꧹꧰",
        source:numberSources.n90,
        desc:"ကဝ်ꩬိပ်",
        id:"d-1"
    },
    {
        name:"꧱꧰꧰",
        source:numberSources.n100,
        desc:"ပၫက်/ပၫက်ꩫိူင်ႍ",
        id:"d-1"
    },
    {
        name:"꧲꧰꧰",
        source:numberSources.n200,
        desc:"ꩬွင်ꩼပၫက်",
        id:"d-1"
    },
    {
        name:"꧱꧰꧰꧰",
        source:numberSources.n1000,
        desc:"ꩥဵင်ꩼ / ꩥဵင်ꩼꩫိူင်ႍ",
        id:"d-1"
    },
    {
        name:"꧶꧰꧰꧰",
        source:numberSources.n6000,
        desc:"ꩥူက်ꩥဵင်ꩼ",
        id:"d-1"
    },
    {
        name:"꧱꧰꧰꧰꧰",
        source:numberSources.n10000,
        desc:"မိူꩫ်ႍ / မိူꩫ်ႍꩫိူင်ႍ",
        id:"d-1"
    },
    {
        name:"꧱꧸꧵꧰꧰",
        source:numberSources.n18500,
        desc:"မိူꩫ်ႍပꧥတ်ꩥဵင်ꩼꩥႃႍပၫက်",
        id:"d-1"
    },
    {
        name:"꧲꧰꧰꧰꧰꧰",
        source:numberSources.n200000,
        desc:"ꩬွင်ꩼꩬꧥꩫ်ꩼ",
        id:"d-1"
    },
    {
        name:"꧵꧶꧰꧰꧰꧰",
        source:numberSources.n56000,
        desc:"ꩥႃႍꩬꧥꩫ်ꩼꩥူက်မိူꩫ်ႍ",
        id:"d-1"
    },
    {
        name:"꧱꧰꧰꧰꧰꧰꧰",
        source:numberSources.n1000000,
        desc:"လၫꩫ့်/ လၫꩫ့်ꩫိူင်ႍ",
        id:"d-1"
    },
    {
        name:"꧸꧰꧰꧰꧰꧰꧰",
        source:numberSources.n80000000,
        desc:"ပꧥတ်လၫꩫ့်",
        id:"d-1"
    },
]

export const sixVoiceOne = [
    {
        id:1,
        name:'ဢမ်',
        source:oneSixSource.a1, 
    },
    {
        id:2,
        name:'ဢမ်ႍ',
        source:oneSixSource.a2,
    },
    {
        id:3,
        name:'ဢမ်ꩼ',
        source:oneSixSource.a3,
    },
    {
        id:4,
        name:'ဢမ်း',
        source:oneSixSource.a4,
    },
    {
        id:5,
        name:'ဢမ့်',
        source:oneSixSource.a5,
    },
    {
        id:6,
        name:'ဢမ်ꩽ',
        source:oneSixSource.a6,
    },
]


export const sixVoiceTwo = [
    {
        id:1,
        name:'ဢꩫ်',
        source:twoSixSource.a1,
    },
    {
        id:2,
        name:'ဢꩫ်ႍ',
        source:twoSixSource.a2,
    },
    {
        id:3,
        name:'ဢꩫ်ꩼ',
        source:twoSixSource.a3,
    },
    {
        id:4,
        name:'ဢꩫ်း',
        source:twoSixSource.a4,
    },
    {
        id:5,
        name:'ဢꩫ့်',
        source:twoSixSource.a5,
    },
    {
        id:6,
        name:'ဢꩫ်ꩽ',
        source:twoSixSource.a6,
    },
]


export const sixVoiceThree = [
    {
        id:1,
        name:'ဢင်',
        source:threeSixSource.a1,
    },
    {
        id:2,
        name:'ဢင်ႍ',
        source:threeSixSource.a2,
    },
    {
        id:3,
        name:'ဢင်ꩼ',
        source:threeSixSource.a3,
    },
    {
        id:4,
        name:'ဢင်း',
        source:threeSixSource.a4,
    },
    {
        id:5,
        name:'ဢင့်',
        source:threeSixSource.a5,
    },
    {
        id:6,
        name:'ဢင်ꩽ',
        source:threeSixSource.a6,
    },
]


export const sixVoiceFour = [
    {
        id:1,
        name:'ဢတ်',
        source:fourSixSource.a1,
    },
    {
        id:2,
        name:'ဢတ်ႍ',
        source:fourSixSource.a2,
    },
    {
        id:3,
        name:'ဢတ်ꩼ',
        source:fourSixSource.a3,
    },
    {
        id:4,
        name:'ဢတ်း',
        source:fourSixSource.a4,
    },
    {
        id:5,
        name:'ဢတ့်',
        source:fourSixSource.a5,
    },
    {
        id:6,
        name:'ဢတ်ꩽ',
        source:fourSixSource.a6,
    },
]


export const sixVoiceFive = [
    {
        id:1,
        name:'ဢပ်',
        source:fiveSixSource.a1,
    },
    {
        id:2,
        name:'ဢပ်ႍ',
        source:fiveSixSource.a2,
    },
    {
        id:3,
        name:'ဢပ်ꩼ',
        source:fiveSixSource.a3,
    },
    {
        id:4,
        name:'ဢပ်း',
        source:fiveSixSource.a4,
    },
    {
        id:5,
        name:'ဢပ့်',
        source:fiveSixSource.a5,
    },
    {
        id:6,
        name:'ဢပ်ꩽ',
        source:fiveSixSource.a6,
    },
]

export const sixVoiceSix = [
    {
        id:1,
        name:'ဢက်',
        source:sixSixSource.a1,
    },
    {
        id:2,
        name:'ဢက်ႍ',
        source:sixSixSource.a2,
    },
    {
        id:3,
        name:'ဢက်ꩼ',
        source:sixSixSource.a3,
    },
    {
        id:4,
        name:'ဢက်း',
        source:sixSixSource.a4,
    },
    {
        id:5,
        name:'ဢက့်',
        source:sixSixSource.a5,
    },
    {
        id:6,
        name:'ဢက်ꩽ',
        source:sixSixSource.a6,
    },
]

export const about = [
    {
        id: 1,
        question: "ꩫိူဝ်ꩼဢုꩫ်လꧥင်း လိက့်တႆးꩫꧥင်းꩬွꩫ်းဢဝ်းလိပ့်ꩥိမ်းꩬီꩼꩫႆႍယဝ်ႍလေး ? ",
        answer: "ဢေႃးၷႃႍ ꩫႆႍယဝ်ႍၷႃႍ ။ ꩫိူဝ်ꩼလုမ်ꧨႃ့ကူႍတီႍတီႍ တႃ့ထႂ်ꩼၷႂꧥးဢူဢူ ꩫိူဝ်ꩼꩫႃႍလိက့်ထႆႍꩬွꩫ်ꩼꩬီꩼ ꩫႆႍယဝ်ႍၷႃႍ ။ ꩬင်ꩼပေႃးၷဝ်ႍၸႂꧥးꩫေꧥႍ ၸွမ်းတုꧧ်းလိပ့်ꩥိမ်းꩬီꩼꩫႆႍၷႃႍၸဝ်ႍ ။"
    },
    {
        id: 2,
        question: "လႆၫးတႆးꩫꧥင်းꩫေꧥႍ ၸၫဝ်းၷိူဝ်းတႆးꩫꧥင်းတင်းလူင်ꩼ မိုꩫ်ꩼကꩫ်းဢူလေး ?",
        answer: "ဢေႃးၸဝ်ႍ တႆးꩫꧥင်း , တႆးလꧥင် , တႆးဒꧥင်း တင်းလူင်ꩼ ဢင်းလႆၫးလိက့်ထႆႍꩫေꧥႍꩬႂꧥꩼ ꩥူမ်ႍကꩫ်းꩥႂꧥႍပေႃးꩬွꩫ်ꩼဢဝ်း ပၫင်းကုမ်းလိက့်လႆၫးတေꩥဵတ်တꧥင်ပၫင်ꩬီꩼ ဢင်းဝေꧥႍၷေႃႍမိုꩫ်ꩼၸႂꧥးယဝ်ႍကေႃႍၷႃႍ။ ပကွပ့်ꩫေꧥႍတင်း ကꩫီးကျႃပႃမလူဝ်ꩬီꩼ ꩬွꩫ်ꩼဢဝ်းပေꧥႍကေႃႍၷႃႍ "
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate? Qui totam est omnis dolor nobis quisquam veritatis a!"
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    },
    {
        id: 7,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    },
    {
        id: 8,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    },
    {
        id: 9,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    },
    {
        id: 10,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    },
    {
        id: 11,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    },
    {
        id: 12,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    }
]


export const trainerDetail = [
    {
        status:"မေႃꩼꩬွꩫ်ꩼ",
        desc:"ၸႆၫးကျေႃလိꩫ်း"
    },
    {
        status:"ꩫွင်ꩼလူင်ꩼ ",
        desc:"မိူင်းယၫင်း "
    },
    {
        status:"ကုင်းမꩫႃ့",
        desc:"ꩥိမ်ꩼꩫွင်ꩼ "
    }
]