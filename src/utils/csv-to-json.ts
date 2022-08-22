const csvFilePath = 'src/data/cities_canada-usa.csv';
import csv from 'csvtojson';
export async function csvToJson() {
  const jsonArray = await csv().fromFile(csvFilePath);
  return jsonArray;
}
