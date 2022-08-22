import { quickScore } from 'quick-score';

export function formatAndScore(cities, query) {
  const suggestions = [];
  let finalScore = 0;
  cities.map((city) => {
    if (!query.latitude || !query.longitude) {
      finalScore = quickScore(city.name, query.name);
      console.log(quickScore(city.name, query.name));
    } else {
      finalScore =
        (quickScore(city.long, query.longitude) +
          quickScore(city.lat, query.latitude) +
          quickScore(city.name, query.name)) /
        3;
    }
    if (finalScore !== 0 && finalScore !== 1) {
      finalScore = Number(finalScore.toFixed(2));
    }

    suggestions.push({
      name: `${city.name} ${city.country} ${city.admin1}`,
      latitude: city.lat,
      longitude: city.long,
      score: finalScore,
    });
  });

  return suggestions;
}
