const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const mysteries_trad = ["Joyful mysteries", "Sorrowful mysteries", "Glorious mysteries", "Sorrowful mysteries", "Glorious mysteries", "Glorious mysteries"];
const mysteries_mod = ["Glorious mysteries", "Joyful mysteries", "Sorrowful mysteries", "Glorious mysteries", "Luminous mysteries", "Sorrowful mysteries", "Joyful mysteries"];

const mysteries_titles = {
    "Joyful mysteries": ["The Annunciation of the Lord to Mary", "The Visitation of Mary to Elizabeth", "The Nativity of our Lord Jesus Christ", "The Presentation of our Lord", "Finding Jesus in the Temple at age 12"],
    "Sorrowful mysteries": ["The Agony of Jesus in the Garden", "The Scourging at the Pillar", "Jesus is Crowned with Thorns", "Jesus Carried the Cross", "The crucifixion of our Lord"],
    "Glorious mysteries": ["The resurrection of Jesus Christ", "The ascencion of Jesus to heaven", "The descent of the Holy Ghost", "The assumption of Mary into heaven", "Mary is crowned as Queen of Heaven and Earth"], 
    "Luminous mysteries": ["The baptism in the Jordan", "The wedding at Cana", "The proclamation of the Kingdom", "The transfiguration", "The institution of the eucharist"]
};

