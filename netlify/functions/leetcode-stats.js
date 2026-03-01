// Netlify serverless function to fetch LeetCode stats
// Bypasses CORS restrictions by running on Netlify's servers

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  const username = event.queryStringParameters?.username || 'dilpreetsingh61';

  try {
    // Fetch from LeetCode's GraphQL API
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com'
      },
      body: JSON.stringify({
        query: `
          query userProblemsSolved($username: String!) {
            matchedUser(username: $username) {
              submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
          }
        `,
        variables: { username }
      })
    });

    if (!response.ok) {
      throw new Error(`LeetCode API error: ${response.status}`);
    }

    const data = await response.json();
    const stats = data?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum;

    if (!stats) {
      throw new Error('Invalid response structure');
    }

    // Parse the stats
    const result = {
      total: stats.find(s => s.difficulty === 'All')?.count || 0,
      easy: stats.find(s => s.difficulty === 'Easy')?.count || 0,
      medium: stats.find(s => s.difficulty === 'Medium')?.count || 0,
      hard: stats.find(s => s.difficulty === 'Hard')?.count || 0,
      username: username,
      timestamp: new Date().toISOString()
    };

    // Return success response
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        data: result
      })
    };

  } catch (error) {
    console.error('Error fetching LeetCode stats:', error);
    
    // Return fallback values on error
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: false,
        error: error.message,
        data: {
          total: 258,
          easy: 152,
          medium: 96,
          hard: 10,
          username: username,
          timestamp: new Date().toISOString(),
          fallback: true
        }
      })
    };
  }
};
