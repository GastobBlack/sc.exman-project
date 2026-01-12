// ===== TEST DATA (same as before) =====
const tests={
geo:{name:'География',q:[
{q:'Пойтахти Тоҷикистон кадом аст?',a:['Хуҷанд','Бохтар','Душанбе'],c:2},
{q:'Баландтарин қуллаи Тоҷикистон?',a:['Элбрус','Исмоили Сомонӣ','Эверест'],c:1},
{q:'Кадом дарё аз Тоҷикистон мегузарад?',a:['Амударё','Нил','Волга'],c:0},
{q:'Помирро чӣ меноманд?',a:['Боми ҷаҳон','Қалби Осиё','Сутуни замин'],c:0},
{q:'Пойтахти ВМКБ кадом шаҳр аст?',a:['Хоруғ','Мурғоб','Панҷ'],c:0},
{q:'Тоҷикистон дар кадом қитъа ҷойгир аст?',a:['Аврупо','Осиё','Африка'],c:1},
{q:'Кадом кӯл дар Тоҷикистон аст?',a:['Байкал','Қаракӯл','Онега'],c:1},
{q:'Дар Тоҷикистон чанд вилоят ҳаст?',a:['3','4','5'],c:1},
{q:'Парчами Тоҷикистон чанд ранг дорад?',a:['2','3','4'],c:1},
{q:'Қуллаи Исмоили Сомонӣ чанд метр аст?',a:['7495','8848','7134'],c:0},
{q:'Дарёи Вахш ба кадом дарё мерезад?',a:['Сирдарё','Амударё','Зарафшон'],c:1},
{q:'Иқлими Тоҷикистон чӣ гуна аст?',a:['Тропикӣ','Континенталӣ','Уқёнусӣ'],c:1},
{q:'Шаҳри Хуҷанд дар кадом вилоят аст?',a:['Суғд','Хатлон','ВМКБ'],c:0},
{q:'Баландкӯҳи асосии Тоҷикистон?',a:['Алп','Помир','Карпат'],c:1},
{q:'Дарёи Сирдарё ба кадом баҳр мерезад?',a:['Каспий','Арал','Сиёҳ'],c:1},
{q:'Кӯли Искандаркӯл дар куҷо ҷойгир аст?',a:['Суғд','Ҳисор','Фон'],c:2},
{q:'Маркази вилояти Хатлон кадом шаҳр аст?',a:['Бохтар','Кӯлоб','Душанбе'],c:0},
{q:'Кадом кишвар бо Тоҷикистон ҳамсарҳад аст?',a:['Туркия','Қирғизистон','Ҳиндустон'],c:1},
{q:'Минтақаи Фарғона дар куҷо аст?',a:['Шимол','Ҷануб','Ғарб'],c:0},
{q:'Кадом уқёнус калонтарин аст?',a:['Атлантик','Ором','Ҳинд'],c:1}
]},
history:{name:'Таърихи халқи тоҷик',q:[
{q:'Соли истиқлолияти Тоҷикистон?',a:['1991','1995','1989'],c:0},
{q:'Асосгузори давлати Сомониён кӣ буд?',a:['Исмоили Сомонӣ','Рӯдакӣ','Темурмалик'],c:0},
{q:'Пойтахти давлати Сомониён?',a:['Бухоро','Самарқанд','Балх'],c:0},
{q:'Рӯдакӣ бо чӣ машҳур аст?',a:['Шоир','Подшоҳ','Сарбоз'],c:0},
{q:'Давлати Сомониён дар кадом асрҳо буд?',a:['IX–X','XI–XII','VII–VIII'],c:0},
{q:'Темурмалик кӣ буд?',a:['Қаҳрамони миллӣ','Олим','Шоир'],c:0},
{q:'Авесто ба кадом давра тааллуқ дорад?',a:['Бостонӣ','Асрҳои миёна','Нав'],c:0},
{q:'Роҳи Абрешим барои чӣ истифода мешуд?',a:['Савдо','Ҷанг','Сайёҳӣ'],c:0},
{q:'Фирдавсӣ кадом асарро навишт?',a:['Шоҳнома','Қасида','Девон'],c:0},
{q:'Исмоили Сомонӣ чӣ буд?',a:['Амир','Шоир','Олим'],c:0},
{q:'Ислом дар асри чанд пайдо шуд?',a:['VII','X','XII'],c:0},
{q:'Мовароуннаҳр чист?',a:['Минтақа','Шаҳр','Қабила'],c:0},
{q:'Шаҳри қадимаи тоҷикон?',a:['Панҷакент','Теҳрон','Кобул'],c:0},
{q:'Кадом аср асри тиллоии фарҳанг аст?',a:['X','XV','V'],c:0},
{q:'Сомониён ба кадом халқ тааллуқ доштанд?',a:['Тоҷик','Муғул','Араб'],c:0},
{q:'Қалъаи Ҳулбук дар куҷо аст?',a:['Хатлон','Суғд','ВМКБ'],c:0},
{q:'Забони давлати Сомониён?',a:['Тоҷикӣ','Арабӣ','Русӣ'],c:0},
{q:'Рӯдакӣ дар кадом аср зиндагӣ кард?',a:['X','XII','VIII'],c:0},
{q:'Қаҳрамони муқовимат ба муғулҳо?',a:['Темурмалик','Чингизхон','Бобур'],c:0},
{q:'Тоҷикон халқи кадом минтақаанд?',a:['Осиёи Марказӣ','Аврупо','Африка'],c:0}
]},
ru:{name:'Забони русӣ',q:[
{q:'Выберите правильное слово: Он ___ в школу.',a:['идти','идёт','шёл'],c:1},
{q:'Мы ___ книгу.',a:['читаем','читать','читает'],c:0},
{q:'Сколько падежей в русском языке?',a:['4','6','8'],c:1},
{q:'Антоним к слову "большой"?',a:['маленький','огромный','широкий'],c:0},
{q:'Синоним к слову "быстрый"?',a:['скорый','медленный','тихий'],c:0},
{q:'Какое слово — существительное?',a:['бегать','красный','школа'],c:2},
{q:'Множественное число слова "дом"?',a:['домы','дома','домья'],c:1},
{q:'Глагол прошедшего времени?',a:['читает','читал','читать'],c:1},
{q:'Какое слово прилагательное?',a:['красивый','красота','красиво'],c:0},
{q:'Сколько букв в русском алфавите?',a:['31','33','35'],c:1},
{q:'Какое слово наречие?',a:['быстро','быстрый','быстрота'],c:0},
{q:'Антоним к слову "день"?',a:['ночь','утро','вечер'],c:0},
{q:'Какое слово глагол?',a:['бег','бежать','бегун'],c:1},
{q:'Форма будущего времени?',a:['читал','буду читать','читаю'],c:1},
{q:'Какое слово местоимение?',a:['он','дом','красный'],c:0},
{q:'Синоним к слову "умный"?',a:['разумный','глупый','слабый'],c:0},
{q:'Какое слово числительное?',a:['три','третий','тройка'],c:0},
{q:'Антоним к слову "светлый"?',a:['тёмный','яркий','белый'],c:0},
{q:'Какое слово союз?',a:['и','в','дом'],c:0},
{q:'Сколько родов в русском языке?',a:['2','3','4'],c:1}
]},
tj:{name:'Забони тоҷикӣ',q:[
{q:'Ҷумлаи дуруст кадом аст?',a:['Ман мактаб меравад','Ман ба мактаб меравам','Ман ба мактаб рафт'],c:1},
{q:'Забони давлатии Тоҷикистон?',a:['Русӣ','Тоҷикӣ','Англисӣ'],c:1},
{q:'Кадом калима исм аст?',a:['Хондан','Китоб','Зебо'],c:1},
{q:'Ҷамъбасти калимаи "дӯст"?',a:['дӯстон','дӯстҳо','дӯстона'],c:0},
{q:'Кадом калима феъл аст?',a:['Хондан','Хонанда','Хонда'],c:0},
{q:'Антоними калимаи "калон"?',a:['хурд','дароз','баланд'],c:0},
{q:'Синоними калимаи "зебо"?',a:['қашанг','бад','сиёҳ'],c:0},
{q:'Кадом калима сифат аст?',a:['сурх','сурхӣ','сурхидан'],c:0},
{q:'Замони гузашта кадом аст?',a:['рафт','меравад','меравадӣ'],c:0},
{q:'Калимаи ҷамъ кадом аст?',a:['китоб','китобҳо','китобӣ'],c:1},
{q:'Кадом калима зарф аст?',a:['тез','тезӣ','тезидан'],c:0},
{q:'Антоними "рӯз"?',a:['шаб','субҳ','шом'],c:0},
{q:'Кадом калима ҷонишин аст?',a:['ман','китоб','хонда'],c:0},
{q:'Замони ҳозира?',a:['меравад','рафт','мерафт'],c:0},
{q:'Синоними "дӯст"?',a:['рафиқ','душман','бегона'],c:0},
{q:'Кадом калима шумора аст?',a:['се','сеюм','сегона'],c:0},
{q:'Антоними "сафед"?',a:['сиёҳ','равшан','калон'],c:0},
{q:'Кадом калима пешоянд аст?',a:['ба','китоб','хондан'],c:0},
{q:'Ҷумлаи хабарӣ кадом аст?',a:['Ӯ омад.','Ӯ омад?','Оё ӯ омад?'],c:0},
{q:'Кадом калима пайвандак аст?',a:['ва','ба','дар'],c:0}
]},
en:{name:'English',q:[
{q:'Choose the correct form: She ___ a book now.',a:['reads','is reading','read'],c:1},
{q:'Past tense of "go"?',a:['goed','went','gone'],c:1},
{q:'Plural of "child"?',a:['childs','children','childes'],c:1},
{q:'Choose the article: ___ apple',a:['a','an','the'],c:1},
{q:'Opposite of "big"?',a:['small','large','tall'],c:0},
{q:'Synonym of "fast"?',a:['quick','slow','late'],c:0},
{q:'Choose verb:',a:['beautiful','run','red'],c:1},
{q:'Present Simple: I ___ school.',a:['go','went','going'],c:0},
{q:'How many letters in English alphabet?',a:['24','26','28'],c:1},
{q:'Choose pronoun:',a:['he','house','red'],c:0},
{q:'Past of "see"?',a:['saw','seen','see'],c:0},
{q:'Choose adjective:',a:['happy','happiness','happily'],c:0},
{q:'Plural of "mouse"?',a:['mouses','mice','mouse'],c:1},
{q:'Future tense:',a:['will go','went','go'],c:0},
{q:'Opposite of "hot"?',a:['cold','warm','cool'],c:0},
{q:'Choose noun:',a:['run','teacher','teach'],c:1},
{q:'Comparative of "good"?',a:['better','gooder','best'],c:0},
{q:'Choose correct: There ___ a book.',a:['is','are','be'],c:0},
{q:'Past of "eat"?',a:['ate','eated','eat'],c:0},
{q:'Choose preposition:',a:['in','run','blue'],c:0}
]}
};

