function score_to_grade(input) {
  var grade = ['D', 'C', 'B', 'A', 'S'];
  var scoreParagraph = [0, 60, 70, 80, 90];

    var score = Number(input)
    if (isNaN(score)) {
    throw new Error('is not a number');
  }
    if (score > 100 || score < 0) {
      throw new Error("invalid input");
    }
    scoreParagraph.forEach(function(item, i) {
      if (score >= item) {
        result = grade[i];
      }
    });
    return result;

 }
