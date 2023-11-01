// link this file to data.js file.
const { movies }  = require('./data.js');

// Iteration 1: All directors, 
function getAllDirectors(movies) {
    const directors = movies.map(movie => movie.director); // by using map() --> extract the director from each movie
    return directors;
  }
  const allDirectors = getAllDirectors(movies);
  console.log(allDirectors);

//Bonus : without duplicates :
// First clean directors array using function to clean
function cleanDirectors(directors) {
    return [...new Set(directors)];  } // using Set object -> only stores unique values and automatically remove duplicates.
 



  console.log("◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠");
  const uniqueDirectors = cleanDirectors(allDirectors);
  console.log(uniqueDirectors); //print the cleaned array
  console.log("◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡");
  
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//Iteration 2: filter method to select drama movies directed by Steven Spielberg 
//by howManyMovies() function : 
function howManyMovies(movies) {
    const DramaMoviesSteven = movies.filter(movie => {
      return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    });
  
    return DramaMoviesSteven.length;
  }



  console.log("◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠");
  const spielbergDramaCount = howManyMovies(movies);
  console.log(`Steven Spielberg directed ${spielbergDramaCount} drama movies.`); //print the result
  console.log("◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡");

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

//Iteration 3: All scores average
function scoresAverage(movies) {
    if (movies.length === 0) {
      return 0; // Return 0 if the array is empty to avoid division by zero
    }
   //use reduce to make calculation
    const totalScore = movies.reduce((accumulator, movie) => {
      return accumulator + movie.score;
    }, 0);
  
    // Calculate the average score rounded to 2 decimal places using toFixed()
    // average = total / size array
    return Number((totalScore / movies.length).toFixed(2));    // Round to 2 decimal places
  }
  


  console.log("◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠");
  const average = scoresAverage(movies);
  console.log(`The average score of all movies is: ${average}`); //Here I print the result
  console.log("◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡");

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   //Iteration 4: Drama movies, filter the drama movies
    function dramaMoviesScore(movies) {
        const dramaMovies = movies.filter(movie => {
        return movie.genre.includes("Drama");
        });
    //checking to sure ---> return 0 if there are no drama movies
        if (dramaMovies.length === 0) {
        return 0; 
        }
    
        // Calculate the average score of drama movies rounded to 2 decimal places
        const totalScore = dramaMovies.reduce((accumulator, movie) => {
            return accumulator + movie.score;
        }, 0);
    
        // average = total / size array
        return Number((totalScore / dramaMovies.length).toFixed(2));    // Round to 2 decimal places
    }
    


    console.log("◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠");
    // Call the function and print the result
    const averageDramaScore = dramaMoviesScore(movies);
    console.log(`The average score of drama movies is: ${averageDramaScore}`);
    console.log("◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡");

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

     //Iteration 5: Order the movies by year by using sort()
    function orderByYear(movies) {
        // copy array as new array by spreading the movies
        const sortedMovies = [...movies];
    
        // sort year and title and check if years are equal or not!!
        sortedMovies.sort((a, b) => {
        if (a.year === b.year) {
            // sort by movie title in alphabetical order
            return a.title.localeCompare(b.title);
        }
        // Sort by year in ascending order
        return a.year - b.year;
        });
    
        return sortedMovies;
    }
    

    console.log("◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠");
    // print the sorted array
    const sortedMoviesByYear = orderByYear(movies);
    console.log(sortedMoviesByYear);
    console.log("◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡");
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//Iteration 6: Alphabetic order
function orderAlphabetically(movies) {
    //  new array , sorting them alphabetically ---> by title
    const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
  
    // Extract the titles of the first 20 movies and store them in a new array
    const first20Titles = sortedMovies.slice(0, 20).map((movie) => movie.title);
  
    return first20Titles;
  }
  console.log("◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠");
  const first20TitlesAlphabetically = orderAlphabetically(movies);
  console.log(first20TitlesAlphabetically); // print the first 20 titles in alphabetical order
  console.log("◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡");

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   //BONUS - Iteration 7: Time format
   //this comments for me...
   //1- use map to create a new array of movies with the duration converted to minutes.
   //2- Here's how you can do it:
            // * Split the duration string into hours and minutes parts.
            // * Convert the hours and minutes parts to integers using parseInt().
            // * Calculate the total duration in minutes and store it in the duration property of the movie object.
            function turnHoursToMinutes(movies) {
                //1- new array , using map()
                const newMoviesArray = movies.map((movie) => {
                    //split()
                  const durationParts = movie.duration.split(' ');
                  let totalMinutes = 0;
                    //converting
                  for (const part of durationParts) {
                    if (part.includes('h')) {
                      totalMinutes += parseInt(part) * 60;
                    } else if (part.includes('min')) {
                      totalMinutes += parseInt(part);
                    }
                  }
              
                  return {
                    ...movie,
                    duration: totalMinutes,
                  };
                });
              
                return newMoviesArray;
              }

            const moviesWithMinutes = turnHoursToMinutes(movies);
            console.log(moviesWithMinutes); //normal print showing the minutes


               

                console.log("◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠");
                        // print Movies with Durations in Minutes
                        console.log("List of Movies with Durations in Minutes: ");
                        moviesWithMinutes.forEach((movie) => {
                        console.log(`${movie.title} ╍╍╍╍╍╍╍╍╍╍┋┋╍╍╍╍╍╍╍╍╍╍ ${movie.duration} minutes`);
                        });
                console.log("◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡");

 //━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

 //BONUS - Iteration 8: Best yearly score average
//steps: 
        //1-  Group the movies by year.
        //2-  The average score for each year.
        //3-  Determine the year with the highest average score.
        
        //checking array:
        function bestYearAvg(movies) {
            if (movies.length === 0) {
              return "There are no movies in the list.";
            }
          
            const years = {}; // Create an object to store average scores by year
          
            movies.forEach((movie) => {
              const year = movie.year;
              const score = movie.score;
          
              if (year in years) {
                years[year].totalScore += score;
                years[year].movieCount++;
              } else {
                years[year] = {
                  totalScore: score,
                  movieCount: 1,
                };
              }
            });
          
            let bestYear = 0;
            let bestAverage = 0;
          
            for (const year in years) {
              const average = years[year].totalScore / years[year].movieCount;
          
              if (average > bestAverage || (average === bestAverage && year < bestYear)) {
                bestYear = year;
                bestAverage = average;
              }
            }
          
            return `The best year was ${bestYear} with an average score of ${bestAverage.toFixed(2)}`;
          }
          console.log("◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠◠");
          const result = bestYearAvg(movies);
          console.log(result);
          console.log("◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡◡");