let subject,questions,index=0,score=0,time=300,timer;

function startTest(key){subject=tests[key];questions=subject.q;index=0;score=0;document.getElementById('menu').classList.add('hidden');document.getElementById('history').classList.add('hidden');document.getElementById('result').classList.add('hidden');document.getElementById('test').classList.remove('hidden');document.getElementById('subjectName').textContent=subject.name;loadQuestion();}
function fmt(t){return String(Math.floor(t/60)).padStart(2,'0')+':'+String(t%60).padStart(2,'0')}
function loadQuestion(){clearInterval(timer);time=300;document.getElementById('time').textContent=fmt(time);timer=setInterval(()=>{time--;document.getElementById('time').textContent=fmt(time);if(time==0)nextQuestion()},1000);const q=questions[index];document.getElementById('qNum').textContent=index+1;document.getElementById('score').textContent=score;document.getElementById('question').textContent=q.q;const a=document.getElementById('answers');a.innerHTML='';q.a.forEach((t,i)=>a.innerHTML+=`<label><input type="radio" name="ans" value="${i}"> ${t}</label><br>`);}
function nextQuestion(){const c=document.querySelector('input[name="ans"]:checked');if(c && Number(c.value)===questions[index].c)score++;index++;index<questions.length?loadQuestion():finish();}
function grade(s){if(s>=18)return '5';if(s>=14)return '4';if(s>=10)return '3';return '2'}