const mysteries_content = {
    "Joyful mysteries": ["In the sixth month the angel Gabriel was sent from God to a city of Galilee named Nazareth, to a virgin betrothed to a man whose name was Joseph, of the house of David; and the virgin's name was Mary. (Lk 1:26-27)",
                        "In those days Mary arose and went with haste into the hill country, to a city of Judah, and she entered the house of Zechariah and greeted Elizabeth. And when Elizabeth heard the greeting of Mary, the babe leaped in her womb; and Elizabeth was filled with the Holy Spirit and she exclaimed with a loud cry, 'Blessed are you among women, and blessed is the fruit of your womb!'. (Lk 1:39-42)", 
                        "In those days a decree went out from Caesar Augustus that all the world should be enrolled. This was the first enrolment, when Quirinius was governor of Syria. And all went to be enrolled, each to his own city. And Joseph also went up from Galilee, from the city of Nazareth, to Judea, to the city of David, which is called Bethlehem, because he was of the house and lineage of David, to be enrolled with Mary, his betrothed, who was with child. And while they were there, the time came for her to be delivered. And she gave birth to her first-born son and wrapped him in swaddling cloths, and laid him in a manger, because there was no place for them in the inn. (Lk 2:1-7)", 
                        "And at the end of eight days, when he was circumcised, he was called Jesus, the name given by the angel before he was conceived in the womb. And when the time came for their purification according to the law of Moses, they brought him up to Jerusalem to present him to the Lord (as it is written in the law of the Lord, 'Every male that opens the womb shall be called holy to the Lord') and to offer a sacrifice according to what is said in the law of the Lord, 'a pair of turtledoves, or two young pigeons'. (Lk 2:21-24)", 
                        "Now his parents went to Jerusalem every year at the feast of the Passover. And when he was twelve years old, they went up according to custom; and when the feast was ended, as they were returning, the boy Jesus stayed behind in Jerusalem. His parents did not know it. After three days they found him in the temple, sitting among the teachers, listening to them and asking them questions; and all who heard him were amazed at his understanding and his answers. (Lk 2:41-47)"],
    "Sorrowful mysteries": ["Then Jesus went with them to a place called Gethsemane, and he said to his disciples, 'Sit here, while I go yonder and pray.' And taking with him Peter and the two sons of Zebedee, he began to be sorrowful and troubled. Then he said to them, 'My soul is very sorrowful, even to death; remain here, and watch with me.' And going a little farther he fell on his face and prayed, 'My Father, if it be possible, let this cup pass from me; nevertheless, not as I will, but as you will'. (Mt 26:36-39)", 
                        "Pilate released Barabbas to them, but after he had Jesus scourged, he handed him over to be crucified. (Mt 27,26)", 
                        "Then the soldiers of the governor took Jesus into the praetorium, and they gathered the whole battalion before him. And they stripped him and put a scarlet robe upon him, and plaiting a crown of thorns they put it on his head, and put a reed in his right hand. And kneeling before him they mocked him, saying, 'Hail, King of the Jews!'. (Mt 27:27-29)", 
                        "And they compelled a passer-by, Simon of Cyrene, who was coming in from the country, the father of Alexander and Rufus, to carry his cross. And they brought him to the place called Golgotha (which means the place of a skull). (Mk 15:21-22)", 
                        "And when they came to the place which is called The Skull, there they crucified him, and the criminals, one on the right and one on the left. And Jesus said, 'Father, forgive them; for they know not what they do'. It was now about the sixth hour, and there was darkness over the whole land until the ninth hour, while the sun's light failed; and the curtain of the temple was torn in two. Then Jesus, crying with a loud voice, said, 'Father, into thy hands I commit my spirit!' And having said this he breathed his last. (Lk 23:33-46)"],
    "Glorious mysteries": ["But on the first day of the week, at early dawn, they went to the tomb, taking the spices which they had prepared. And they found the stone rolled away from the tomb, but when they went in they did not find the body. While they were perplexed about this, behold, two men stood by them in dazzling apparel; and as they were frightened and bowed their faces to the ground, the men said to them, 'Why do you seek the living among the dead? He is not here, but has risen'. (Lk 24:1-5)", 
                        "So then the Lord Jesus, after he had spoken to them, was taken up into heaven, and sat down at the right hand of God. (Mk 16:19)", 
                        "When the day of Pentecost had come, they were all together in one place. And suddenly a sound came from heaven like the rush of a mighty wind, and it filled all the house where they were sitting. And there appeared to them tongues as of fire, distributed and resting on each one of them. And they were all filled with the Holy Spirit and began to speak in other tongues, as the Spirit gave them utterance. (Acts 2:1-4)",
                        "Henceforth all generations will call me blessed; for he who is mighty has done great things for me. (Lk 1:48-49)", 
                        "And a great portent appeared in heaven, a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars. (Rev 12:1 )"],
    "Luminous mysteries": ["And when Jesus was baptized, he went up immediately from the water, and behold, the heavens were opened and he saw the Spirit of God descending like a dove, and alighting on him; and lo, a voice from heaven, saying, 'This is my beloved Son, with whom I am well-pleased'. (Mt 3:16-17)", 
                        "On the third day there was a marriage at Cana in Galilee, and the mother of Jesus was there; Jesus also was invited to the marriage, with his disciples. When the wine failed, the mother of Jesus said to him, 'They have no wine.' And Jesus said to her, 'O woman, what have you to do with me? My hour has not yet come.' His mother said to the servants, 'Do whatever he tells you'. (Jn 2:1-5)", 
                        "The time is fulfilled, and the kingdom of God is at hand; repent, and believe in the gospel. (Mk 1:15)", 
                        "And after six days Jesus took with him Peter and James and John his brother, and led them up a high mountain apart. And he was transfigured before them, and his face shone like the sun, and his garments became white as light. (Mt 17:1-2)", 
                        "Now as they were eating, Jesus took bread, and blessed, and broke it, and gave it to the disciples and said, 'Take, eat; this is my body'. (Mt 26:26)"]

};

