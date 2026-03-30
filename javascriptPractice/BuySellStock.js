// You are given an array prices where prices[i] is the price of a given stock on the ith day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// output = 5;

// output = 0;

// prices = [7, 6, 4, 3, 1];
prices = [7, 1, 5, 3, 6, 4];
function BuySellStock(prices) {
  let maximumProfit = 0;
  let buyPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (buyPrice < prices[i]) {
      profit = prices[i] - buyPrice;
      maximumProfit = Math.max(maximumProfit, profit);
    } else {
      buyPrice = prices[i];
    }
  }
  return maximumProfit;
}
console.log(BuySellStock(prices));

//1. Generate Tokens
const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  return jwt.sign(user, "ACCESS_SECRET", { expiresIn: "15m" });
};

const generateRefreshToken = (user) => {
  return jwt.sign(user, "REFRESH_SECRET", { expiresIn: "7d" });
};

// 2. Login API
app.post("/login", async (req, res) => {
  const user = { id: 1, email: req.body.email }; // validate properly

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  // Store refresh token (DB or Redis recommended)

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
  });

  res.json({ accessToken });
});

//3. Middleware to Protect Routes
const authenticate = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, "ACCESS_SECRET", (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

//4. Refresh Token API

app.post("/refresh", (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) return res.sendStatus(401);

  jwt.verify(refreshToken, "REFRESH_SECRET", (err, user) => {
    if (err) return res.sendStatus(403);

    const newAccessToken = generateAccessToken({
      id: user.id,
      email: user.email,
    });

    res.json({ accessToken: newAccessToken });
  });
});
