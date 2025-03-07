// In-memory leaderboard (temporary until database integration)
let leaderboard = {};

module.exports = async function (context, req) {
  const { playerName, answers, solution } = req.body;
  let points = answers.reduce((sum, ans, i) => {
    const userAnswer = parseInt(ans, 10) || 0;
    const correctAnswer = solution[i];
    const isCorrect = userAnswer === correctAnswer;
    context.log(`Index ${i}: User ${userAnswer}, Correct ${correctAnswer}, Points ${isCorrect ? 10 : 0}`);
    return sum + (isCorrect ? 10 : 0);
  }, 0);
  const speedBonus = 0;
  const totalPoints = points + speedBonus;
  context.log(`Player: ${playerName}, Points: ${totalPoints}, New Total: ${(leaderboard[playerName] || 0) + totalPoints}`);
  leaderboard[playerName] = (leaderboard[playerName] || 0) + totalPoints;
  context.res = {
    status: 200,
    body: { score: totalPoints, leaderboard }
  };
};