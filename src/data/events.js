// Single source of truth for all competition, programme and link data.
// Edit here to update the site: links, dates, rules, programmes and competitions.

export const LINKS={
  mainForm:"https://forms.gle/aGcEUrbkGo6pN9vZ9",
  wonderForm:"https://www.canvaqr.com/RGTQb1BkFA",
  guidelines:"https://drive.google.com/file/d/10PwWjSzEIFbkNQpcshKDNHovnSPrDDhd/view?usp=drive_link",
  whatsapp:"https://chat.whatsapp.com/GVGs7ABgrvALMh6cOLvZC8",
  email:"admin@jignasa.org",
  website:"https://www.vijayawadautsav.com/",
  igUtsav:"https://www.instagram.com/vijayawadautsav/",
  igJignasa:"https://www.instagram.com/jignasa_artverse/"
};
export const FEST={start:"2026-10-10T00:00:00+05:30",end:"2026-10-18T23:59:00+05:30",dates:"10–18 October 2026",venue:"Tummalapalli Kalakshetram, Vijayawada"};
export const PROGS=[
 {id:"idol",pre:"Vijayawada",main:"Idol",post:"",color:"#F3A79D",poster:"idol",reg:"main",formSection:"Vijayawada Idol (Solo)",tag:"Solo dance, music and thespian art",
  guides:{"Solo Dance":["A second round may be held, depending on the number of participants.","The piece may be the same or different in the second round.","In the second round you may be asked about your performance piece.","Time limit: 4 minutes.","Perform in appropriate costume."],
   "Vocal Solo":["Themes: Dussehra, Devi avatars, Shiva and Shakti worship, Vijayawada heritage and culture.","Time limit: 3 minutes.","Judged on shruti, talam, bhavam, song selection and overall presentation.","A second round may be held; you may be asked about your song."],
   "Instrumental Solo":["Indian and Western instruments, percussion and non-percussion, are allowed.","Bring your own instrument.","Time limit: 4 minutes.","Judged on shruti, talam, raga selection and overall presentation."]}},
 {id:"champs",pre:"Vijayawada",main:"Champs",post:"",color:"#9DCFD9",poster:"champs",reg:"main",formSection:"Vijayawada Champs (Group)",tag:"Group dance, vocal, band and theatre",
  guides:{"Group Dance":["Groups need at least 4 participants.","A second round may be held; the piece may be the same or different.","In the second round you may be asked about your performance piece.","Time limit: 5 minutes.","Perform in appropriate costume."],
   "Vocal Group":["Themes: Dussehra, Devi avatars, Shiva and Shakti worship, Vijayawada heritage and culture.","Time limit: 5 minutes.","A second round may be held; the piece may be the same or different.","You may be asked about your song in the second round.","Arrange your own accompaniment and instruments."],
   "Instrumental Band":["Indian and Western instruments, percussion and non-percussion, are allowed.","Bring your own instruments and equipment.","Time limit: 5 minutes.","A second round may be held."]}},
 {id:"talent",pre:"Vijayawada",main:"Got Talent",post:"",color:"#BBA5DD",poster:"talent",reg:"main",formSection:"Vijayawada Got Talent",tag:"Art, craft, literary, creative and digital",
  guides:{"*":["Bring your own materials, tools and equipment.","All work is completed at the venue.","No digital submissions for physical artwork or craft.","Finish within the time limit for your competition."]}},
 {id:"quiz",pre:"The Vijayawada",main:"Quiz",post:"",color:"#95CCA8",poster:"quiz",reg:"main",formSection:"The Vijayawada Quiz",tag:"Teams of three, all about the city",guides:{}},
 {id:"wonder",pre:"",main:"Wonder Women",post:"of Vijayawada",color:"#EDC592",poster:"wonder",reg:"wonder",formSection:"",tag:"Ten competitions for the women of the city",
  guides:{"*":["Bring your own materials, ingredients, tools and equipment.","For food competitions, prepare the item at home and bring it for presentation.","You may be asked about your preparation, process, materials or presentation."]}},
 {id:"crown",pre:"",main:"Crown",post:"of Vijayawada",color:"#F3A0BE",poster:"crown",reg:"crown",formSection:"",tag:"Pageants from age 6 to 60-plus",
  guides:{"*":["Held over multiple rounds: self-introduction, ramp walk, talent presentation and jury interaction.","Round 1 is self-introduction and ramp walk; selected participants go on to talent and questions.","Arrange your own costumes, accessories and other requirements.","Follow the theme and instructions given for each round.","The format and number of rounds may change depending on participation."]}},
 {id:"family",pre:"",main:"Family Talent",post:"",color:"#F7C948",poster:"family",reg:"main",formSection:"Family Talent",tag:"Perform and walk the ramp together",
  guides:{"*":["Open to families participating together.","Arrange your own costumes, accessories and props.","Keep it family-friendly and suitable for all ages."]}}
];
const T=(p,seg,n,name,desc,fmt,time,rules,extra)=>Object.assign({p,seg,n,name,desc,fmt,time,rules},extra||{});
export const EVENTS=[
 T("idol","Solo Dance",1,"Nritya","Solo classical dance","Solo","4 min",["Only major Indian classical forms: Kuchipudi, Bharatanatyam, Kathak, Odissi, Mohiniyattam, Kathakali, Manipuri, Sattriya, Chhau, Andhra Natyam, etc.","Use music appropriate to your chosen classical form.","Movie songs outside these dance forms are not permitted.","Themes: Dussehra, Devi avatars, Shiva and Shakti worship.","Judged on footwork, abhinaya, song selection, stage presence and overall presentation. Subject knowledge and creativity may count in the second round."],{form:"Nritya - Classical Dance Solo"}),
 T("idol","Solo Dance",2,"Joru","Solo folk dance","Solo","4 min",["Folk, tribal and cinematic folk songs are allowed.","Themes: bhakti, culture, village life and community.","Judged on footwork, song selection, stage presence and overall presentation."],{form:"Joru - Folk Dance Solo"}),
 T("idol","Solo Dance",3,"Udaan","Solo freestyle dance","Solo","4 min",["Cinematic, freestyle and Western dance forms are allowed.","Themes: bhakti, culture, village life and community.","Judged on technique, creativity, song selection, stage presence and overall presentation."],{form:"Udaan - Freestyle Dance Solo"}),
 T("idol","Vocal Solo",4,"Swaram","Solo classical vocal","Solo","3 min",["Only Carnatic, Hindustani and Sopana Sangeetham are permitted."],{form:"Swaram - Solo Classical Vocal"}),
 T("idol","Vocal Solo",5,"Gaanam","Solo cinematic, folk or freestyle vocal","Solo","3 min",["Cinematic, devotional, folk, light, freestyle and Western music are allowed."],{form:"Ganam - Solo Cinematic Vocal"}),
 T("idol","Instrumental Solo",6,"Raga Rhythm","Solo melodic, non-percussion instrument","Solo","4 min",["Raga Pradhan: violin, veena, flute, guitar, sitar, keyboard, harmonium, etc."],{form:"Raga Rhythm - Solo Melodic/ Non-Percussion Instrument"}),
 T("idol","Instrumental Solo",7,"Tala Tarang","Solo percussion instrument","Solo","4 min",["Tala Pradhan: mridangam, tabla, dappu, drums, ghatam, etc."],{form:"Tala Tarang - Solo Percussion Instrument"}),
 T("idol","Thespian Art",8,"The Ultimate One","Mono action, mime, magic, mimicry or stand-up comedy","Solo","5 min",["Solo only. Choose one: mono action, mime, magic, mimicry or stand-up comedy.","Arrange your own costumes, makeup, props and equipment.","Mono action may be Eka Patrabhinayam based on characters from Itihasa and Puranic stories; themes may include Dussehra, Devi avatars, Shiva and Shakti worship.","Stand-up content must be original. Plagiarised, disrespectful or offensive content may lead to disqualification.","Judged on creativity, content or character selection, technique, dialogue delivery, stage presence, audience engagement and overall presentation."],{form:"The Ultimate One - Mono Action, Mime, Magic, Mimicry, Comedy"}),
 T("champs","Group Dance",9,"Nritya Samooha","Classical dance group","Group of 4+","5 min",["Major Indian classical forms such as Kuchipudi, Bharatanatyam, Kathak, Odissi, Mohiniyattam, Kathakali, Manipuri, Sattriya, Chhau, Andhra Natyam, etc.","Use music appropriate to your chosen classical form.","Movie songs outside these dance forms are not permitted.","Themes: Dussehra, Devi avatars, Shiva and Shakti worship."],{form:"Nritya Samooha - Classical Dance Group"}),
 T("champs","Group Dance",10,"Janapada Jalsa","Folk dance group","Group of 4+","5 min",["Folk, tribal and cinematic folk songs are allowed.","Themes: bhakti, culture, village life and community."],{form:"Janapada Jalsa - Folk Dance Group"}),
 T("champs","Group Dance",11,"Dance Unleashed","Freestyle dance group","Group of 4+","5 min",["Cinematic, freestyle and Western dance forms are allowed.","Themes: bhakti, culture, village life and community."],{form:"Dance Unleashed - Freestyle Dance Group"}),
 T("champs","Vocal Group",12,"Swara Sangam","Classical or semi-classical vocal group","Group","5 min",["Carnatic, Hindustani and Sopana Sangeetham are permitted.","Semi-classical compositions appropriate to the chosen style are also allowed."],{form:"Swara Sangam - Classical Vocal Group"}),
 T("champs","Vocal Group",13,"Gana Sangam","Cinematic, folk or freestyle vocal group","Group","5 min",["Cinematic, devotional, folk, light, freestyle and Western music are allowed."],{form:"Gana Sangam - Cinematic/Folk/Freestyle  Vocal Group"}),
 T("champs","Instrumental Band",14,"Band Vijayawada","Instrumental band","Band","5 min",["The band may combine percussion and non-percussion instruments.","Indian and Western instruments are permitted.","Present it as a group instrumental performance."],{form:"Band Vijayawada - Instrumental Band"}),
 T("champs","Thespian Art",15,"Rang Manch","Skit, street play, Burrakatha, Harikatha or theatre","Group of 4+","10 min",["Choose one format: skit, street play, Burrakatha, Harikatha or theatre.","Themes: Dussehra, Devi avatars, Shiva and Shakti worship, Vijayawada heritage, culture and community.","Groups need at least 4 participants.","Arrange your own costumes, props and other requirements.","A second round may be held."],{form:"Rang Manch - Skit/Burrakatha/Harikatha/Street Play/Theatre work"}),
 T("talent","Art",16,"Chitra Rekha","Drawing, sketching or painting","Individual","80 min",["Choose drawing, sketching or painting.","Only A3 chart paper is given. Bring your own colours, brushes, pencils and other materials.","For ages 6–8, reference or copying may be permitted as per competition guidelines."],{form:"Chitra Rekha - Drawing, Painting"}),
 T("talent","Art",17,"Muggu Magic","Rangoli","Individual","80 min",["Create a rangoli or muggu at the venue.","Bring your own materials."],{form:"Muggu Magic - Rangoli"}),
 T("talent","Art",18,"Face Fiesta","Face painting","Individual","80 min",["Create a thematic face-painting design.","Bring your own paints, brushes and other materials.","You may paint yourself or someone else. Bring your own model."],{form:"Face Fiesta - Face Painting"}),
 T("talent","Art",19,"Calligraphy","Calligraphy","Individual","60 min",["Show your calligraphy using the given content or theme.","One A4 sheet or A3 chart is given. Bring all pens, inks and tools."],{form:"Calligraphy - Handwriting"}),
 T("talent","Craft",20,"Craft Collage","Craft making","Individual","80 min",["Create a craft or artwork with your chosen materials and techniques.","Bring your own materials and tools.","Base it on the theme announced for the competition."],{form:"Craft Collage"}),
 T("talent","Literary",21,"Katha Tarang","Storytelling","Individual","5 min",["Tell a story through oral narration, in an engaging and creative way.","Topics are announced on 8 October on the jignasa_artverse Instagram handle and WhatsApp groups."],{form:"Katha Tarang - Storytelling"}),
 T("talent","Literary",22,"Katha Rachana","Story writing","Individual","60 min",["Write an original story on the given topic or theme.","Only A4 sheets are given. Bring your own writing materials.","Topics are announced on 8 October on the jignasa_artverse Instagram handle and WhatsApp groups."],{form:"Katha Rachana - Story Writing"}),
 T("talent","Literary",23,"Padya Pravah","Telugu padyalu recitation","Individual","5 min",["Recite Telugu padyalu with appropriate pronunciation, expression and delivery.","Be ready to explain or answer questions about your padyam."],{form:"Padya Pravah - telugu Padyalu"}),
 T("talent","Creative",24,"Vesham Fiesta","Fancy dress","Individual","2 min",["Present a fancy-dress character or theme.","Arrange your own costume and accessories.","You may include a short introduction or character presentation."],{form:"Vesham Fiesta - Fancy Dress"}),
 T("talent","Digital",25,"Vijayawada Uncut","Reel or video making","Individual",null,["Make a short reel or video promoting Vijayawada's heritage, culture, glory and identity.","Subjects can be heritage stories, destinations, arts, famous people, stories of Durga Devi and more. For example: Kondapalli craft, Bapu Museum, food.","Submit your video at the venue. It will be screened on stage.","Content must be original and created by you."],{form:"Vijayawada Uncut - Reel/Video Making about Vijaaywada"}),
 T("talent","Digital",26,"Lenscape","Photography","Individual",null,["Photograph Vijayawada: culture, festivals, cityscape, the river, heritage sites and more.","Submit at the venue. You can add a story or description to the photograph.","Content must be original and created by you."],{form:"Lenscape - Photography"}),
 T("quiz","Quiz",27,"The Vijayawada Quiz","Quiz on Vijayawada","Team of 3",null,["Played in teams of 3. Each team member must register separately.","Covers Vijayawada's history, heritage, culture, art, traditions, personalities, social significance and related subjects.","May have multiple rounds, starting with a written preliminary.","The quiz master's decision is final."],{form:"Quiz on Vijayawada (Group of 3)"}),
 T("wonder","Women Special",28,"Avakai","Traditional pickle making","Individual",null,["Prepare any traditional pickle at home and bring it for presentation.","Be ready to explain the ingredients, method and traditional significance."]),
 T("wonder","Women Special",29,"Annapoorna","Satwik cooking","Individual",null,["Prepare a satwik dish or dishes at home and bring them for presentation.","Be ready to explain the ingredients and preparation."]),
 T("wonder","Women Special",30,"Gorinta Varnam","Mehendi design","Individual","80 min",["Create a gorintaku or mehendi design.","Bring your own mehendi cones, materials and model."]),
 T("wonder","Women Special",31,"Makeup Muse","Thematic makeup","Individual",null,["Create a thematic makeup look on the Dussehra celebration theme.","Bring your own makeup products, tools, materials and model."]),
 T("wonder","Women Special",32,"Bommala Koluvu","Traditional doll display","Individual",null,["Create and present a traditional bommala koluvu.","Bring your own dolls, decorations and materials.","The display should show creativity and traditional presentation."]),
 T("wonder","Women Special",33,"Saree Sutra","Saree draping","Individual","15 min",["Demonstrate saree draping in any style.","Bring your own saree, accessories and model."]),
 T("wonder","Women Special",34,"Malyada","Garland making","Individual","60 min",["Make a traditional or contemporary flower garland.","Bring your own flowers, thread and materials.","Present the finished garland at the venue."]),
 T("wonder","Women Special",35,"Navya Nagalu","Jewellery making","Individual","60 min",["Create a jewellery piece or design with your chosen materials.","Bring your own materials and tools.","Complete and present it at the venue."]),
 T("wonder","Women Special",36,"Thread & Tinge","Fabric painting or embroidery","Individual","60 min",["Choose fabric painting or embroidery.","Bring your own fabric, colours, threads, needles and materials.","Complete the artwork at the venue."]),
 T("wonder","Women Special",37,"Shakti Pitch","Life or entrepreneurship stories","Individual","5 min",["Present your life story, entrepreneurial journey or an inspiring personal experience.","It must be original and based on your own experience.","You may be asked questions about your story or journey."]),
 T("crown","Pageant",38,"Little Vijayawada","Pageant for boys and girls","Individual",null,[],{elig:"Boys and girls aged 6–12"}),
 T("crown","Pageant",39,"Teen Vijayawada","Pageant for boys and girls","Individual",null,[],{elig:"Boys and girls aged 13–19"}),
 T("crown","Pageant",40,"Miss Vijayawada","Pageant for unmarried women","Individual",null,[],{elig:"Unmarried women aged 20 and above"}),
 T("crown","Pageant",41,"Mrs. Vijayawada","Pageant for married women","Individual",null,[],{elig:"Married women aged 18 and above"}),
 T("crown","Pageant",42,"Mr. Vijayawada","Pageant for men","Individual",null,[],{elig:"Men aged 20–60"}),
 T("crown","Pageant",43,"Golden Face Vijayawada","Pageant for men and women 60+","Individual",null,[],{elig:"Men and women aged 60 and above",aka:"Golden Lady Vijayawada on the poster"}),
 T("crown","Pageant",44,"Couple Vijayawada","Pageant for married couples","Couple",null,["Both partners take part together.","Includes self-introduction, couple ramp walk and talent or interaction rounds.","Coordinate your attire and presentation as a couple."],{elig:"Married couples",aka:"Jodi Vijayawada on the poster"}),
 T("family","Family Activities",45,"Kutumba Prathibha","Three-generation talent show","Family","5 min",["Open to families representing three generations.","Present any talent together: dance, music, theatre, storytelling or anything creative."],{form:"3 Generations Talent Show",elig:"Families with three generations"}),
 T("family","Family Activities",46,"Kutumba Walk","Family fashion show","Family","4 min",["Families walk the ramp together.","Show family coordination, creativity and style.","Arrange your own outfits and accessories."],{form:"Family Fashion Show",elig:"Families"})
];
export const GENERAL=["Topics for competitions such as literary events are announced on the day, unless stated otherwise.","Winners are decided separately for each age group.","Competitions run to the scheduled time slots as closely as possible, so arrive on time and be flexible.","Every registered participant gets a token number through WhatsApp or at the registration desk.","The jury's and organisers' decisions are final. No disputes will be entertained.","Some competitions may have multiple rounds, depending on participation, time and quality."];

const BASE = import.meta.env.BASE_URL;
export const LOGO = `${BASE}logo.png`;
export const IMG = {
  idol: `${BASE}posters/idol.jpg`,
  champs: `${BASE}posters/champs.jpg`,
  talent: `${BASE}posters/talent.jpg`,
  quiz: `${BASE}posters/quiz.jpg`,
  wonder: `${BASE}posters/wonder.jpg`,
  crown: `${BASE}posters/crown.jpg`,
  family: `${BASE}posters/family.jpg`,
  curtain: `${BASE}posters/curtain-raiser.jpg`,
  contests: `${BASE}posters/contests-back-again.jpg`
};
