exports.history = function (msg) {
    let histList = [
        "benfranklin",
        "crossing",
        "georgestatue",
        "harriet",
        "harrietbeecherstowe",
        "libertytree",
        "magna",
        "samadams",
        "uncletom",
        "undergroundrailroad"
    ];

    let selecthist = histList[Math.floor(Math.random() * histList.length)];

    let message = "";
    if (selecthist === "benfranklin") {
        message = "**Benjamin Franklin** *was an American printer and publisher, author, inventor and scientist, and diplomat. One of the foremost of the Founding Fathers, Franklin helped draft the Declaration of Independence and was one of its signers, represented the United States in France during the American Revolution, and was a delegate to the Constitutional Convention. He made important contributions to science, especially in the understanding of electricity, and is remembered for the wit, wisdom, and elegance of his writing.*"
    } else if (selecthist === "crossing") {
        message = "**Crossing of the Delaware** *occurred on the night of December 25–26, 1776, during the American Revolutionary War, was the first move in a surprise attack organized by George Washington against the Hessian forces in Trenton, New Jersey, on the morning of December 26.*"
    } else if (selecthist === "georgestatue") {
        message = "**Statue of King George III** *On July 9, 1776, the Declaration of Independence was read for the first time in New York in front of George Washington and his troops. In reaction to what had been read, soldiers and citizens went to Bowling Green, a park in Manhattan, where a lead statue of King George III on horseback stood. The mob of people pulled down the statue, and later the lead was melted down to make musket balls, or bullets for use in the war for independence. 42, 088 bullets were made.*"
    } else if (selecthist === "harriet") {
        message = "**Harriet Tubman** *an American abolitionist and political activist. Born into slavery, Tubman escaped and subsequently made some 13 missions to rescue approximately 70 enslaved people, including family and friends, using the network of antislavery activists and safe houses known as the Underground Railroad.*"
    } else if (selecthist === "harrietbeecherstowe") {
        message = "**Harriet Beecher Stowe** *born on June 14, 1811, in Litchfield, Connecticut. Her father, Lyman Beecher, was a leading Congregationalist minister and the patriarch of a family committed to social justice. Stowe achieved national fame for her anti-slavery novel, Uncle Tom’s Cabin, which fanned the flames of sectionalism before the Civil War.*"
    }else if (selecthist === "libertytree") {
        message = "**Liberty Trees** *Trees that were a symbol of protest in pre-revolution America. They became popular when parliament enacted taxes. Colonists would meet by the tree and protest. One practice included hanging posters and other articles on them, as they acted as great bulletin boards.*"
    }else if (selecthist === "magna") {
        message = "**Magna Carta** *a legal document signed by King John of England on June 15, 1215 which stopped taxation without legislative approval and guaranteed a trial or legal process before taking a person's liberty or property.*"
    }else if (selecthist === "samadams") {
        message = "**Samuel Adams** *politician of the American Revolution, leader of the Massachusetts “radicals,” who was a delegate to the Continental Congress (1774–81) and a signer of the Declaration of Independence. He was later lieutenant governor (1789–93) and governor (1794–97) of Massachusetts.*"
    }else if (selecthist === "uncletom") {
        message = "**Uncle Tom’s Cabin**  *tells the story of Uncle Tom, depicted as a saintly, dignified slave. While being transported by boat to auction in New Orleans, Tom saves the life of Little Eva, whose grateful father then purchases Tom. Eva and Tom soon become great friends. Always frail, Eva’s health begins to decline rapidly, and on her deathbed she asks her father to free all his slaves. He makes plans to do so but is then killed, and the brutal Simon Legree, Tom’s new owner, has Tom whipped to death after he refuses to divulge the whereabouts of certain runaway slaves. Tom maintains a steadfastly Christian attitude toward his own suffering, and Stowe imbues Tom’s death with echoes of Christ’s. Published by a white woman in the north, Harriet Beecher Stowe.*"
    }else if (selecthist === "undergroundrailroad") {
        message = "**Underground Railroad** *a network of secret routes and safe houses established in the United States during the early to mid-19 century, and used by enslaved African-Americans to escape into free states and Canada. The scheme was assisted by abolitionists and others sympathetic to the cause of the escapees.*"
    }
    msg.channel.send(message, {
        files: [
            "./assets/history/" + (selecthist) + ".jpg"
        ]
    })
}