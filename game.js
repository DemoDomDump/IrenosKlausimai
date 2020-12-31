const allQuestions = ["- Ar jums patinka žiūrėti siaubo filmus? ", "- Ar galite pasakyti, kad mėgstate apsipirkti? (nesvarbu, atsako vyras ar moteris) ", "- Ar dažnai esate alkanas? ", "- Ar gali pažvelgti man į akis ir nusišypsoti? ", "- Ką sakote, kai transporto priemonėje užlipate ant kojų? ", "- Ar žmonės dažnai beldžiasi į jūsų duris naktį? ", "- Ar jums patinka maudytis mėnulio šviesoje? ", "- Ar tiesa, kad jums labiau patiko eiti į kaimą, o ne į Maldyvus? ", "- Kodėl kartais keliaujate be bilieto? ", "- Ar jūs kada nors skaitėte storas knygas? ", "- Ar lengvai randate bendrą kalbą su svečiais nepažįstamoje kompanijoje? ", "- Ar esate egzotiškos virtuvės mėgėjas? ", "- Kaip dažnai ant jūsų stalo atsiranda alkoholis? ", "- Ar galite mane dabar apgauti? ", "- Ar jums patinka vaikščioti gimtojo miesto stogais? ", "- Kodėl bijote mažų šunų? ", "- Vaikystėje eidavote pas kaimynus aviečių? ", "- Jei dabar suskambės telefonas ir sakys, kad laimėjote kelionę prie jūros, ar patikėsite? ", "- Ar kitiems patinka jūsų gaminimas? ", "- Kodėl bijote gerti pieną? ", "- Ar jums patinka gauti dovanų? ", "- Ar mėgstate dovanoti? ", "- Ar dabar norėtumėte atsigerti? ", "- Ar daug ilsiesi darbe? ", "- Kodėl paprašei mano nuotraukos? ", "- Ar mėgstate valgyti mėsos produktus? ", "- Ar esate labai temperamentingas žmogus? ", "- Ar galite man dabar paskolinti tūkstantį eurų? ", "- Ar dažnai mirkteli į akis nepažįstamiems / nepažįstamiems žmonėms transporto srityje? ", "- Ar mėgstate maudytis vilkėdama drabužius? ", "- Ar tikrai dabar norite atsakyti į mano klausimą? ", "- Kodėl sakėte, kad vakarėlyje reikia daug valgyti? ", "- Kodėl akmenukų mėtymą iš balkono praeiviams vadinate mėgstama sporto šaka? ", "- Ar dažnai savo darbą perkeliate kitiems? ", "- Ar jums patinka skanus maistas vakarėlyje? ", "- Ar dažnai susitinkate gatvėje? ", "- Ar užmiegate darbe? ", "- Kodėl slepiate savo amžių? ", "- Ar knarki naktį? ", "- Ar jums patinka kepta silkė? ", "- Ar jūs kada nors bėgote nuo policininko? ", "- Ar bijote taksi vairuotojų? ", "- Ar dažnai žadate per daug? ", "- Ar mėgstate gąsdinti kitus? ", "- Ar tau patinka mano šypsena? ", "- Ar galėtum man pasakyti savo paslaptį? ", "- Ar jums patinka piešti? ", "- Kodėl dažnai atostogaujate nuo darbo? ", "Ar dažnai važiuojate visuomeniniu transportu be bilieto? ", "Ar keliatės anksti dėl savo reikalo? ", "Ar mėgstate vaikščioti į svečius? ", "Ar užsiimate sportu? ", "Ar turite įprotį pataikauti savo viršininkams? ", "Ar pripažįstate nuogo kūno kultą? ", "Ar slepiate savo amžių? ", "Ar mėgstate 'riebius' anekdotus? ", "Ar kišatės į svetimus šeimyninius reikalus? ", "Ar užtenka jėgų ir valios atsisakyti gėrimų? ", "Ar mėgstate prižiūrėti save? ", "Ar patinka girtos moterys? ", "Kada slepiate pinigus? ", "Ar bučiuojatės viešose vietose? ", "Ar turite įprotį susipažinti gatvėje? ", "Ar dažnai pažadate daugiau negu galite? ", "Ar dažnai pasiduodate baimei? ", "Ar traukia jus alkoholis ir nusikaltimai? ", "Indus ir grindis Jūs su malonumu plaunate? ", "Ar mėgstate skaniai pavalgyti? ", "Ar mėgstate gyvūnus? ", "Ar jūs patenkintas? "];
const allAnswers = ["- Negaliu nė dienos gyventi be jo. ", "Kaip aš be šito? ", "Tik per mano gimtadienį. ", "- Kai ne namuose, kodėl gi ne. ", "- Dabar aš tau to nepasakysiu. ", "Ne dabar. ", "Man gėda dabar ką nors atsakyti. ", "Paklausk mano vyro / žmonos. ", "Tik tada, kai gerai pailsėsiu. ", "Galiu, bet tik pirmadieniais. ", "„Nesigėdink manęs. ", "Aš nuo vaikystės myliu šį verslą. ", "Na taip ... man visko nutinka ... ", "Retai galiu sau tai leisti. ", "Taip, aš tau galiu / galiu viską! ", "Jei ilsiuosi, tada taip. ", "- O su kuo taip neatsitinka? ", "Aš tau pasakysiu apie tai šiek tiek vėliau. ", "Laimei, taip. ", "Jei jie manęs labai klausia. ", "Mūsų laikais tai nėra nuodėmė. ", "- Ar tikrai manote, kad pasakysiu tiesą? ", "Kaip išimtis. ", "Po taurės šampano. ", "Taigi aš tau dabar sakiau tiesą! ", "Tai mano puoselėjama svajonė. ", "Šokime geriau! ", "Deja, ne. ", "Tai mano aistra! ", "Aš tau pasakysiu apie tai, kai pateiksi savo telefono numerį. ", "Su malonumu! ", "paraudau - tai atsakymas. ", "Ir aš tuo didžiuojuosi. ", "Mano metai yra mano pasididžiavimas. ", "Negaliu pakęsti. ", "Tik jei gausiu atlyginimą. ", "Kaip galite praleisti šią galimybę? ", "Tik ryte. ", "Tai visai paprasta. ", "Jei man mokės. ", "Kaip gali būti kitaip? ", "Savaime! ", "Pasakysiu apie tai tik akis į akį. ", "Išimtinai švenčių dienomis. ", "Kaip puiku! ", "Man pasakė, kad tai gerai ", "Tik geroje kompanijoje. ", "Manau, kad tai yra politinis klausimas. ", "Kam mane priimate?! ", "Atspėjai. ", "Leisk man geriau tave pabučiuoti. ", "Tik tada, kai niekas nežiūri. ", "Tu darai man gėda. ", "Jei nėra kitos išeities. ", "Ir visą vakarą bandei manęs apie tai paklausti? ", "Ir net dabar galiu jums pasakyti tą patį. ", "Jei manęs labai paprašo. ", "Apie tai pakalbėsime be liudininkų tiktai per išeigines. ", "Labai gaila bet taip. ", "Apie tai manęs paklauskite, kai būsiu blaivesnis. ", "Kodėl užduodate tokius klausimus solidžioje kompanijoje. ", "Labai, labai ", "Jei šitas nereikalauja gydytojo pagalbos. ", "Susilaikysiu nuo atsakymo, kad nesugadinčiau savo reputacijos. ", "Kada aš išgėręs – o girtas visada. ", "Mano įsitikinimai rodo, kad man geriau patylėti. ", "Jei tėvynė to iš manęs pareikalautų. ", "Visada kai aš būnu stipriai išgėręs. ", "Jei tai nereikalauja materialinių išlaidų. ", "Kiekvieną dieną. ", "Tiktai per šventes. ", "Tiktai neduodat. ", "Dėl kilnaus reikalo rizikuoju. ", "Labai keblus klausimas. ", "Mane labiau domina kiti klausimai. ", "Žinant mano vaikystę jums turėtų būti gėda užduoti tokius klausimus. ", "Kartais kai būna nemalonumai darbe ar šeimoje. ", "Jūsų nuosavybėje. ", "Tiktai nubudęs naktį. ", "Aš į kvailus klausimus principe neatsakau ", "Tai yra natūralus dalykas. ", "Be šito aš neįsivaizduoju savo gyvenimo. ", "Į politinius klausimus neatsakau. ", "Tai priklauso nuo jūsų. ", "Lyg ir taip lyg ir ne. ", "Tiktai kraštutiniais atvejais. ", "Tiktai sapne. ", "Aš priešinuosi tiek, kiek leidžia jėgos. ", "Prašau manęs nestatyti į nepatogią padėtį. ", "Tiktai po 'pachmielkos'. ", "Tai mano hobis. ", "Finansinė padėtis man šito neleidžia. ", "Kiekvieną naktį. ", "Šito nebuvo ir negali būti. ", "Principe ne, bet kaip išimtis taip. ", "Galbūt kada nors po išgertuvių. ", "Tiktai, kad niekas nematytų. ", "Stengiuosi, kad nepamatytų. "];

