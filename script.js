const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const mysteries_trad = ["Joyful mysteries", "Sorrowful mysteries", "Glorious mysteries", "Sorrowful mysteries", "Glorious mysteries", "Glorious mysteries"];
const mysteries_mod = ["Glorious mysteries", "Joyful mysteries", "Sorrowful mysteries", "Glorious mysteries", "Luminous mysteries", "Sorrowful mysteries", "Joyful mysteries"];

var language = "english";

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

// From Rosary Remnant, I can get additional readings

const additional_readings = {

    "Joyful mysteries": [   "Sing, O daughter of Zion; shout, O Israel; be glad and rejoice with all the heart, O daughter of Jerusalem. The LORD hath taken away thy judgments, he hath cast out thine enemy: the king of Israel, even the LORD, is in the midst of thee: thou shalt not see evil any more. In that day it shall be said to Jerusalem, Fear thou not: and to Zion, Let not thine hands be slack. The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing. (Zephaniah 3:14-17)", 
                            "And Hannah prayed, and said, My heart rejoiceth in the LORD, mine horn is exalted in the LORD: my mouth is enlarged over mine enemies; because I rejoice in thy salvation. There is none holy as the LORD: for there is none beside thee: neither is there any rock like our God. Talk no more so exceeding proudly; let not arrogancy come out of your mouth: for the LORD is a God of knowledge, and by him actions are weighed. The bows of the mighty men are broken, and they that stumbled are girded with strength. They that were full have hired out themselves for bread; and they that were hungry ceased: so that the barren hath born seven; and she that hath many children is waxed feeble. The LORD killeth, and maketh alive: he bringeth down to the grave, and bringeth up. The LORD maketh poor, and maketh rich: he bringeth low, and lifteth up. He raiseth up the poor out of the dust, and lifteth up the beggar from the dunghill, to set them among princes, and to make them inherit the throne of glory: for the pillars of the earth are the LORD'S, and he hath set the world upon them. He will keep the feet of his saints, and the wicked shall be silent in darkness; for by strength shall no man prevail. The adversaries of the LORD shall be broken to pieces; out of heaven shall he thunder upon them: the LORD shall judge the ends of the earth; and he shall give strength unto his king, and exalt the horn of his anointed. (1 Samuel 2:1-10)", 
                            "Now when Jesus was born in Bethlehem of Judaea in the days of Herod the king, behold, there came wise men from the east to Jerusalem, Saying, Where is he that is born King of the Jews? for we have seen his star in the east, and are come to worship him. When Herod the king had heard these things, he was troubled, and all Jerusalem with him. And when he had gathered all the chief priests and scribes of the people together, he demanded of them where Christ should be born. And they said unto him, In Bethlehem of Judaea: for thus it is written by the prophet, And thou Bethlehem, in the land of Juda, art not the least among the princes of Juda: for out of thee shall come a Governor, that shall rule my people Israel. Then Herod, when he had privily called the wise men, enquired of them diligently what time the star appeared. And he sent them to Bethlehem, and said, Go and search diligently for the young child; and when ye have found him, bring me word again, that I may come and worship him also. When they had heard the king, they departed; and, lo, the star, which they saw in the east, went before them, till it came and stood over where the young child was. When they saw the star, they rejoiced with exceeding great joy. And when they were come into the house, they saw the young child with Mary his mother, and fell down, and worshipped him: and when they had opened their treasures, they presented unto him gifts; gold, and frankincense, and myrrh. And being warned of God in a dream that they should not return to Herod, they departed into their own country another way. (Matthew 2:1-12)", 
                            "And they rose up in the morning early, and worshipped before the LORD, and returned, and came to their house to Ramah: and Elkanah knew Hannah his wife; and the LORD remembered her. Wherefore it came to pass, when the time was come about after Hannah had conceived, that she bare a son, and called his name Samuel, saying, Because I have asked him of the LORD. And the man Elkanah, and all his house, went up to offer unto the LORD the yearly sacrifice, and his vow. But Hannah went not up; for she said unto her husband, I will not go up until the child be weaned, and then I will bring him, that he may appear before the LORD, and there abide for ever. And Elkanah her husband said unto her, Do what seemeth thee good; tarry until thou have weaned him; only the LORD establish his word. So the woman abode, and gave her son suck until she weaned him. And when she had weaned him, she took him up with her, with three bullocks, and one ephah of flour, and a bottle of wine, and brought him unto the house of the LORD in Shiloh: and the child was young. And they slew a bullock, and brought the child to Eli. And she said, Oh my lord, as thy soul liveth, my lord, I am the woman that stood by thee here, praying unto the LORD. For this child I prayed; and the LORD hath given me my petition which I asked of him: Therefore also I have lent him to the LORD; as long as he liveth he shall be lent to the LORD. And he worshipped the LORD there. (1 Samuel 1:19-28)", 
                            "Moreover the LORD spake again unto Ahaz, saying, ask thee a sign of the LORD thy God; ask it either in the depth, or in the height above. But Ahaz said, I will not ask, neither will I tempt the LORD. And he said, Hear ye now, O house of David; Is it a small thing for you to weary men, but will ye weary my God also? Therefore the Lord himself shall give you a sign; Behold, a virgin shall conceive, and bear a son, and shall call his name Immanuel. Butter and honey shall he eat, that he may know to refuse the evil, and choose the good. (Isaiah 7:10-15)"],
    "Sorrowful mysteries": [],
    "Glorious mysteries": [ "He will swallow up death in victory; and the Lord GOD will wipe away tears from off all faces; and the rebuke of his people shall he take away from off all the earth: for the LORD hath spoken it. And it shall be said in that day, Lo, this is our God; we have waited for him, and he will save us: this is the LORD; we have waited for him, we will be glad and rejoice in his salvation. (Isaiah 25:8-9)", 
                            "When they therefore were come together, they asked of him, saying, Lord, wilt thou at this time restore again the kingdom to Israel? And he said unto them, It is not for you to know the times or the seasons, which the Father hath put in his own power. But ye shall receive power, after that the Holy Ghost is come upon you: and ye shall be witnesses unto me both in Jerusalem, and in all Judaea, and in Samaria, and unto the uttermost part of the earth. And when he had spoken these things, while they beheld, he was taken up; and a cloud received him out of their sight. And while they looked stedfastly toward heaven as he went up, behold, two men stood by them in white apparel; Which also said, Ye men of Galilee, why stand ye gazing up into heaven? this same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven. (Acts 1:6-11)", 
                            "Wherefore I give you to understand, that no man speaking by the Spirit of God calleth Jesus accursed: and that no man can say that Jesus is the Lord, but by the Holy Ghost. Now there are diversities of gifts, but the same Spirit. And there are differences of administrations, but the same Lord. And there are diversities of operations, but it is the same God which worketh all in all. But the manifestation of the Spirit is given to every man to profit withal. For to one is given by the Spirit the word of wisdom; to another the word of knowledge by the same Spirit; To another faith by the same Spirit; to another the gifts of healing by the same Spirit; To another the working of miracles; to another prophecy; to another discerning of spirits; to another divers kinds of tongues; to another the interpretation of tongues: But all these worketh that one and the selfsame Spirit, dividing to every man severally as he will. For as the body is one, and hath many members, and all the members of that one body, being many, are one body: so also is Christ. For by one Spirit are we all baptized into one body, whether we be Jews or Gentiles, whether we be bond or free; and have been all made to drink into one Spirit. (1 Corinthians 12:3-13)", 
                            "Now there stood by the cross of Jesus his mother, and his mother's sister, Mary the wife of Cleophas, and Mary Magdalene. When Jesus therefore saw his mother, and the disciple standing by, whom he loved, he saith unto his mother, Woman, behold thy son! Then saith he to the disciple, Behold thy mother! And from that hour that disciple took her unto his own home. (John 19:25-27)", 
                            "When they had heard the king, they departed; and, lo, the star, which they saw in the east, went before them, till it came and stood over where the young child was. When they saw the star, they rejoiced with exceeding great joy. And when they were come into the house, they saw the young child with Mary his mother, and fell down, and worshipped him: and when they had opened their treasures, they presented unto him gifts; gold, and frankincense, and myrrh. And being warned of God in a dream that they should not return to Herod, they departed into their own country another way. (Matthew 2:9-12)"],
    "Luminous mysteries": []
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
    "Miraculous Medal Prayer": ["O Maria sine labe concépta,",  "ora pro nobis, qui confúgimus ad te."],
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
                language = "english";
            } else if (radios[i].value == "latin") {
                prayers = prayers_latin
                language = "latin";
            }
        }
    };

    console.log("Starting setting boxes...");

    // Opening prayers

    opening_boxes = ["opening_cross", "opening_creed", "opening_father", "opening_lips", "opening_glory"]
    opening_prayers = ["Sign of the cross", "The Apostle's Creed", "Our Father", "O Lord, Open My Lips", "Glory Be"]

    for (var i=0; i<opening_boxes.length; i++) {

        current_box = document.getElementById(opening_boxes[i])

        console.log(current_box);

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
    };

    // Additional readings

    additional_box = document.getElementById("additional_readings");

    if (additional_box.checked == true) {
        document.getElementById("addition-1").innerHTML = "<b>Additional reading</b><br><br>" + additional_readings[todays_mystery][0];
        document.getElementById("addition-2").innerHTML = "<b>Additional reading</b><br><br>" + additional_readings[todays_mystery][1];
        document.getElementById("addition-3").innerHTML = "<b>Additional reading</b><br><br>" + additional_readings[todays_mystery][2];
        document.getElementById("addition-4").innerHTML = "<b>Additional reading</b><br><br>" + additional_readings[todays_mystery][3];
        document.getElementById("addition-5").innerHTML = "<b>Additional reading</b><br><br>" + additional_readings[todays_mystery][4];
    };

    console.log("Done setting excerpts from scripture");

    // Set Trinitarian "Hail Mary"

    hail_box = document.getElementById("opening_mary");

    if (hail_box.checked == true) {

        if (language == "latin") {
            document.getElementById("mary_1").innerHTML = "<b>Trinitarian Hail Mary</b> <br> <br> Ave Maria, Filia Dei Patris, plena gratia...";
            document.getElementById("mary_2").innerHTML = "Ave Maria, Mater Dei Filii, plena gratia...";
            document.getElementById("mary_3").innerHTML = "Ave Maria, Sponsa Spiritus Sancti, plena gratia...";
        } else if (language == "english") {
            document.getElementById("mary_1").innerHTML = "<b>Trinitarian Hail Mary</b> <br> <br> Hail Mary, Daughter of God the Father, full of grace...";
            document.getElementById("mary_2").innerHTML = "Hail Mary, Mother of God the Son, full of grace...";
            document.getElementById("mary_3").innerHTML = "Hail Mary, Spouse of the Holy Ghost, full of grace...";
        }

    } else {

        if (language == "latin") {for (var i=0; i<3; i++) { document.getElementsByClassName(`mary_` + str(i+1)).innerHTML = "Ave Maria, plena gratia..."; };}
        else if (language == "english") {for (var i=0; i<3; i++) { document.getElementsByClassName(`mary_` + str(i+1)).innerHTML = "Hail Mary, full of grace..."; };}
    }

    

    // Other prayers

    main_boxes = ["prayer_father", "prayer_glory", "prayer_mary", "prayer_fatima", "prayer_sacrament", "prayer_medal", "prayer_dead"];
    main_prayers = ["Our Father", "Glory Be", "Hail Mary", "O my Jesus", "O Sacrament Most Holy", "Miraculous Medal Prayer", "Prayer for the dead"];

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

    // Randomiser

    function getRandomInt(min, max) {
        min = Math.ceil(min);   // round up
        max = Math.floor(max);  // round down
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    console.log("Done setting main prayers");

    // Fill in the images

    let images = {

        "Joyful": [4,2,4,4,2],
        "Glorious": [5,6,4,4,6]

    }

    console.log(todays_mystery);

    console.log(`Images/${todays_mystery.split(" ")[0]}`)

    for (var i=1; i<=5; i++) {
        document.getElementById(`image_${i}`).src = `Images/${todays_mystery.split(" ")[0]}/${i}_${getRandomInt(1, images[todays_mystery.split(" ")[0]][i-1])}.jpg`;
    }
};