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
        "undergroundrailroad",
        "declarationofsentiments",
        "911",
        "911bullhorn",
        "2016",
        "abigail",
        "acts",
        "alexandergrahambell",
        "americanlit",
        "andrewcarnegie",
        "antifederalists",
        "apollo11",
        "arethafranklin",
        "armstrong",
        "ball",
        "barackspeech",
        "battleofgettysburg",
        "berlinwall",
        "betsyross",
        "bigstick",
        "billyyank",
        "blacktuesday",
        "bleeding",
        "bookertwashington",
        "bosstweed",
        "bostonm",
        "brownvboard",
        "burr",
        "captainofindustry",
        "casket",
        "chiefjoseph",
        "cityhill",
        "civilrightsmovement",
        "civilwar",
        "commonsense",
        "compromiseof1850",
        "confederation",
        "cottongin",
        "crucible",
        "dawesact",
        "declarationofindependence",
        "eagle",
        "earheart",
        "eliwhitney",
        "elizabethcadystanton",
        "elvis",
        "farewell",
        "federalists",
        "fifeanddrum",
        "finn",
        "frederickdouglass",
        "freesoil",
        "gage",
        "gatsby",
        "gettysburgaddress",
        "gilded",
        "glaser",
        "grape",
        "greatdepression",
        "hamilton",
        "harlem",
        "harlemrenaissance",
        "harpersweekly",
        "housedivided",
        "houseofburgesses",
        "indianremovalact",
        "jackie",
        "jacobriis",
        "jamestown",
        "janeaddams",
        "jfk",
        "jimhenson",
        "johnbrown",
        "johnmuir",
        "johnnyreb",
        "johnrockefeller",
        "johns",
        "johnsmith",
        "johnsteinbeck",
        "johnwinthrop",
        "jonassalk",
        "josephmccarthy",
        "jpmorgan",
        "kobe",
        "langstonhughes",
        "lbjspeech",
        "leonard",
        "lew",
        "liberty",
        "liztaylor",
        "malcomx",
        "manifestdestiny",
        "marktwain",
        "massachusettsbaycolony",
        "mayflower",
        "mexicanamericanwar",
        "michelle",
        "missouricompromise",
        "mlk",
        "monroedoc",
        "muckrakers",
        "muhammad",
        "newdeal",
        "olive",
        "oprah",
        "oregon",
        "papers",
        "paulrevere",
        "pearl",
        "phelps",
        "pilgrims",
        "pocahauntos",
        "presidents",
        "progressiveera",
        "purchase",
        "puritans",
        "purple",
        "raisin",
        "rbg",
        "redlining",
        "redscare",
        "roaring20s",
        "robberbarrons",
        "rosaparks",
        "rosie",
        "rubybridges",
        "selma",
        "serena",
        "shay",
        "shuttle",
        "sonia",
        "sons",
        "spoilssystem",
        "squanto",
        "stepdown",
        "stonewall",
        "susanbanthony",
        "taxation",
        "teaparty",
        "tent",
        "theeraofgoodfeelings",
        "thejungle",
        "thomasedison",
        "tom",
        "tories",
        "trailoftears",
        "transcontinentalrailroad",
        "tread",
        "treatyofparis",
        "unclesam",
        "undergroundrailroad",
        "vietnamwarmemorial",
        "waltdisney",
        "warof1812",
        "webdubois",
        "whoopi",
        "willrodgers",
        "ww2kiss",
        "years",
        "yellowjournalism",
        "johnmccain",
        "meghan",
        "ellen",
        "bird",
        "451",
        "thunder",
        "valley",
        "hippie",
        "resist",


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
    }else if (selecthist === "declarationofsentiments") {
        message = "**Declaration of sentiments** *a document, outlining the rights that American women should be entitled to as citizens, that emerged from the Seneca Falls Convention in New York in July 1848. It was written primarily by Elizabeth Candy Stanton*"
    }else if (selecthist === "spoilssystem") {
        message = "**Spoils system** *also called patronage system, practice in which the political party winning an election rewards its campaign workers and other active supporters by appointment to government posts and by other favours.*"
    }else if (selecthist === "indianremovalact") {
        message = "**Indian removal act** *signed into law on May 28, 1830, by United States President Andrew Jackson. The law authorized the president to negotiate with southern Native American tribes for their removal to federal territory west of the Mississippi River in exchange for white settlement of their ancestral lands.*"
    }else if (selecthist === "trailoftears") {
        message = "**Trail of tears** *A series of forced relocations of approximately 60,000 Native Americans in the United States from their ancestral homelands in the Southeastern United States, to areas to the west of the Mississippi River that had been designated as Indian Territory.*"
    }else if (selecthist === "civilrightsmovement") {
        message = "**Civil rights movement** *An organized effort by black Americans to end racial discrimination and gain equal rights under the law. It began in the late 1940s and ended in the late 1960s.*"
    }else if (selecthist === "battleofgettysburg") {
        message = "**Battle of Gettysburg** *A major engagement in the American Civil War, fought southwest of Harrisburg, Pennsylvania, that was a crushing Southern defeat. It is generally regarded as the turning point of the war.*"
    }else if (selecthist === "civilwar") {
        message = "**Civil War** *four-year war (1861–65) between the United States and 11 Southern states that seceded from the Union and formed the Confederate States of America. It primarily was a result of the long-standing controversy over the enslavement of black people.*"
    }else if (selecthist === "gettysburgaddress") {
        message = "**Gettysburg Address** *Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. \nNow we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this. \nBut, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth. \nAbraham Lincoln \nNovember 19, 1863*"
    }else if (selecthist === "muckrakers") {
        message = "**Muckrakers** *reform-minded journalists in the Progressive Era in the United States (1890s–1920s) who exposed established institutions and leaders as corrupt.*"
    }else if (selecthist === "progressiveera") {
        message = "**Progressive era** *a period of widespread social activism and political reform across the United States that spanned the 1890s to the 1920s. The main objectives of the Progressive movement were addressing problems caused by industrialization, urbanization, immigration, and political corruption.*"
    }else if (selecthist === "johnmuir") {
        message = "**John Muir** *also known as John of the Mountains and Father of the National Parks, was an influential Scottish-American naturalist, author, environmental philosopher, glaciologist, and early advocate for the preservation of wilderness in the United States of America.*"
    }else if (selecthist === "thejungle") {
        message = "**The Jungle** *a 1906 novel by the American journalist and novelist Upton Sinclair. Sinclair wrote the novel to portray the harsh conditions and exploited lives of immigrants in the United States in Chicago and similar industrialized cities.*"
    }else if (selecthist === "jacobriis") {
        message = "**Jacob A Riis** *a Danish-American social reformer, muckraking journalist and social documentary photographer. He contributed significantly to the cause of urban reform in America at the turn of the twentieth century.*"
    }else if (selecthist === "mlk") {
        message = "**Martin Luther King Jr** *A Baptist minister and social activist who led the civil rights movement in the United States from the mid-1950s until his death by assassination in 1968. His leadership was fundamental to that movement’s success in ending the legal segregation of African Americans in the South and other parts of the United States. King rose to national prominence as head of the Southern Christian Leadership Conference, which promoted nonviolent tactics, such as the massive March on Washington (1963), to achieve civil rights. He was awarded the Nobel Peace Prize in 1964.*"
    }else if (selecthist === "rosaparks") {
        message = "**Rosa Parks** *a civil rights activist who refused to surrender her seat to a white passenger on a segregated bus in Montgomery, Alabama. Her defiance sparked the Montgomery Bus Boycott. Its success launched nationwide efforts to end racial segregation of public facilities.*"
    }else if (selecthist === "malcomx") {
        message = "**Malcolm X** *African American leader and prominent figure in the Nation of Islam who articulated concepts of race pride and black nationalism in the early 1960s.*"
    }else if (selecthist === "elizabethcadystanton") {
        message = "**Elizabeth Cady Stanton** *an abolitionist and leading figure of the early women's movement. An eloquent writer, her Declaration of Sentiments was a revolutionary call for women's rights across a variety of spectrums. Stanton was the president of the National Woman Suffrage Association for 20 years and worked closely with Susan B. Anthony.*"
    }else if (selecthist === "susanbanthony") {
        message = "**Susan B Anthony** *an American writer, lecturer and abolitionist who was a leading figure in the women's voting rights movement. Raised in a Quaker household, Anthony went on to work as a teacher. She later partnered with Elizabeth Cady Stanton and would eventually lead the National American Woman Suffrage Association.*"
    }else if (selecthist === "robberbarrons") {
        message = "**Robber Barons** *a derogatory metaphor of social criticism originally applied to certain late 19th-century American businessmen who were accused of using unscrupulous methods to get rich, or expand their wealth.*"
    }else if (selecthist === "captainofindustry") {
        message = "**Captain of Industry** *In the late 19th century a captain of industry was a business leader whose means of amassing a personal fortune contributed positively to the country in some way. This may have been through increased productivity, expansion of markets, providing more jobs, or acts of philanthropy.*"
    }else if (selecthist === "bosstweed") {
        message = "**Boss Tweed** *an American politician most notable for being the boss of Tammany Hall, the Democratic Party political machine that played a major role in the politics of 19th century New York City and State.*"
    }else if (selecthist === "yellowjournalism") {
        message = "**Yellow Journalism** *journalism and associated newspapers that present little or no legitimate well-researched news while instead using eye-catching headlines for increased sales. Techniques may include exaggerations of news events, scandal-mongering, or sensationalism.*"
    }else if (selecthist === "dawesact") {
        message = "**Dawes Act** *U.S. law providing for the distribution of Indian reservation land among individual Native Americans, with the aim of creating responsible farmers in the white man’s image.*"
    }else if (selecthist === "transcontinentalrailroad") {
        message = "**Transcontinental Railroad** * a 1,912-mile continuous railroad line constructed between 1863 and 1869 that connected the existing eastern U.S. rail network at Council Bluffs, Iowa with the Pacific coast at the Oakland Long Wharf on San Francisco Bay.*"
    }else if (selecthist === "manifestdestiny") {
        message = "**Manifest Destiny** *a widely held belief in the 19th-century United States that its settlers were destined to expand across North America.*"
    }else if (selecthist === "alexandergrahambell") {
        message = "**Alexander Graham Bell** *a Scottish-born American inventor, scientist, and engineer who is credited with inventing and patenting the first practical telephone. He also co-founded the American Telephone and Telegraph Company in 1885.*"
    }else if (selecthist === "squanto") {
        message = "**Squanto** *a member of the Patuxet tribe best known for being an early liaison between the Indian population in Southern New England and the Mayflower Pilgrims who made their settlement at the site of Squanto's former summer village.*"
    }else if (selecthist === "pilgrims") {
        message = "**Pilgrims** *in American colonial history, settlers of Plymouth, Massachusetts, the first permanent colony in New England (1620). Of the 102 colonists, 35 were members of the English Separatist Church (a radical faction of Puritanism) who had earlier fled to Leiden, the Netherlands, to escape persecution at home. Seeking a more abundant life along with religious freedom, the Separatists negotiated with a London stock company to finance a pilgrimage to America. Approximately two-thirds of those making the trip aboard the Mayflower were non-Separatists, hired to protect the company’s interests; these included John Alden and Myles Standish.*"
    }else if (selecthist === "mayflower") {
        message = "**The Mayflower** *an English ship that transported the first English Puritans, known today as the Pilgrims, from Plymouth, England to the New World in 1620. There were 102 passengers, and the crew is estimated to have been about 30, but the exact number is unknown.*"
    }else if (selecthist === "bigstick") {
        message = "**Big Stick ideology** *refers to President Theodore Roosevelt’s foreign policy: speak softly and carry a big stick; you will go far.*"
    }else if (selecthist === "frederickdouglass") {
        message = "**Frederick Douglass** *an American social reformer, abolitionist, orator, writer, and statesman. After escaping from slavery in Maryland, he became a national leader of the abolitionist movement in Massachusetts and New York, gaining note for his oratory and incisive antislavery writings.*"
    }else if (selecthist === "911") {
        message = "**9/11** *a series of four coordinated terrorist attacks by the Islamic terrorist group al-Qaeda against the United States on the morning of Tuesday, September 11, 2001.*"
    }else if (selecthist === "puritans") {
        message = "**Puritans** *English Protestants in the 16th and 17th centuries, who sought to purify the Church of England of Roman Catholic practices, maintaining that the Church of England had not been fully reformed and needed to become more protestant.*"
    }else if (selecthist === "houseofburgesses") {
        message = "**House of Burgesses** *representative assembly in colonial Virginia, which was an outgrowth of the first elective governing body in a British overseas possession, the General Assembly of Virginia. The General Assembly was established by Gov. George Yeardley at Jamestown on July 30, 1619. It included the governor himself and a council—all appointed by the colonial proprietor (the Virginia Company)—along with two elected burgesses (delegates) from each of the colony’s 11 settlements. The assembly met in Jamestown until 1700, when meetings were moved to Williamsburg, the newly established capital of colonial Virginia.*"
    }else if (selecthist === "presidents") {
        message = "Our presidency is no longer just an idea, it is an idea with a proud history. Ladies and gentlemen, **the presidents of The United States of America** \n*George Washington, John Adams, Thomas Jefferson, James Madison, James Monroe, John Quincy Adams, Andrew Jackson, Martin Van Buren, William Henry Harrison, John Tyler, James K. Polk, Zachary Taylor, Millard Fillmore, Franklin Pierce, James Buchanan, Abraham Lincoln, Andrew Johnson, Ulysses S. Grant, Rutherford B. Hayes, James Garfield, Chester A. Arthur, Grover Cleveland, Benjamin Harrison, Grover Cleveland, William McKinley, Theodore Roosevelt, William Howard Taft, Woodrow Wilson, Warren G. Harding, Calvin Coolidge, Herbert Hoover, Franklin D. Roosevelt, Harry S. Truman, Dwight D. Eisenhower, John F. Kennedy, Lyndon B. Johnson, Richard M. Nixon, Gerald R. Ford, Jimmy Carter, Ronald Reagan, George H. W. Bush, Bill Clinton, George W. Bush, Barack Obama, Donald J. Trump*."
    }else if (selecthist === "jamestown") {
        message = "**Jamestown** *the first permanent English settlement in North America.*"
    }else if (selecthist === "johnsmith") {
        message = "**John Smith** *an English soldier, explorer, colonial governor, Admiral of New England, and author. He played an important role in the establishment of the colony at Jamestown, Virginia, the first permanent English settlement in America in the early 17th century.*"
    }else if (selecthist === "pocahauntos") {
        message = "**Pocahauntos** *a Native American woman notable for her association with the colonial settlement at Jamestown, Virginia. She was the daughter of Powhatan, the paramount chief of a network of tributary tribes in the Tsenacommacah, encompassing the Tidewater region of Virginia.*"
    }else if (selecthist === "massachusettsbaycolony") {
        message = "**Massachusetts Bay Colony** *an English settlement on the east coast of America in the 17th century around the Massachusetts Bay, the northernmost of the several colonies later reorganized as the Province of Massachusetts Bay.*"
    }else if (selecthist === "johnwinthrop") {
        message = "**John Winthrop** *an English Puritan lawyer and one of the leading figures in founding the Massachusetts Bay Colony, the second major settlement in New England following Plymouth Colony. Winthrop led the first large wave of immigrants from England in 1630 and served as governor for 12 of the colony's first 20 years.*"
    }else if (selecthist === "cityhill") {
        message = "*A City On A Hill** *John Winthrop delivered the following sermon before he and his fellow settlers reached New England. The sermon is famous largely for its use of the phrase “a city on a hill,” used to describe the expectation that the Massachusetts Bay colony would shine like an example to the world. But Winthrop’s sermon also reveals how he expected Massachusetts to differ from the rest of the world.*"
    }else if (selecthist === "eliwhitney") {
        message = "**Eli Whitney** * an American inventor best known for inventing the cotton gin. This was one of the key inventions of the Industrial Revolution and shaped the economy of the Antebellum South.*"
    }else if (selecthist === "cottongin") {
        message = "**Cotton Gin** *a machine that quickly and easily separates cotton fibers from their seeds, enabling much greater productivity than manual cotton separation.*"
    }else if (selecthist === "farewell") {
        message = "**Washington’s Farewell Address** *President George Washington decided not to seek reelection for a third term and began drafting this farewell address to the American people. The address went through numerous drafts, in large part due to suggestions made by Alexander Hamilton. In the 32-page handwritten address, Washington urged Americans to avoid excessive political party spirit and geographical distinctions. In foreign affairs, he warned against long-term alliances with other nations.*"
    }else if (selecthist === "greatdepression") {
        message = "**The Great Depression** *a severe worldwide economic depression that took place mostly during the 1930s, beginning in the United States. The timing of the Great Depression varied across nations; in most countries, it started in 1929 and lasted until the late 1930s.*"
    }else if (selecthist === "roaring20s") {
        message = "**The Roaring 20’s** *refers to the decade of the 1920s in Western society and Western culture. It was a period of economic prosperity with a distinctive cultural edge in the United States and Europe, particularly in major cities such as Berlin, Chicago, London, Los Angeles, New York City, Paris, and Sydney.*"
    }else if (selecthist === "redlining") {
        message = "**Red Lining** *the systematic denial of various services to residents of specific, often racially associated, neighborhoods or communities, either directly or through the selective raising of prices.*"
    }else if (selecthist === "raisin") {
        message = "**A Raisin in the sun** *A drama in three acts by Lorraine Hansberry, first published and produced in 1959. The play’s title is taken from “Harlem,” a poem by Langston Hughes, which examines the question “What happens to a dream deferred?/Does it dry up/like a raisin in the sun?” This penetrating psychological study of a working-class black family on the south side of Chicago in the late 1940s reflected Hansberry’s own experiences of racial harassment after her prosperous family moved into a white neighbourhood.*"
    }else if (selecthist === "stepdown") {
        message = "**Washington Steps Down** *On December 23, 1783, following the signing of the Treaty of Paris, General George Washington resigns as commander in chief of the Continental Army and retires to his home at Mount Vernon, Virginia. Political factions wanted Washington to become the new nation's king.*"
    }else if (selecthist === "newdeal") {
        message = "**New Deal** *a series of programs, public work projects, financial reforms, and regulations enacted by President Franklin D. Roosevelt in the United States between 1933 and 1939. It responded to needs for relief, reform, and recovery from the Great Depression.*"
    }else if (selecthist === "blacktuesday") {
        message = "**Black Tuesday** *The Wall Street Crash of 1929, also known as the Great Crash, was a major stock market crash that occurred in 1929. It started in September and ended late in October, when share prices on the New York Stock Exchange collapsed.*"
    }else if (selecthist === "andrewcarnegie") {
        message = "**Andrew Carnegie** *a Scottish-American industrialist, and philanthropist. Carnegie led the expansion of the American steel industry in the late 19th century and became one of the richest Americans in history. He became a leading philanthropist in the United States and in the British Empire.*"
    }else if (selecthist === "johnrockefellar") {
        message = "**John D Rokefellar** *an American business magnate and philanthropist. He is widely considered the wealthiest American of all time, and the richest person in modern history. Rockefeller was born into a large family in upstate New York that moved several times before eventually settling in Cleveland, Ohio.*"
    }else if (selecthist === "monroedoc") {
        message = "**Monroe Doctrine** *the best known U.S. policy toward the Western Hemisphere. Buried in a routine annual message delivered to Congress by President James Monroe in December 1823, the doctrine warns European nations that the United States would not tolerate further colonization or puppet monarchs. The doctrine was conceived to meet major concerns of the moment, but it soon became a watchword of U.S. policy in the Western Hemisphere.*"
    }else if (selecthist === "janeaddams") {
        message = "**Jane Addams** *co-founded one of the first settlements in the United States, the Hull House in Chicago, Illinois, in 1889, and was named a co-winner of the 1931 Nobel Peace Prize. Addams also served as the first female president of the National Conference of Social Work, established the National Federation of Settlements and served as president of the Women's International League for Peace and Freedom.*"
    }else if (selecthist === "bookertwashington") {
        message = "**Booker T. Washington** *an American educator, author, orator, and adviser to multiple presidents of the United States. Between 1890 and 1915, Washington was the dominant leader in the African American community and of the contemporary black elite. He opposed W.E.B. Dubois, saying African Americans should seek vocational practices and was less supportive of the Civil Rights Movement.*"
    }else if (selecthist === "webdubois") {
        message = "**W.E.B. Dubois** *The first African American to earn a Ph.D. from Harvard University, and founder of the NAACP.*"
    }else if (selecthist === "commonsense") {
        message = "**Common Sense** *a pamphlet written by Thomas Paine advocating independence from Great Britain to people in the Thirteen Colonies. Writing in clear and persuasive prose, Paine marshaled moral and political arguments to encourage common people in the Colonies to fight for egalitarian government.*"
    }else if (selecthist === "johnsteinbeck") {
        message = "**John Steinbeck** *a Nobel and Pulitzer Prize-winning American novelist and the author of Of Mice and Men, The Grapes of Wrath and East of Eden.*"
    }else if (selecthist === "betsyross") {
        message = "**Betsy Ross** *an American upholsterer who was credited by her relatives in 1870 with making the first American flag, accordingly known as the Betsy Ross flag.*"
    }else if (selecthist === "langstonhughes") {
        message = "**Langston Hughes** *an American poet, social activist, novelist, playwright, and columnist from Joplin, Missouri. He moved to New York City as a young man, where he made his career.*"
    }else if (selecthist === "harlemrenaissance") {
        message = "**Harlem Renaissance** *an intellectual, social, and artistic explosion centered in Harlem, Manhattan, New York City, spanning the 1920s. At the time, it was known as the New Negro Movement, named after The New Negro, a 1925 anthology edited by Alain Locke.*"
    }else if (selecthist === "harlem") {
        message = "**Harlem (Poem)** *What happens to a dream deferred? Does it dry up like a raisin in the sun? Or fester like a sore— And then run? Does it stink like rotten meat? Or crust and sugar over— like a syrupy sweet? Maybe it just sags like a heavy load. Or does it explode?*"
    }else if (selecthist === "marktwain") {
        message = "**Mark Twain** *Samuel Langhorne Clemens, known by his pen name Mark Twain, was an American writer, humorist, entrepreneur, publisher, and lecturer. He was lauded as the greatest humorist this country has produced, and William Faulkner called him the father of American literature.*"
    }else if (selecthist === "willrodgers") {
        message = "**Will Rogers** *an American stage and film actor, vaudeville performer, cowboy, humorist, newspaper columnist, and social commentator from Oklahoma. He was a Cherokee citizen born in the Cherokee Nation, Indian Territory.*"
    }else if (selecthist === "rosie") {
        message = "**Rosie the Riveter** *a cultural icon of World War II, representing the women who worked in factories and shipyards during World War II, many of whom produced munitions and war supplies. These women sometimes took entirely new jobs replacing the male workers who joined the military.*"
    }else if (selecthist === "chiefjoseph") {
        message = "**Chief Joseph** *a leader of the Wal-lam-wat-kain band of Nez Perce, a Native American tribe of the interior Pacific Northwest region of the United States, in the latter half of the 19th century.*"
    }else if (selecthist === "billyyank") {
        message = "**Billy Yank** * the personification of the Northern states of the United States, or less generally, the Union during the American Civil War. The latter part of his name is derived from yankee, a slang term for New Englanders.*"
    }else if (selecthist === "johnnyreb") {
        message = "**Johnny Reb** *the national personification of the common soldier of the Confederacy.*"
    }else if (selecthist === "fifeanddrum") {
        message = "**Fife and Drum** *With the onset of war in 1775, Virginia began to train an army to defend against a British invasion. Fifers and Drummers were an important part of the 18th-century military. Just as Virginia enlisted soldiers and stockpiled arms and ammunition, it also trained fifers and drummers to work with soldiers in the field. In the 18th century, fifers and drummers tended to be boys ages 10 to 18. Today, in modern Williamsburg, members of the Fifes and Drums are boys and girls ages 10 to 18.*"
    }else if (selecthist === "thomasedison") {
        message = "**Thomas Edison** *an American inventor and businessman who has been described as America's greatest inventor. He developed many devices in fields such as electric power generation, mass communication, sound recording, and motion pictures.*"
    }else if (selecthist === "bostonm") {
        message = "**Boston Massacre** *a confrontation on March 5, 1770 in which British soldiers shot and killed several people while being harassed by a mob in Boston. The event was heavily publicized by leading Patriots such as Paul Revere and Samuel Adams.*"
    }else if (selecthist === "teaparty") {
        message = "**Boston Tea Party** *a political protest that occurred on December 16, 1773, at Griffin’s Wharf in Boston, Massachusetts. American colonists, frustrated and angry at Britain for imposing “taxation without representation,” dumped 342 chests of tea, imported by the British East India Company into the harbor. The event was the first major act of defiance to British rule over the colonists. It showed Great Britain that Americans wouldn’t take taxation and tyranny sitting down, and rallied American patriots across the 13 colonies to fight for independence.*"
    }else if (selecthist === "olive") {
        message = "**Olive Branch Petition** *a final attempt by the colonists to avoid going to war with Britain during the American Revolution. It was a document in which the colonists pledged their loyalty to the crown and asserted their rights as British citizens. The Olive Branch Petition was adopted by Congress on July 5, 1775.*"
    }else if (selecthist === "declarationofindependence") {
        message = "**Declaration of Independence** *the first formal statement by a nation’s people asserting their right to choose their own government.*"
    }else if (selecthist === "confederation") {
        message = "**Articles of Confederation** *an agreement among the 13 original states of the United States of America that served as its first constitution. It was approved, after much debate, by the Second Continental Congress on November 15, 1777, and sent to the states for ratification.*"
    }else if (selecthist === "treatyofparis") {
        message = "**Treaty of Paris 1783** *signed in Paris by representatives of King George III of Great Britain and representatives of the United States of America on September 3, 1783, ended the American Revolutionary War.*"
    }else if (selecthist === "abigail") {
        message = "**Abigail Adams** *Wife of John Adams who served as an unofficial adviser and their letters show him seeking her counsel on many issues, including his presidential aspirations.*"
    }else if (selecthist === "gage") { 
        message = "**Britain's General Gage’s secret plan** *During the wee hours of April 19, 1775, he would send out regiments of British soldiers quartered in Boston. Their destinations were LEXINGTON, where they would capture Colonial leaders Sam Adams and John Hancock, then CONCORD, where they would seize gunpowder. But spies and friends of the Americans leaked word of Gage's plan. Two lanterns hanging from Boston's North Church informed the countryside that the British were going to attack by sea. A series of horseback riders — men such as Paul Revere, WILLIAM DAWES and DR. SAMUEL PRESCOTT — galloped off to warn the countryside that the REGULARS (British troops) were coming.*"
    }else if (selecthist === "paulrevere") {
        message = "**Paul Revere** *a silversmith and ardent colonialist. He took part in the Boston Tea Party and was principal rider for Boston's Committee of Safety. In that role, he devised a system of lanterns to warn the minutemen of a British invasion, setting up his famous ride on April 18, 1775.*"
    }else if (selecthist === "federalists") {
        message = "**Federalists** *early U.S. national political party that advocated a strong central government and held power from 1789 to 1801, during the rise of the country’s political party system.*"
    }else if (selecthist === "papers") {
        message = "**Federalist Papers**  *Alexander Hamilton, John Jay, and James Madison wrote a series of 85 essays that appeared in various New York newspapers attributed to the pseudonym “Publius.” Formally The Federalist, as the combined essays are called, were written to combat Anti-Federalism and to persuade the public of the necessity of the Constitution.The Federalist papers stressed the need for an adequate central government and argued that the republican form of government easily could be adapted to the large expanse of territory and widely divergent interests found in the United States. The essays were immediately recognized as the most powerful defense of the new Constitution.*"
    }else if (selecthist === "antifederalists") {
        message = "**Anti-Federalists** *a group of Americans who objected to the creation of a stronger U.S. federal government and opposed final ratification of the U.S. Constitution as approved by the Constitutional Convention in 1787*"
    }else if (selecthist === "hamilton") {
        message = "**Alexander Hamilton** *born in the British West Indies, and later became General George Washington's assistant. In 1788, as one of America's Founding Fathers, he convinced New Yorkers to agree to ratify the U.S Constitution. Hamilton - an avowed Federalist - then served as the nation's first secretary of the treasury, from 1789 to 1795.*"
    }else if (selecthist === "burr") {
        message = "**Aaron Burr** *was elected to the U.S. Senate in 1791. In 1800, he ran unsuccessfully for the U.S. presidency, and became vice president instead. During a duel in 1804, Burr killed Alexander Hamilton. In 1807, he was charged with conspiracy, which ruined his political career. In 1812, he rebuilt his law practice.*"
    }else if (selecthist === "warof1812") {
        message = "**War of 1812** *The United States took on the greatest naval power in the world, Great Britain, in a conflict that would have an immense impact on the young country’s future. Causes of the war included British attempts to restrict U.S. trade, the Royal Navy’s impressment of American seamen and America’s desire to expand its territory. The United States suffered many costly defeats at the hands of British, Canadian and Native American troops over the course of the War of 1812, including the capture and burning of the nation’s capital, Washington, D.C., in August 1814. Nonetheless, American troops were able to repulse British invasions in New York, Baltimore and New Orleans, boosting national confidence and fostering a new spirit of patriotism. The ratification of the Treaty of Ghent on February 17, 1815, ended the war but left many of the most contentious questions unresolved.*"
    }else if (selecthist === "eraofgoodfeelings") {
        message = "**The Era of Good Feelings** *A period in the political history of the United States during President Monroe's administration that reflected a sense of national purpose and a desire for unity among Americans in the aftermath of the Napoleonic Wars and War of 1812.*"
    }else if (selecthist === "missouricompromise") {
        message = "**Missouri Compromise** *the legislation that provided for the admission of Maine to the United States as a free state along with Missouri as a slave state, thus maintaining the balance of power between North and South in the United States Senate.*"
    }else if (selecthist === "compromiseof1850") {
        message = "**Compromise of 1850** *a package of five separate bills passed by the United States Congress in September 1850 that defused a political confrontation between slave and free states on the status of territories acquired in the Mexican–American War.*"
    }else if (selecthist === "housedivided") {
        message = "**Lincoln’s “A House Divided” Speech** *A house divided against itself cannot stand. I believe this government cannot endure, permanently half slave and half free. I do not expect the Union to be dissolved -- I do not expect the house to fall -- but I do expect it will cease to be divided. It will become all one thing or all the other.*"
    }else if (selecthist === "jpmorgan") {
        message = "**JP Morgan** *financed railroads and helped organize U.S. Steel, General Electric and other major corporations.*"
    }else if (selecthist === "rubybridges") {
        message = "**Ruby Bridges** *an American civil rights activist. She was the first African-American child to desegregate the all-white William Frantz Elementary School in Louisiana during the New Orleans school desegregation crisis on 14 November 1960.*"
    }else if (selecthist === "brownvboard") {
        message = "**Brown v. Board of Education** *a landmark decision of the U.S. Supreme Court in which the Court ruled that U.S. state laws establishing racial segregation in public schools are unconstitutional, even if the segregated schools are otherwise equal in quality.*"
    }else if (selecthist === "gatsby") {
        message = "**The Great Gatsby** *is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922.*"
    }else if (selecthist === "crucible") {
        message = "**The Crucible** *a 1953 play by American playwright Arthur Miller. It is a dramatized and partially fictionalized story of the Salem witch trials that took place in the Massachusetts Bay Colony during 1692–93.*"
    }else if (selecthist === "josephmccarthy") {
        message = "**Senator Joseph McCarthy** *spent almost five years trying in vain to expose communists and other left-wing “loyalty risks” in the U.S. government. In the hyper-suspicious atmosphere of the Cold War, insinuations of disloyalty were enough to convince many Americans that their government was packed with traitors and spies. McCarthy’s accusations were so intimidating that few people dared to speak out against him. It was not until he attacked the Army in 1954 that his actions earned him the censure of the U.S. Senate.*"
    }else if (selecthist === "jfk") {
        message = "**JFK Inauguration** *...And so, my fellow Americans: ask not what your country can do for you--ask what you can do for your country. My fellow citizens of the world: ask not what America will do for you, but what together we can do for the freedom of man...*"
    }else if (selecthist === "911bullhorn") {
        message = "**George W. Bush Bullhorn Address to Ground Zero Rescue Workers**  *...I can hear you, The rest of the world hears you...*"
    }else if (selecthist === "barackspeech") {
        message = "**A Quote from Barack Obama** *loving this country requires the willingness to speak out for what is right, to shake up the status quo.  That’s America.*"
    }else if (selecthist === "lbjspeech") {
        message = "**A Quote from Lyndon B Johnson** *...it's all of us, who must overcome the crippling legacy of bigotry and injustice. And we shall overcome.*"
    }else if (selecthist === "bleeding") {
        message = "**Bleeding Kansas** *a series of violent civil confrontations in the United States between 1854 and 1861 which emerged from a political and ideological debate over the legality of slavery in the proposed state of Kansas.*"
    }else if (selecthist === "johnbrown") {
        message = "**John Brown’s Raid on Harper Ferry** *an 1859 effort by abolitionist John Brown to initiate an armed slave revolt in Southern states by taking over a United States arsenal at Harpers Ferry, Virginia. It has been called the dress rehearsal for the Civil War.*"
    }else if (selecthist === "mexicanamericanwar") {
        message = "**Mexican American War** *marked the first U.S. armed conflict chiefly fought on foreign soil. It pitted a politically divided and militarily unprepared Mexico against the expansionist-minded administration of U.S. President James K. Polk, who believed the United States had a “manifest destiny” to spread across the continent to the Pacific Ocean. A border skirmish along the Rio Grande started off the fighting and was followed by a series of U.S. victories. When the dust cleared, Mexico had lost about one-third of its territory, including nearly all of present-day California, Utah, Nevada, Arizona and New Mexico.*"
    }else if (selecthist === "harpersweekly") {
        message = "**Harper’s Weekly** *A Journal of Civilization was an American political magazine based in New York City. Published by Harper & Brothers from 1857 until 1916, it featured foreign and domestic news, fiction, essays on many subjects, and humor, alongside illustrations.*"
    }else if (selecthist === "stonewall") {
        message = "**Stonewall Rebellion** *a series of spontaneous, violent demonstrations by members of the gay community against a police raid that began in the early morning hours of June 28, 1969, at the Stonewall Inn in the Greenwich Village neighborhood of Manhattan, New York City.*"
    }else if (selecthist === "waltdisney") {
        message = "**Walt Disney** *an American entrepreneur, animator, voice actor and film producer. A pioneer of the American animation industry, he introduced several developments in the production of cartoons.*"
    }else if (selecthist === "shay") {
        message = "**Shay’s Rebellion** *an armed uprising in Western Massachusetts in opposition to a debt crisis among the citizenry and the state government's increased efforts to collect taxes both on individuals and their trades; the fight took place mostly in and around Springfield during 1786 and 1787*"
    }else if (selecthist === "purchase") {
        message = "**Louisiana Purchase** *the acquisition of the territory of Louisiana by the United States from France in 1803. In return for fifteen million dollars, or approximately eighteen dollars per square mile, the United States nominally acquired a total of 828,000 sq mi.*"
    }else if (selecthist === "liberty") {
        message = "**Statue of Liberty** *a gift of friendship from the people of France to the United States and is recognized as a universal symbol of freedom and democracy. The Statue of Liberty was dedicated on October 28, 1886.  It was designated as a National Monument in 1924.*"
    }else if (selecthist === "unclesam") {
        message = "**Uncle Sam** *a common national personification of the U.S. federal government or the country in general that, according to legend, came into use during the War of 1812.*"
    }else if (selecthist === "taxation") {
        message = "**No taxation without representation** *a famous saying used my the Americans protesting the unfair taxing of products by the British.*"
    }else if (selecthist === "sons") {
        message = "**Sons of Liberty** *a secret revolutionary organization that was created in the Thirteen American Colonies to advance the rights of the European colonists and to fight taxation by the British government. It played a major role in most colonies in battling the Stamp Act in 1765.*"
    }else if (selecthist === "americanlit") {
        message = "**American Literature as a whole** *What sets American literature apart from all other kinds of literature? American Literature was the first type of “Protest Writing.” Free speech makes American literature truthful and real, which sets it apart from its counterparts.*"
    }else if (selecthist === "freesoil") {
        message = "**Free Soil Party** *a short-lived political party in the United States active from 1848 to 1854, when it merged into the Republican Party. The party was largely focused on the single issue of opposing the expansion of slavery into the western territories of the United States.*"
    }else if (selecthist === "tories") {
        message = "**Tories** *members of two political parties which existed sequentially in the Kingdom of England, the Kingdom of Great Britain and later the United Kingdom of Great Britain and Ireland from the 17th to the early 19th centuries.*"
    }else if (selecthist === "tent") {
        message = "**Washington’s Tent** *General George Washington used a pair of campaign tents throughout much of the American Revolutionary War. In warm weather, he used one for dining with his officers and aides, and the other as his military office and sleeping quarters.*"
    }else if (selecthist === "redscare") {
        message = "**Red Scare** *the promotion of a widespread fear of a potential rise of communism or anarchism by a society or state. The name refers to the red flags that the communists used.*"
    }else if (selecthist === "gildedage") {
        message = "**Gilded Age** *an era of rapid economic growth, especially in the Northern United States and the Western United States.*"
    }else if (selecthist === "finn") {
        message = "**The Adventures of Huckleberry Finn** *Mark Twain's 1885 novel condemning the institutionalized racism of the pre-Civil War South is among the most celebrated works of American fiction. Twain's story of a runaway boy and an escaped slave's travels on the Mississippi plumbs the essential meaning of freedom.*"
    }else if (selecthist === "tom") {
        message = "**The Adventures Of Tom Sawyer** *an 1876 novel about a young boy growing up along the Mississippi River. It is set in the 1840s in the fictional town of St. Petersburg, inspired by Hannibal, Missouri, where Twain lived as a boy.*"
    }else if (selecthist === "rbg") {
        message = "**Ruth Bader Ginsberg** *an American lawyer and jurist who is an Associate Justice of the U.S. Supreme Court. Ginsburg was appointed by President Bill Clinton and took the oath of office on August 10, 1993. She is the second female justice of four to be confirmed to the court.*"
    }else if (selecthist === "sonia") {
        message = "**Sonia Sotomayor** *an American lawyer and jurist who serves as an Associate Justice of the Supreme Court of the United States. She was appointed by President Barack Obama in May 2009 and confirmed that in August. She was the first Hispanic and Latina Justice.*"
    }else if (selecthist === "berlinwall") {
        message = "**Tear Down This Wall** * Behind me stands a wall that encircles the free sectors of this city, part of a vast system of barriers that divides the entire continent of Europe. . . . Standing before the Brandenburg Gate, every man is a German, separated from his fellow men. Every man is a Berliner, forced to look upon a scar. . . . As long as this gate is closed, as long as this scar of a wall is permitted to stand, it is not the German question alone that remains open, but the question of freedom for all mankind. . . . \nGeneral Secretary Gorbachev, if you seek peace, if you seek prosperity for the Soviet Union and Eastern Europe, if you seek liberalization, come here to this gate. \nMr. Gorbachev, open this gate! \nMr. Gorbachev, tear down this wall!*"
    }else if (selecthist === "oregon") {
        message = "**Oregon Trail** *a roughly 2,000-mile route from Independence, Missouri, to Oregon City, Oregon, which was used by hundreds of thousands of American pioneers in the mid-1800s to emigrate west. The trail was arduous and snaked through Missouri and present-day Kansas, Nebraska, Wyoming, Idaho and finally into Oregon.*"
    }else if (selecthist === "tread") {
        message = "**Gadsden Flag** *a historical American flag with a yellow field depicting a timber rattlesnake coiled and ready to strike. Positioned below the rattlesnake are the words DONT TREAD ON ME.*"
    }else if (selecthist === "ball") {
        message = "**Lucille Ball** *an American actress, comedian, model, entertainment studio executive and producer. She was the star of the self-produced sitcoms I Love Lucy, The Lucy Show, Here's Lucy, and Life with Lucy, as well as comedy television specials aired under the title The Lucy-Desi Comedy Hour.*"
    }else if (selecthist === "armstrong") {
        message = "**Louis Armstrong** *an American trumpeter, composer, vocalist, and actor who was among the most influential figures in jazz. His career spanned five decades, from the 1920s to the 1960s, and different eras in the history of jazz.*"
    }else if (selecthist === "elvis") {
        message = "**Elvis Presley** *an American singer and actor. Regarded as one of the most significant cultural icons of the 20th century, he is often referred to as the King of Rock and Roll or simply The King.*"
    }else if (selecthist === "apollo11") {
        message = "**Apollo 11 Landing** *At 4:18 p.m. on July 20, 1969, Neil Armstrong's voice crackled from the speakers at NASA's Mission Control in Houston. He said simply, the Eagle has landed. With those words, the dream President John F. Kennedy's voiced in 1961--putting humans on the Moon by the end of the decade--had at last come true. From the launch on July 16 atop a powerful Saturn rocket, Apollo 11 and its crew of three astronauts performed flawlessly. While Michael Collins orbited the Moon in the Command Module, Armstrong piloted the Lunar Lander, named the Eagle, to a safe landing in the Moon's Sea of Tranquility. He and his copilot, Edwin Buzz Aldrin, soon became the first humans to tread on another world. They spent nearly 21 hours on the lunar surface, collecting samples of rock and soil and setting up remote instruments.*"
    }else if (selecthist === "grape") {
        message = "**Cesar Chavez** *employed nonviolent means to bring attention to the plight of farmworkers and formed both the National Farm Workers Association, which later became United Farm Workers. As a labor leader, Chavez led marches, called for boycotts and went on several hunger strikes.*"
    }else if (selecthist === "vietnamwarmemorial") {
        message = "**Vietnam War Memorial** *a 2-acre U.S. national memorial in Washington, D.C. It honors service members of the U.S. armed forces who fought in the Vietnam War, service members who died in service in Vietnam/South East Asia, and those service members who were unaccounted for during the war.*"
    }else if (selecthist === "jimhenson") {
        message = "**Jim Henson** *an American puppeteer, animator, cartoonist, actor, inventor, filmmaker, and screenwriter who achieved worldwide notice as the creator of The Muppets and Fraggle Rock; and as the director of The Dark Crystal and Labyrinth.*"
    }else if (selecthist === "whoopi") {
        message = "**Whoopi Goldberg** *With her trademark dreadlocks, wide impish grin and piercing humor, Goldberg is best known for her adept portrayals in both comedic and dramatic roles, as well as her groundbreaking work in the Hollywood film industry as an African-American woman.*"
    }else if (selecthist === "michelle") {
        message = "**Michelle Obama** *a lawyer and writer who was the First Lady of the United States from 2009 to 2017. She is the wife of the 44th U.S. president, Barack Obama. As first lady, Michelle focused her attention on social issues such as poverty, healthy living and education. Her 2018 memoir, Becoming, discusses the experiences that shaped her, from her childhood in Chicago to her years living in the White House.*"
    }else if (selecthist === "serena") {
        message = "**Serena Williams** *an American professional tennis player who has held the top spot in the Women’s Tennis Association (WTA) rankings numerous times over her stellar career. Williams began intensive tennis training at age three. She won her first major championship in 1999 and completed the career Grand Slam in 2003. Along with her individual success, Serena has teamed with sister Venus Williams to win a series of doubles titles. In 2017, she defeated her big sister at the Australian Open to claim the 23rd Grand Slam singles title of her career.*"
    }else if (selecthist === "2016") {
        message = "**U.S. gymnastics Olympic team from 2016** *Simone Biles, Gabby Douglas, Laurie Hernandez, Madison Kocian, Aly Raisman winning the USA’s second consecutive Olympic team title at the 2016 Olympic Games at the Rio Olympic Arena in Rio de Janeiro, Brazil. The USA clinched the gold medal with a score of 184.897, more than an eight-point margin of victory.*"
    }else if (selecthist === "liztaylor") {
        message = "**Elizabeth Taylor** *launched the Elizabeth Taylor HIV/AIDS Foundation in order to offer greater support for those who are sick, as well fund research for more advanced treatments.*"
    }else if (selecthist === "kobe") {
        message = "**Kobe Bryant** *spent his early years in Italy and joined the NBA straight out of high school. A dominant scorer, Bryant won five NBA championships and the 2008 MVP Award with the Los Angeles Lakers. Although later seasons were marred by injuries, he surpassed Michael Jordan for third place on the NBA all-time scoring list in December 2014 and retired in 2016 after scoring 60 points in his final game. In 2018, Bryant earned an Academy Award for Best Animated Short Film for Dear Basketball. On January 26, 2020, he was in a helicopter crash that killed Bryant, his 13-year-old daughter Gigi and seven others.*"
    }else if (selecthist === "phelps") {
        message = "**Michael Phelps** *an American former competitive swimmer and the most successful and most decorated Olympian of all time, with a total of 28 medals. Phelps also holds the all-time records for Olympic gold medals, Olympic gold medals in individual events, and Olympic medals in individual events.*"
    }else if (selecthist === "years") {
        message = "**12 Years A Slave** *An American dramatic film, released in 2013, that impressed critics and audiences with its harrowing depiction of slavery in the antebellum South. The movie won the BAFTA Award and the Academy Award for best picture as well as the Golden Globe Award for best drama. Based on the autobiographical narrative (1853) of Solomon Northup, the film chronicles the grueling experiences of slavery and the dehumanizing effects of human bondage on everyone involved.*"
    }else if (selecthist === "selma") {
        message = "**Selma** *A political march from Selma, Alabama, to the state’s capital, Montgomery, that occurred March 21–25, 1965. Led by Martin Luther King, Jr., the march was the culminating event of several tumultuous weeks during which demonstrators twice attempted to march but were stopped, once violently, by local police. As many as 25,000 people participated in the roughly 50-mile (80-km) march. Together, these events became a landmark in the American civil rights movement and directly led to the passage of the Voting Rights Act of 1965.*"
    }else if (selecthist === "purple") {
        message = "**The Color Purple** *novel by Alice Walker, published in 1982. It won a Pulitzer Prize in 1983. A feminist work about an abused and uneducated African American woman’s struggle for empowerment, The Color Purple was praised for the depth of its female characters and for its eloquent use of Black English Vernacular.*"
    }else if (selecthist === "acts") {
        message = "**Alien/Sedition Acts** *A series of laws known collectively as the Alien and Sedition Acts were passed by the Federalist Congress in 1798 and signed into law by President Adams. These laws included new powers to deport foreigners as well as making it harder for new immigrants to vote.*"
    }else if (selecthist === "oprah") {
        message = "**Oprah Winfrey** *a talk show host, media executive, actress and billionaire philanthropist. She’s best known for being the host of her own, wildly popular program, The Oprah Winfrey Show, which aired for 25 seasons, from 1986 to 2011. In 2011, Winfrey launched her own TV network, the Oprah Winfrey Network (OWN).*"
    }else if (selecthist === "glaser") {
        message = "**Elizabeth Glaser** *an American AIDS activist and child advocate married to actor and director Paul Michael Glaser. She contracted HIV very early in the modern AIDS epidemic after receiving an HIV-contaminated blood transfusion in 1981 while giving birth.*"
    }else if (selecthist === "leonard") {
        message = "**Leonard Bernstein** *an American composer, conductor, author, music lecturer, and pianist. He was among the first conductors born and educated in the U.S. to receive worldwide acclaim. According to music critic Donal Henahan, he was one of the most prodigiously talented and successful musicians in American history.*"
    }else if (selecthist === "ww2kiss") {
        message = "**World War 2 Kiss** *a photograph by Alfred Eisenstaedt that portrays a U.S. Navy sailor grabbing and kissing a stranger—a nurse—on Victory over Japan Day (V-J Day) in New York City's Times Square on August 14, 1945.*"
    }else if (selecthist === "jackie") {
        message = "**Jackie Robinson** *an American professional baseball player who became the first African American to play in Major League Baseball in the modern era. Robinson broke the baseball color line when he started at first base for the Brooklyn Dodgers on April 15, 1947.*"
    }else if (selecthist === "jonassalk") {
        message = "**Jonas Salk** *an American medical researcher and virologist. He discovered and developed one of the first successful polio vaccines.*"
    } else if (selecthist === "arethafranklin") {
        message = "**Aretha Franklin** *an American singer, songwriter, pianist, and civil rights activist. Franklin began her career as a child singing gospel at New Bethel Baptist Church in Detroit, Michigan, where her father C. L. Franklin was minister.*"
    }else if (selecthist === "shuttle") {
        message = "**Challenger Shuttle** *The U.S. shuttle orbiter Challenger blew apart some 73 seconds after lifting off from Cape Canaveral, Florida in 1986, killing all seven astronauts on board.*"
    }else if (selecthist === "earhart") {
        message = "**Amelia Earhart** *an American aviation pioneer and author. Earhart was the first female aviator to fly solo across the Atlantic Ocean. She set many other records, wrote best-selling books about her flying experiences, and was instrumental in the formation of The Ninety-Nines, an organization for female pilots.*"
    }else if (selecthist === "lew") {
        message = "**Lewis And Clark** *the first American expedition to cross the western portion of the United States.*"
    }else if (selecthist === "johns") {
        message = "**“We now face the danger, which in the past has been the most destructive to the humans: Success, plenty, comfort and ever-increasing leisure. No dynamic people has ever survived these dangers.”**"
    }else if (selecthist === "eagle") {
        message = "**American Bald Eagle** *Shortly after the Declaration of Independence was signed on July 4, 1776, the Continental Congress gave Benjamin Franklin, Thomas Jefferson and John Adams the job of designing an official seal for the new nation. However, the three Founding Fathers failed to come up with a design that won Congress’ approval, as did two later committees that were given the task. In mid-June 1782, the work of all three committees was handed over to Charles Thomson, the secretary of Congress. Thomson chose what he thought were the best elements of the various designs and made the eagle—which had been introduced by artistically inclined Pennsylvania lawyer William Barton in a design submitted by the third committee—more prominent. (Since ancient times, the eagle has been considered a sign of strength; Roman legions used the animal as their standard, or symbol.)*"
    }else if (selecthist === "muhammad") {
        message = "**Muhammad Ali** *an American professional boxer, activist, and philanthropist. Nicknamed The Greatest, he is widely regarded as one of the most significant and celebrated sports figures of the 20th century and as one of the greatest boxers of all time.*"
    }else if (selecthist === "casket") {
        message = "**JFK’s Assinaation** *President Kennedy's flag-draped casket was moved from the White House to the Capitol on a caisson drawn by six grey horses, accompanied by one riderless black horse. At Mrs. Kennedy's request, the cortege and other ceremonial details were modeled on the funeral of Abraham Lincoln. Crowds lined Pennsylvania Avenue and many wept openly as the caisson passed. During the 21 hours that the president's body lay in state in the Capitol Rotunda, about 250,000 people filed by to pay their respects.*"
    }else if (selecthist === "pearl") {
        message = "**Pearl Harbor** *a surprise, preemptive military strike by the Imperial Japanese Navy Air Service upon the United States against the naval base at Pearl Harbor in Honolulu, Territory of Hawaii, just before 08:00, on Sunday morning, December 7, 1941.*"
    }else if (selecthist === "johnmccain") {
        message = "**John Mccain** *a Vietnam War veteran and a six-term U.S. senator from the state of Arizona. He was the Republican nominee for the 2008 presidential election, before his loss to Barack Obama.*"
    }else if (selecthist === "meghan") {
        message = "**Meghan Mccain** *an American columnist, author, and television personality. McCain is the daughter of 2008 presidential candidate and U.S. senator John McCain and Cindy McCain.*"
    }else if (selecthist === "ellen") {
        message = "**Ellen Degeneres** *An American comedian and television host known for her quirky observational humour. In 1997 DeGeneres revealed that she was gay, and Ellen became the first prime-time show to feature an openly gay lead character. After the show ended in 1998, DeGeneres eventually moved to the daytime arena, launching her own syndicated talk show, The Ellen DeGeneres Show, in 2003. The show earned more than 20 Daytime Emmy Awards in its first five seasons.*"
    }else if (selecthist === "bird") {
        message = "**To Kill A Mockingbird** *A novel by Harper Lee, published in 1960. Enormously popular, it was translated into some 40 languages and sold more than 30 million copies worldwide. In 1961 it won a Pulitzer Prize. The novel was praised for its sensitive treatment of a child’s awakening to racism and prejudice in the American South.*"
    }else if (selecthist === "451") {
        message = "**Fahrenheit 451** *a dystopian novel by American writer Ray Bradbury, first published in 1953. Often regarded as one of his best works, the novel presents a future American society where books are outlawed and firemen burn any that are found.*"
    }else if (selecthist === "thunder") {
        message = "a 1976 novel by Mildred D. Taylor, sequel to her 1975 novella Song of the Trees. It is a book about racism in America during the Great Depression and Jim Crow era. The novel won the 1977 Newbery Medal."
    }else if (selecthist === "valley") {
        message = "**Valley Forge** *Functioned as the third of eight military encampments for the Continental Army's main body, commanded by General George Washington. In September 1777, British forces had captured the American capital of Philadelphia.*"
    }else if (selecthist === "hippie") {
        message = "**Hippie Movement** *began in the 1960s and was very influential on American politics, law and everyday life. This was a time where predominantly the youth started reflecting on social values and experimentation then became the new social norm. A new counterculture was forming and those involved were not afraid of what people thought of them, and it fact many thought that those angered by what they were doing were jealous. The counterculture started as a youth movement and their ideas on all things political, social, cultural and every day values were much different then what American citizens had ever seen before.*"
    }else if (selecthist === "resist") {
        message = "**Opposition to United States involvement in the Vietnam War** *began with demonstrations in 1964 against the escalating role of the United States in the Vietnam War and grew into a broad social movement over the ensuing several years. This movement informed and helped shape the vigorous and polarizing debate, primarily in the United States, during the second half of the 1960s and early 1970s on how to end the war. Many in the peace movement within the United States were students, mothers, or anti-establishment hippies. Opposition grew with participation by the African-American civil rights, women's liberation, Chicano Movements, and sectors of organized labor.*"
    }
    msg.channel.send(message, {
        files: [
            "./assets/history/" + (selecthist) + ".jpg"
        ]
    })
}