const numOfButtons = 5;
const numOfQuestions = allQuestions.length;
const numOfAnswers = allAnswers.length;

const generateRndSequence = (btns, answers) => {
    const nums = new Set();
    while(nums.size !== btns) {
        nums.add(Math.floor(Math.random() * answers) + 1);
    }
    return [...nums];
}

const generateRndNumber = (questions) => {
    return Math.floor(Math.random() * questions) + 1
}

const showAnswer = answer => {
    $("#gameButtons").hide();
    let h1 = $("<h1></h1>").text(allAnswers[answer]);
    $("#gameAnswer").append(h1);
    $("#gameAnswer").show();
}

const newUniqueAnswers = generateRndSequence(numOfButtons, numOfAnswers);
const newUniqueQuestion = generateRndNumber(numOfQuestions);

$("#gameAnswer").hide();

let displayQuestion = $("<h1></h1>").text(allQuestions[newUniqueQuestion]);
$("#gameQuestion").append(displayQuestion);

newUniqueAnswers.forEach(answer => {
    let btn = $("<a></a>").addClass( "btn btn-outline-warning btn-lg m-4" );
    btn.click(() => showAnswer(answer));
    let text = answer <= 9 ? `0${answer}` : `${answer}`;
    let h1 = $("<h1></h1>").text(text);
    btn.append(h1);
    $("#gameButtons").append(btn);
});

  