const prayers_english = {
    "Our Father": ["Our Father,", "who art in heaven,", "hallowed by Thy name.", "Thy kingdom come,", "Thy will be done, on earth as it is in heaven.", "Give us this day our daily bread,", "and forgive us our trespasses", "as we forgive those who trespass against us,", "and lead us not into temptation,", "but deliver us from evil. Amen."],
    "Hail Mary": ["Hail Mary, full of grace, the Lord is with thee.", "Blessed art thou amongst women,", "and blessed is the fruit of thy womb, Jesus.", "Holy Mary, Mother of God,", "pray for us sinners,", "now and at the hour of our death. Amen."],
    "Glory Be": ["Glory be to the Father,", "and to the Son,", "and to the Holy Spirit,", "as it was in the beginning,", "is now, and ever shall be,", "world without end. Amen."],
    "The Apostle's Creed": ["I believe in God,", "the Father Almighty,", "Creator of Heaven and earth;", "and in Jesus Christ, His only Son, Our Lord,", "Who was conceived by the Holy Spirit,", "born of the Virgin Mary,", "suffered under Pontius Pilate,", "was crucified, died, and was buried.", "He descended into Hell,", "on the third day He arose again from the dead.", "He ascended into Heaven,", "and is seated at the right hand of", "God the Father Almighty;", "from thence He shall come to judge", "the living and the dead.", "I believe in the Holy Spirit,", "the holy Catholic Church,", "the communion of saints,", "the forgiveness of sins,", "the resurrection of the body,", "and the life everlasting. Amen."],
    "O Lord, Open My Lips": ["O Lord, open my lips.", "And my mouth will proclaim your praise.", "O God come to my aid", "O Lord, make haste to help me."],
    "Sign of the cross": ["In the name of the Father,", "and of the Son,", "and of the Holy Spirit."],
    "Hail, holy Queen": ["Hail, holy Queen, mother of Mercy;", "hail, our life, our sweetness and our hope.", "To thee do we cry, poor banished children of Eve;", "to thee do we send up our sighs,", "mourning and weeping in this valley of tears.", "Turn then, most gracious advocate,", "thine eyes of mercy towards us;", "and after this our exile,", "show unto us the blessed fruit of thy womb, Jesus.", "O clement, O loving, O sweet Virgin Mary. Amen."],
    "O my Jesus": ["O my Jesus, forgive us,", "save us from the fire of hell.", "Lead all souls to Heaven,", "especially those who are most in need. Amen."],
    "Remember, O most Gracious Virgin Mary": ["Remember, O most gracious Virgin Mary", "that never was it known that anyone who fled to your protection,", "implored your help, or sought your intercession", "was left unaided.", "Inspired by this confidence,", "I fly unto thee, O Virgin of virgins, my Mother.", "To thee do I come, before you I stand,", "sinful and sorrowful.", "O Mother of the Word Incarnate,", "despise not my petitions,", "but in your mercy, hear and answer me. Amen."],
    "Prayer to Saint Michael": ["Blessed Michael, archangel,", "defend us in the hour of conflict.", "Be our safeguard against the wickedness and snares of the devil", "and do thou, O Prince of the heavenly host,", "by the power of God thrust Satan down to hell", "and with him those other wicked spirits", "who wander through the world", "for the ruin of souls. Amen."],
    "Beneath thy protection": ["We fly to thy protection,", "O Holy Mother of God;", "do not despise our petitions", "in our necessities,", "but deliver us always", "from all dangers,", "O Glorious and Blessed Virgin. Amen."],
    "Miraculous Medal Prayer": ["O Mary, conceived without sin,", "pray for us who have recourse to thee. Amen."],
    "O Sacrament Most Holy": ["O sacrament most holy,", "o Sacrament divine,", "all praise and all thanksgiving,", "be every moment thine!"],
    "Prayer for the dead": ["May the souls of the faithful departed,", "through the mercy of God,", "rest in peace. Amen."],
    "Litany of Loreto": ["Lord have mercy.", "Christ have mercy.", "Lord have mercy.", "Christ hear us.", "Christ graciously hear us.", "", "God the Father of heaven, have mercy on us", "", "God the Son, Redeemer of the world, have mercy on us", "God the Holy Spirit, have mercy on us", "Holy Trinity, one God, have mercy on us", "", "Holy Mary, pray for us", "Holy Mother of God, pray for us", "Holy Virgin of Virgins, pray for us", "Mother of Christ, pray for us", "Mother of the Church, pray for us", "Mother of Mercy, pray for us", "Mother of divine grace, pray for us", "Mother of Hope, pray for us", "Mother most pure, pray for us", "Mother most chaste, pray for us", "Mother inviolate, pray for us", "Mother undefiled, pray for us", "Mother most amiable, pray for us", "Mother admirable, pray for us", "Mother of good counsel, pray for us", "Mother of our Creator, pray for us", "Mother of our Saviour, pray for us", "Virgin most prudent, pray for us", "Virgin most venerable, pray for us", "Virgin most powerful, pray for us", "Virgin most merciful, pray for us", "Virgin most faithful, pray for us", "Mirror of justice, pray for us", "Seat of wisdom, pray for us", "Cause of our joy, pray for us", "Spiritual vessel, pray for us", "Vessel of honour, pray for us", "Singular vessel of devotion, pray for us", "Mystical rose, pray for us", "Tower of David, pray for us", "Tower of ivory, pray for us", "House of gold, pray for us", "Ark of the covenant, pray for us", "Gate of heaven, pray for us", "Morning star, pray for us", "Health of the sick, pray for us", "Refuge of Migrants, pray for us", "Comfort of the afflicted, pray for us", "Help of Christians, pray for us", "Queen of Angels, pray for us", "Queen of Patriarchs, pray for us", "Queen of Prophets, pray for us", "Queen of Apostles, pray for us", "Queen of Martyrs, pray for us", "Queen of Confessors, pray for us", "Queen of Virgins, pray for us", "Queen of all Saints, pray for us", "Queen conceived without original sin, pray for us", "Queen assumed into heaven, pray for us", "Queen of the most holy Rosary, pray for us", "Queen of families, pray for us", "Queen of peace, pray for us", "", "Lamb of God, who takes away the sins of the world,", "spare us, O Lord", "Lamb of God, who takes away the sins of the world,", "graciously hear us, O Lord.","Lamb of God, who takes away the sins of the world,", "have mercy on us.", "Pray for us, O holy Mother of God.", 
    "That we may be made worthy of the promises of Christ.", "", "Let us pray", "Grant, we beseech thee", "O Lord God,", "that we, your servants,", "may enjoy perpetual health of mind and body;", "and by the glorious intercession of the Blessed Mary, every Virgin,", "may be delivered from present sorrow,", "and obtain eternal joy.", "Through Christ our Lord. Amen."]
};

