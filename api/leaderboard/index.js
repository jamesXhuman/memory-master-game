// In-memory leaderboard (shared across functions for now)
let leaderboard = {};

module.exports = async function (context, req) {
  const sortedLeaderboard = Object.entries(leaderboard)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  context.res = {
    status: 200,
    body: sortedLeaderboard
  };
};