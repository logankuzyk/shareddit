const Reddit = require("snoowrap");
const dotenv = require("dotenv").config();
const makeImage = require("./api/makeImage");

makeImage({
  link: "https://i.redd.it/9bateh7uthx41.jpg",
  title: "Standert Triebwerk Mach3",
  comments: [
    {
      score: "3 points",
      author: "psc1988",
      body: "Thanks, the bike looks sweet!",
      bodyMD: '<div class="md"><p>Thanks, the bike looks sweet!</p>\n</div>',
      time: "2 hours ago",
    },
    {
      score: "5 points",
      author: "Dannyb24589",
      body:
        "The 2.0 is great! Used them now for 2000km and zero punctures. Runs very smooth and great grip. A keeper for me.",
      bodyMD:
        '<div class="md"><p>The 2.0 is great! Used them now for 2000km and zero punctures. Runs very smooth and great grip. A keeper for me.</p>\n' +
        "</div>",
      time: "6 hours ago",
    },
    {
      score: "6 points",
      author: "psc1988",
      body:
        "How are the tyres? I just picked up a pair on a good discount to replace some turbo Cottons.... I've never used the second generation corsa.",
      bodyMD:
        '<div class="md"><p>How are the tyres? I just picked up a pair on a good discount to replace some turbo Cottons.... I&#39;ve never used the second generation corsa.</p>\n' +
        "</div>",
      time: "9 hours ago",
    },
    {
      score: "33 points",
      author: "Dannyb24589",
      body:
        "Dura ace 9150 groupset\n" +
        "Chris king head set\n" +
        "Chris king bottom bracket - Kögel ceramic bearings\n" +
        "Custom hand made wheels with dt Swiss 240s hubs with Kögel ceramic bearings\n" +
        "Vittoria Corsa 2.0 25mm skin wall tires. \n" +
        "Brooks carbon saddle\n" +
        "3T carbon bars, stem and seatpost\n" +
        "Titanium bottle cages \n" +
        "KMC chain DLC coated\n" +
        "Size 58\n" +
        "Weight 7.12kg - try to save some grams to get it below 6.9kg\n" +
        "\n" +
        "Not bad for a steel bike!",
      bodyMD:
        '<div class="md"><p>Dura ace 9150 groupset\n' +
        "Chris king head set\n" +
        "Chris king bottom bracket - Kögel ceramic bearings\n" +
        "Custom hand made wheels with dt Swiss 240s hubs with Kögel ceramic bearings\n" +
        "Vittoria Corsa 2.0 25mm skin wall tires. \n" +
        "Brooks carbon saddle\n" +
        "3T carbon bars, stem and seatpost\n" +
        "Titanium bottle cages \n" +
        "KMC chain DLC coated\n" +
        "Size 58\n" +
        "Weight 7.12kg - try to save some grams to get it below 6.9kg</p>\n" +
        "\n" +
        "<p>Not bad for a steel bike!</p>\n" +
        "</div>",
      time: "11 hours ago",
    },
  ],
});
