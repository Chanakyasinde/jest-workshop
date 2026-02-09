# Jest Workshop Submission

## Student Details
- Name: Chanakya Sinde
- Roll Number: 2024-B-12112005
- GitHub Username: Chanakyasinde

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: Check for invalid sub total
**What it protects against:**  

Prevents the function from accepting invalid or negative subtotal values, ensuring proper input validation and avoiding incorrect calculations or silent failures.

---

### 2. Test Name: Check for no coupon case
**What it protects against:**  

Ensures that when no coupon is provided, the final amount remains unchanged, preventing accidental discounts or logic errors when the coupon parameter is missing.

---

### 3. Test Name: Check for SAVE10 coupon
**What it protects against:**  

Verifies that the SAVE10 coupon correctly applies a 10% discount, preventing regressions where percentage-based discounts might be miscalculated or skipped.

---

### 4. Test Name: Check for FLAT50 boundary case
**What it protects against:** 

Prevents the final amount from becoming negative when a flat discount is applied, ensuring boundary conditions are handled safely.

---

### 5. Test Name: Check for case-insensitive coupon
**What it protects against:**  

Ensures coupons work correctly regardless of letter casing, preventing failures due to user input variations such as lowercase or mixed-case coupon codes.

---

## CI Pipeline (if implemented)
- Did CI pass successfully? Yes
- GitHub Actions Run URL: [GitHub Actions URL](https://github.com/Chanakyasinde/jest-workshop/actions)


---

## Reflection (1–2 lines)

I understood how automated tests help catch edge cases early and how a CI pipeline ensures that code changes do not break existing functionality before merging.


