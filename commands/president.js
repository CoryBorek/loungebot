exports.president = function (msg) {
    let presList = ["George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Quincy Adams", "Andrew Jackson", "Martin Van Buren", "William Henry Harrison", "John Tyler", "James K Polk", "Zachary Taylor", "Millard Filmore", "Franklin Pierce", "James Buchanan", "Abrahan Lincoln", "Andrew Jackson", "Ulysses S Grant", "Rutherford B Hayes", "James A Garfield", "Chester A Arthur", "Grover Cleveland", "Benjamin Harrison", "William McKinley", "Theodore Roosevelt", "William H Taft", "Woodrow Wilson", "Warren Harding", "Calvin Coolidge", "Herbert Hoover", "Franklin Delano Roosevelt", "Harry S Truman", "Dwight D Eisenhower", "John F Kennedy", "Lyndon B Johnson", "Richard Nixon", "Gerald Ford", "Jimmy Carter", "Ronald Raegan", "George Bush", "Bill Clinton", "George W Bush", "Barack Obama", "Donald Trump"];

    let selectPres = presList[Math.floor(Math.random() * presList.length)];

    msg.channel.send("***" + (selectPres) + "***", {
        files: [
            "./assets/presidents/" + (selectPres) + ".png"
        ]
    })
}