const prayers_latin = {
    "Our Father": ["Pater noster, qui es in caelis,", "sanctificetur nomen tuum.", "Adveniat regnum tuum.", "Fiat voluntas tua,", "sicut in caelo, et in terra.", "Panem nostrum quotidianum da nobis hodie,", "et dimitte nobis debita nostra,", "sicut et nos dimittimus debitoribus nostris.", "Et ne nos inducas in tentaionem,", "sed libera nos a malo.", "Amen."],
    "Hail Mary": ["Ave Maria, gratia plena;", "Dominus tecum.", "Benedicta tu in mulieribus,", "et benedictus fructus ventris tui, Iesus.", "Sancta Maria, Mater Dei,", "ora pro nobis peccatoribus,", "nunc et in hora mortis nostrae.", "Amen."],
    "Glory Be": ["Gloria Patri, et Filio, et Spiritui Sancto,", "Sicut erat in principio, et nunc, et semper,", "et in saecula saeculorum.", "Amen."],
    "The Apostle's Creed": ["Credo in Deum Patrem omnipotentem,", "Creatorem caeli et terrae.", "Et in Iesum Christum,", "Filium eius unicum, Dominum nostrum,", "qui conceptus est de Spiritu Sancto,", "natus ex Maria Virgine,", "passus sub Pontio Pilato,", "crucifixus, mortuus, et sepultus,", "descendit ad inferos, tertia die resurrexit a mortuis,", "ascendit ad caelos,", "sedet ad dexteram Dei Patris omnipotentis,", "inde venturus est iudicare vivos et mortuos.", "Credo in Spiritum Sanctum,", "sanctam Ecclesiam catholicam,", "sanctorum communionem,", "remissionem peccatorum,", "carnis resurrectionem et vitam aeternam.", "Amen."],
    "O Lord, Open My Lips": ["O Lord, open my lips.", "And my mouth will proclaim your praise.", "O God come to my aid", "O Lord, make haste to help me."],
    "Sign of the cross": ["In nomine Patris,", "et Filii", "et Spiritus Sancti.", "Amen."],
    "Hail, holy Queen": ["Salve, Regina,", "Mater misericordiae,", "vita dulcedo et spes nostra, salve.", "Ad te clamamus,", "exsules filii Evae.", "Ad te suspiramus, gementes et flentes", "in hac lacrymarum valle.", "Eia ergo, advocata nostra,", "illos tuos misericordes oculus", "ad nos converte.", "Et Iesum benedicum fructum ventris tui,", "nobis, post hoc exsilium ostende.", "O clemens, o pia, o dulcis virgo Maria!"],
    "O my Jesus": ["Domine Iesu,", "dimitte nobis débita nostra,", "salva nos ab igne inferni,", "perduc in caelum omnes ánimas,", "praesertim eas, quae misericórdiae tuae maxime indigent.", "Amen."],
    "Remember, O most Gracious Virgin Mary": ["Remember, O most gracious Virgin Mary", "that never was it known that anyone who fled to your protection,", "implored your help, or sought your intercession", "was left unaided.", "Inspired by this confidence,", "I fly unto thee, O Virgin of virgins, my Mother.", "To thee do I come, before you I stand,", "sinful and sorrowful.", "O Mother of the Word Incarnate,", "despise not my petitions,", "but in your mercy, hear and answer me. Amen."],
    "Prayer to Saint Michael": ["Sancte Michael Archangele,", "defende nos in proelio, contra nequitiam et insidias diaboli esto praesidium.", "Imperet illi Deus, supplices deprecamur: tuque, principes militae celestis,", "Satanam aliosque spiritus malignos,", "qui ad perditionem animarum pervagantur in mundo,", "divina virtute, in infernum detrude.", "Amen."],
    "Beneath thy protection": ["We fly to thy protection,", "O Holy Mother of God;", "do not despise our petitions", "in our necessities,", "but deliver us always", "from all dangers,", "O Glorious and Blessed Virgin. Amen."],
    "Miraculous Medal Prayer": ["O Mary, conceived without sin,", "pray for us who have recourse to thee. Amen."],
    "O Sacrament Most Holy": ["O sacrament most holy,", "o Sacrament divine,", "all praise and all thanksgiving,", "be every moment thine!"],
    "Prayer for the dead": ["May the souls of the faithful departed,", "through the mercy of God,", "rest in peace. Amen."],
    "Litany of Loreto": ["Kyrie eleison.", "Christe eleison.", "Kyrie eleison.", "", "Christe audi nos.", "Christe exaudi nos.", "", "Pater de coelis Deus, miserere nobis.", "Fili redemptor mundi Deus, miserere nobis.", "Spiritus Sancte Deus, miserere nobis.", "Sancta Trinitas unus Deus, miserere nobis.", "", "Sancta Maria, ora pro nobis.", "Sancta Dei Genetrix, ora pro nobis.", "Sancta Virgo Virginum, ora pro nobis", "", "Mater Christi, ora pro nobis.", "Mater Ecclesiae, ora pro nobis.", "Mater misericordiae, ora pro nobis.", "Mater Divinae Gratiae, ora pro nobis.", "Mater spei, ora pro nobis", "Mater purissima, ora pro nobis.", "Mater castissima, ora pro nobis.", "Mater inviolata, ora pro nobis.", "Mater intemerata, ora pro nobis.", "Mater amabilis, ora pro nobis.", "Mater admirabilis, ora pro nobis.", "Mater boni consilii, ora pro nobis.", "Mater Creatoris, ora pro nobis.", "Mater Salvatoris, ora pro nobis.", "", "Virgo prudentissima, ora pro nobis.", "Virgo veneranda, ora pro nobis.", "Virgo praedicanda, ora pro nobis.", "Virgo potens, ora pro nobis.", "Virgo clemens, ora pro nobis.", "Virgo fidelis, ora pro nobis.", "", "Speculum justitiae, ora pro nobis.", "Sedes sapientiae, ora pro nobis.", "Causa nostrae laetitiae, ora pro nobis.", "Vas spirituale, ora pro nobis.", "Vas honorabile, ora pro nobis.", "Vas insigne devotionis, ora pro nobis.", "Rosa mystica, ora pro nobis.", "Turris Davidica, ora pro nobis.", "Turris eburnea, ora pro nobis.", "Domus aurea, ora pro nobis.", "Foederis arca, ora pro nobis.", "Janua coeli, ora pro nobis.", "Stella matutina, ora pro nobis.", "Salus infirmorum, ora pro nobis.", "Refugium peccatorum, ora pro nobis.", "Solacium migrantium, ora pro nobis.", "Consolatrix afflictorum, ora pro nobis.", "Auxilium christianorum, ora pro nobis.", "", "Regina Angelorum, ora pro nobis.", "Regina Patriarcharum, ora pro nobis.", "Regina Prophetarum, ora pro nobis.", "Regina Apostolorum, ora pro nobis.", "Regina Martyrum, ora pro nobis.", "Regina Confessorum, ora pro nobis.", "Regina Virginum, ora pro nobis.", "Regina Sanctorum omnium, ora pro nobis.", "Regina sine labe originali concepta, ora pro nobis.", "Regina in caelum assumpta, ora pro nobis.", "Regina Sacratissimi Rosarii, ora pro nobis.", "Regina familiae, ora pro nobis.", "Regina pacis, ora pro nobis.", "", "Agnus Dei qui tollis peccata mundi, parce nobis Domine.", "Agnus Dei qui tollis peccata mundi, exaudi nos, Domine.", "Agnus Dei qui tollis peccata mundi, miserere nobis.", 
                        "", "Ora pro nobis, sancta Dei Genetrix.", "Ut digni efficiamur promissionibus Christi.", "Amen."]
};


