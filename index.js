const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

(async () => {
  try {
    const res = await axios.get("https://www.mohfw.gov.in/");

    const html = await res.data;

    const $ = cheerio.load(html);

    const DATA = {};

    function extract(elem, index) {
      return $($(elem).children()[index])
        .text()
        .trim();
    }

    $($("tbody")[7])
      .children()
      .each((i, elem) => {
        if (!isNaN(extract(elem, 0))) {
          DATA[extract(elem, 1)] = {
            total_indian: extract(elem, 2),
            total_foreign: extract(elem, 3),
            cured: extract(elem, 4),
            death: extract(elem, 5)
          };
        }
      });

    await fs.writeFileSync("./data.json", JSON.stringify(DATA, null, 2));
  } catch (err) {
    console.error(err);
  }
})();
