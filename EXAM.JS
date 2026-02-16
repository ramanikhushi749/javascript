// ========== map + filter + reduce (20 PRACTICE ANSWERS) ==========

// Q1. Grocery Store – Total Cost
const groceryPrices = [50, 120, 300, 80, 200];
const groceryTotal = groceryPrices
  .filter(p => p > 100)
  .map(p => p * 1.05)
  .reduce((s, p) => s + p, 0);
// Output: 651

// Q2. Fitness App – Weekly Calories
const workoutMinutes = [10, 25, 40, 15, 60];
const weeklyCalories = workoutMinutes
  .filter(m => m >= 20)
  .map(m => m * 4)
  .reduce((s, c) => s + c, 0);
// Output: 500

// Q3. Exam Results – Total Passed Marks
const studentMarks = [35, 55, 80, 20, 45];
const totalPassedMarks = studentMarks
  .filter(m => m >= 40)
  .reduce((s, m) => s + m, 0);
// Output: 180

// Q4. Bank App – Total Credits
const bankTxns = [500, -200, 1000, -300, 700];
const creditedTotal = bankTxns
  .filter(a => a > 0)
  .reduce((s, a) => s + a, 0);
// Output: 2200

// Q5. Online Sale – Discounted Bill
const salePrices = [800, 1500, 3000, 600, 1200];
const discountedBill = salePrices
  .filter(p => p > 1000)
  .map(p => p * 0.85)
  .reduce((s, p) => s + p, 0);
// Output: 4845

// Q6. Attendance – Reward Points
const attendanceList = [5, 7, 8, 6, 9];
const attendancePoints = attendanceList
  .filter(h => h >= 7)
  .map(h => h * 10)
  .reduce((s, p) => s + p, 0);
// Output: 240

// Q7. Delivery App – Total Distance
const tripDistances = [3, 6, 10, 4, 8];
const totalDistance = tripDistances
  .filter(d => d > 5)
  .map(d => d + 1)
  .reduce((s, d) => s + d, 0);
// Output: 27

// Q8. Salary System – Final Salary
const employeeSalaries = [18000, 25000, 30000, 15000];
const salaryPayout = employeeSalaries
  .filter(sal => sal > 20000)
  .map(sal => sal + 2000)
  .reduce((s, sal) => s + sal, 0);
// Output: 59000

// Q9. Study App – Total Study Time
const studySessions = [0.5, 1.5, 2, 0.75, 3];
const studyMinutes = studySessions
  .filter(h => h > 1)
  .map(h => h * 60)
  .reduce((s, m) => s + m, 0);
// Output: 390

// Q10. Electricity Usage – Monthly Bill
const electricityUnits = [80, 120, 200, 90, 150];
const electricityBill = electricityUnits
  .filter(u => u > 100)
  .map(u => u * 6)
  .reduce((s, a) => s + a, 0);
// Output: 2820

// Q11. Game Scores – Final Power Score
const gameScores = [30, 50, 90, 20, 70];
const powerScore = gameScores
  .filter(s => s > 40)
  .map(s => s * 2)
  .reduce((t, s) => t + s, 0);
// Output: 420

// Q12. Travel App – Total Fare
const rideDistances = [5, 12, 20, 8, 15];
const travelFare = rideDistances
  .filter(r => r > 10)
  .map(r => r + 50)
  .reduce((s, r) => s + r, 0);
// Output: 197

// Q13. Office Work – Productive Hours
const officeHours = [4, 6, 8, 5, 9];
const productiveMinutes = officeHours
  .filter(h => h >= 6)
  .map(h => h * 60)
  .reduce((s, m) => s + m, 0);
// Output: 1380

// Q14. Shopping Cart – Reward Coins
const cartPurchases = [300, 800, 1200, 400];
const rewardCoins = cartPurchases
  .filter(p => p > 500)
  .map(() => 10)
  .reduce((s, c) => s + c, 0);
// Output: 20

// Q15. Fuel App – Total Fuel Cost
const fuelLiters = [3, 6, 10, 4, 8];
const fuelCost = fuelLiters
  .filter(l => l > 5)
  .map(l => l * 105)
  .reduce((s, c) => s + c, 0);
// Output: 2520

// Q16. Interview Classic – Sum of Cubes
const cubeNumbers = [1, 2, 3, 4, 5];
const sumOfCubes = cubeNumbers
  .filter(n => n % 2 !== 0)
  .map(n => n ** 3)
  .reduce((s, n) => s + n, 0);
// Output: 153

// Q17. Performance Tracking – Bonus Points
const performanceScores = [10, 20, 30, 40, 50];
const avgScore =
  performanceScores.reduce((s, n) => s + n, 0) / performanceScores.length;
const bonusTotal = performanceScores
  .filter(n => n > avgScore)
  .map(n => n + 5)
  .reduce((s, n) => s + n, 0);
// Output: 100

// Q18. Subscription App – Final Bill
const subscriptionPlans = [199, 399, 599, 299];
const subscriptionBill = subscriptionPlans
  .filter(p => p > 300)
  .map(p => p * 1.18)
  .reduce((s, p) => s + p, 0);
// Output: 1177.64

// Q19. Learning App – Achievement Score
const learningScores = [45, 60, 70, 30, 80];
const achievementScore = learningScores
  .filter(s => s >= 60)
  .map(s => s * s)
  .reduce((t, s) => t + s, 0);
// Output: 14900

// Q20. Interview Finisher – Total Sum
const divisibleNumbers = [3, 6, 9, 10, 12];
const finalSum = divisibleNumbers
  .filter(n => n % 3 === 0)
  .map(n => n * 10)
  .reduce((s, n) => s + n, 0);
// Output: 300