var today = new Date();
var day = today.getDay();

todays_mystery = mysteries_mod[day]

document.getElementById("mystery-text").innerHTML = `<p>As it is ${days[day].toLowerCase()}, we'll pray the <b>${todays_mystery.toLowerCase()}</b> today!</p>`;

// Set the mysteries

document.getElementById("mystery-1-title").innerText= `First mystery: ${mysteries_titles[todays_mystery][0]}`;
document.getElementById("mystery-2-title").innerText= `Second mystery: ${mysteries_titles[todays_mystery][1]}`;
document.getElementById("mystery-3-title").innerText= `Third mystery: ${mysteries_titles[todays_mystery][2]}`;
document.getElementById("mystery-4-title").innerText= `Fourth mystery: ${mysteries_titles[todays_mystery][3]}`;
document.getElementById("mystery-5-title").innerText= `Fifth mystery: ${mysteries_titles[todays_mystery][4]}`;

// Set Hail Mary

var prayers_mary = document.getElementsByClassName("prayer_mary")

for (var i=0; i<prayers_mary.length; i++) {
    prayers_mary[i].innerText = "Hail Mary, full of grace...";
};

// Checkboxes

check_boxes();

function check_boxes() {

    // Setup for radios

    var radios = document.getElementsByClassName('radio_button');
    var prayers;

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            value = radios[i].value;       

            if (radios[i].value == "english") {
                prayers = prayers_english
            } else if (radios[i].value == "latin") {
                prayers = prayers_latin
            }
        }
    };

    console.log("Starting setting boxes...");

    // Opening prayers

    opening_boxes = ["opening_cross", "opening_father", "opening_lips", "opening_glory"]
    opening_prayers = ["Sign of the cross", "Our Father", "O Lord, Open My Lips", "Glory Be"]

    for (var i=0; i<opening_boxes.length; i++) {

        current_box = document.getElementById(opening_boxes[i])

        if (current_box.checked == true) {
            document.getElementById(`prayer_${opening_boxes[i]}`).innerHTML = `<b>${opening_prayers[i]}</b> <br><br> ${prayers[opening_prayers[i]].join("<br>")}`;
        } else {
            document.getElementById(`prayer_${opening_boxes[i]}`).innerHTML = "";
        };

    };  

    console.log("Done setting opening prayers");

    // Closing prayers

    closing_boxes = ["closing_queen", "closing_michael", "closing_protection", "closing_litany", "closing_cross"]
    closing_prayers = ["Hail, holy Queen", "Prayer to Saint Michael", "Beneath thy protection", "Litany of Loreto", "Sign of the cross"]

    for (var i=0; i<closing_boxes.length; i++) {

        current_box = document.getElementById(closing_boxes[i])

        if (current_box.checked == true) {
            document.getElementById(`prayer_${closing_boxes[i]}`).innerHTML = `<b>${closing_prayers[i]}</b> <br><br> ${prayers[closing_prayers[i]].join("<br>")}`;
        } else {
            document.getElementById(`prayer_${closing_boxes[i]}`).innerHTML = "";
        };

    };  

    // Set scripture excerpts

    scripture_box = document.getElementById("scripture_excerpt")

    if (scripture_box.checked == true) {
        document.getElementById("scripture-1").innerText = mysteries_content[todays_mystery][0];
        document.getElementById("scripture-2").innerText = mysteries_content[todays_mystery][1];
        document.getElementById("scripture-3").innerText = mysteries_content[todays_mystery][2];
        document.getElementById("scripture-4").innerText = mysteries_content[todays_mystery][3];
        document.getElementById("scripture-5").innerText = mysteries_content[todays_mystery][4];
    } else {
        document.getElementById("scripture-1").innerText = ""
        document.getElementById("scripture-2").innerText = ""
        document.getElementById("scripture-3").innerText = ""
        document.getElementById("scripture-4").innerText = ""
        document.getElementById("scripture-5").innerText = ""
    }

    console.log("Done setting excerpts from scripture");

    // Set Trinitarian "Hail Mary"

    hail_box = document.getElementById("opening_mary");

    if (hail_box.checked == true) {
        document.getElementById("mary_1").innerHTML = "<b>Trinitarian Hail Mary</b> <br> <br> Hail Mary, Daughter of God the Father, full of grace...";
        document.getElementById("mary_2").innerHTML = "Hail Mary, Mother of God the Son, full of grace...";
        document.getElementById("mary_3").innerHTML = "Hail Mary, Spouse of the Holy Ghost, full of grace...";
    } else {
        document.getElementById("mary_1").innerHTML = "<b>Hail Mary</b> <br> <br> Hail Mary, full of grace...";
        document.getElementById("mary_2").innerText = "Hail Mary, full of grace...";
        document.getElementById("mary_3").innerText = "Hail Mary, full of grace...";
    }

    

    // Other prayers

    main_boxes = ["prayer_father", "prayer_glory", "prayer_fatima", "prayer_sacrament", "prayer_medal", "prayer_dead"];
    main_prayers = ["Our Father", "Glory Be", "O my Jesus", "O Sacrament Most Holy", "Miraculous Medal Prayer", "Prayer for the dead"];

    for (var i=0; i<main_boxes.length; i++) {

        current_box = document.getElementById(main_boxes[i]);

        var current_prayers = document.getElementsByClassName(main_boxes[i]);

        if (current_box.checked == true) {            

            for (var j=0; j<current_prayers.length; j++) {
                current_prayers[j].innerHTML = `<b>${main_prayers[i]}</b> <br><br> ${prayers[main_prayers[i]].join("<br>")}`;
            };

        } else {
            
            for (var j=0; j<current_prayers.length; j++) {
                current_prayers[j].innerHTML = "";
            };

        };

    };  

    console.log("Done setting main prayers");
    
};