function saveHistory(){
 const history=JSON.parse(localStorage.getItem('testHistory')||'[]');
 history.push({subject:subject.name,score:score,date:new Date().toLocaleString()});
 localStorage.setItem('testHistory',JSON.stringify(history));
}

function finish(){
 clearInterval(timer);
 saveHistory();
 document.getElementById('test').classList.add('hidden');
 document.getElementById('result').classList.remove('hidden');
 document.getElementById('result').innerHTML=`<h2>${subject.name}</h2><p>Балл: <b>${score}/20</b></p><p>Баҳо: <b>${grade(score)}</b></p><button onclick="showHistory()">Таърихи натиҷаҳо</button><br><button onclick="backMenu()">Ба меню</button>`;
}

function showHistory(){
 document.getElementById('result').classList.add('hidden');
 document.getElementById('menu').classList.add('hidden');
 document.getElementById('history').classList.remove('hidden');
 renderHistory();
}

function renderHistory(){
 const list=document.getElementById('historyList');
 const history=JSON.parse(localStorage.getItem('testHistory')||'[]');
 list.innerHTML=history.length?history.map(h=>`<li>${h.date} — <b>${h.subject}</b>: ${h.score}/20</li>`).join(''):'<li>Ҳанӯз натиҷа нест</li>';
}

function backMenu(){
 document.getElementById('menu').classList.remove('hidden');
 document.getElementById('result').classList.add('hidden');
 document.getElementById('history').classList.add('hidden');
}
